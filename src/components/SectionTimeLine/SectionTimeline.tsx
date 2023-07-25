import styles from "./SectionTimeline.module.css";

const SectionTimeLine: React.FC<EducationYearProps> = ({
  year,
  position,
  company,
  description,
}): JSX.Element => {
  return (
    <>
      <div className={styles.yearBlock}>
        <span className={styles.year}>{year}</span>
        <div className={styles.details}>
          <h3 className={styles.position}>{position}</h3>
          <h3 className={styles.company}>{company}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SectionTimeLine;
