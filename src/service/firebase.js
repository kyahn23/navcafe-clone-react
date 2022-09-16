import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import FirebaseConfig from "./firebaseConfig";

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export const db = getFirestore(app);

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
