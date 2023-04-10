import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  checkboxClasses,
} from "@mui/material";
import * as React from "react";
import { Btech } from "./Btech";
import { EngineeringCollages } from "./EngineeringCollages";
import { Mtech } from "./Mtech";

export default function SideBar() {
  const sidebaritems = ["B.E./B.TECH", "M.E./M.Tech","Top Engineering Collages"];
  const [checkbuttonindex, setCheckButtonIndex] = React.useState(0);

  function check(event, val) {
    console.warn(val);
    setCheckButtonIndex(val);
  }
  const drawer = (
    <Box>
      <List>
        {sidebaritems.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={(event) => check(event, index)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid container >
        <Grid item md={3} lg={3}>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              display: "flex",
              alignContent: "center",
              marginTop: 30,
              width: 240,
              height: 300,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
        </Grid>
        <Grid item md={9} lg={9}>
              
        <Box sx={{marginTop: 10}} >
          {checkbuttonindex == 0 ? (
            <Btech/>
          ) : checkbuttonindex == 1 ? (
            <Mtech/>
          ) : (<EngineeringCollages/>)}
        </Box>
        </Grid>
       </Grid>
    </>
  );
}
