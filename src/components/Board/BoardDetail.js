import classes from "./BoardDetail.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPostDetail, viewCntInc } from "../../service/firebase";

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
  const loc = useLocation();
  const st = loc.state;

  const replyArea = useRef();
  const moveToReplyBox = () => {
    replyArea.current.scrollIntoView();
  };

  useEffect(() => {
    viewCntInc(st.id);
    getPostDetail(st.id).then((res) => {
      setPostInfo(res);
    });
  }, [st.id]);

  return (
    <div className={classes.boardDetail}>
      <div className={classes.wrap}>
        <div className={classes.contentBox}>
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
                <strong className={classes.num}>3</strong>
              </span>
            </div>
          </div>
          <div className={classes.detailContainer}>
            <div className={classes.detailViewer}>
              <div className={classes.detailContent}>{postInfo.content}</div>
              <div className={classes.replyBox}>
                <div className={classes.boxLeft}>
                  <span className={classes.buttonComment}>
                    <BiMessageRoundedDetail />
                    댓글
                    <strong className={classes.num}>3</strong>
                  </span>
                </div>
              </div>
              <div ref={replyArea} className={classes.commentBox}>
                <div className={classes.commentOption}>
                  <h3 className={classes.commentTitle}>댓글</h3>
                  <div className={classes.commentTab}></div>
                </div>
                <ul className={classes.commentList}>
                  <li id="89951807" className={classes.commentItem}>
                    <div className={classes.commentArea}>
                      <div className={classes.commentTab}>
                        <div className={classes.commentNickBox}>
                          <div className={classes.commentNickInfo}>
                            <span className={classes.commentNickname}>09</span>
                          </div>
                        </div>
                        <div className={classes.commentTextBox}>
                          <p className={classes.commentTextView}>
                            <span className={classes.textComment}>
                              츄는 추천하지 않고 시민리는 추천할만 합니다
                              <br />
                              그외 추천할만한게 비퀴즈 어텀정도요
                            </span>
                          </p>
                        </div>
                        <div className={classes.commentInfoBox}>
                          <span className={classes.commentInfoDate}>
                            2022.09.12. 11:37
                          </span>
                          <span className={classes.commentInfoButton}>
                            답글쓰기
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={classes.commentItem}>
                    <div className={classes.commentArea}>
                      <div className={classes.commentTab}>
                        <div className={classes.commentNickBox}>
                          <div className={classes.commentNickInfo}>
                            <span className={classes.commentNickname}>
                              닉네임
                            </span>
                          </div>
                        </div>
                        <div className={classes.commentTextBox}>
                          <p className={classes.commentTextView}>
                            <span className={classes.textComment}>
                              츄는 추천하지 않고 시민리는 추천할만 합니다
                              <br />
                              ㅇㄴ녀
                            </span>
                          </p>
                        </div>
                        <div className={classes.commentInfoBox}>
                          <span className={classes.commentInfoDate}>
                            2022.09.12. 11:37
                          </span>
                          <span className={classes.commentInfoButton}>
                            답글쓰기
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className={classes.commentWriter}>
                  <div className={classes.commentInbox}>
                    <em className={classes.commentInboxName}>구엉</em>
                    <textarea
                      placeholder="댓글을 남겨보세요"
                      rows="1"
                      className={classes.commentInboxText}
                    />
                  </div>
                  <div className={classes.commentRegist}>
                    <div className={classes.registerBox}>
                      <span className={classes.btnRegister}>등록</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
