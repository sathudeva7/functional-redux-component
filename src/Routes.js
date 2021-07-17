import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/Home";

export const Routes = withRouter(({Layout, history}) => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>

            
        </Switch>
    );

});