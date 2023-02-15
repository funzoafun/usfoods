import React from "react";
import "./styles.css";
import styled from "styled-components";
import { FiCamera } from "react-icons/fi";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { Button } from "@material-ui/core";

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    object-fit: cover;
  }
  .circle {
    width: 186px;
    height: 186px;
  }
  label {
    right: 23em !important;
    position: absolute;
    width: 48px;
    height: 48px;
    background: #312e38;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #f4ede8;
    }
    &:hover {
      background: blue;
    }
  }
`;

export default function FileUploadComponent() {
  const [firstImage, setFirstImage] = useState(
    "https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg"
  );
  const [secondImage, setSecondImage] = useState(
    "https://imgv3.fotor.com/images/homepage-feature-card/Upload-an-image.jpg"
  );

  const handleFile1 = (files) => {
    console.log(files);
    setFirstImage(files.base64);
  };
  const handleFile2 = (files) => {
    console.log(files);
    setSecondImage(files.base64);
  };

  return (
    <div className="App">
      <>
        <div className="row">
          <div className="col-6">
            <AvatarInput>
              <img src={firstImage} alt="Avatar Placeholder" />
            </AvatarInput>
            <ReactFileReader
              fileTypes={[".png", ".jpg"]}
              base64={true}
              handleFiles={handleFile1}
            >
              <FiCamera style={{ width: 30, height: 30 }} as={Button} />
            </ReactFileReader>
          </div>
          <div className="col-6">
            <AvatarInput>
              <img src={secondImage} alt="Avatar Placeholder" />
            </AvatarInput>
            <ReactFileReader
              fileTypes={[".png", ".jpg"]}
              base64={true}
              handleFiles={handleFile2}
            >
              <FiCamera style={{ width: 30, height: 30 }} as={Button} />
            </ReactFileReader>
          </div>
        </div>
      </>
    </div>
  );
}
