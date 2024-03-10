import { Link } from "react-router-dom";
import styles from "./header.module.sass";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_container}>
          <Link to="/" className={styles.logo}>
            Moovie
          </Link>
          <nav className={styles.nav}>
            <Link to="/" className={styles.nav_link}>
              Главная
            </Link>
            <Link to="/studios" className={styles.nav_link}>
              Студии
            </Link>
            <Link to="/collection-films" className={styles.nav_link}>
              Коллекции кино
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
