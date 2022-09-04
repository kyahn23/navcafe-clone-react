import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import BoardDetail from "./components/Board/BoardDetail";
import BoardList from "./components/Board/BoardList";

import Layout from "./components/Layout/Layout";
import AuthPage from "./components/page/AuthPage";
import MainPage from "./components/page/MainPage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route path="/board" exact={true} element={<BoardList />} />
        <Route path="/board/detail" exact={true} element={<BoardDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
