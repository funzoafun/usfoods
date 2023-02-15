import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { IconButton, Stack } from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWifi,
} from "react-icons/fa";
import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body1" color="white">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      className="footer"
      sx={{
        marginTop: "5ch",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="footer"
        style={{ bottom: "0" }}
        sx={{
          maxWidth: "100vw",
          py: 2,
          px: 2,
          mt: "auto",
          bottom: "0",
          backgroundColor: "#2d2926",
        }}
      >
        <Container className="site-footer" maxWidth="xl">
          <Stack direction="row" sx={{ display: "flex" }}>
            <button
              style={{ flexGrow: 0, margin: "3ch" }}
              className="btn btn-outline-primary"
            >
              Contact FDA
            </button>
            <Box sx={{ flexGrow: 2, margin: "3ch" }}>
              <IconButton>
                <FaFacebookF color="white" />
              </IconButton>
              <IconButton>
                <FaTwitter color="white" />
              </IconButton>
              <IconButton>
                <FaInstagram color="white" />
              </IconButton>
              <IconButton>
                <FaYoutube color="white" />
              </IconButton>
              <IconButton>
                <FaWifi color="white" />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1, margin: "3ch" }}>
              <Copyright />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
