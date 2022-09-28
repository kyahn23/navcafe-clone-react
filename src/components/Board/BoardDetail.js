import classes from "./BoardDetail.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import {
  addComment,
  getCommentList,
  getPostDetail,
  viewCntInc,
} from "../../service/firebase";
import { useContext } from "react";
import AuthContext from "../../store/auth/auth-context";

// 게시판 종류
// const boardTyp = [
//   { label: "자유게시판", value: "free" },
//   { label: "카페공지", value: "notice" },
//   { label: "질문게시판", value: "qna" },
//   { label: "사진게시판", value: "photo" },
//   // { label: "전체글보기", value: "all" },
// ];

const BoardDetail = () => {
  const [postInfo, setPostInfo] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [cmntRender, setCmntRender] = useState(false);
  const loc = useLocation();
  const nav = useNavigate();
  const st = loc.state;
  const authCtx = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const commentInputRef = useRef();

  const replyArea = useRef();
  const moveToReplyBox = () => {
    replyArea.current.scrollIntoView();
  };

  const contentArea = useRef();
  const moveToTop = () => {
    contentArea.current.scrollIntoView();
  };

  const moveToList = () => {
    nav(-1);
  };

  const registCommentHandler = () => {
    const textContent = commentInputRef.current.value;

    const postData = {
      postId: st.id,
      content: textContent,
    };
    addComment(postData).then(() => {
      commentInputRef.current.value = "";
      setCmntRender(!cmntRender);
    });
  };

  useEffect(() => {
    viewCntInc(st.id);
    getPostDetail(st.id).then((res) => {
      setPostInfo(res.postInfo);
      setCommentList(res.commentList);
    });
  }, [st.id]);

  useEffect(() => {
    getCommentList(st.id).then((res) => {
      setCommentList(res);
    });
  }, [st.id, cmntRender]);
  return (
    <div className={classes.boardDetail}>
      <div className={classes.wrap}>
        <div ref={contentArea} className={classes.contentBox}>
          <div className={classes.detailHeader}>
            <div className={classes.BoardTyp}>
              <Link
                to="/board"
                className={classes.linkBoard}
                state={{ typ: postInfo.postTyp, txt: postInfo.postTypNm }}
              >
                {postInfo.postTypNm}
                <AiOutlineRight />
              </Link>
            </div>
            <div className={classes.titleArea}>
              {postInfo.postHeader !== null ? (
                <div className={classes.titleCategory}>
                  <em className={classes.categoryText}>
                    {postInfo.postHeaderNm}
                  </em>
                </div>
              ) : null}
              <h3 className={classes.titleText}>{postInfo.title}</h3>
            </div>
            <div className={classes.writerInfo}>
              <div className={classes.profileArea}>
                <div className={classes.profileInfo}>
                  <div className={classes.nickBox}>{postInfo.nickName}</div>
                </div>
                <div className={classes.articleInfo}>
                  <span className={classes.date}>
                    {new Date(postInfo.regDt).toLocaleString()}
                  </span>
                  <span className={classes.count}>조회 {postInfo.viewCnt}</span>
                </div>
              </div>
            </div>
            <div className={classes.articleTool}>
              <span onClick={moveToReplyBox} className={classes.buttonComment}>
                <BiMessageRoundedDetail />
                댓글
                <strong className={classes.num}>{commentList.length}</strong>
              </span>
            </div>
          </div>
          <div className={classes.detailContainer}>
            <div className={classes.detailViewer}>
              {postInfo.imgIncYn && (
                <div className={classes.detailContent}>
                  {HTMLReactParser(postInfo.content)}
                </div>
              )}
              {!postInfo.imgIncYn && (
                <div className={classes.detailContent}>{postInfo.content}</div>
              )}

              <div className={classes.replyBox}>
                <div className={classes.boxLeft}>
                  <span className={classes.buttonComment}>
                    <BiMessageRoundedDetail />
                    댓글
                    <strong className={classes.num}>
                      {commentList.length}
                    </strong>
                  </span>
                </div>
              </div>
              <div ref={replyArea} className={classes.commentBox}>
                {commentList.length > 0 && (
                  <div className={classes.commentOption}>
                    <h3 className={classes.commentTitle}>댓글</h3>
                    <div className={classes.commentTab}></div>
                  </div>
                )}
                <ul className={classes.commentList}>
                  {commentList.length > 0 &&
                    commentList.map((comment) => (
                      <li key={comment.id} className={classes.commentItem}>
                        <div className={classes.commentArea}>
                          <div className={classes.commentTab}>
                            <div className={classes.commentNickBox}>
                              <div className={classes.commentNickInfo}>
                                <span className={classes.commentNickname}>
                                  {comment.nickName}
                                </span>
                              </div>
                            </div>
                            <div className={classes.commentTextBox}>
                              <p className={classes.commentTextView}>
                                <span className={classes.textComment}>
                                  {comment.content}
                                </span>
                              </p>
                            </div>
                            <div className={classes.commentInfoBox}>
                              <span className={classes.commentInfoDate}>
                                {new Date(comment.regDt).toLocaleString()}
                              </span>
                              {/* <span className={classes.commentInfoButton}>
                                답글쓰기
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
                {authCtx.isLoggedIn && (
                  <div className={classes.commentWriter}>
                    <div className={classes.commentInbox}>
                      <em className={classes.commentInboxName}>
                        {authCtx.isLoggedIn && user.nickName}
                      </em>
                      <textarea
                        placeholder="댓글을 남겨보세요"
                        rows="1"
                        ref={commentInputRef}
                        className={classes.commentInboxText}
                      />
                    </div>
                    <div className={classes.commentRegist}>
                      <div className={classes.registerBox}>
                        <span
                          className={classes.btnRegister}
                          onClick={registCommentHandler}
                        >
                          등록
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.ArticleBottomBtns}>
          {authCtx.isLoggedIn && user.id === postInfo.writer && (
            <div className={classes.leftArea}>
              <Link
                className={classes.bottomBtn}
                to="/board/edit"
                state={{
                  id: st.id,
                  typ: postInfo.postTyp,
                }}
              >
                수정
              </Link>
              {/* <span className={`${classes.bottomBtnML} ${classes.bottomBtn}`}>
                삭제
              </span> */}
            </div>
          )}

          <div className={classes.rightArea}>
            <span className={classes.bottomBtn} onClick={moveToList}>
              목록
            </span>
            <span
              className={`${classes.bottomBtnML} ${classes.bottomBtn}`}
              onClick={moveToTop}
            >
              <span>TOP</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
