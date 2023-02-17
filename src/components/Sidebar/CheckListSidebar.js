import React from "react";
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
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";

import { FcOk, FcCancel } from "react-icons/fc";
import { ExpandMore } from "@mui/icons-material";
import CustomizedRadios from "../Buttons/RadioButtonsGroup";

const CheckListSidebar = ({
  Information,
  handleExpandClick,
  handleSetRadioValue,
  expanded,
  radioValue,
  sidebarLabel,
}) => {
  return (
    <>
      <Grid
        sx={{ marginBottom: "1ch", display: "flex" }}
        justifyContent="center"
      >
        <h4>{sidebarLabel}</h4>
      </Grid>
      <Stack direction="row">
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          item
          lg={2}
        >
          <CustomizedRadios
            setRadioValue={handleSetRadioValue}
            value={radioValue}
          />
        </Grid>
        <Grid item lg={11}>
          <Box
            sx={{
              marginTop: "2ch",
              height: "inherit",
              maxHeight: "73vh",
              overflowX: "hidden",
              overflowY: "scroll",
            }}
          >
            <div>
              <Stack spacing={3}>
                {Information.Image1.map((info) => (
                  <Stack direction="row" spacing={2}>
                    {info.value ? (
                      <Box
                        sx={{
                          background: "grey",
                          maxHeight: "4ch",
                        }}
                      >
                        <FcOk fontSize={30} />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          background: "grey",
                          maxHeight: "4ch",
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
                        background: "#d3d3d3",
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
                                      background: "grey",
                                      maxHeight: "3ch",
                                    }}
                                  >
                                    <FcOk fontSize={20} />
                                  </Box>
                                ) : (
                                  <Box
                                    sx={{
                                      background: "grey",
                                      maxHeight: "3ch",
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
                                    background: "grey",
                                    textAlign: "center",
                                    alignItems: "center",
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
      </Stack>
    </>
  );
};

export default CheckListSidebar;
