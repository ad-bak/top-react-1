import { useState } from "react";
import { useCV } from "../../store";
import styles from "./LeftScreen.module.css";
interface Education {
  year: string;
  institution: string;
  description: string;
}

interface Job {
  year: string;
  company: string;
  position: string;
  description: string;
}

export default function LeftScreen() {
  const { state, setState } = useCV();

  const [showEducationFields, setShowEducationFields] = useState(false);
  const [showJobFields, setShowJobFields] = useState(false);
  const [tempEducation, setTempEducation] = useState<Education>({
    year: "",
    institution: "",
    description: "",
  });
  const [tempJob, setTempJob] = useState<Job>({
    year: "",
    company: "",
    position: "",
    description: "",
  });

  const addEducation = () => {
    setState((prevState) => ({
      ...prevState,
      education: [...prevState.education, tempEducation],
    }));
    setTempEducation({ year: "", institution: "", description: "" });
    setShowEducationFields(false);
  };

  const addJob = () => {
    setState((prevState) => ({
      ...prevState,
      jobs: [...prevState.jobs, tempJob],
    }));
    setTempJob({ year: "", company: "", position: "", description: "" });
    setShowJobFields(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>CV Builder</h1>
      </div>
      <h2>Personal Information</h2>
      <div className={styles.section}>
        <label className={styles.label} htmlFor="firstName">
          First Name
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="lastName">
          Last Name
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="jobTitle">
          Job Title
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="jobTitle"
          name="jobTitle"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="address">
          Address
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="address"
          name="address"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="zipCode">
          Zip Code
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="zipCode"
          name="zipCode"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="city">
          City
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="phone">
          Phone
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="linkedin">
          Linkedin
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="linkedin"
          name="linkedin"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="github">
          Github
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="github"
          name="github"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="additionalLink">
          Additional Link
        </label>
        <input
          className={styles.inputField}
          type="text"
          id="additionalLink"
          name="additionalLink"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label} htmlFor="summary">
          Summary
        </label>
        <textarea
          rows={5}
          cols={50}
          id="summary"
          name="summary"
          onChange={handleChange}
        />
      </div>
      <div>
        {showEducationFields && (
          <div>
            <input
              className={styles.inputField}
              placeholder="Year"
              value={tempEducation.year}
              onChange={(e) =>
                setTempEducation((prev: any) => ({
                  ...prev,
                  year: e.target.value,
                }))
              }
            />
            <input
              className={styles.inputField}
              placeholder="Institution"
              value={tempEducation.institution}
              onChange={(e) =>
                setTempEducation((prev: any) => ({
                  ...prev,
                  institution: e.target.value,
                }))
              }
            />
            <textarea
              placeholder="Description"
              className={styles.textareaField}
              value={tempEducation.description}
              onChange={(e) =>
                setTempEducation((prev: any) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            ></textarea>
            <button onClick={addEducation}>Add Education</button>
          </div>
        )}
        <button onClick={() => setShowEducationFields(true)}>
          Add Education?
        </button>
        // For jobs
        {showJobFields && (
          <div>
            <input
              className={styles.inputField}
              placeholder="Year"
              value={tempJob.year}
              onChange={(e) =>
                setTempJob((prev: any) => ({ ...prev, year: e.target.value }))
              }
            />
            <input
              className={styles.inputField}
              placeholder="Company"
              value={tempJob.company}
              onChange={(e) =>
                setTempJob((prev: any) => ({
                  ...prev,
                  company: e.target.value,
                }))
              }
            />
            <input
              className={styles.inputField}
              placeholder="Position"
              value={tempJob.position}
              onChange={(e) =>
                setTempJob((prev: any) => ({
                  ...prev,
                  position: e.target.value,
                }))
              }
            />
            <textarea
              placeholder="Description"
              value={tempJob.description}
              onChange={(e) =>
                setTempJob((prev: any) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            ></textarea>
            <button className={styles.button} onClick={addJob}>
              Add Job
            </button>
          </div>
        )}
        <button
          className={`${styles.button} ${styles.secondaryButton}`}
          onClick={() => setShowJobFields(true)}
        >
          Add Job?
        </button>
      </div>
    </div>
  );
}
