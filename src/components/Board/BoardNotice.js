import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BoardNotice.module.css";

const BoardNotice = () => {
  return (
    <Fragment>
      {/* <tr className="noticeArticle boardNotice typeMain"> */}
      <tr className={classes.noticeArticle}>
        <td className={classes.tdArticle}>
          <div className={classes.boardTag}>
            <strong className={classes.boardTagTxt}>
              <span>공지</span>
            </strong>
          </div>
        </td>
        <td>
          <div className={classes.boardTitle}>
            <div className={classes.boardTitleTxt}>
              <Link to="/boardDetail" className={classes.title}>
                공지사항입니다 [<em>30</em>]
              </Link>
            </div>
          </div>
        </td>

        <td className={classes.tdName}>
          <span>관리자</span>
        </td>
        <td className={classes.tdDate}>2022.09.03</td>
        <td className={classes.tdView}>3,885</td>
        {/* <td className={classes.tdLikes}>25</td> */}
      </tr>
    </Fragment>
  );
};
export default BoardNotice;
