import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardHeader, Divider, Grid } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "../main.css";
import { CollageInformation } from "./CollageInformantion";
import { SideBar } from "../Header/Sidebar";

export function EngineeringCollages() {
  const [collages, setCollages] = React.useState([]);
  const[selectedcollageid, setSelectedCollageId]= React.useState(null)


  function GetCollageDetails(event){
    const id = event.target.id;
    setSelectedCollageId(id)
  }

  React.useEffect(() => {
    async function getCollages() {
      await axios
        .get("http://127.0.0.1:80/getcollage")
        .then((res) => {
          console.log(res);
          setCollages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getCollages();
  }, []);

  return (
    <>
      <b><h2 style={{marginLeft : 300}}>Top Engineering Colleges</h2></b>
      {collages.map((e, index) => (
      
        <Box sx={{ display: "flex", margin: 5 }}>
          <Card sx={{maxWidth: 500, minWidth: 500,marginLeft: 30}}>
            <CardHeader
              sx={{ backgroundColor: "#20dfdf" }}
              avatar={<SchoolOutlinedIcon fontSize="large" />}
              title={
                <Typography sx={{ color: "#df5020", fontWeight: "bold" }}>
                  {e.collagename}
                </Typography>
              }
              subheader={
                <Typography sx={{ fontSize: 10 }}>{e.state}</Typography>
              }
            />
            <CardContent>
              <Typography><b>Rating: </b>{e.rating}</Typography>
              <Typography><b>Average Fees: </b> {e.averagefees}</Typography>
            </CardContent>
          <CardActions sx={{alignItems: 'center',justifyContent: 'center'}}>
            <Button id={e._id} variant="contained" onClick={GetCollageDetails} >View Details</Button>
          </CardActions>
          </Card>
        </Box>

        // </div>
      ))}
      <Box>
        {selectedcollageid && <CollageInformation id={selectedcollageid}/>}
      </Box>
    </>
  );
}
