import "./index.css";
import "draft-js/dist/Draft.css";
import { useState } from "react";
import { Box, Typography, Paper, Grid, Container, Button } from "@mui/material";
import styled from "@emotion/styled";
import { CustomBtn } from "./components/Button/Button";
import { CustomHeading } from "./components/Heading/Heading";
import { Editor, EditorState } from "draft-js";
import { style } from "@mui/system";

export const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
};
const Header = styled(Box)`
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

const BgGreen = styled(Box)`
  position: absolute;
  background: #1a9364;
  z-index: -1;
  height: 250px;
  width: 100%;
`;

function App() {
  return (
    <Box position="relative">
      <BgGreen></BgGreen>
      <Container>
        <Header display="flex" justifyContent="space-between" paddingTop="10px">
          <img
            src="https://image.shutterstock.com/shutterstock/photos/1892993923/display_1500/stock-vector-minimalist-and-simple-modern-ocean-and-sun-icon-logo-template-negative-space-ocean-logo-letter-o-1892993923.jpg"
            alt="hell"
          />
          <CustomBtn
            text="Install on Visual Studio Code"
            rounded={true}
          ></CustomBtn>
        </Header>
        <Box marginTop="50px">
          <CustomHeading
            heading={true}
            text="Documentation Writer
          "
          />
          <CustomHeading text="Add some code to get started" />
        </Box>
        <Box marginTop="30px">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Editor editorState={editorState} onChange={setEditorState} />;
            </Grid>
            <Grid item xs={4}>
              Hello
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
