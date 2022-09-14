import classes from "./BoardDetail.module.css";
import { AiOutlineRight } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useRef } from "react";

const BoardDetail = (props) => {
  const replyArea = useRef();

  const moveToReplyBox = () => {
    replyArea.current.scrollIntoView();
  };

  return (
    <div className={classes.boardDetail}>
      <div className={classes.wrap}>
        <div className={classes.contentBox}>
          <div className={classes.detailHeader}>
            <div className={classes.BoardTyp}>
              <Link to="/" className={classes.linkBoard}>
                자유게시판
                <AiOutlineRight />
              </Link>
            </div>
            <div className={classes.titleArea}>
              <div className={classes.titleCategory}>
                <em className={classes.categoryText}>[정보]</em>
              </div>
              <h3 className={classes.titleText}>게시글 상세화면 테스트</h3>
            </div>
            <div className={classes.writerInfo}>
              <div className={classes.profileArea}>
                <div className={classes.profileInfo}>
                  <div className={classes.nickBox}>닉네임</div>
                </div>
                <div className={classes.articleInfo}>
                  <span className={classes.date}>2022.09.12. 13:44</span>
                  <span className={classes.count}>조회 101</span>
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
              <div className={classes.detailContent}>
                얼마전 모멘텀4구입해서 명절 연휴가 되서야 겨우 각잡고들었습니다
                약2시간 가량 Aptx adaptive동글도 하나구입해서 컴터에 꽂아주고
                들으려는데 틱틱 거리는 노이즈가 노래시작하고 좀들리더니 노래
                시작하고는 들리지 않는것처럼 느껴져서 그래 이정도는 참을수
                있어하고 듣고있다가 귀쪽에 땀이 좀나서 헤드폰 좀 벗고 식히고
                다시쓰는 와중에 터치가 되서 노래가 멈추길래 다시 터치했는데
                노래가 나오지 않더군요 그뒤로 쭉.... 룬다시끄고 재실행후 다시
                잘나옵니다 근데 틱틱거리는 노이즈 다시 들리고 노래변경하니 다시
                노래가 들리지 않습니다
              </div>
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
                  <div className={classes.commentTab}>
                    {/* <ul class="comment_tab_list">
                      <li class="comment_tab_item">
                        <a
                          href="#"
                          role="button"
                          aria-selected="true"
                          class="comment_tab_button"
                        >
                          등록순
                        </a>
                      </li>
                      <li class="comment_tab_item">
                        <a
                          href="#"
                          role="button"
                          aria-selected="false"
                          class="comment_tab_button"
                        >
                          최신순
                        </a>
                      </li>
                    </ul> */}
                    {/* <button type="button" class="comment_refresh_button">
                      <span class="blind">새로고침</span>
                    </button> */}
                  </div>
                </div>
                <ul className={classes.commentList}>
                  <li id="89951807" className={classes.commentItem}>
                    <div className={classes.commentArea}>
                      <div className={classes.commentTab}>
                        <div class={classes.commentNickBox}>
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
                        {/* <div data-v-5213e8a5="" class="comment_tool">
                          <a data-v-5213e8a5="" id="commentItem89951807" href="#" role="button" title="더보기" class="comment_tool_button">
                            <svg data-v-5213e8a5="" aria-label="더보기" class="svg-icon ico-post-more-979797">
                              <use data-v-5213e8a5="" xlink:href="#ico-post-more-979797" aria-hidden="false"></use>
                            </svg>
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </li>
                  <li className={classes.commentItem}>
                    <div className={classes.commentArea}>
                      <div className={classes.commentTab}>
                        <div class={classes.commentNickBox}>
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
