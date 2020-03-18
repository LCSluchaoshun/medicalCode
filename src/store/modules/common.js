const state = {
    globaLoadingShow: false, // 显示全局loading
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {},
    loginShow: localStorage.getItem('loginShow') ? JSON.parse(localStorage.getItem('loginShow')) : false,
    errShow: localStorage.getItem('errShow') ? JSON.parse(localStorage.getItem('errShow')) : false
};
const getters = {
    getToken: state => state.token,
    userInfo: state => state.userInfo,
    loginShow: state => state.loginShow,
    globaLoadingShow(state, getters) {
        return state.globaLoadingShow;
    }
};
const actions = {

};
const mutations = {
    setToken(state, data) {
        localStorage.setItem('token', data);
        state.token = localStorage.getItem('token');
    },
    setUserInfo(state, data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        state.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    },
    setloginShow(state, data) {
        localStorage.setItem('loginShow', JSON.stringify(data));
        state.loginShow = JSON.parse(localStorage.getItem('loginShow'));
    },
    setErrShow(state, data) {
        localStorage.setItem('errShow', JSON.stringify(data));
        state.errShow = JSON.parse(localStorage.getItem('errShow'));
    },

    showGlobaLoading(state) {
        state.globaLoadingShow = true;
        // 全局动画
    },
    hideGlobaLoading(state) {
        state.globaLoadingShow = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
