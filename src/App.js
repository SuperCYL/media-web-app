import React,{Component} from 'react';

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
            <div className="tit1">欢迎登录,</div>
            <div className="tit2">社会治理融媒云投稿平台</div>
            <ul>
              <li>
                <input placeholder="请输入手机号码" value={this.state.phoneVal} onInput={this.phoneNumEvent} className="phoneNum"/>
              </li>
              <li>
              <input placeholder="请输入验证码" value={this.state.codeVal}  className="loginCode"/>
              </li>
            </ul>
            <div className="login" onClick={this.loginEvent}>登录</div>
          </header>
        </div>
        
      </div>
    )
  }
  
}

export default App;
