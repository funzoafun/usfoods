import {
  Box,
  Card,
  Collapse,
  Divider,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
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

const Sidebar = ({ Information, sidebarLabel }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Grid sx={{ display: "flex" }} container direction="row" lg="12">
        <Grid
          justifyContent="center"
          sx={{ marginBottom: "2ch", display: "flex", background: "grey" }}
          lg="12"
        >
          <ButtonGroup size="large" aria-label="large button group">
            <IconButton aria-label="delete" size="large">
              <HomeRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <SaveRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <LocalPrintshopRoundedIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large">
              <ChatBubbleOutlinedIcon fontSize="inherit" />
            </IconButton>
          </ButtonGroup>
        </Grid>
        <Grid>
          <h4>{sidebarLabel}</h4>
        </Grid>
        <Grid item lg="12">
          <Box
            sx={{
              marginTop: "2ch",
              flexDirection: "column",
              height: "inherit",
              maxHeight: "69vh",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <div className="row justify-content-center">
              <Stack spacing={3}>
                {Information.Image1.map((info) => (
                  <Stack direction="row" spacing={2}>
                    {info.value ? (
                      <Box
                        sx={{
                          // borderLeftStyle: "solid",
                          // borderColor: "#1565c0",
                          // padding: "1ch",
                          background: "grey",
                          maxHeight: "4ch",
                        }}
                      >
                        <FcOk fontSize={30} />
                      </Box>
                    ) : (
                      <Box
                        sx={
                          {
                            // borderLeftStyle: "solid",
                            // borderColor: "#1565c0",
                            // padding: "1ch",
                          }
                        }
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
                      {info.extended ? (
                        <div sx={{ maxWidth: 345 }}>
                          <Stack direction="row" spacing={2}>
                            <>{info.name}</>
                            <ExpandMore
                              expand={expanded}
                              onClick={handleExpandClick}
                              aria-expanded={expanded}
                              aria-label="show more"
                            >
                              <ExpandMoreIcon />
                            </ExpandMore>
                          </Stack>
                          <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {info.extended.map((extendedInfo) => (
                              <Stack direction="row" spacing={2}>
                                {extendedInfo.value ? (
                                  <Box
                                    sx={{
                                      borderLeftStyle: "solid",
                                      borderColor: "#1565c0",
                                      padding: "1px",
                                    }}
                                  >
                                    <FcOk fontSize={20} />
                                  </Box>
                                ) : (
                                  <Box
                                    sx={{
                                      borderLeftStyle: "solid",
                                      borderColor: "#1565c0",
                                      padding: "1px",
                                    }}
                                  >
                                    <FcCancel fontSize={20} />
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
                                  <p>{extendedInfo.name}</p>
                                </Box>
                              </Stack>
                            ))}
                          </Collapse>
                        </div>
                      ) : (
                        <p>{info.name}</p>
                      )}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Sidebar;
