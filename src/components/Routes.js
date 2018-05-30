import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Adverts from './Adverts';
import Home from './Home';

//
// ─── ROUTES USING REACT ROUTER DOM ──────────────────────────────────────────────
//
    
const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Adverts" component={Adverts} />
        
    </Switch> 
)
export default Routes;