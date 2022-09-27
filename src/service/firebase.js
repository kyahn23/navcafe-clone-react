import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  increment,
  query,
  orderBy,
  limit,
  startAt,
  where,
} from "firebase/firestore";
import FirebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const getData = async (col) => {
  try {
    const collectionRef = collection(db, col); // 참조
    const dataSnap = await getDocs(collectionRef); // 데이터 스냅 받아오기 - 비동기처리
    const data = dataSnap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataDetail = async (col, docId) => {
  try {
    const docRef = doc(db, col, docId);
    const dataSnap = await getDoc(docRef);
    let rslt;
    if (dataSnap.exists()) {
      rslt = dataSnap.data();
    }
    return rslt;
  } catch (error) {
    return error;
  }
};

// 메인화면 데이터가져오기
export const getMainList = async () => {
  try {
    let data = {};
    const collectionRef = collection(db, "post");
    // 상단 공지사항
    const topNtclist = await query(
      collectionRef,
      where("postTyp", "==", "notice"),
      where("noticeYn", "==", true),
      orderBy("regDt", "desc"),
      limit(2)
    );
    const ntcSnap = await getDocs(topNtclist);
    let ntcList = [];
    for (const item of ntcSnap.docs) {
      const post = item.data();
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;

      ntcList.push(post);
    }

    // 전체게시글
    const allPostList = await query(
      collectionRef,
      orderBy("regDt", "desc"),
      limit(6)
    );
    const allSnap = await getDocs(allPostList);
    let allList = [];
    for (const item of allSnap.docs) {
      const post = item.data();
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;
      allList.push(post);
    }

    // 자유게시판
    const freePostList = await query(
      collectionRef,
      where("postTyp", "==", "free"),
      orderBy("regDt", "desc"),
      limit(6)
    );
    const freePostSnap = await getDocs(freePostList);
    let freeList = [];
    for (const item of freePostSnap.docs) {
      const post = item.data();
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;
      freeList.push(post);
    }

    // 질문게시판
    const qnaPostList = await query(
      collectionRef,
      where("postTyp", "==", "qna"),
      orderBy("regDt", "desc"),
      limit(6)
    );
    const qnaPostSnap = await getDocs(qnaPostList);
    let qnaList = [];
    for (const item of qnaPostSnap.docs) {
      const post = item.data();
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;
      qnaList.push(post);
    }

    // 사진게시판
    const photoPostList = await query(
      collectionRef,
      where("postTyp", "==", "photo"),
      where("imgIncYn", "==", true),
      orderBy("regDt", "desc"),
      limit(6)
    );
    const photoPostSnap = await getDocs(photoPostList);
    let photoList = [];
    for (const item of photoPostSnap.docs) {
      const post = item.data();
      const memberRef = doc(db, "member", post.writer);
      const mbSnap = await getDoc(memberRef);
      post.nickName = mbSnap.data().nickName;
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;
      photoList.push(post);
    }

    data.ntcList = ntcList;
    data.allList = allList;
    data.freeList = freeList;
    data.qnaList = qnaList;
    data.photoList = photoList;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopNtc = async () => {
  try {
    const collectionRef = collection(db, "post");
    const list = await query(
      collectionRef,
      where("noticeYn", "==", true),
      // orderBy("regDt", "desc"),
      limit(2)
    );
    const dataSnap = await getDocs(list);
    let data = [];
    for (const item of dataSnap.docs) {
      const post = item.data();
      const memberRef = doc(db, "member", post.writer);
      const mbSnap = await getDoc(memberRef);
      post.nickName = mbSnap.data().nickName;
      post.id = item.id;

      const commentRef = collection(db, "comment");
      let commentDoc;
      commentDoc = await query(
        commentRef,
        where("postId", "==", item.id),
        orderBy("regDt", "desc")
      );
      const commentSnap = await getDocs(commentDoc);
      post.commentCnt = commentSnap.docs.length;

      data.push(post);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostPaiging = async (typ, page, cnt) => {
  try {
    // 첫 페이지
    const collectionRef = collection(db, "post");
    let post;
    if (typ === "all" || typ === "main") {
      post = await query(collectionRef, orderBy("regDt", "desc"));
    } else {
      post = await query(
        collectionRef,
        where("postTyp", "==", typ),
        orderBy("regDt", "desc")
      );
    }

    const postList = await getDocs(post);

    let firstIdx;
    +page === 1 ? (firstIdx = 0) : (firstIdx = cnt * (page - 1));
    const first = postList.docs[firstIdx];
    console.log("몇개씩 firebase", cnt);
    let curPage;
    let data = [];
    if (!!first === true) {
      if (typ === "all" || typ === "main") {
        curPage = query(
          collectionRef,
          orderBy("regDt", "desc"),
          startAt(first),
          limit(cnt)
        );
      } else {
        curPage = query(
          collectionRef,
          where("postTyp", "==", typ),
          orderBy("regDt", "desc"),
          startAt(first),
          limit(cnt)
        );
      }

      const dataSnap = await getDocs(curPage);
      for (const item of dataSnap.docs) {
        const post = item.data();
        const memberRef = doc(db, "member", post.writer);
        const mbSnap = await getDoc(memberRef);
        post.nickName = mbSnap.data().nickName;
        post.id = item.id;

        const commentRef = collection(db, "comment");
        let commentDoc;
        commentDoc = await query(
          commentRef,
          where("postId", "==", item.id),
          orderBy("regDt", "desc")
        );
        const commentSnap = await getDocs(commentDoc);
        post.commentCnt = commentSnap.docs.length;

        data.push(post);
      }
    }

    let startPgNum;
    let endPgNum;
    let pg = [];
    console.log("현재게시판 전체게시글 수", postList.docs.length);
    let pgEndNum = parseInt(postList.docs.length / cnt); // 마지막 페이지 넘버
    if (postList.docs.length % cnt !== 0) {
      pgEndNum = parseInt(postList.docs.length / cnt) + 1;
    }
    console.log("마지막페이지", pgEndNum);
    startPgNum = parseInt(page / 10);
    if (startPgNum % 10 === 0) {
      startPgNum++;
    }
    console.log("현재화면 시작페이지", startPgNum);

    endPgNum = startPgNum + 10;
    if (endPgNum > pgEndNum) {
      endPgNum = pgEndNum;
    }
    console.log("현재화면 마지막페이지", endPgNum);

    for (let i = startPgNum; i <= endPgNum; i++) {
      pg.push(i);
    }
    if (endPgNum < pgEndNum) {
      pg.push("next");
    }

    let rslt = {};
    rslt.totalCnt = postList.docs.length;
    rslt.paiging = pg;
    rslt.list = data;
    console.log("현재게시판 전체게시글수.현재페이지 게시글리스트", rslt);
    return rslt;
  } catch (error) {
    return error;
  }
};

export const getPostDetail = async (docId) => {
  try {
    console.log(docId);
    const docRef = doc(db, "post", docId);
    const dataSnap = await getDoc(docRef);

    const memberRef = doc(db, "member", dataSnap.data().writer);
    const mbSnap = await getDoc(memberRef);

    const commentRef = collection(db, "comment");
    let commentDoc;
    commentDoc = await query(
      commentRef,
      where("postId", "==", docId),
      orderBy("regDt", "desc")
    );
    let commentArr = [];
    const commentSnap = await getDocs(commentDoc);
    for (const item of commentSnap.docs) {
      const comment = item.data();
      const memberRef = doc(db, "member", comment.writer);
      const mbSnap = await getDoc(memberRef);
      comment.nickName = mbSnap.data().nickName;
      comment.id = item.id;
      commentArr.push(comment);
    }

    let postInfo;
    postInfo = dataSnap.data();
    postInfo.nickName = mbSnap.data().nickName;
    switch (postInfo.postTyp) {
      case "notice":
        postInfo.postTypNm = "카페공지";
        break;
      case "free":
        postInfo.postTypNm = "자유게시판";
        break;
      case "qna":
        postInfo.postTypNm = "질문게시판";
        break;
      case "photo":
        postInfo.postTypNm = "사진게시판";
        break;
      default:
        break;
    }
    switch (postInfo.postHeader) {
      case "talk":
        postInfo.postHeaderNm = "[잡담]";
        break;
      case "info":
        postInfo.postHeaderNm = "[정보]";
        break;
      default:
        break;
    }

    let rslt = {};
    rslt.postInfo = postInfo;
    rslt.commentList = commentArr;
    return rslt;
  } catch (error) {
    return error;
  }
};

export const getCommentList = async (docId) => {
  try {
    const commentRef = collection(db, "comment");
    let commentDoc;
    commentDoc = await query(
      commentRef,
      where("postId", "==", docId),
      orderBy("regDt", "desc")
    );
    let commentArr = [];
    const commentSnap = await getDocs(commentDoc);
    for (const item of commentSnap.docs) {
      const comment = item.data();
      const memberRef = doc(db, "member", comment.writer);
      const mbSnap = await getDoc(memberRef);
      comment.nickName = mbSnap.data().nickName;
      comment.id = item.id;
      commentArr.push(comment);
    }
    return commentArr;
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  let postData;
  data.regDt = Date.now(); // 작성일
  data.modiDt = Date.now(); // 수정일
  data.viewCnt = 0; // 조회수
  data.writer = user.id; // 작성자

  postData = data;
  try {
    const docRef = await addDoc(collection(db, "post"), postData);
    return docRef.id;
  } catch (error) {
    return error;
  }
};

export const addComment = async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  let commentData;
  data.regDt = Date.now(); // 작성일
  data.modiDt = Date.now(); // 수정일
  data.writer = user.id; // 작성자

  commentData = data;
  try {
    await addDoc(collection(db, "comment"), commentData);
    // return docRef.id;
  } catch (error) {
    return error;
  }
};

export const viewCntInc = async (docId) => {
  try {
    const docRef = doc(db, "post", docId);
    await updateDoc(docRef, { viewCnt: increment(1) });
  } catch (error) {
    console.log(error);
  }
};

// const FireBaseFunc = () => {
//   const getList = async (col) => {
//     // ... try, catch 생략
//     const collectionRef = collection(db, col); // 참조
//     const dataSnap = await getDocs(collectionRef); // 데이터 스냅 받아오기 - 비동기처리
//     const data = dataSnap.docs.map((doc) => ({
//       ...doc.data(),
//     }));
//     return data;
//   };

//   const getData = async (col, uid) => {
//     // ... try, catch 생략
//     const userRef = doc(db, col, uid);
//     const userSnap = await getDoc(userRef); // 데이터 스냅 받아오기 - 비동기처리

//     let data;
//     if (userSnap.exists()) {
//       data = userSnap.data();
//     } else {
//       return null;
//     }

//     return data;
//   };

//   const setData = async (col, data) => {
//     await setDoc(doc(db, "cities", "LA"), {
//       name: "Los Angeles",
//       state: "CA",
//       country: "USA",
//     });
//   };
// };

// export default FireBaseFunc;
