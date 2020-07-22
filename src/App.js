import React,{Component} from 'react';
import { BrowserRouter as Router,Route,Redirect} from 'react-router-dom';


/*********组件引用********/
import Login from './views/login/index';
import InputFile from './views/inputFile/index'
/***********************/

class App extends Component {

  render() {

    return (
      <Router>
        <Route exact path="/" render={()=>(<Redirect to="/login"/>)}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/InputFile" component={InputFile}></Route>
      </Router>
    )
  }
  
}

export default App;
