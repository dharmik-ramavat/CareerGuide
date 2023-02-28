import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import "./index.css";
import GoogleIcon from "./login_button.png";

function Index() {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")


  const handleSignInGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
        console.log(res)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    if(email === "" || password === "" || username === ""){
        setError("Required field is missing!")
        setLoading(false)
    }else{
        createUserWithEmailAndPassword(auth, email ,password).then((res) => {
          setLoading(false)
          console.log(res)
        }).catch((error) => {
          console.log(error)
          setError(error.message)
          setLoading(false)
        })
    }
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    if(email === "" || password === ""){
      setError("Required field is missing")
      setLoading(false)
    }else{
      signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log(res)
        setLoading(false)
      }).catch((error) => {
        console.log(error.code)
        setError(error.message)
        setLoading(false)
      })
    }
  }

  return (
    <div className="auth">
      <div className="auth-container">
        {/* <div className="sign-options">
          <div className="single-option">
            <img src={GoogleIcon} alt="google" />
          </div>
        </div> */}
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                <div className="input-field">
                 <p style={{fontWeight:"500",marginLeft:"auto",marginRight:"auto"}}>Login to get started!</p>
                  <div className="sign-options">
                    <div onClick={handleSignInGoogle} className="single-option">
                      <img src={GoogleIcon} alt="google" />
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <p>Username</p>
                  <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </div>
                <div className="input-field">
                  <p>City</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>State</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Mobile no.</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <button disabled={loading} style={{marginTop:"10px"}} onClick={handleRegister}>{loading? "Registering....":"Sign Up"}</button>
              </>
            ) : (
              <>
                <div className="input-field">
                 <p style={{fontWeight:"500",marginLeft:"auto",marginRight:"auto"}}>Login to get started!</p>
                  <div className="sign-options">
                    <div onClick={handleSignInGoogle} className="single-option">
                      <img src={GoogleIcon} alt="google" />
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <button disabled={loading} style={{marginTop:"10px"}} onClick={handleSignIn}>{loading? "Signing in....":"Sign In"}</button>
              </>
            )}
            <p onClick={() => setRegister(!register)} style={{marginTop:"10px" ,textAlign:"center",color:"#0095ff",cursor:"pointer"}}>{register ? "Login" : "Register"}?</p>
          </div>
          <div>{
            error !== "" && (<p style={{color:"red",fontSize:"14px"}}>{error}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
