import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

function index() {
    const user = useSelector(selectUser)
    console.log(user)
  return (
    <div>
      hello user..  {user.email}
      <br/>
      <button onClick={()=>{
        auth.signOut()
      }}>Logout</button>
      
    </div>
  )
}

export default index
