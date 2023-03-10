import { Grid, IconButton } from "@mui/material";
import { AiFillHome, AiFillPrinter, AiFillSave } from "react-icons/ai";
import { BsFillChatLeftFill } from "react-icons/bs";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import CustomizedRadios from "../Buttons/RadioButtonsGroup";
import CheckListSidebar from "./CheckListSidebar";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ Information, sidebarLabel }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("Checklist");

  const handleSetRadioValue = (value) => {
    setRadioValue(value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (radioValue == "Health Status") {
    navigate("/health-status");
  }
  if (radioValue == "Help") {
    navigate("/help");
  }
  const iconSx = { display: "flex", flexDirection: "column" };
  return (
    <>
      <Stack
        sx={{ display: "flex", justifyContent: "center" }}
        container
        direction="column"
        lg="12"
      >
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignContent="center"
          alignItems="center"
          sx={{
            marginBottom: "2ch",
            background: "#d3d3d3",
          }}
          lg="12"
        >
          <IconButton sx={iconSx}>
            <AiFillHome size="35" color="black" />
            <p style={{ fontSize: "15px" }}>Home</p>
          </IconButton>
          <IconButton sx={iconSx} aria-label="delete">
            <AiFillSave size="35" color="black" />
            <p style={{ fontSize: "15px" }}>Save</p>
          </IconButton>
          <IconButton sx={iconSx} aria-label="delete">
            <AiFillPrinter size="35" color="black" />
            <p style={{ fontSize: "15px" }}>Print</p>
          </IconButton>
          <IconButton sx={iconSx} aria-label="delete">
            <BsFillChatLeftFill size="35" color="black" />
            <p style={{ fontSize: "15px" }}>Comments</p>
          </IconButton>
        </Stack>

        {radioValue == "Checklist" && (
          <CheckListSidebar
            Information={Information}
            expanded={expanded}
            handleSetRadioValue={handleSetRadioValue}
            handleExpandClick={handleExpandClick}
            radioValue={radioValue}
            sidebarLabel={sidebarLabel}
          />
        )}
        {radioValue == "show-menu" && (
          <Stack sx={{ height: "74vh" }} direction="row">
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              item
              lg={12}
            >
              <CustomizedRadios
                setRadioValue={handleSetRadioValue}
                value={radioValue}
              />
            </Grid>
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Sidebar;
