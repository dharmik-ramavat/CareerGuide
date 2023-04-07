import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&family=Open+Sans&display=swap"
/>;
import {
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  InputBase,
  createTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import logo from "../../assets/career_path.png";
import { ThemeProvider } from "@emotion/react";
import DrawerComp from "./DrawerComp";
import MainContent from "../MainSection/MainContent";
import { EngineeringCollages } from "../Engineering/EngineeringCollages";
import { SideBar } from "./Sidebar";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Contact",
  "After 10th",
  "After 12th",
  "MBA",
  "Engineering",
  "Design",
  "Bsc",
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#00897B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function DrawerAppBar(props) {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);
  function handlechange(event, val) {
    console.warn(val);
    setValue(val);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar component="nav" color="primary">
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComp />

                <img src={logo} height={100} alt="Career Path" />
              </>
            ) : (
              <>
                <img src={logo} height={100} alt="Career Path" />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    justifyItems: "center",
                    margin: "auto",
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    margin="auto"
                  >
                    <Grid
                      xs={10}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "auto",
                      }}
                    >
                      <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                          width: 400,
                        }}
                      >
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search Collages"
                          inputProps={{ "aria-label": "search collages" }}
                        />
                        <Divider
                          sx={{ height: 28, m: 0.5 }}
                          orientation="vertical"
                        />

                        <IconButton
                          type="button"
                          sx={{ p: "10px" }}
                          aria-label="search"
                        >
                          <SearchIcon />
                        </IconButton>
                      </Paper>
                    </Grid>
                    <Grid xs={12} rowSpacing={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* <Tabs
                          value={0}
                          onChange={handlechange}
                          indicatorColor="#fff"
                          sx={{ fontWeight: "bold" }}
                          textColor="#000 "
                        >
                          {/* {navItems.map((item) => (
                            <Tab label={item} />
                            
                          ))} */}
                        {/* <Tab label="Home" />
                          <Tab label="About" />
                          <Tab label="Contact" />
                          <Tab label="After 10th" />
                          <Tab label="Diploma" />
                          <Tab label="After 12th" />
                          <Tab label="Engineering" />
                          <Tab label="B.COM" />
                          <Tab label="BSC" />
                          <Tab label="MBA" />
                        </Tabs>  */}
                        <Tabs
                          value={value} // use the value state here
                          sx={{ fontWeight: "bold" }}
                          textColor="#000"
                          onChange={handlechange} // add onChange event handler
                        >
                          {navItems.map((item, index) => (
                            <Tab key={index} label={item} value={index} /> // add value prop
                          ))}
                        </Tabs>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Button
                  color="secondary"
                  sx={{ fontFamily: "Open Sans" }}
                  size="large"
                  variant="contained"
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        {value == 0 ? (
          <MainContent />
        ) : value == 1 ? (
          <h1>About</h1>
        ) : value == 2 ? (
          <h1>Contact Us</h1>
        ) : value == 3 ? (
          <h1>After 10th</h1>
        ) : value == 4 ? (
          <h1>Diploma</h1>
        ) : value == 5 ? (
          <h1>After 12th</h1>
        ) : value == 6 ? (
          <SideBar/>
        ) : value == 7 ? (
          <h1>Diploma</h1>
        ) : value == 8 ? (
          <h1>BSC</h1>
        ) : (
          <MainContent/>
        )}
        {/* <MainContent />
        <EngineeringCollages /> */}
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
