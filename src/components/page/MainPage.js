import classes from "./MainPage.module.css";
import { FiArrowRight } from "react-icons/fi";
import { Fragment, useEffect } from "react";
import { getData, getMainList, getTopNtc } from "../../service/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { regDtFormat } from "../Board/BoardTypList";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [topNtc, setTopNtc] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [freePost, setFreePost] = useState([]);
  const [qnaPost, setQnaPost] = useState([]);
  const [photoPost, setPhotoPost] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getMainList()
      .then((res) => {
        console.log(res);
        setTopNtc(res.ntcList);
        setAllPost(res.allList);
        setFreePost(res.freeList);
        setQnaPost(res.qnaList);
        setPhotoPost(res.photoList);
      })
      .then(() => {
        setIsLoading(false);
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

  const photoRender = (list) => {
    return list.map((item) => (
      <li key={item.id}>
        <dl>
          <dt className={classes.photo}>
            <Link to="/board/detail" state={{ id: item.id }}>
              <img src={item.imgUrl[0]} alt="컨텐츠이미지" />
            </Link>
          </dt>
          <dd className={classes.tit}>
            <Link to="/board/detail" state={{ id: item.id }}>
              <span className={classes.inner}>
                <span className={classes.ellipsis}>{item.title}</span>
              </span>
            </Link>
            <span className={classes.commentCnt}>
              {item.commentCnt > 0 ? (
                <span className={classes.num}>[{item.commentCnt}]</span>
              ) : null}
            </span>
          </dd>
          <dd>
            <div className={classes.nickArea}>
              <div className={classes.nn}>{item.nickName}</div>
            </div>
          </dd>
          <dd class="date m-tcol-c">
            <div class="date_num m-tcol-c">
              <span class="date">{regDtFormat(item.regDt)}</span>
              <span class="num"> 조회 {item.viewCnt}</span>
            </div>
          </dd>
        </dl>
      </li>
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
            <tbody className="postList">
              {isLoading &&
                [...Array(8)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
              {!isLoading && topNtc.length > 0 && ntcRender(topNtc)}
              {!isLoading && listRender(allPost)}
              {!isLoading &&
                [...Array(6 - allPost.length)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
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
              {isLoading &&
                [...Array(8)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
              {!isLoading && topNtc.length > 0 && ntcRender(topNtc)}
              {!isLoading && listRender(freePost)}
              {!isLoading &&
                [...Array(6 - freePost.length)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
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
              {isLoading &&
                [...Array(8)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
              {!isLoading && topNtc.length > 0 && ntcRender(topNtc)}
              {!isLoading && listRender(qnaPost)}
              {!isLoading &&
                [...Array(6 - qnaPost.length)].map(() => {
                  return (
                    <tr>
                      <td className={classes.td_article}></td>
                      <td className={classes.td_view}></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className={classes.cont_R}>
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
          <ul className={classes.albumBox}>
            {isLoading &&
              [...Array(6)].map(() => {
                return (
                  <li className={classes.noContent}>
                    <dl>
                      <dt class="photo"></dt>
                      <dd class="tit"></dd>
                      <dd class="date m-tcol-c">
                        <div class="pers_nick_area"></div>
                        <div class="date_num m-tcol-c"></div>
                      </dd>
                    </dl>
                  </li>
                );
              })}
            {!isLoading && photoRender(photoPost)}
            {!isLoading &&
              [...Array(6 - photoPost.length)].map(() => {
                return (
                  <li className={classes.noContent}>
                    <dl>
                      <dt className={classes.photo}></dt>
                      <dd className={classes.tit}></dd>
                      <dd className={classes.nnDtVcnt}>
                        <div className={classes.nickArea}></div>
                        <div className={classes.dtVcntArea}>
                          <span className={classes.dt}></span>
                          <span className={classes.vCnt}></span>
                        </div>
                      </dd>
                    </dl>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
