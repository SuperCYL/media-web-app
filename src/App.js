import React,{Component} from 'react';
import { Button} from 'antd-mobile';

import './app.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneVal:"",
      codeVal:""
    };
    this.phoneNumEvent = this.phoneNumEvent.bind(this);
    this.loginEvent = this.loginEvent.bind(this);
  }
  phoneNumEvent(){
    alert(2222)
  }
  loginEvent(){
    alert(1111)
  }
  render() {
    return (
      <div className="App">
        <div className="cont">
          <header>
            <h1>欢迎登录,</h1>
            <h1>社会治理融媒云投稿平台</h1>
            <ul>
              <li>
                <input placeholder="请输入手机号码" value={this.state.phoneVal} onInput={this.phoneNumEvent} className="phoneNum"/>
              </li>
              <li>
              <input placeholder="请输入验证码" value={this.state.codeVal} className="loginCode"/>
              </li>
            </ul>
            <Button type="primary" className="login" onClick={this.loginEvent}>登录</Button>
          </header>
        </div>
        
      </div>
    )
  }
  
}

export default App;
