import { Box, Card, Collapse, Divider, Grid, Container } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";

import { FcOk, FcCancel } from "react-icons/fc";
import { ExpandMore } from "@mui/icons-material";
// import TickCheckbox from "../components/SidebarButton/TickButton";

const Sidebar = ({ Information }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Container
        sx={{
          background: "#fffafa",
          minHeight: "83vh",
          // maxHeight: "auto",
          backgroundColor: "primary.white",
          border: "5px solid #0073cf",
          borderRadius: "10px",
        }}
      >
        {Information.map((info) => (
          <Stack sx={{ marginBottom: "3ch" }} spacing={5}>
            <div className="row">
              <Divider orientation="horizontal">
                <h5>{info.name}</h5>
              </Divider>
            </div>
            <Box
              sx={{
                flexDirection: "column",
                overflow: "hidden",
                overflowY: "scroll",
              }}
            >
              <div className="row justify-content-center">
                <Stack spacing={3}>
                  {info.info.map((info) => (
                    <Stack direction="row" spacing={2}>
                      {info.value ? (
                        <Box
                          sx={{
                            borderLeftStyle: "solid",
                            borderColor: "#1565c0",
                            padding: "1ch",
                          }}
                        >
                          <FcOk fontSize={30} />
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            borderLeftStyle: "solid",
                            borderColor: "#1565c0",
                            padding: "1ch",
                          }}
                        >
                          <FcCancel fontSize={30} />
                        </Box>
                      )}
                      <Box
                        width="80%"
                        sx={{
                          border: "1px solid #ccc",
                          justifyContent: "center",
                          display: "flex",
                          textAlign: "center",
                          alignItems: "center",
                          borderRadius: "16px",
                        }}
                      >
                        <p>{info.name}</p>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </div>
            </Box>
          </Stack>
        ))}
      </Container>
    </>
  );
};

export default Sidebar;
