import Vue from 'vue';
import Router from 'vue-router';
import guards from './guards';

// 合并所有router
let routers = [];
const requireComponent = require.context('./modules', false, /\.js$/); // modules下任意js文件
requireComponent.keys().forEach(fileName => {
    const item = requireComponent(fileName);
    routers = routers.concat(item.default); // modules中文件的写法是export default
});

// 注册路由实例
Vue.use(Router);
const router = new Router({
    // mode: 'history',
    routes: routers
});

// 合并两个全局路由守卫
for (const key in guards) {
    router[key](guards[key]);
}

export default router;
