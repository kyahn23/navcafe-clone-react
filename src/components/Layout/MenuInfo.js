import { Link, useLocation } from "react-router-dom";
import { BiDetail } from "react-icons/bi";

import classes from "./MenuInfo.module.css";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../store/auth/auth-context";
import { getData } from "../../service/firebase";
import MenuContext from "../../store/menu-context";
import { Fragment } from "react";

const MenuInfo = () => {
  const authCtx = useContext(AuthContext);
  const menuCtx = useContext(MenuContext);
  const loc = useLocation();
  const isLoggedIn = authCtx.isLoggedIn;
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [memberCnt, setMemberCnt] = useState(0);
  const [postCnt, setPostCnt] = useState(0);
  const [infoTab, setInfoTab] = useState("cafe");
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

  const cafeInfoTab = () => {
    setInfoTab("cafe");
  };
  const myInfoTab = () => {
    setInfoTab("my");
  };
  return (
    <div className={classes.menuInfoArea}>
      <div className={classes.info}>
        <div className={classes.infoTabT}>
          <span
            className={
              infoTab === "cafe"
                ? `${classes.on} ${classes.text} ${classes.infoTab1}`
                : `${classes.text} ${classes.infoTab1}`
            }
            onClick={cafeInfoTab}
          >
            카페정보
          </span>
          {isLoggedIn && (
            <span
              className={
                infoTab === "my"
                  ? `${classes.on} ${classes.text} ${classes.infoTab2}`
                  : `${classes.text} ${classes.infoTab2}`
              }
              onClick={myInfoTab}
            >
              내정보
            </span>
          )}
        </div>
        <div className={classes.infoTabC}>
          {infoTab === "cafe" && (
            <Fragment>
              <p className={classes.cafeNick}>
                <strong>CAFE_CLONE</strong>
              </p>
              <ul>
                <li>
                  <span className={classes.dtl}>회원수</span>
                  <span className={classes.dtlInfo}>{memberCnt}</span>
                </li>
              </ul>
            </Fragment>
          )}
          {isLoggedIn && infoTab === "my" && (
            <Fragment>
              <p className={classes.cafeNick}>
                <strong>{user.nickName}</strong>
              </p>
              <ul>
                <li>
                  <span className={classes.dtl}>아이디</span>
                  <span className={classes.dtlInfo}>{user.id}</span>
                </li>
                <li>
                  <span className={classes.dtl}>등급</span>
                  <span className={classes.dtlInfo}>
                    {user.level === "admin" ? "관리자" : "일반회원"}
                  </span>
                </li>
              </ul>
            </Fragment>
          )}
        </div>
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
