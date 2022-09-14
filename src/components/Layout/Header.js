import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const [isLoginClick, setIsLoginClick] = useState(false);

  const loginHandler = () => {
    setIsLoginClick(true);
    props.loginClick(isLoginClick);
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CAFE_CLONE</div>
      <nav>
        <ul>
          <li>
            <Link to="/myInfo">내정보</Link>
          </li>
          <Link to="/auth" onClick={loginHandler}>
            로그인
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
