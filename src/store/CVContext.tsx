// store/CVContext.tsx
import React, { createContext, useContext, useState } from "react";

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

interface CVInfo {
  firstName: string;
  lastName: string;

  experience: string[];
  phone: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  linkedin: string;
  github: string;
  summary: string;
  jobTitle: string;
  additionalLink: string;
  education: Education[];
  jobs: Job[];
}

const defaultCV: CVInfo = {
  firstName: "",
  lastName: "",

  experience: [],
  phone: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  linkedin: "",
  github: "",
  summary: "",
  jobTitle: "",
  additionalLink: "",
  education: [],
  jobs: [],

  // ... other default values ...
};

const CVContext = createContext<{
  state: CVInfo;
  setState: React.Dispatch<React.SetStateAction<CVInfo>>;
}>({
  state: defaultCV,
  setState: () => {},
});

export const CVProvider: React.FC<any> = ({ children }) => {
  const [state, setState] = useState<CVInfo>(defaultCV);

  return (
    <CVContext.Provider value={{ state, setState }}>
      {children}
    </CVContext.Provider>
  );
};

export const useCV = () => useContext(CVContext);
