import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./CustomLink.module.css";

const CustomLink: React.FC<CustomLinkProps> = ({
  type,
  link,
  displayText,
  complementary,
  zipCode,
  city,
  summaryText,
}) => {
  let Icon;
  let content;
  let shortenedLink;

  switch (type) {
    case "linkedin":
      Icon = LinkedInIcon;
      shortenedLink = link?.replace("https://", "");
      content = (
        <a href={link} target="_blank" rel="noreferrer">
          {shortenedLink}
        </a>
      );
      break;
    case "github":
      Icon = GithubIcon;
      shortenedLink = link?.replace("https://", "");
      content = (
        <a href={link} target="_blank" rel="noreferrer">
          {shortenedLink}
        </a>
      );
      break;
    case "address":
      Icon = PlaceIcon;
      content = (
        <div className={styles.addressContent}>
          <p>{complementary},</p>
          <p>
            {zipCode}, {city}
          </p>
        </div>
      );
      break;
    case "email":
      Icon = EmailIcon;
      content = <a href={`mailto:${link}`}>{link}</a>;
      break;
    case "phone":
      Icon = LocalPhoneIcon;
      content = link;
      break;
    case "summary":
      Icon = InfoIcon;
      content = summaryText;
      break;
    case "custom":
    default:
      Icon = LinkIcon;
      content = <a href={link}>{link}</a>;
      break;
  }
  const label = displayText || type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <span
      className={`${styles.linkWrapper} ${
        type === "address" ? styles.addressType : ""
      }`}
    >
      <div className={styles.iconLabelWrapper}>
        <Icon />
        {label}:
      </div>
      {content}
    </span>
  );
};

export default CustomLink;
