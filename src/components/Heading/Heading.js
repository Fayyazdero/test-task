import { Typography } from "./styles";

export const CustomHeading = ({ text, heading = false }) => {
  return <Typography heading={heading}>{text}</Typography>;
};
