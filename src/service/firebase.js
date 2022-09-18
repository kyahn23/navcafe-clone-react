import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import FirebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export const db = getFirestore(app);

const user = JSON.parse(localStorage.getItem("userInfo"));
console.log(user.id);
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

export const getPostList = async (col) => {
  try {
    const collectionRef = collection(db, col); // 참조
    const dataSnap = await getDocs(collectionRef); // 데이터 스냅 받아오기 - 비동기처리

    let data = [];
    for (const item of dataSnap.docs) {
      const post = item.data();
      const memberRef = doc(db, "member", post.writer);
      const mbSnap = await getDoc(memberRef);
      post.nickName = mbSnap.data().nickName;
      post.id = item.id;
      data.push(post);
    }
    // const data = dataSnap.docs.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id,
    // }));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostDetail = async (docId) => {
  try {
    const docRef = doc(db, "post", docId);
    const dataSnap = await getDoc(docRef);

    const memberRef = doc(db, "member", dataSnap.data().writer);
    const mbSnap = await getDoc(memberRef);

    let rslt;
    rslt = dataSnap.data();
    rslt.nickName = mbSnap.data().nickName;
    switch (rslt.postTyp) {
      case "notice":
        rslt.postTypNm = "카페공지";
        break;
      case "free":
        rslt.postTypNm = "자유게시판";
        break;
      case "qna":
        rslt.postTypNm = "질문게시판";
        break;
      default:
        break;
    }
    switch (rslt.postHeader) {
      case "talk":
        rslt.postHeaderNm = "잡담";
        break;
      case "info":
        rslt.postHeaderNm = "정보";
        break;
      default:
        break;
    }
    return rslt;
  } catch (error) {
    return error;
  }
};

export const addPost = async (data) => {
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