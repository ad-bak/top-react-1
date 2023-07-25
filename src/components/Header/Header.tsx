import styles from "./Header.module.css";
import cvIcon from "../../assets/cv.png"; // changed png to svg

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={cvIcon} alt="CV Icon" className={styles.icon} />
      <span className={styles.headerTitle}>dummy test</span>
    </header>
  );
}
