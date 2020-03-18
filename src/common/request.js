import { baseUrl } from '@/config';
import store from '@/store/store';
import router from '@/router/router';
import axios from 'axios';
import { Toast } from 'vant';
import qs from 'qs';

axios.defaults.baseURL = baseUrl;
axios.defaults.timeout = 10000; // 10s

axios.interceptors.request.use(
    config => {
        // 添加 token header
        const token = store.getters.getToken;
        if (token && !/(aliyuncs)/.test(config.url)) {
            config.headers['Authorization'] = token;
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        const res = response.data;
        const msg = res.msg || '错误';

        if (res.retcode !== 2000000) {
            // 请重新登录错误 定位到login
            if (res.retcode === 5001001) {
                store.dispatch('logout');
            }

            // 所有非2000000异常 都弹消息 并reject promise
            Toast({
                message: msg,
                duration: 2 * 1000
            });
            return Promise.reject(msg);
        }

        return Promise.resolve(res);
    },
    // http status 500
    error => {
        console.log('err', error);
        // 断网 或者 请求超时 状态
        if (!error.response) {
            // 请求超时状态
            if (error.message.includes('timeout')) {
                console.log('超时了');
                Toast.fail('请求超时，请检查网络是否连接正常');
            }
            return;
        }

        return Promise.reject(error);
    }
);

// get 请求
export function get(url, params = {}) {
    return axios
        .get(baseUrl + url, {
            params
        })
        .then(res => {
            return Promise.resolve(res.result);
        });
}

// post请求
export function post(url, data = {}) {
    return axios({
        url,
        method: 'post',
        data: qs.stringify(data)
    }).then(res => {
        return Promise.resolve(res.result);
    });
}

/**
 * 上传图片请求
 * file：File对象
 * type：1用户头像 2店铺图片
 * url： 后端获取oss凭证接口，默认'/common/upload'
 */
export async function uploadImg(file, type, url = '/common/upload') {
    if (!file) {
        return;
    }

    const data = { file: file, type: type };
    try {
        const res = await axios({
            method: 'post',
            url: url,
            data: qs.stringify(data)
        });

        const retcode = parseInt(res.retcode);
        if (retcode === 2000000) {
            const result = res.result;
            // 创建form对象
            const formData = new FormData();
            formData.append('key', result.dir);
            formData.append('OSSAccessKeyId', result.accessid);
            formData.append('policy', result.policy);
            formData.append('signature', result.signature);
            formData.append('expire', result.expire);
            formData.append('callback', result.callback);
            formData.append('dir', 'admin/');
            formData.append('file', data.file);

            // 创建新实例请求，可以避免使用全局的interceptors
            const instance = axios.create({
                baseURL: result.host,
                headers: { 'Content-Type': 'application/json' }
            });
            const res2 = await instance.post(result.host, formData);
            return `${result.host}/${res2.data.url}`;
        }
    } catch (error) {
        console.log(error);
    }
}
