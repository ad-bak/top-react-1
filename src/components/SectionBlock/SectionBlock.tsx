import SectionTimeLine from "../SectionTimeLine/SectionTimeline";
import styles from "./SectionBlock.module.css";
import { useCV } from "../../store";

const SectionBlock: React.FC<SectionBlockProps> = ({ title }) => {
  const { state } = useCV();
  console.log(state.jobs);
  return (
    <div className={styles.education}>
      <h4>{title}</h4>
      <hr />
      <div>
        {title === "Education" &&
          state.education.map((edu, index) => (
            <SectionTimeLine
              key={index}
              year={edu.year}
              position={edu.institution}
              company=""
              description={edu.description}
            />
          ))}

        {title === "Last Jobs" &&
          state.jobs.map((job, index) => (
            <SectionTimeLine
              key={index}
              year={job.year}
              position={job.position}
              company={job.company}
              description={job.description}
            />
          ))}
      </div>
    </div>
  );
};

export default SectionBlock;
