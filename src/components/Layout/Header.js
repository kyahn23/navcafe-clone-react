import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const loc = useLocation();
  const navigate = useNavigate();
  const [authPageChk, setAuthPageChk] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const authChkLayout = useCallback(() => {
    if (!isLoggedIn) {
      if (loc.pathname.includes("/auth")) {
        if (loc.state.hasOwnProperty("authPageChk")) {
          setAuthPageChk(true);
        }
      }
    } else {
      setAuthPageChk(false);
    }
  }, [isLoggedIn, loc.pathname, loc.state]);

  useEffect(() => {
    authChkLayout();
  }, [authChkLayout]);

  useEffect(() => {}, [loc.pathname, isLoggedIn]);

  let layout;
  if (!isLoggedIn && !authPageChk) {
    console.log("asdfasdf");
    layout = (
      <Fragment>
        <li>
          <Link to="/auth" state={{ authPageChk: true }}>
            로그인
          </Link>
        </li>
      </Fragment>
    );
  } else if (isLoggedIn) {
    layout = (
      <Fragment>
        <li>
          <Link to="/myInfo">내정보</Link>
        </li>
      </Fragment>
    );
  }

  console.log(layout);

  const logoBtn = () => {
    setAuthPageChk(false);
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={logoBtn}>
        CAFE_CLONE
      </div>
      <nav>
        <ul>{layout}</ul>
      </nav>
    </header>
  );
};

export default Header;
