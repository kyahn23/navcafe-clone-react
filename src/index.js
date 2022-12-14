import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth/auth-context";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconContext } from "react-icons";
import ScrollToTop from "./helpers/ScrollToTop";
import { MenuContextProvider } from "./store/menu-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <MenuContextProvider>
      <BrowserRouter>
        {/* <React.StrictMode> */}
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", marginTop: "-3px" } }}
        >
          <ScrollToTop />
          <App />
        </IconContext.Provider>
        {/* </React.StrictMode> */}
      </BrowserRouter>
    </MenuContextProvider>
  </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
