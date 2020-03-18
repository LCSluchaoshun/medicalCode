import { get, post } from '@/common/request';
import API from '@/common/api';

// 全局路由守卫,这里只处理beforeEach和afterEach
export default {
    beforeEach(to, from, next) {
        // console.log('before-interceptor');
        next();
    },
    afterEach(to, from) {
        // console.log('after-interceptor');

        // 埋点统计(只在生产环境中使用)
        // if (process.env.NODE_ENV === 'production') {
        //     post(API.postAccessLog, {
        //         page: to.name
        //     }).catch(err => {
        //         console.log(err);
        //     });
        // }
    }
};
