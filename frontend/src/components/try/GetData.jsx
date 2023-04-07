import * as React from 'react';

export default function GetData(props){
    const {dataobj} = props;
    // console.warn("GetData : ",dataobj)
    return(
        <>
            <h2>Get Data File</h2>
            <h3>{dataobj.uname}</h3>
            <h3>{dataobj.email}</h3>
        </>
    )
}