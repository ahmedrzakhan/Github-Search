import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Followers from "../components/dashboard/Followers";
import Profile from "../components/profile/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route exact path="/:login" render={() => <Profile />} />
      <Route path="/:login/followers" render={() => <Followers />} />
    </Switch>
  );
};

export default Routes;
