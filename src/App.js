import React,{Component} from 'react';

import './app.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneVal:"",
      codeVal:"",
      isTime:false,
      count:60
    };
    this.phoneNumEvent = this.phoneNumEvent.bind(this);
    this.codeEvent = this.codeEvent.bind(this);
    this.loginEvent = this.loginEvent.bind(this);
    this.getLoginCode = this.getLoginCode.bind(this);
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
    this.setState({
      isTime:true
    });
    
    let interval = setInterval(function(){
      this.setState({
        count:this.state.count-1
      });
      // if(this.state.count == 0){
      //   this.setState({
      //     isTime:false
      //   });
      //   clearInterval(interval);
      // }else{
      //   this.setState({
      //     count:this.state.count-1
      //   });
      // }
    },1000);
    
  }
  render() {
    let text = null;
    if(this.state.isTime){
      text = <span className="code code_time">{this.state.count}s</span>
    }else{
      text = <span className="code" onClick={this.getLoginCode}>获取验证码</span>
    }

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

                {text}
                
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
