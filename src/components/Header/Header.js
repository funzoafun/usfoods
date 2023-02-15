import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import "./Header.css";

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
            <Box sx={{ flexGrow: 0 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
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
