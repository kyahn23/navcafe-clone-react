import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MenuInfo from "./MenuInfo";
import { useState } from "react";
import AuthForm from "../Auth/AuthForm";

const Layout = (props) => {
  const [authPageChk, setAuthPageChk] = useState(false);
  const loginClickHandler = (val) => {
    console.log(val);
    if (val) {
      setAuthPageChk(val);
    }
  };
  const layout = (
    <React.Fragment>
      <div className="container">
        <div className="front-image">
          <span className="inner-text">
            <Link to="/">
              <span className="title">CAFE_CLONE</span>
            </Link>
          </span>
        </div>

        <MenuInfo />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
  return (
    <div>
      <Header loginClick={loginClickHandler} />
      {!authPageChk && layout}
      {authPageChk && <AuthForm />}
    </div>
  );
};

export default Layout;
