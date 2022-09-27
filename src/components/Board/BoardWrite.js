import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import classes from "./BoardWrite.module.css";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { addPost, storage } from "../../service/firebase";

// 게시판 종류
const boardTyp = [
  { label: "자유게시판", value: "free" },
  { label: "카페공지", value: "notice" },
  { label: "질문게시판", value: "qna" },
  { label: "사진게시판", value: "photo" },
  // { label: "전체글보기", value: "all" },
];

// 말머리
const postHeader = [
  { label: "잡담", value: "talk" },
  { label: "정보", value: "info" },
];

const BoardWrite = (props) => {
  const navigate = useNavigate();
  const loc = useLocation();
  const typ = loc.state.typ;
  const [bdSelect, setBdSelect] = useState(null);
  const [hdSelect, setHdSelect] = useState(null);
  const [imgUpload, setImgUpload] = useState(false);
  const [imgUrlArr, setImgUrlArr] = useState([]);
  let currPage;
  const user = JSON.parse(localStorage.getItem("userInfo"));
  let isNtcYn;

  // 게시판 목록
  if (typ === "all" || typ === "main") {
    currPage = boardTyp.filter((option) => option.value !== "notice");
  } else {
    currPage = boardTyp.filter((option) => option.value === typ);
  }

  const inputTitleRef = useRef();
  const inputContentRef = useRef();
  const ntcYnRef = useRef();

  const boardChgHandler = (val) => {
    setBdSelect(val.value);
  };

  const headerChgHandler = (val) => {
    setHdSelect(val.value);
  };

  // 취소
  const cancleHandler = () => {
    if (imgUpload) {
    }
    let board = boardTyp.filter((bd) => bd.value === typ);
    if (typ === "main") {
      navigate("/");
    } else {
      navigate("/board", {
        state: {
          typ: typ,
          txt: board[0].label,
        },
      });
    }
  };

  // 등록
  const registHandler = () => {
    const postTitle = inputTitleRef.current.value;
    const textContent = inputContentRef.current.getInstance(); //.getHTML() html 형태로  || .getMarkdown() markdown 형태로

    const ntcYn = isNtcYn ? ntcYnRef.current.checked : false;
    if (!!bdSelect === false) {
      alert("게시판을 선택해주세요.");
      return;
    }
    if (postTitle === "") {
      alert("제목을 입력해주세요.");
      return;
    }
    if (textContent.getMarkdown().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }
    const postData = {
      title: postTitle,
      content: imgUpload ? textContent.getHTML() : textContent.getMarkdown(),
      postTyp: bdSelect,
      postHeader: hdSelect,
      noticeYn: ntcYn,
      imgIncYn: imgUpload,
      imgUrl: imgUrlArr,
    };

    console.log(postData);
    addPost(postData).then((res) => {
      if (res) {
        alert("게시글이 등록되었습니다.");
        navigate("/board/detail", {
          state: {
            id: res,
          },
        });
      }
    });
  };

  useEffect(() => {
    if (!!user === true) {
      isNtcYn = user.level === "admin";
    } else {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (typ !== "all" && typ !== "main") {
      setBdSelect(typ);
    }
  }, [typ]);

  const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };

  // const imgUrlPush = (val) => {
  //   let arr = [...imgUrlArr, val];
  //   setImgUrlArr(arr);
  // };

  const uploadImg = (storageRef, blob, callback) => {
    uploadBytes(storageRef, blob).then((snapshot) => {
      setImgUpload(true);

      getDownloadURL(storageRef).then((url) => {
        // imgUrlPush(url);
        setImgUrlArr((prev) => {
          console.log("asdf", prev);
          return [...prev, url];
        });

        callback(url, blob.name);
      });
    });
  };

  return (
    <div className={classes.boardWrite}>
      <div className={classes.writeHeader}>
        <h3 className={classes.title}>
          카페글쓰기
          {isNtcYn && (
            <span className={classes.noticeYn}>
              <input type="checkbox" id="ntcYn" ref={ntcYnRef} />
              <label htmlFor="ntcYn">공지사항 등록</label>
            </span>
          )}
        </h3>
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
                defaultValue={
                  typ !== "all" && typ !== "main" ? currPage[0] : null
                }
                placeholder="게시판 선택"
                onChange={boardChgHandler}
              />
            </div>
            <div className={classes.headSelect}>
              <Select
                options={postHeader}
                placeholder="말머리 선택"
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                onChange={headerChgHandler}
              />
            </div>
          </div>
          <div className={classes.row}>
            <input
              type="text"
              className={classes.titleAreaInput}
              placeholder="제목을 입력해 주세요."
              ref={inputTitleRef}
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
            ref={inputContentRef}
            hooks={{
              addImageBlobHook: async (blob, callback) => {
                const storageRef = ref(storage, `images/${uuidv4()}`);
                uploadImg(storageRef, blob, callback);
              },
            }}
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
