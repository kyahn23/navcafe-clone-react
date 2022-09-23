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
import { getPostPaiging } from "../../service/firebase";

const options = [
  { value: "title", label: "제목" },
  { value: "content", label: "내용" },
  { value: "writer", label: "작성자" },
];

const BoardList = (props) => {
  const [noticeHide, setNoticeHide] = useState(false); // 공지사항 보이기 체크여부
  const [postList, setPostList] = useState([]); // 현재 페이지에 표시할 게시글리스트
  const [page, setPage] = useState(1); // 현재 페이지
  const [totCnt, setTotCnt] = useState(0); // 전체 게시글 수
  const [paging, setPaiging] = useState([]);

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

  let startPgNum;
  let endPgNum;
  const paginationAreaRender = () => {
    let pg = [];
    console.log("현재게시판 전체 게시글수", totCnt);
    let pgEndNum = parseInt(totCnt / props.postCnt + 1); // 마지막 페이지 넘버
    console.log("마지막페이지", pgEndNum);
    startPgNum = parseInt(page / 10);
    if (startPgNum % 10 === 0) {
      startPgNum++;
    }
    console.log("현재화면 시작페이지", startPgNum);

    endPgNum = startPgNum + 10;
    if (endPgNum > pgEndNum) {
      endPgNum = pgEndNum;
    }
    console.log("현재화면 마지막페이지", endPgNum);

    // if (parseInt(paigination / props.postCnt) < page + 10) {
    for (let i = startPgNum; i < endPgNum; i++) {
      pg.push(i);
    }
    if (startPgNum === endPgNum) {
      pg.push(startPgNum);
    }
    if (endPgNum < pgEndNum) {
      pg.push("next");
    }
    console.log(pg);
    setPaiging(pg);
  };

  const pagelistRender = (val) => {
    setPage(val);
  };

  useEffect(() => {
    paginationAreaRender();
  }, [page]);

  useEffect(() => {
    getPostPaiging(typ, page, props.postCnt).then((res) => {
      if (res.list.length) {
        let postArr;
        // if (typ !== "all" && typ !== "main") {
        //   postArr = res.list.filter((post) => post.postTyp === typ);
        //   // boardTyp.filter((option) => option.value !== "notice");
        // } else {
        postArr = res.list;
        // }
        setPostList(postArr);
        setTotCnt(res.totalCnt);
      }
    });
  }, [typ, page, props.postCnt]);
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
        {paging.map((num) => {
          if (num === page) {
            return (
              <span key={num} className={classes.on}>
                {num}
              </span>
            );
          } else if (num === "next") {
            return (
              <span
                key={num}
                className={classes.pgR}
                onClick={() => pagelistRender(num)}
              >
                <div>
                  <AiOutlineRight />
                </div>
              </span>
            );
          } else {
            return (
              <span key={num} onClick={() => pagelistRender(num)}>
                {num}
              </span>
            );
          }
        })}
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
