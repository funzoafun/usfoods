import { Container } from "@mui/material";
import React from "react";

const ImageBox = ({ image }) => {
  return (
    <Container
      sx={{
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          maxWidth: "90%",
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
    </Container>
  );
};

export default ImageBox;
