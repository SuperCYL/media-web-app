import http from './http';
// import Qs from 'qs';

const Api = {
    
    getVerificationCode: (params, loginType) => {
        return http({
            url: '/api-uaa/validata/smsCode/' + params + '/1?LoginType=2',
            method: 'get',
        })
    },
        
}
export default Api;