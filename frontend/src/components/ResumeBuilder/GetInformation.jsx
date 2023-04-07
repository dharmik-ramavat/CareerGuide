import { Box, Tab, Tabs } from '@mui/material'
import * as React from 'react'

export default function GetInfromation(){
    const [value, setValue] = React.useState(0);
    const sidebarsection =[
        "Personal Detail",
        "Online Profile",
        "Education Details",
        "Projects",
        "References"
    ];
    return(
        <Box sx={{display : 'flex', flexDirection : 'column',gap: 5}}>
        
{/*----------------------------------------------------------------------------------------------------------
                                        sidebar section
 ------------------------------------------------------------------------------------------------------------- */}
        <Box>
            <Tabs value={value} onChange={(event,newValue) => setValue(newValue)} >
                {sidebarsection.map((items)=> {
                    <Tab label={items} key={items} />
                })}
            </Tabs>
        </Box>
        </Box>
    )
}