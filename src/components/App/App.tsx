import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { routes } from "../../routes";
import Loader from "../Loader";
const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          {routes.map(({ path, exact, element: Component }, index) => {
            return (
              <Route exact={exact} key={index} path={path}>
                <Component />
              </Route>
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
};
export default App;
