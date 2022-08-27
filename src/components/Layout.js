import styles from "./Layout.module.css";

const Layout = (props) => {
  return <div className={styles["main-container"]}>{props.children}</div>;
};

export default Layout;
