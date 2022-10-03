import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes.title}>CAFE CLONE</h2>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/kyahn23/navcafe-clone-react"
        className={classes.link}
      >
        https://github.com/kyahn23/navcafe-clone-react
      </a>
    </footer>
  );
};

export default Footer;
