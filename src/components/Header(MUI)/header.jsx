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
import {
  Grid,
  Paper,
  Tab,
  Tabs,
  TextField,
  InputBase,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/career_path.png";
import { ThemeProvider } from "@emotion/react";
import DrawerComp from "./DrawerComp";
import MainContent from "../MainSection/MainContent";

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
  },
});

function DrawerAppBar(props) {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
                          placeholder="Search Google Maps"
                          inputProps={{ "aria-label": "search google maps" }}
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
                        <Tabs indicatorColor="#fff" textColor="#fff ">
                          {navItems.map((item) => (
                            <Tab label={item} />
                          ))}
                        </Tabs>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <MainContent/>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
