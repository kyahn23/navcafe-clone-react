import React from "react";
import { useState, useEffect, useContext } from "react";

import { Link, useLocation } from "react-router-dom";
import classes from "./BoardList.module.css";
import BoardNotice from "./BoardNotice";
import BoardTypList from "./BoardTypList";

import { AiOutlineRight } from "react-icons/ai";
import AuthContext from "../../store/auth/auth-context";
import { getPostPaiging, getTopNtc } from "../../service/firebase";
import { useCallback } from "react";

// ## firestore 검색쿼리 문제로 보류
// const options = [
//   { value: "title", label: "제목" },
//   { value: "content", label: "내용" },
// ];

const BoardList = (props) => {
  // const [noticeHide, setNoticeHide] = useState(false); // 공지사항 보이기 체크여부
  const [topNtc, setTopNtc] = useState([]); // 상단 공지사항
  const [postList, setPostList] = useState([]); // 현재 페이지에 표시할 게시글리스트
  const [page, setPage] = useState(1); // 현재 페이지
  const [totCnt, setTotCnt] = useState(0); // 전체 게시글 수
  const [paging, setPaiging] = useState([]);

  // ## firestore 검색쿼리 문제로 보류
  // const [searchTyp, setSearchTyp] = useState("title"); // 검색구분 초기값 - 제목

  const loc = useLocation();

  const authCtx = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  // ## firestore 검색쿼리 문제로 보류
  // const inputSearchRef = useRef();

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

  const pagelistRender = (val) => {
    setPage(val);
  };

  // ## firestore 검색쿼리 문제로 보류
  // const optHandler = (val) => {
  //   setSearchTyp(val.value);
  // };

  // ## firestore 검색쿼리 문제로 보류
  // const onkeydownHandler = (e) => {
  //   if (e.key === "Enter") {
  //     searchHandler();
  //   }
  // };

  // ## firestore 검색쿼리 문제로 보류
  // const searchHandler = () => {
  // const searchObj = {
  //   typ: searchTyp,
  //   keyword: inputSearchRef.current.value,
  // };

  // getPaging();
  // getPostPaiging(typ, page, props.postCnt, searchObj).then((res) => {
  //   setPostList(res.list);
  //   setTotCnt(res.totalCnt);
  //   setPaiging(res.paiging);
  // });
  // };

  const getPaging = useCallback(async () => {
    // ## firestore 검색쿼리 문제로 보류
    const searchObj = {
      // typ: searchTyp,
      // keyword: inputSearchRef.current.value,
    };
    getPostPaiging(typ, page, props.postCnt, searchObj).then((res) => {
      setPostList(res.list);
      setTotCnt(res.totalCnt);
      setPaiging(res.paiging);
    });
  }, [typ, page, props.postCnt]); // 검색어 타입의 경우는 제외해야함

  // const getPaging = useCallback(typ, page, cnt, search) => {
  //   getPostPaiging(typ, page, props.postCnt).then((res) => {
  //     setPostList(res.list);
  //     setTotCnt(res.totalCnt);
  //     setPaiging(res.paiging);
  //   });
  // };
  useEffect(() => {
    getTopNtc().then((res) => {
      setTopNtc(res);
    });
  }, []);

  // ## firestore 검색쿼리 문제로 보류
  // useEffect(() => {
  //   inputSearchRef.current.value = "";
  // }, [typ]);

  useEffect(() => {
    getPaging();
  }, [getPaging]); // #####확인 필요
  useEffect(() => {
    setPage(1); // 게시글 리스트 개수 변경시 1페이지로 변경
  }, [props.postCnt]);

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
      <div
        className={
          authCtx.isLoggedIn
            ? `${classes.prevNext}`
            : `${classes.prevNext} ${classes.Mt0}`
        }
      >
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

      {/* ## firestore 검색쿼리 문제로 보류 */}
      {/* <div className={classes.listSearch}>
        <div className={classes.selectTyp}>
          <Select
            className={classes.selectList}
            defaultValue={options[0]}
            options={options}
            // onChange={optHandler}
          />
        </div>
        <div className={classes.inputSearchArea}>
          <div className={classes.inputComponent}>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              onKeyDown={onkeydownHandler}
              ref={inputSearchRef}
            />
          </div>
          <button onClick={searchHandler} className={classes.btnSearch}>
            검색
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default BoardList;
