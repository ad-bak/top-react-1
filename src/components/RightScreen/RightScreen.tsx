import CvHeader from "../CvHeader/CvHeader";
import SectionBlock from "../SectionBlock/SectionBlock";

import styles from "./RightScreen.module.css";

export default function RightScreen() {
  return (
    <div className={styles.rightScreen}>
      <div className={styles.cv}>
        <CvHeader />
        <div className={styles.container}>
          <SectionBlock title="Education" />
          <SectionBlock title="Last Jobs" />
        </div>
      </div>
    </div>
  );
}
