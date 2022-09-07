import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/i18n/ko-kr";

import classes from "./BoardWrite.module.css";

const BoardWrite = () => {
  return (
    <div className={classes.boardWrite}>
      <div className={classes.writeHeader}>
        <h3 className={classes.title}>카페글쓰기</h3>
      </div>
      <div className={classes.writeContent}></div>
      <div className={classes.editorArea}></div>
      <Editor
        height="300px"
        initialEditType="wysiwyg"
        hideModeSwitch={true}
        initialValue=" "
        language="ko-KR"
      />
    </div>
  );
};

export default BoardWrite;
