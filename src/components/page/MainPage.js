import classes from "./MainPage.module.css";
import { FiArrowRight } from "react-icons/fi";

const MainPage = () => {
  return (
    <div>
      <div className={classes.mainData}>
        <div className={classes.cont_L}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <a href="#none">전체게시글</a>
            </h3>
            <span className={classes.more}>
              <a href="#none">
                더보기
                <FiArrowRight />
              </a>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              <tr className={classes.board_notice}>
                <td className={classes.td_article}>
                  <div className={classes.board_tag}>
                    <strong className={classes.board_tag_txt}>
                      <span className="inner">공지</span>
                    </strong>
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="#none" className={classes.article}>
                        <span className={classes.inner}>공지사항입니다.</span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>13</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className={classes.td_view}>1,543</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes.cont_R}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <a href="#none">자유게시판</a>
            </h3>
            <span className={classes.more}>
              <a href="#none">
                더보기
                <FiArrowRight />
              </a>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              <tr className={classes.board_notice}>
                <td className={classes.td_article}>
                  <div className={classes.board_tag}>
                    <strong className={classes.board_tag_txt}>
                      <span className="inner">공지</span>
                    </strong>
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="#none" className={classes.article}>
                        <span className={classes.inner}>공지사항입니다.</span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>13</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className={classes.td_view}>1,543</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={classes.mainData}>
        <div className={classes.cont_L}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <a href="#none">전체게시글</a>
            </h3>
            <span className={classes.more}>
              <a href="#none">
                더보기
                <FiArrowRight />
              </a>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              <tr className={classes.board_notice}>
                <td className={classes.td_article}>
                  <div className={classes.board_tag}>
                    <strong className={classes.board_tag_txt}>
                      <span className="inner">공지</span>
                    </strong>
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="#none" className={classes.article}>
                        <span className={classes.inner}>공지사항입니다.</span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>13</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className={classes.td_view}>1,543</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classes.cont_R}>
          <div className={classes.boardTitleArea}>
            <h3 className={classes.title}>
              <a href="#none">자유게시판</a>
            </h3>
            <span className={classes.more}>
              <a href="#none">
                더보기
                <FiArrowRight />
              </a>
            </span>
          </div>
          <table className={classes.boardTable}>
            <colgroup>
              <col />
              <col width="80" />
            </colgroup>
            <tbody>
              <tr className={classes.board_notice}>
                <td className={classes.td_article}>
                  <div className={classes.board_tag}>
                    <strong className={classes.board_tag_txt}>
                      <span className="inner">공지</span>
                    </strong>
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="#none" className={classes.article}>
                        <span className={classes.inner}>공지사항입니다.</span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>13</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                <td className={classes.td_view}>1,543</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
              <tr>
                <td className={classes.td_article}>
                  <div className={`${classes.board_tag} ${classes.type_dot}`}>
                    <img
                      width="3"
                      height="3"
                      alt=""
                      className={classes.tcol_c}
                    />
                  </div>
                  <div className={classes.board_list}>
                    <div className={classes.inner_list}>
                      <a href="/" className={classes.article}>
                        <span className={classes.inner}>
                          게시글 글제목영역 길이제한 없는지 확인게시글
                          글제목영역 길이제한 없는지 확인
                        </span>
                      </a>

                      <div className={classes.article_append}>
                        <span className={classes.article}>
                          [<em>1</em>]
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={classes.td_view}>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
