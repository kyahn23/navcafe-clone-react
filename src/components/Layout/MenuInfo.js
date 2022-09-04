import { Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

import classes from "./MenuInfo.module.css";

const MenuInfo = () => {
  return (
    <div className={classes.menuInfoArea}>
      <div className={classes.info}>
        <span className={classes.text}>카페정보</span>
        <p>
          <strong>CAFE_CLONE</strong>
        </p>
        <ul>
          <li>
            <span className={classes.dtl}>회원수</span>
            <span className={classes.dtlInfo}>100</span>
          </li>
        </ul>
      </div>
      <div className={classes.btnArea}>
        <div className={classes.writeBtn}>
          <Link to="/">카페 가입하기</Link>
        </div>
        <div className={classes.joinBtn}>
          <Link to="/">카페 글쓰기</Link>
        </div>
      </div>

      <div className={classes.menu}>
        <ul className={classes.allText}>
          <li>
            <BiDetail />
            <Link to="/board" state={{ type: "all", txt: "전체글보기" }}>
              전체글보기
            </Link>
            <span className={classes.fl_R}>100</span>
          </li>
        </ul>
        <h4 className={classes.title}>공지사항</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <Link to="/board" state={{ type: "notice", txt: "카페공지" }}>
              카페공지
            </Link>
          </li>
        </ul>
        <h4 className={classes.title}>게시판</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <Link to="/board" state={{ type: "free", txt: "자유게시판" }}>
              자유게시판
            </Link>
          </li>
          <li>
            <BiDetail />
            <Link to="/board" state={{ type: "qna", txt: "질문게시판" }}>
              질문게시판
            </Link>
          </li>
          <li>
            <BiDetail />
            <Link to="/board" state={{ type: "photo", txt: "사진게시판" }}>
              사진게시판
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuInfo;
