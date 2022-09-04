import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CAFE_CLONE</div>
      <nav>
        <ul>
          <li>
            <Link to="/myInfo">내정보</Link>
          </li>
          <Link to="/auth">로그인</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
