import { useRef, useState } from "react";

import classes from "./BoardTitle.module.css";

const BoardTitle = (props) => {
  const [boardTyp, setBoardTyp] = useState("list");
  const [sortCnt, setSortCnt] = useState(10);

  const ntcHideChkRef = useRef();

  const listCntHandler = (e) => {
    setSortCnt(e.target.value);
  };
  return (
    <div className={classes.titleArea}>
      <h3 className={classes.titleTxt}>{props.typ}</h3>
      <div className={classes.sortArea}>
        <div className={classes.ntcHideChk}>
          <input type="checkbox" id="ntc_hidden" ref={ntcHideChkRef} />
          <label htmlFor="ntc_hidden">공지 숨기기</label>
        </div>
        <div className={classes.sortForm}>
          <button className={classes.sortCard}>
            <span className={classes.blind}>카드형</span>
          </button>
          {/* <button className={classes.sort_album}>
          <span className={classes.blind}>앨범형</span>
        </button> */}
          <button className={`${classes.sortList} ${classes.isSelected}`}>
            <span className={classes.blind}>목록형</span>
          </button>
        </div>
        <div className={classes.selectDiv}>
          <select
            className={classes.sortCnt}
            value={sortCnt}
            onChange={listCntHandler}
          >
            <option key={"5"} value={"5"}>
              5개씩
            </option>
            <option key={"10"} value={"10"}>
              10개씩
            </option>
            <option key={"15"} value={"15"}>
              15개씩
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BoardTitle;
