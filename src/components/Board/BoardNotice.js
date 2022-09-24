import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./BoardNotice.module.css";
import { regDtFormat } from "./BoardTypList";

const BoardNotice = (props) => {
  return (
    <Fragment>
      {/* <tr className="noticeArticle boardNotice typeMain"> */}
      {props.ntcList.map((ntc) => (
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
                  {ntc.title}{" "}
                  {ntc.commentCnt > 0 ? (
                    <span className={classes.commentCnt}>
                      [{ntc.commentCnt}]
                    </span>
                  ) : null}
                </Link>
              </div>
            </div>
          </td>

          <td className={classes.tdName}>
            <span>{ntc.nickName}</span>
          </td>
          <td className={classes.tdDate}>{regDtFormat(ntc.regDt)}</td>
          <td className={classes.tdView}>{ntc.viewCnt}</td>
          {/* <td className={classes.tdLikes}>25</td> */}
        </tr>
      ))}
    </Fragment>
  );
};
export default BoardNotice;
