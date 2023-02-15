import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "antd/dist/reset.css";
import FileUploadComponent from "./FileUpload/FileUploadComponent";
import { Container, FormControl, Grid } from "@mui/material";
import RadioButtonsGroup from "./Buttons/RadioButtonsGroup";
import BasicModal from "./Modal/Modal";

import { Button } from "@mui/material";

function UploadInfo() {
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log("event: ", event.target.value);
    navigate(`/result`);
  };

  return (
    <BasicModal>
      <Container className="mb-3 mt-5" maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ borderRadius: "10px", height: "90vh", background: "#ffffff" }}
        >
          <Grid container spacing={2}>
            <Grid item lg={12} md={12} sm={12}>
              <h2 style={{ textAlign: "center" }}>
                Prescribing Information Comparision
              </h2>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <FileUploadComponent />
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div style={{ textAlign: "center" }}>
                <div className="col">
                  <div className="row-12 m-3">
                    <FormControl sx={{ width: "70ch" }}>
                      <TextField label="Proprietary Name" id="fullWidth" />
                    </FormControl>
                  </div>
                  <div className="row-12 m-3">
                    <FormControl sx={{ width: "70ch" }}>
                      <TextField
                        label="Established/Proper Name"
                        id="fullWidth"
                      />
                    </FormControl>
                  </div>
                  <div className="row-2 m-3">
                    <FormControl sx={{ width: "70ch" }}>
                      <TextField
                        label="Name of Manufacturer, Packer, Distributor"
                        id="fullWidth"
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12}>
              <div style={{ textAlign: "center" }}>
                <Button onClick={handleChange} variant="contained">
                  RESULT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </BasicModal>
  );
}
export default UploadInfo;
