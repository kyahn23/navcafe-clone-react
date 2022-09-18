import { Link } from "react-router-dom";
import classes from "./BoardTypList.module.css";

const BoardTypList = (props) => {
  const regDtFormat = (val) => {
    let dt = new Date(val).toLocaleDateString();
    let time = new Date(val).toTimeString().split(" ")[0];

    time = time.substring(0, 5);
    let now = new Date().toLocaleDateString();
    if (dt === now) {
      return time;
    } else {
      return dt;
    }
  };

  return (
    <div>
      <table>
        <colgroup>
          <col style={{ width: "88px" }} />
          <col />
          <col style={{ width: "110px" }} />
          <col style={{ width: "88px" }} />
          <col style={{ width: "68px" }} />
          {/* <col style={{ width: "68px" }} /> */}
        </colgroup>
        <tbody>
          {props.postList.map((post, idx) => (
            <tr key={post.id}>
              <td className={classes.tdArticle}>
                <div className={classes.boardNumber}>
                  <div className={classes.innerNumber}>{idx + 1}</div>
                </div>
              </td>
              <td className={classes.tdTitle}>
                <Link to="/board/detail" state={{ id: "1" }}>
                  {post.title}
                </Link>
              </td>
              <td className={classes.tdName}>{post.nickName}</td>
              <td className={classes.tdDate}>{regDtFormat(post.regDt)}</td>
              <td className={classes.tdView}>{post.viewCnt}</td>
              {/* <td className={classes.tdLikes}>a</td> */}
            </tr>
          ))}

          {/* <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr>
          <tr>
            <td className={classes.tdArticle}>
              <div className={classes.boardNumber}>
                <div className={classes.innerNumber}>1</div>
              </div>
            </td>
            <td className={classes.tdTitle}>
              <Link to="/">aaaaaaa</Link>
            </td>
            <td className={classes.tdName}>a</td>
            <td className={classes.tdDate}>a</td>
            <td className={classes.tdView}>a</td>
            <td className={classes.tdLikes}>a</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default BoardTypList;
