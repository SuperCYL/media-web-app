import http from './http';
// import Qs from 'qs';

const userApi = {
    
    getSmsCode: (params) => {
        console.log(params);
        
        return http({
            url: `/api-uaa/validata/smsCode/${params.mobile}/${params.type}`,
            method: 'get',
        });
    },
        
}
export default userApi;