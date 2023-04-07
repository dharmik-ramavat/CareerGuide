import * as React from 'react'
import GetData from './GetData';

export default function Givedata(){

    const[data, setData] = React.useState({
        uname : '',
        email : ''
    })

    function handleclick(e){
        const{name, value} = e.target;
        setData((data)=>({
            ...data,
            [name]:value
        }))
        // console.log(data)
    }
    
    return(
        <form >
            <input type="text" value={data.uname} onChange={handleclick} name='uname' placeholder='name' />
            <input type="text" value={data.email} onChange={handleclick} name='email' placeholder='Email' />
            <button type='submit' onClick={handleclick}>Submit</button>
            {data != null ? <GetData dataobj= {data}/> : console.warn("No Data Found")}
        </form>
    )
}