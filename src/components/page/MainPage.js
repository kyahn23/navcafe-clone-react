import classes from "./MainPage.module.css";
import { FiArrowRight } from "react-icons/fi";
import { useEffect } from "react";
import { getData, getMainList, getTopNtc } from "../../service/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [topNtc, setTopNtc] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [freePost, setFreePost] = useState([]);
  const [qnaPost, setQnaPost] = useState([]);
  useEffect(() => {
    getMainList().then((res) => {
      console.log(res);
      setTopNtc(res.ntcList);
      setAllPost(res.allList);
      setFreePost(res.freeList);
      setQnaPost(res.qnaList);
    });
  }, []);

  const ntcRender = (list) => {
    return list.map((item) => (
      <tr key={item.id} className={classes.board_notice}>
        <td className={classes.td_article}>
          <div className={classes.board_tag}>
            <strong className={classes.board_tag_txt}>
              <span className="inner">공지</span>
            </strong>
          </div>
          <div className={classes.board_list}>
            <div className={classes.inner_list}>
              <Link
                className={classes.article}
                to="/board/detail"
                state={{ id: item.id }}
              >
                <span className={classes.inner}>{item.title}</span>
              </Link>

              <div className={classes.article_append}>
                <span className={classes.article}>
                  {item.commentCnt > 0 ? <em>[{item.commentCnt}]</em> : null}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className={classes.td_view}>{item.viewCnt}</td>
      </tr>
    ));
  };

  const listRender = (list) => {
    return list.map((item) => (
      <tr key={item.id}>
        <td className={classes.td_article}>
          <div className={`${classes.board_tag} ${classes.type_dot}`}>
            <img width="3" height="3" alt="" className={classes.tcol_c} />
          </div>
          <div className={classes.board_list}>
            <div className={classes.inner_list}>
              <Link
                to="/board/detail"
                className={classes.article}
                state={{ id: item.id }}
              >
                <span className={classes.inner}>{item.title}</span>
              </Link>

              <div className={classes.article_append}>
                <span className={classes.article}>
                  {item.commentCnt > 0 ? <em>[{item.commentCnt}]</em> : null}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className={classes.td_view}>{item.viewCnt}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className={classes.mainData}>
        <div className={classes.cont_L}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <Link to="/board" state={{ typ: "all", txt: "전체글보기" }}>
                전체게시글
              </Link>
            </h3>
            <span className={classes.more}>
              <Link to="/board" state={{ typ: "all", txt: "전체글보기" }}>
                더보기
                <FiArrowRight />
              </Link>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              {topNtc.length > 0 && ntcRender(topNtc)}
              {listRender(allPost)}
            </tbody>
          </table>
        </div>

        <div className={classes.cont_R}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <Link to="/board" state={{ typ: "free", txt: "자유게시판" }}>
                자유게시판
              </Link>
            </h3>
            <span className={classes.more}>
              <Link to="/board" state={{ typ: "free", txt: "자유게시판" }}>
                더보기
                <FiArrowRight />
              </Link>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              {topNtc.length > 0 && ntcRender(topNtc)}
              {listRender(freePost)}
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.mainData}>
        <div className={classes.cont_L}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <Link to="/board" state={{ typ: "qna", txt: "질문게시판" }}>
                질문게시판
              </Link>
            </h3>
            <span className={classes.more}>
              <Link to="/board" state={{ typ: "qna", txt: "질문게시판" }}>
                더보기
                <FiArrowRight />
              </Link>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              {topNtc.length > 0 && ntcRender(topNtc)}
              {listRender(qnaPost)}
            </tbody>
          </table>
        </div>

        {/* <div className={classes.cont_R}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <Link to="/board" state={{ typ: "photo", txt: "사진게시판" }}>
                사진게시판
              </Link>
            </h3>
            <span className={classes.more}>
              <Link to="/board" state={{ typ: "photo", txt: "사진게시판" }}>
                더보기
                <FiArrowRight />
              </Link>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
            {topNtc.length > 0 && ntcRender(topNtc)}
              {listRender(qnaPost)}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
};

export default MainPage;
