import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import originalImage from "../../assets/img/original.avif";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import ImageBox from "../ImageContainer/ImageBox";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ResultTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ border: "1", borderColor: "divider" }}>
        <Tabs
          sx={{ borderBottom: "1px solid black", borderTop: "1px solid black" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Original Image" {...a11yProps(0)} />
          <Tab label="Image 1" {...a11yProps(1)} />
          <Tab label="Image 2" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box
        sx={{
          overflowX: "scroll",
          overflowY: "scroll",
          height: "76vh",
        }}
      >
        <TabPanel value={value} index={0}>
          <ImageBox
            image={originalImage}
            file="Original File"
            fileName={originalImage}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImageBox image={image1} file="image 1" fileName={image1} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ImageBox image={image2} file="image 2" fileName={image2} />
        </TabPanel>
      </Box>
    </Box>
  );
}
