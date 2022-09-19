import React, { useCallback, useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MenuInfo from "./MenuInfo";
import AuthForm from "../Auth/AuthForm";
import MenuContext from "../../store/menu-context";

const Layout = (props) => {
  const loc = useLocation();
  const [authPageChk, setAuthPageChk] = useState(false);
  const menuCtx = useContext(MenuContext);
  const authChkLayout = useCallback(() => {
    if (loc.pathname.includes("/auth")) {
      setAuthPageChk(true);
      // if (loc.state.hasOwnProperty("authPageChk")) {
      // } else {

      // }
    } else {
      setAuthPageChk(false);
    }
    if (!loc.pathname.includes("/board")) {
      menuCtx.setBoard("none");
    }
  }, [loc.pathname, menuCtx]);

  useEffect(() => {
    authChkLayout();
  }, [authChkLayout]);

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
