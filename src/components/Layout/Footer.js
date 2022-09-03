import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes.title}>CAFE CLONE</h2>
      <a href="#none" className={classes.link}>
        https://github.com
      </a>
    </footer>
  );
};

export default Footer;
