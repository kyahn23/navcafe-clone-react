import { useLocation } from "react-router-dom";

import classes from "./Board.module.css";
import BoardList from "./BoardList";
import BoardTitle from "./BoardTitle";

const Board = (props) => {
  const loc = useLocation();
  const typ = loc.state.txt;

  return (
    <div className={classes.mainData}>
      <BoardTitle typ={typ} />
      <BoardList />
    </div>
  );
};

export default Board;
