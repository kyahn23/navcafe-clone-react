import React from "react";
import Select from "react-select";

import { useRef, useState } from "react";

import classes from "./BoardTitle.module.css";

const options = [
  { value: "5", label: "5개씩" },
  { value: "10", label: "10개씩" },
  { value: "15", label: "15개씩" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: "30px",
    minHeight: "30px",
  }),
  valueContainer: (base, state) => ({
    ...base,
    paddingTop: "0px",
    marginBottom: 4,
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    marginTop: 6,
    marginBottom: 12,
  }),
};
const BoardTitle = (props) => {
  const [boardTyp, setBoardTyp] = useState("list");
  const [sortCnt, setSortCnt] = useState("10");

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
          <Select
            className={classes.sortCnt}
            value={options.filter((option) => option.value === sortCnt)}
            onChange={listCntHandler}
            options={options}
            styles={customStyles}
            isSearchable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default BoardTitle;
