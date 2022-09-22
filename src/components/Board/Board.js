import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuContext from "../../store/menu-context";

import classes from "./Board.module.css";
import BoardList from "./BoardList";
import BoardTitle from "./BoardTitle";

const Board = () => {
  const loc = useLocation();
  const state = loc.state;

  const menuCtx = useContext(MenuContext);

  const [ntcHide, setNtcHide] = useState(false);
  const [boardTyp, setBoardTyp] = useState("list");
  const [sortCnt, setSortCnt] = useState("10");

  const ntcShowHandler = (val) => {
    setNtcHide(val);
  };

  const cntHandler = (val) => {
    setSortCnt(val);
  };

  useEffect(() => {
    menuCtx.setBoard(state.typ);
  }, [menuCtx, state.typ]);
  return (
    <div className={classes.mainData}>
      <BoardTitle
        txt={state.txt}
        ntcChk={ntcShowHandler}
        boardTyp={setBoardTyp}
        cnt={cntHandler}
      />
      <BoardList
        typ={state.typ}
        ntcHide={ntcHide}
        boardSet={boardTyp}
        postCnt={sortCnt}
      />
    </div>
  );
};

export default Board;
