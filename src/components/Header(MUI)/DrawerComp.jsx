import {
  Drawer,
  IconButton,
  Divider,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/system";
import logo from "../../assets/career_path.png";

function DrawerComp() {
  const [open, setOpen] = React.useState(false);
  const colortheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });
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

  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <img src={logo} height={100} alt="Career Path" />

        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <ThemeProvider theme={colortheme}>
          <MenuIcon color="primary" />
        </ThemeProvider>
      </IconButton>
    </>
  );
}
export default DrawerComp;
