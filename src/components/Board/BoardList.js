import { useLocation } from "react-router-dom";

import classes from "./BoardList.module.css";
import BoardTitle from "./BoardTitle";

const BoardList = (props) => {
  const loc = useLocation();
  const typ = loc.state.txt;

  return (
    <div className={classes.mainData}>
      <BoardTitle typ={typ} />
    </div>
  );
};

export default BoardList;
