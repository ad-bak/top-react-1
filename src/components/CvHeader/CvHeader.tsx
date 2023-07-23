import CustomLink from "../CustomLink/CustomLink";
import styles from "./CvHeader.module.css";

export default function CvHeader(): JSX.Element {
  return (
    <div>
      <header className={styles.cvHeader}>
        <h1>Jane Franklin</h1>
        <p>Software Engineer</p>
      </header>
      <div className={styles.cvHeaderContainer}>
        <div className={styles.importantBonusContainer}>
          <div className={styles.important}>
            <CustomLink
              type="address"
              link="1 rue de la Paix"
              complementary="Appartement 2"
              zipCode="75000"
              city="Paris"
            />
            <CustomLink type="email" link="jane_franklin@gmail.com" />
            <CustomLink type="phone" link="+33 6 12 34 56 78" />
          </div>
          <div className={styles.bonus}></div>
        </div>
      </div>
    </div>
  );
}
