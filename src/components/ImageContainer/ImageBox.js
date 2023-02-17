import { Container, Stack } from "@mui/material";
import React from "react";

const ImageBox = ({ image, file, fileName }) => {
  return (
    <Container
      sx={{
        minHeight: "50vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={10}>
        <Stack
          alignContent="flex-start"
          justifyContent="start"
          alignItems="start"
        >
          <h6>{file}</h6>
          <h6>Filename: {fileName}</h6>
        </Stack>

        <Stack spacing={10} justifyContent="center" alignItems="center">
          <img
            style={{
              maxWidth: "60%",
              maxHeight: "50%",
              width: "auto",
              height: "auto",
              padding: 0,
              margin: 0,
              border: "3px dotted grey",
              borderRadius: "10px",
            }}
            src={image}
            alt=""
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default ImageBox;
