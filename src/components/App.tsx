import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routes } from "../routes";
export const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, element: Component }, index) => {
          return <Route key={index} path={path} > <Component /> </Route>
        })}
      </Switch>
    </Router>
  );
};
