import { Box, Divider, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import Button from "@mui/material/Button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";

import { FcOk, FcCancel } from "react-icons/fc";

const Sidebar = ({ Information, sidebarLabel }) => {
  return (
    <>
      <Container
        sx={{
          background: "#fffafa",
          backgroundColor: "primary.white",
          border: "5px solid #0073cf",
          borderRadius: "10px",
          minHeight: "83vh",
          maxHeight: "auto",
        }}
      >
        <Stack spacing={5}>
          <div
            style={{
              marginTop: "0.5ch",
              backgroundColor: "#fff0f5",
              borderRadius: "10px",
            }}
            className="row-6 border-bottom"
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              direction="row"
            >
              <Button>
                <HomeRoundedIcon
                  sx={{
                    color: "black",
                    fontSize: 35,
                    marginLeft: "1.5ch",
                    paddingRight: "1px",
                  }}
                />
              </Button>
              <Button>
                <SaveRoundedIcon sx={{ color: "black", fontSize: 35 }} />
              </Button>
              <Button>
                <LocalPrintshopRoundedIcon
                  sx={{ color: "black", fontSize: 35 }}
                />
              </Button>
              <Button>
                <ChatBubbleOutlinedIcon
                  sx={{ color: "black", fontSize: 35, marginRight: "1.5ch" }}
                />
              </Button>
            </Stack>
          </div>

          <div className="row">
            <Divider orientation="horizontal">
              <h5>{sidebarLabel}</h5>
            </Divider>
          </div>
          <Box
            sx={{
              flexDirection: "column",
              overflow: "hidden",
              overflowY: "scroll",
              maxHeight: "65vh",
            }}
          >
            <div className="row justify-content-center">
              <Stack spacing={3}>
                {Information.map((info) => (
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
      </Container>
    </>
  );
};

export default Sidebar;
