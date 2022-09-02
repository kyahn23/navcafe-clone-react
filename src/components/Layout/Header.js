import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CAFE_CLONE</div>
      <nav>
        <ul>
          <li>내정보</li>
          <li>로그인</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
