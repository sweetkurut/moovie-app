import { NavLink } from "react-router-dom";
import styles from "./header.module.sass";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href="#" className={styles.logo}>
          Moovie
        </a>
        <nav className={styles.nav}>
          <NavLink to={"#"} className={styles.nav_link}>
            Главная
          </NavLink>
          <NavLink to={"#"} className={styles.nav_link}>
            Студии
          </NavLink>
          <NavLink to={"#"} className={styles.nav_link}>
            Коллекции кино
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
