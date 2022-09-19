import React from "react";
import Select from "react-select";

import { Link, useLocation } from "react-router-dom";
import classes from "./BoardList.module.css";
import BoardNotice from "./BoardNotice";
import BoardTypList from "./BoardTypList";

import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth/auth-context";
import { getPostList } from "../../service/firebase";
import MenuContext from "../../store/menu-context";

const options = [
  { value: "title", label: "제목" },
  { value: "content", label: "내용" },
  { value: "writer", label: "작성자" },
];

const BoardList = (props) => {
  const [noticeHide, setNoticeHide] = useState(false);
  const [postList, setPostList] = useState([]);
  const loc = useLocation();

  const authCtx = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  let typ = props.typ;
  if (!!typ) {
    typ = loc.state.typ;
  }
  let postBtnArea = true;
  if (authCtx.isLoggedIn) {
    if (typ === "notice") {
      if (user.level !== "admin") {
        postBtnArea = false;
      }
    }
  }

  useEffect(() => {
    getPostList().then((res) => {
      if (res.length) {
        let postArr;
        if (typ !== "all" && typ !== "main") {
          postArr = res.filter((post) => post.postTyp === typ);
          // boardTyp.filter((option) => option.value !== "notice");
        } else {
          postArr = res;
        }
        setPostList(postArr);
      }
    });
  }, [typ]);
  useEffect(() => {
    setNoticeHide(props.ntcHide);
  }, [props.ntcHide]);
  const searchHandler = () => {
    return;
  };
  return (
    <div className={classes.articleBoard}>
      <table>
        <colgroup>
          <col style={{ width: "88px" }} />
          <col />
          <col style={{ width: "110px" }} />
          <col style={{ width: "88px" }} />
          <col style={{ width: "68px" }} />
          {/* <col style={{ width: "68px" }} /> */}
        </colgroup>
        <thead>
          <tr>
            <th scope="col">말머리</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
            <th scope="col">조회</th>
            {/* <th scope="col">좋아요</th> */}
          </tr>
        </thead>
        <tbody>{!noticeHide && <BoardNotice />}</tbody>
      </table>

      <BoardTypList postList={postList} />

      {authCtx.isLoggedIn && postBtnArea && (
        <div className={classes.postBtn}>
          <div className="fr">
            <Link
              to="/board/write"
              className={classes.writeBtn}
              state={{ typ: typ }}
            >
              글쓰기
            </Link>
          </div>
        </div>
      )}
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
          <div>
            <AiOutlineRight />
          </div>
        </span>
      </div>
      <div className={classes.listSearch}>
        <div className={classes.selectTyp}>
          <Select
            className={classes.selectList}
            defaultValue={options[0]}
            options={options}
          />
        </div>
        <div className={classes.inputSearchArea}>
          <div className={classes.inputComponent}>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              onKeyDown={searchHandler}
            />
          </div>
          <button onClick={searchHandler} className={classes.btnSearch}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
