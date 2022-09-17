import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import classes from "./Board.module.css";
import BoardList from "./BoardList";
import BoardTitle from "./BoardTitle";

const Board = () => {
  const loc = useLocation();
  const [ntcHide, setNtcHide] = useState(false);
  const [boardTyp, setBoardTyp] = useState("list");
  const [sortCnt, setSortCnt] = useState("10");

  const ntcShowHandler = (val) => {
    console.log(val);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const state = loc.state;

  return (
    <div className={classes.mainData}>
      <BoardTitle
        txt={state.txt}
        ntcChk={ntcShowHandler}
        boardTyp={setBoardTyp}
        postCnt={sortCnt}
        setPostCnt={setSortCnt}
      />
      <BoardList typ={state.typ} ntcHide={ntcHide} boardSet={boardTyp} />
    </div>
  );
};

export default Board;
