import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
