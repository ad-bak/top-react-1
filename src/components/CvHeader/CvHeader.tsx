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
            <section className={styles.address}>
              <span>Address:</span>
              <p>Unniversity of Pennsylvania</p>
              <p>Philadelphia, PA 19014, USA</p>
            </section>
            <section className={styles.phone}>
              <span>Phone: </span>+1 215 898 5000
            </section>
            <section className={styles.email}>
              <span>Email: </span>
              <a href="mailto:jane_frankling@gmail.com">
                jane_franklin@gmail.com
              </a>
            </section>
          </div>
          <div className={styles.bonus}>
            <section className={styles.linkedin}>
              <span>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/jane_franklin">
                  https://www.linkedin.com/in/jane_franklin
                </a>
              </span>
            </section>
            <section className={styles.github}>
              <span>
                GitHub:{" "}
                <a href="github.com/jane_franklin">github.com/jane_franklin</a>
              </span>
            </section>
          </div>
        </div>
        <section className={styles.summary}>
          <span>Summary</span>
          <p>
            I am a software engineer with 5 years of experience in the field. I
            have worked in a variety of industries, including video games,
            mobile applications, and web applications. I am passionate about
            creating software that is both useful and enjoyable for the end
            user. I am looking for a position where I can continue to grow as a
            software engineer and work with a team that is passionate about
            creating great software.
          </p>
        </section>
      </div>
    </div>
  );
}
