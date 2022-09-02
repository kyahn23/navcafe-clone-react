import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AllText from "./components/Text/AllText";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<AllText />} />
      </Routes>
    </Layout>
  );
}

export default App;
