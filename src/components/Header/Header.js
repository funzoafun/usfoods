import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import "./Header.css";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar sx={{ backgroundColor: "#001871" }} position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0.5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Stack
            spacing={-3.5}
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "grid",
                flexDirection: "column",
                justifyContent: "start",
              },
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{ color: "white", fontSize: "25", display: "flex" }}
            >
              <h4>U.S. FOOD & DRUG</h4>
            </Button>
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{ color: "white", display: "flex", justifyContent: "start" }}
            >
              ADMINISTRATION
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <button
                onClick={() => {
                  navigate("/health-status");
                }}
                type="button"
                style={{ color: "#daaa00" }}
                className="btn btn-outline-secondary"
              >
                Health Status
              </button>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
