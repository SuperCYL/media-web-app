import http from './http';
// import Qs from 'qs';

const Api = {
    
    //获取验证码
    getVerificationCode: (params, loginType) => {
        return http({
            url: '/api-uaa/validata/smsCode/' + params + '/1?LoginType=2',
            method: 'get',
        })
    },

    //登录
    getCodeLogin: (params) => {
        return http({
            url: '/api-uaa/oauth/mobile/token?deviceId=' + params.deviceId + "&validCode=" + params.validCode,
            method: 'post',
            // data: 'phoneCode'
        })
    },
        
}
export default Api;