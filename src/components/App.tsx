import React from "react";
import { Dashboard } from './Dashboard';
import { Switch, Route } from "react-router-dom";
import { Login } from './Login';
import { Logout } from './Logout';
export const App: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/dashboard" >
          <Dashboard />
        </Route>
        <Route path="/" exact >
          <Dashboard />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/logout" >
          <Logout />
        </Route>
      </Switch>

    </>
  );
};
