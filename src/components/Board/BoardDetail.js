import classes from "./BoardDetail.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const BoardDetail = (props) => {
  return (
    <div className={classes.boardDetail}>
      <div className={classes.wrap}>
        <div className={classes.contentBox}>
          <div className={classes.detailHeader}>
            <div className={classes.BoardTyp}>
              <Link to="/" className={classes.linkBoard}>
                자유게시판
                <AiOutlineRight />
              </Link>
              <div className={classes.titleArea}>
                <div className={classes.titleCategory}>
                  <em className={classes.categoryText}>[정보]</em>
                </div>
                <h3 className={classes.titleText}>게시글 상세화면 테스트</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
