import React from 'react';

import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <NavLink to="/friendslist">Friends List</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </div>
    </Router>
  );;
}

export default App;
