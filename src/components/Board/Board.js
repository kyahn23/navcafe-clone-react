import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import classes from "./Board.module.css";
import BoardList from "./BoardList";
import BoardTitle from "./BoardTitle";

const Board = () => {
  const loc = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const state = loc.state;
  return (
    <div className={classes.mainData}>
      <BoardTitle txt={state.txt} />
      <BoardList typ={state.typ} />
    </div>
  );
};

export default Board;
