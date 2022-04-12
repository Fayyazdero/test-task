import styled, { css } from "styled-components";
import { Button as Btn } from "@mui/material";

export const Button = styled(Btn)`
  ${({ rounded }) => {
    console.log(rounded);
    return rounded
      ? css`
          border-radius: 40px;
          color: #fff;
          padding: 10px 25px;
          height: 35px;
          & p {
            font-size: 15px !important;
            font-weight: 600;
            text-transform: initial;
          }
        `
      : css`
          border-radius: 20px;
        `;
  }};
  background: #58af8e;
`;
