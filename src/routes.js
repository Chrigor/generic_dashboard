import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from "./pages/Grid";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Grid} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
        <Route path="*" component={() => <h1> Page not found </h1>} />
      </Switch>
    </>
  );
}
