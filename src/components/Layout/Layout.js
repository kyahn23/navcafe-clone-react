import { Link } from "react-router-dom";

import Header from "./Header";
import MenuInfo from "./MenuInfo";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="front-image">
        <span className="inner-text">
          <Link to="/">
            <span className="title">CAFE_CLONE</span>
          </Link>
        </span>
      </div>
      <MenuInfo />
      {props.children}
    </div>
  );
};

export default Layout;
