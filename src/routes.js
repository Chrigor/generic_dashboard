import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from "./pages/Grid";
import Dashboard from "./pages/Dashboard";

export default function Routes({ columns }) {
  return (
    <>
      <Switch>
        <Route path="/" component={() => <Grid columns={columns} /> }  exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => <h1> Page not found </h1>} />
      </Switch>
    </>
  );
}
