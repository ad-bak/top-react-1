interface CustomLinkProps {
  type:
    | "linkedin"
    | "github"
    | "custom"
    | "address"
    | "email"
    | "phone"
    | "summary";
  link?: string;
  displayText?: string;
  complementary?: string;
  zipCode?: string;
  city?: string;
  summaryText?: string;
}
