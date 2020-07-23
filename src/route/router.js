import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Login from '../views/login/index';
import InputFile from '../views/inputFile/index'

export default()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=>(<Redirect to="/login"/>)}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/InputFile" component={InputFile}></Route>
        </Switch>
    </BrowserRouter>
)
