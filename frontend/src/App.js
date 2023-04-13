import React, { useEffect } from "react";

import Auth from "./component/Q&A/Auth/Index";
import Questions from "./component/Q&A/Add-Question/Question";

import QA from "./component/Q&A/Main/index";
import ViewQuestion from "./component/Q&A/ViewQuestion/index";

import { selectUser, login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

import MainNavbar from './component/Main/Header/MainNavbar'
import MainContent from './component/Main/MainSection/MainContent'
import SideBar from './component/Main/Engineering/Sidebar'
import After10th from './component/Main/After10th/Index'
import After12th from './component/Main/After12th/Index'
import Medical from './component/Main/Medical/Index'
import Mba from './component/Main/MBA/Index'
import Editor from './component/Resume/Editor'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );

  return (
    <div>
      <Router>
       <MainNavbar/>
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={MainContent} />
          <Route exact path="/engineering" component={SideBar} />
          <Route exact path="/after10th" component={After10th} />
          <Route exact path="/after12th" component={After12th} />
          <Route exact path="/mba" component={Mba} />
          <Route exact path="/medical" component={Medical} />
          <PrivateRoute exact path="/q&a" component={QA} />
          <PrivateRoute exact path="/add-question" component={Questions} />
          <PrivateRoute exact path="/question" component={ViewQuestion} />
          <Route exact path="/resumeBuild" component={Editor} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
