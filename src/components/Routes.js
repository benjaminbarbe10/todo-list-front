import React from "react";

import { Switch, Route } from "react-router-dom";
import Adverts from "./Adverts";
import Home from "./Home";
import NotFound from "./NotFound";

//
// ─── ROUTES USING REACT ROUTER DOM ──────────────────────────────────────────────
//

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Adverts" component={Adverts} />
    <Route path="/adverts/:id" component={Adverts} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
