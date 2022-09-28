import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BoardDetail from "./components/Board/BoardDetail";
import Board from "./components/Board/Board";

import Layout from "./components/Layout/Layout";
import AuthPage from "./components/page/AuthPage";
import MainPage from "./components/page/MainPage";
import AuthContext from "./store/auth/auth-context";
import BoardWrite from "./components/Board/BoardWrite";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route path="/board" exact={true} element={<Board />} />
        <Route path="/board/write" exact={true} element={<BoardWrite />} />
        <Route path="/board/edit" exact={true} element={<BoardWrite />} />
        <Route path="/board/detail" exact={true} element={<BoardDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
