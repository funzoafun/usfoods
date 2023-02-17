import {
  Box,
  Card,
  Collapse,
  Divider,
  Grid,
  Container,
  IconButton,
} from "@mui/material";

import { AiFillHome, AiFillPrinter, AiFillSave } from "react-icons/ai";
import { BsFillChatLeftFill } from "react-icons/bs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";

import { FcOk, FcCancel } from "react-icons/fc";
import { ExpandMore } from "@mui/icons-material";
import CustomizedRadios from "../Buttons/RadioButtonsGroup";
import CheckListSidebar from "./CheckListSidebar";
import { useNavigate } from "react-router-dom";
// import TickCheckbox from "../components/SidebarButton/TickButton";

const Sidebar = ({ Information, sidebarLabel }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("Checklist");

  const handleSetRadioValue = (value) => {
    setRadioValue(value);
  };
  useEffect(() => {
    console.log(radioValue);
  }, [radioValue]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (radioValue == "Health Status") {
    navigate("/health-status");
  }
  if (radioValue == "Help") {
    navigate("/help");
  }
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
          <IconButton>
            <AiFillHome size="35" color="black" />
          </IconButton>
          <IconButton aria-label="delete">
            <AiFillSave size="35" color="black" />
          </IconButton>
          <IconButton aria-label="delete">
            <AiFillPrinter size="35" color="black" />
          </IconButton>
          <IconButton aria-label="delete">
            <BsFillChatLeftFill size="35" color="black" />
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
