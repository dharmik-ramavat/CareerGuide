import "./App.css";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes, 
  Route ,
  Redirect,
} from "react-router-dom";
import StackOverFlow from './components/StackOverFlow';
import Question from "./components/Add-Question/Question";
import ViewQuestion from "./components/ViewQuestion"
import Auth from './components/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from "./features/userSlice";
import { Component, useEffect } from "react";
import {auth} from './firebase.js'

function App() {
  // const user = useSelector(selectUser)
  // const dispatch = useDispatch

  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if(authUser){
  //       dispatch(login({
  //         uid: authUser.uid,
  //         photo: authUser.photoURL,
  //         displayName: authUser.displayName,
  //         email: authUser.email
  //       }))
  //     }else{
  //       dispatch(logout())
  //     }
  //   })
  // }, [dispatch])


  

  return (
    <div className="App"> 
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element = {<StackOverFlow/>}/>
          <Route exact path="/auth" element = {<Auth/>}/>
          <Route exact path="add-question" element = {<Question/>}/>
          <Route exact path="question" element = {<ViewQuestion/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
