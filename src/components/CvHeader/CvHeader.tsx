import { useCV } from "../../store";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./CvHeader.module.css";

export default function CvHeader(): JSX.Element {
  const { state, setState } = useCV();
  return (
    <div>
      <header className={styles.cvHeader}>
        <h1>
          {state.firstName.substring(0, 1).toUpperCase() +
            state.firstName.substring(1, state.firstName.length)}{" "}
          {state.lastName.substring(0, 1).toUpperCase() +
            state.lastName.substring(1, state.lastName.length)}
        </h1>
        <p>{state.jobTitle}</p>
      </header>
      <div className={styles.cvHeaderContainer}>
        <div className={styles.importantBonusContainer}>
          <div className={styles.important}>
            <CustomLink
              type="address"
              complementary={state.address}
              zipCode={state.zipCode}
              city={state.city}
            />
            <CustomLink type="phone" link={state.phone} />
            <CustomLink type="email" link={state.email} />
          </div>
          <div className={styles.bonus}>
            <CustomLink type="linkedin" link={state.linkedin} />
            <CustomLink type="github" link={state.github} />
            <CustomLink type="custom" link={state.additionalLink} />
          </div>
        </div>
        <CustomLink type="summary" summaryText={state.summary} />
      </div>
    </div>
  );
}
