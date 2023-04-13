import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import { Box, CardHeader, Divider, Grid } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "../main.css";
import { CollageInformation } from "./CollageInformantion";

export function EngineeringCollages() {
  const [collages, setCollages] = React.useState([]);
  const[selectedcollageid, setSelectedCollageId]= React.useState(null)
  const[loading,setLoading] = React.useState(false)

  function GetCollageDetails(event){
    const id = event.target.id;
    setSelectedCollageId(id)
  }

  React.useEffect(() => {
    setLoading(true)
    async function getCollages() {
      await axios
        .get("api/getcolleges")
        .then((res) => {
          console.log(res);
          setCollages(res.data);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
    }
    getCollages();

  }, []);

  return (
    <>
      {loading ? (
        <div style={{paddingTop:"80px"}}>
        <center><CircularProgress color="success" /></center></div>
      ) : (
        <div  style={{paddingTop:"80px"}}>
          <b>
            <hr />
            <h2>Top Engineering Colleges</h2>
            <hr />
          </b>
          {collages !== undefined ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {collages.map((e, index) => (
            <div key={index} style={{ marginRight: '20px', marginLeft: '20px', marginBottom: '20px' }}>
              <Card sx={{ maxWidth: 400, minWidth: 400 }}>
                <CardHeader
                  sx={{ backgroundColor: '#E5DCDC' }}
                  avatar={<SchoolOutlinedIcon fontSize="large" />}
                  title={
                    <Typography sx={{ color: '#000000', fontWeight: 'bold' }}>
                      {e.collagename}
                    </Typography>
                  }
                  subheader={
                    <Typography sx={{ fontSize: 10 }}>{e.state}</Typography>
                  }
                />
                <CardContent>
                  <Typography>
                    <b>Rating: </b>
                    {e.rating}
                  </Typography>
                  <Typography>
                    <b>Average Fees: </b> {e.averagefees}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
          ) : (
            <CircularProgress color="success" />
          )}
          <Box>
            {selectedcollageid && <CollageInformation id={selectedcollageid} />}
          </Box>
        </div>
      )}
    </>
  );  
}
