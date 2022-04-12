import { Typography } from "@mui/material";
import { Button } from "./styles";

export const CustomBtn = ({ text, rounded = false }) => {
  return (
    <Button rounded={rounded}>
      <Typography>{text}</Typography>
    </Button>
  );
};
