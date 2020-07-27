import http from './http';
import Qs from 'qs';
import { removeNull } from '../utils/filter';

const Api = {
    
    //获取验证码
    getVerificationCode: (params) => {
        return http({
            url: '/api-uaa/validata/smsCode/' + params + '/1?uType=H5',
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

    //获取投稿记录
    getRecordList: (params) => {
        return http({
            url: '/api-editingChannels/editingManuscript/list?' + Qs.stringify(removeNull(params)),
            method: 'get',
            // typeM: '1',
            // data: removeNull(params)
        })
    },
}
export default Api;