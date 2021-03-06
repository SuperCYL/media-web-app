import axios from 'axios';
import { Toast} from 'antd-mobile';

// 创建service
const service = axios.create({
    baseURL:"http://rmy-test.zjfazhi.com",
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [function (data) {
        data = JSON.stringify(data)
        return data
    }]
})

/* 请求拦截器 */
service.interceptors.request.use(function (config) { // 每次请求时会从localStorage中获取token
    let access_token = localStorage.getItem("access_token");
    let token_type = localStorage.getItem("token_type");
    if (access_token && token_type) {
        config.headers.common['Authorization'] = token_type + " " + access_token;
    }
    return config
}, function (error) {
    
    return Promise.reject(error)
});

service.interceptors.response.use(response => {

    const res = response.data
    if (response.status === 200) {
        if (res.resp_code !== 0 && res.resp_code && res.resp_code !== 401) {

            Toast.fail(res.resp_msg, 3, null, false);
            
        }
        if (res.resp_code === 401 || res.resp_code === 404) {
           
            Toast.fail('没权限', 3, null, false);

        }
        return res
    }
},
    error => {

        if (error.response && error.response.status) {
            if (error.response.status === 401) {
                
                Toast.fail('没权限', 3, null, false);

            } else {
                Toast.fail(error.response.data.resp_msg ? error.response.data.resp_msg : '出现问题，请重试', 3, null, false);
            }
        }
        // 如果需要通过服务端返回的数据在组件内进行判定，由于拦截器是reject的错误，并不能在组件中读取err信息，可以改reject为 resolve 并且返回err.response
        return Promise.resolve(error.response) // 可在组件内获取到服务器返回信息
    }
)
export default service;