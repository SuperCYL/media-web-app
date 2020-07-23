import React,{Component} from 'react';
import './style.scss';
import Api from '../../request/api'

class Login extends Component {
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
  phoneNumEvent(e){
    this.setState({
      phoneVal:e.target.value
    })
  }
  codeEvent(e){
    this.setState({
      codeVal:e.target.value
    })
  }
  loginEvent(){
    this.props.history.push('/InputFile');
  }
  getLoginCode(){
    this.codeSetInterval();
    let params = {
      mobile: this.state.phoneVal,
      type: 1
    };
    Api.getSmsCode(params).then(res => {
      if (res.resp_code == 0) {
          debugger;        
      }
    });

  }

  codeSetInterval() {
    this.setState({isTime:true});
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      count: this.state.count-1
    });
    if(this.state.count === 1){
      this.componentWillUnmount();
      this.setState({isTime:false,count:60});
    }
  }

  render() {
    let text = null;
    if(this.state.isTime){
      text = <span className="code code_time">{this.state.count}s</span>
    }else{
      text = <span className="code" onClick={this.getLoginCode}>获取验证码</span>
    }

    return (
      <div className="login">
        <div className="cont">
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
        </div>
        
      </div>
    )
  }
  
}

export default Login;
