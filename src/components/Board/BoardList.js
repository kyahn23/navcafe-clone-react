import { useRef } from "react";
import { useLocation } from "react-router-dom";

import classes from "./BoardList.module.css";

const BoardList = (props) => {
  const loc = useLocation();
  const typ = loc.state.txt;
  const ntcHideChkRef = useRef();
  return (
    <div>
      <div className={classes.mainData}>
        <div className={classes.titleArea}>
          <h3 className={classes.titleTxt}>{typ}</h3>
          <div className={classes.sortArea}>
            <div className={classes.ntcHideChk}>
              <input type="checkbox" id="ntc_hidden" ref={ntcHideChkRef} />
              <label htmlFor="ntc_hidden">공지 숨기기</label>
            </div>
            <div class="sort_form">
              <a
                href="/ArticleList.nhn?search.clubid=29332148&amp;search.menuid=1&amp;search.boardtype=C"
                onclick="clickcr(this, 'btp.wzine', '', '', event);"
                class="sort_card "
              >
                <span class="blind">카드형</span>
              </a>
              <a
                href="/ArticleList.nhn?search.clubid=29332148&amp;search.menuid=1&amp;search.boardtype=I"
                onclick="clickcr(this, 'btp.album', '', '', event);"
                class="sort_album "
              >
                <span class="blind">앨범형</span>
              </a>
              <a
                href="/ArticleList.nhn?search.clubid=29332148&amp;search.menuid=1&amp;search.boardtype=L"
                onclick="clickcr(this, 'btp.board', '', '', event);"
                class="sort_list  is_selected "
              >
                <span class="blind">목록형</span>
              </a>
            </div>
          </div>
        </div>
        ㅁㅁㅁㅁ
      </div>
    </div>
  );
};

export default BoardList;
