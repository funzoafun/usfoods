import React from "react";
import { Box, Container, Grid, Stack } from "@mui/material";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar";

const ResultPage = () => {
  const mirInfo = {
    name: "MIR",
    info: [
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

  const barcodeAndOticInfo = [
    {
      name: "BARCODE",
      info: [
        { name: "Linear Barcode", value: true },
        { name: "Horizontal Orientation", value: false },
        { name: "Vertial Orientation", value: true },
        { name: "2D Data Matrix Barcode", value: true },
      ],
    },
    {
      name: "OTIC",
      info: [{ name: "Ear Phrasing" }, { name: "ISO Ear Image" }],
    },
  ];

  return (
    <Container sx={{ display: "flex" }} maxWidth="xl" className="mt-5 ">
      <Box sx={{ justifyContent: "center", alignContent: "center" }}>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4">
            <LeftSidebar
              showTab={true}
              sidebarLabel={mirInfo.name}
              Information={mirInfo.info}
            />
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 col-xs-4 review">
            <Stack spacing={2} sx={{ alignContent: "center" }}>
              <h3>Result Page</h3>
              <ImageContainer />
            </Stack>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4">
            <RightSidebar Information={barcodeAndOticInfo} />
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default ResultPage;
