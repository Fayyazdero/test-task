import { css } from "styled-components";
import styled from "styled-components";
import { Typography as Txt } from "@mui/material";

export const Typography = styled(Txt)`
  ${({ heading }) => {
    return heading
      ? css`
          font-size: 30px;
          color: #fff;
          font-weight: 700;
        `
      : css`
          color: #d5e0e0;
          font-size: 20px;
        `;
  }}
`;
