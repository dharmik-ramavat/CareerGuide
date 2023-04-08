import React, { useEffect } from 'react'
import Auth from './Auth/Index'
import userSlice from './features/userSlice'
import { selectUser, login, logout } from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import component1 from './component/index'

function App() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

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
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <PrivateRoute exact path="/" component={component1} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
