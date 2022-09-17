import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

import classes from "./BoardWrite.module.css";
import Select from "react-select";
import { Link, useLocation, useNavigate } from "react-router-dom";

const boardTyp = [
  { label: "자유게시판", value: "free" },
  { label: "카페공지", value: "notice" },
  { label: "질문게시판", value: "qna" },
  { label: "사진게시판", value: "photo" },
  // { label: "전체글보기", value: "all" },
];

const postHeader = [
  { label: "잡담", value: "talk" },
  { label: "정보", value: "info" },
];

const BoardWrite = (props) => {
  const navigate = useNavigate();
  const loc = useLocation();
  const typ = loc.state.typ;

  let currPage;
  if (typ !== "all") {
    currPage = boardTyp.filter((option) => option.value === typ);
  } else {
    currPage = boardTyp.filter((option) => option.value !== "notice");
    // currPage = boardTyp;
  }

  const cancleHandler = () => {
    let board = boardTyp.filter((bd) => bd.value === typ);
    navigate("/board", {
      state: {
        typ: typ,
        txt: board[0].label,
      },
    });
  };

  const registHandler = () => {};
  return (
    <div className={classes.boardWrite}>
      <div className={classes.writeHeader}>
        <h3 className={classes.title}>카페글쓰기</h3>
      </div>
      <div className={classes.writeContent}>
        <div className={classes.writingTitle}>
          <div className={classes.row}>
            <div className={classes.boardSelect}>
              <Select
                options={currPage}
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                value={typ !== "all" ? currPage[0] : null}
                placeholder="게시판 선택"
              />
            </div>
            <div className={classes.headSelect}>
              <Select
                options={postHeader}
                placeholder="말머리 선택"
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
              />
            </div>
          </div>
          <div className={classes.row}>
            <input
              type="text"
              className={classes.titleAreaInput}
              placeholder="제목을 입력해 주세요."
            />
          </div>
        </div>
        <div className={classes.editorArea}>
          <Editor
            height="300px"
            initialEditType="wysiwyg"
            hideModeSwitch={true}
            initialValue=" "
            language="ko-KR"
            placeholder="내용을 입력하세요."
          />
        </div>
        <div className={classes.btnArea}>
          <button className={classes.cancelBtn} onClick={cancleHandler}>
            취소
          </button>
          <button className={classes.regiBtn} onClick={registHandler}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardWrite;
