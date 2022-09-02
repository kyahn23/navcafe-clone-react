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
            <a href="/">전체글보기</a>
            <span className={classes.fl_R}>100</span>
          </li>
        </ul>
        <h4 className={classes.title}>공지사항</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <a href="/">카페공지</a>
          </li>
        </ul>
        <h4 className={classes.title}>게시판</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <a href="/">자유게시판</a>
          </li>
          <li>
            <BiDetail />
            <a href="/">질문게시판</a>
          </li>
          <li>
            <BiDetail />
            <a href="/">사진게시판</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuInfo;
