import React from 'react'
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginCom from './LoginCom';
import Home from './Home';
import About from './About';
import UpdateState from './UpdateState';

const Header = () => {
    return (
        <>
         <Link  to="/"> HOME </Link>
        <Link  to="/login">LOGIN</Link>
        <Link  to="/about"> ABOUT </Link>
        <Link  to="/update"> Update Satate </Link>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact  path= "/login" component={LoginCom} />
        <Route exact  path="/about" component={About}  />
        <Route exact  path="/update" component={UpdateState}  />
        </Switch>
       
        </>
    )
}

export default Header
