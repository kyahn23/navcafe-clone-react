import React from "react";
import Select from "react-select";

import { Link } from "react-router-dom";
import classes from "./BoardList.module.css";
import BoardNotice from "./BoardNotice";
import BoardTypList from "./BoardTypList";

import { AiOutlineRight } from "react-icons/ai";

const options = [
  { value: "title", label: "제목" },
  { value: "content", label: "내용" },
  { value: "writer", label: "작성자" },
];

const BoardList = (props) => {
  const searchHandler = () => {
    return;
  };
  return (
    <div className={classes.articleBoard}>
      <BoardNotice />
      <BoardTypList />
      <div className={classes.postBtn}>
        <div className="fr">
          <Link to="/board/write" className={classes.writeBtn}>
            글쓰기
          </Link>
        </div>
      </div>
      <div className={classes.prevNext}>
        <span className={classes.on}>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span className={classes.pgR}>
          <div>
            <AiOutlineRight />
          </div>
        </span>
      </div>
      <div className={classes.listSearch}>
        <div className={classes.selectTyp}>
          <Select
            className={classes.selectList}
            defaultValue={options[0]}
            options={options}
          />
        </div>
        <div className={classes.inputSearchArea}>
          <div className={classes.inputComponent}>
            <input
              type="text"
              placeholder="검색어를 입력해주세요"
              onKeyDown={searchHandler}
            />
          </div>
          <button onClick={searchHandler} className={classes.btnSearch}>
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
