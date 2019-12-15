import React from 'react';

import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/friendslist">Friends List</NavLink>
          <NavLink to="/addfriend">Add Friend</NavLink>
        </div>
      </div>
      <Switch>
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
        <PrivateRoute exact path="/addfriend" component={AddFriend} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>

    </Router>
  );;
}

export default App;
