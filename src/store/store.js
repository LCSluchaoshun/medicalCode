import Vue from 'vue';
import Vuex from 'vuex';

// 合并所有store
const stores = {};
const requireComponent = require.context('./modules', false, /\.js$/); // modules下任意js文件
requireComponent.keys().forEach(fileName => {
    const item = requireComponent(fileName);
    const moduleName = fileName
        .toLowerCase()
        .substring(0, fileName.length - 3)
        .replace(/[./]/g, '');
    stores[moduleName] = item.default; // modules中文件的写法是export default
});

Vue.use(Vuex);
export default new Vuex.Store({
    modules: stores
});
