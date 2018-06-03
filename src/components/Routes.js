import React from "react";

import { Switch, Route } from "react-router-dom";
import Adverts from "./Adverts";
import Advert from "./Advert";
import Home from "./Home";
import NotFound from "./NotFound";

//
// ─── ROUTES USING REACT ROUTER DOM ──────────────────────────────────────────────
//

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/adverts" component={Adverts} />
    <Route path="/adverts/:id" component={Advert} />
    <Route component={NotFound} />
  </Switch>
);
export default Routes;
