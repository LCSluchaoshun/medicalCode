import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import Vconsole from 'vconsole';
import filters from '@/common/filters';
import directives from '@/common/directives';
import VueQriously from 'vue-qriously';
import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import { get, post, uploadImg } from '@/common/request';

Vue.config.productionTip = false;

Vue.use(Lazyload);
Vue.use(VueQriously);
// 挂载http方法
Vue.prototype.httpGet = get;
Vue.prototype.httpPost = post;
Vue.prototype.httpUploadImg = uploadImg;

// 非生产环境加载vConsole/生产环境传vConsole也打开
if (process.env.NODE_ENV !== 'production' || window.vConsole) {
    const vConsole = new Vconsole();
    Vue.prototype.$vConsole = vConsole;
}

// 注册全局过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

// 注册全局指令
Object.keys(directives).forEach(key => Vue.directive(key, directives[key]));

Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
