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
    this.codeEvent = this.codeEvent.bind(this);
    this.loginEvent = this.loginEvent.bind(this);
    // this.getLoginCode = this.getLoginCode.bind(this);
  }
  phoneNumEvent(){
    alert(2222)
  }
  codeEvent(){
    
  }
  loginEvent(){
    alert(1111)
  }
  getLoginCode(){
   
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
                <span className="iconfont iconshouji"></span>
                <input placeholder="请输入手机号码" value={this.state.phoneVal} onChange={this.phoneNumEvent} className="phoneNum"/>
              </li>
              <li>
                <span className="iconfont iconyanzhengma"></span>
                <input placeholder="请输入验证码" value={this.state.codeVal} onChange={this.codeEvent}  className="loginCode"/>
                <span className="code" onClick={this.getLoginCode}>获取验证码</span>
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
