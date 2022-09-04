import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MenuInfo from "./MenuInfo";
import { useState } from "react";

const Layout = (props) => {
  const [isLoginClick, setIsLoginClick] = useState(false);
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Layout;
