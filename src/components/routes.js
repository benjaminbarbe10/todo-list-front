import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Adverts from './adverts';
import Home from './home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/adverts" component={Adverts} />
    </Switch> 
)
export default Routes;