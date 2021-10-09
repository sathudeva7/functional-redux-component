import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingleCard from "./pages/SingleCard";

export const Routes = withRouter(({Layout, history}) => {

    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/card" component={SingleCard}/>
        </Switch>
    );

});