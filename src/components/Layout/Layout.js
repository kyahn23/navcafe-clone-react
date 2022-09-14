import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MenuInfo from "./MenuInfo";
import AuthForm from "../Auth/AuthForm";

const Layout = (props) => {
  const loc = useLocation();
  const [authPageChk, setAuthPageChk] = useState(false);

  useEffect(() => {
    if (loc.pathname.includes("/auth")) {
      if (loc.state.authPageChk) {
        setAuthPageChk(true);
      }
    } else {
      setAuthPageChk(false);
    }
  }, [loc.pathname]);

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
      <Header />
      {!authPageChk && layout}
      {authPageChk && <AuthForm />}
    </div>
  );
};

export default Layout;
