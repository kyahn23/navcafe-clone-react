import { Link } from "react-router-dom";
import classes from "./BoardNotice.module.css";

const BoardNotice = () => {
  return (
    <div className={classes.articleBoard}>
      <table>
        <colgroup>
          <col style={{ width: "88px" }} />
          <col />
          <col style={{ width: "110px" }} />
          <col style={{ width: "88px" }} />
          <col style={{ width: "68px" }} />
          <col style={{ width: "68px" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">말머리</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">조회</th>
            <th scope="col">좋아요</th>
          </tr>
        </thead>
        <tbody>
          <tr className="noticeArticle boardNotice typeMain">
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
            <td className={classes.tdLikes}>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BoardNotice;
