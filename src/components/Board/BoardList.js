import React from "react";
import { useState, useEffect, useContext } from "react";

import Select from "react-select";

import { Link, useLocation } from "react-router-dom";
import classes from "./BoardList.module.css";
import BoardNotice from "./BoardNotice";
import BoardTypList from "./BoardTypList";

import { AiOutlineRight } from "react-icons/ai";
import AuthContext from "../../store/auth/auth-context";
import { getPostPaiging, getTopNtc } from "../../service/firebase";

const options = [
  { value: "title", label: "제목" },
  { value: "content", label: "내용" },
  { value: "writer", label: "작성자" },
];

const BoardList = (props) => {
  // const [noticeHide, setNoticeHide] = useState(false); // 공지사항 보이기 체크여부
  const [topNtc, setTopNtc] = useState([]); // 상단 공지사항
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

  // const paginationAreaRender = () => {
  //   let startPgNum;
  //   let endPgNum;
  //   let pg = [];
  //   console.log("현재게시판 전체게시글 수", totCnt);
  //   let pgEndNum = parseInt(totCnt / props.postCnt); // 마지막 페이지 넘버
  //   if (totCnt % props.postCnt !== 0) {
  //     pgEndNum = parseInt(totCnt / props.postCnt) + 1;
  //   }
  //   console.log("마지막페이지", pgEndNum);
  //   startPgNum = parseInt(page / 10);
  //   if (startPgNum % 10 === 0) {
  //     startPgNum++;
  //   }
  //   console.log("현재화면 시작페이지", startPgNum);

  //   endPgNum = startPgNum + 10;
  //   if (endPgNum > pgEndNum) {
  //     endPgNum = pgEndNum;
  //   }
  //   console.log("현재화면 마지막페이지", endPgNum);

  //   for (let i = startPgNum; i <= endPgNum; i++) {
  //     pg.push(i);
  //   }
  //   if (endPgNum < pgEndNum) {
  //     pg.push("next");
  //   }
  //   setPaiging(pg);
  // };

  const pagelistRender = (val) => {
    setPage(val);
  };
  useEffect(() => {
    getTopNtc().then((res) => {
      console.log(res);
      setTopNtc(res);
    });
  }, []);

  useEffect(() => {
    getPostPaiging(typ, page, props.postCnt).then((res) => {
      setPostList(res.list);
      setTotCnt(res.totalCnt);
      setPaiging(res.paiging);
    });
  }, [typ, page, props.postCnt]); // #####확인 필요
  useEffect(() => {
    setPage(1); // 게시글 리스트 개수 변경시 1페이지로 변경
  }, [props.postCnt]);
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
        <tbody>{!props.ntcHide && <BoardNotice ntcList={topNtc} />}</tbody>
      </table>

      <BoardTypList
        postList={postList}
        page={page}
        totLength={totCnt}
        postCnt={props.postCnt}
      />

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
