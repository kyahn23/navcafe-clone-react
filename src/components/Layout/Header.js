import { Fragment } from "react";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const loc = useLocation();
  const navigate = useNavigate();
  const [authPageChk, setAuthPageChk] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  const logoBtn = () => {
    setAuthPageChk(false);
    navigate("/");
  };

  const logoutHandler = () => {
    authCtx.logout();
    alert("로그아웃되었습니다.");
    navigate("/", { replace: true });
  };

  const authChkLayout = useCallback(() => {
    if (!isLoggedIn) {
      if (loc.pathname.includes("/auth")) {
        setAuthPageChk(true);

        // if (loc.state.hasOwnProperty("authPageChk")) {
        //   setAuthPageChk(true);
        // }
      } else {
        setAuthPageChk(false);
      }
    } else {
      console.log("111111111");
      setAuthPageChk(false);
    }
  }, [isLoggedIn, loc.pathname]);

  useEffect(() => {
    authChkLayout();
  }, [authChkLayout]);

  useEffect(() => {}, [loc.pathname, isLoggedIn]);

  let layout;
  if (!isLoggedIn && !authPageChk) {
    layout = (
      <li>
        <Link to="/auth" state={{ authPageChk: true }}>
          로그인
        </Link>
      </li>
    );
  } else if (isLoggedIn) {
    layout = (
      <Fragment>
        <li>
          <Link to="/myInfo">내정보</Link>
        </li>
        <li>
          <span className={classes.logout} onClick={logoutHandler}>
            로그아웃
          </span>
        </li>
      </Fragment>
    );
  }

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
