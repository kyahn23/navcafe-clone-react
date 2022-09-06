import { Link } from "react-router-dom";
import classes from "./BoardList.module.css";
import BoardNotice from "./BoardNotice";
import BoardTypList from "./BoardTypList";

const BoardList = (props) => {
  return (
    <div className={classes.articleBoard}>
      <BoardNotice />
      <BoardTypList />

      <div className={classes.postBtn}>
        <div className="fr">
          <Link to="/" id="writeFormBtn" className={classes.writeBtn}>
            글쓰기
          </Link>
        </div>
      </div>

      <div className={classes.prevNext}>
        <span className={classes.on}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>

        <span className={classes.pgR}>
          <div class="m-tcol-c">다음</div>
        </span>
      </div>
    </div>
  );
};

export default BoardList;
