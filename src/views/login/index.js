import React,{Component} from 'react';
import './style.scss';
import Api from '../../request/api'
import { Toast} from 'antd-mobile';

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

    let params = {
      deviceId: this.state.phoneVal,
      validCode: this.state.codeVal
    };
    var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    var reg1 = /^\d{4}$/;
    if (this.state.phoneVal == "") {
      Toast.fail('手机号不能为空', 3, null, false);
    } else if (!reg.test(this.state.phoneVal)) {
      Toast.fail('手机号格式不正确', 3, null, false);
    } else if (this.state.codeVal == "") {
      Toast.fail('验证码不能为空', 3, null, false);
    } else if (!reg1.test(this.state.codeVal)) {
      Toast.fail('验证码格式不正确', 3, null, false);
    } else {
      Api.getCodeLogin(params).then(res => {
        if (res.resp_code == 0) {
          localStorage.setItem("access_token", res.datas.access_token);
          localStorage.setItem("token_type", res.datas.token_type);
          localStorage.setItem("globalAccount", res.datas.globalAccount);
          this.props.history.push('/InputFile');
        } else {
          Toast.fail(res.resp_msg, 3, null, false);
        }
      });
    }
    
  }
  getLoginCode(){
    this.codeSetInterval();

    let params = this.state.phoneVal;
    Api.getVerificationCode(params).then(res => {
      if (res.resp_code === 0) {
        Toast.info('验证码发送成功,请注意查收', 3, null, false);
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
