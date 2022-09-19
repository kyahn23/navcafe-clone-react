import { Link, useLocation } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

import classes from "./MenuInfo.module.css";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../store/auth/auth-context";
import { getData } from "../../service/firebase";
import MenuContext from "../../store/menu-context";

const MenuInfo = () => {
  const authCtx = useContext(AuthContext);
  const menuCtx = useContext(MenuContext);
  const loc = useLocation();
  const isLoggedIn = authCtx.isLoggedIn;

  const [memberCnt, setMemberCnt] = useState(0);
  const [postCnt, setPostCnt] = useState(0);
  useEffect(() => {
    getData("member").then((res) => {
      if (res.length) {
        setMemberCnt(res.length);
      }
    });

    getData("post").then((res) => {
      if (res.length) {
        setPostCnt(res.length);
      }
    });
  }, [loc.pathname]);
  let curMenu = menuCtx.curMenu;

  let btnArea;
  if (!isLoggedIn) {
    btnArea = (
      <div className={classes.writeBtn}>
        <Link to="/auth" state={{ authPageChk: true }}>
          카페 가입하기
        </Link>
      </div>
    );
  } else {
    btnArea = (
      <div className={classes.joinBtn}>
        <Link to="/board/write" state={{ typ: "main" }}>
          카페 글쓰기
        </Link>
      </div>
    );
  }

  let btnAreaRender = true;
  if (loc.pathname.includes("/write")) {
    btnAreaRender = false;
  }
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
            <span className={classes.dtlInfo}>{memberCnt}</span>
          </li>
        </ul>
      </div>
      <div className={classes.btnArea}>{btnAreaRender && btnArea}</div>

      <div className={classes.menu}>
        <ul className={classes.allText}>
          <li>
            <BiDetail />
            <Link
              to="/board"
              state={{ typ: "all", txt: "전체글보기" }}
              className={curMenu === "all" ? classes.on : null}
            >
              전체글보기
            </Link>
            <span className={classes.fl_R}>{postCnt}</span>
          </li>
        </ul>
        <h4 className={classes.title}>공지사항</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <Link
              to="/board"
              state={{ typ: "notice", txt: "카페공지" }}
              className={curMenu === "notice" ? classes.on : null}
            >
              카페공지
            </Link>
          </li>
        </ul>
        <h4 className={classes.title}>게시판</h4>
        <ul className={classes.board}>
          <li>
            <BiDetail />
            <Link
              to="/board"
              state={{ typ: "free", txt: "자유게시판" }}
              className={curMenu === "free" ? classes.on : null}
            >
              자유게시판
            </Link>
          </li>
          <li>
            <BiDetail />
            <Link
              to="/board"
              state={{ typ: "qna", txt: "질문게시판" }}
              className={curMenu === "qna" ? classes.on : null}
            >
              질문게시판
            </Link>
          </li>
          <li>
            <BiDetail />
            <Link
              to="/board"
              state={{ typ: "photo", txt: "사진게시판" }}
              className={curMenu === "photo" ? classes.on : null}
            >
              사진게시판
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuInfo;
