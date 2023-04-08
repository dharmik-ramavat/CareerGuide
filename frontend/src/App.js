import React, { useEffect } from "react";

import Auth from "./component/Auth/Index";
import Questions from "./component/Add-Question/Question";
import Header from "./component/Header/Header";
import StackOverFlow from "./component/StackOverFlow/index";
import ViewQuestion from "./component/ViewQuestion/index";

import userSlice from "./features/userSlice";
import { selectUser, login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

import MainNavbar from './component/Main/Header/MainNavbar'
import MainContent from './component/Main/MainSection/MainContent'
import { EngineeringCollages } from "./component/Main/Engineering/EngineeringCollages";
import SideBar from './component/Main/Header/Sidebar'

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
          <Route exact path="/engcollages" component={SideBar} />
          <PrivateRoute exact path="/q&a" component={StackOverFlow} />
          <PrivateRoute exact path="/add-question" component={Questions} />
          <PrivateRoute exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
