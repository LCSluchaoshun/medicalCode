const state = {
    createOrderData: sessionStorage.getItem('createOrderData') ? JSON.parse(sessionStorage.getItem('createOrderData')) : {}
};
const getters = {
    createOrderData: state => state.createOrderData
};

const actions = {};
const mutations = {
    SetCreateOrder(state, data) {
        sessionStorage.setItem('createOrderData', JSON.stringify(data));
        state.createOrderData = JSON.parse(sessionStorage.getItem('createOrderData'));
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
