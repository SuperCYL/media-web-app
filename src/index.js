import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,Route} from 'react-router-dom';

import './index.scss';

/*********组件引用********/
import App from './App';
import InputFile from './views/inputFile/index'
/***********************/



import './assert/fonts/iconfont.css'

import "lib-flexible"
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render((
  <Router>
      <Route path="/" component={App}></Route>
      <Route path="/InputFile" component={InputFile}></Route>
  </Router>
),document.getElementById("home"));


