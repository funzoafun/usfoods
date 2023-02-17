import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import SideMenubar from "../components/Sidebar/SideMenubar";

const ResultPage = () => {
  const labelInfo = {
    Image1: [
      {
        name: "Barcode",
        value: true,
        extended: [
          { name: "Linear Barcode", value: true },
          { name: "Horizontal Orientation", value: false },
          { name: "Vertial Orientation", value: true },
          { name: "2D Data Matrix Barcode", value: true },
        ],
      },
      {
        name: "Otic Label",
        value: true,
        extended: [{ name: "Ear Phrasing" }, { name: "ISO Ear Image" }],
      },
      { name: "Controlled Substance Schedule", value: true },
      { name: "Dosage Form", value: true },
      { name: "Established Name' ProperName", value: true },
      { name: "Expiration Date", value: true },
      { name: "Exiration Date Format", value: true },
      { name: "Identifying Lot or Control Number", value: true },
      { name: "Name of Manufacturer, Packer, or Distributor", value: true },
      { name: "NDC", value: true },
      { name: "Net Quantity", value: false },
      { name: "Package Type Term", value: false },
      { name: "Product Strength", value: true },
      { name: "Proprietary Name", value: false },
      { name: "Route of Administration", value: false },
      { name: "RX Only Statement", value: true },
    ],
  };

  return (
    <Container
      disableGutters
      sx={{
        justifyContent: "center",
        border: "1px solid black",
        marginTop: "5ch",
      }}
    >
      <Grid container>
        <Grid sx={{ borderRight: "1px solid black" }} item lg={3}>
          <Sidebar
            showTab={true}
            sidebarLabel="LABEL REVIEW"
            Information={labelInfo}
          />
        </Grid>
        <Grid item lg={9}>
          <Stack spacing={2} sx={{ alignContent: "center" }}>
            <h3>Result Page</h3>
            <ImageContainer />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultPage;
