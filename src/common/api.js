export default {
    // common

    getUserFinance: '/user/finance', // 获取用户积分

    getCommonArea: '/common/area', // 获取省市区

    getFrontBanner: '/front/banner', // 轮播图
    getGroupList: '/goods/group/list', // 获取商品分类列表
    getGoodsList: '/goods/get/list', // 获取首页商品列表
    getGroupFront: '/goods/group/front', // 获取商品首页
    getGoodsMin: '/goods/get/min', // 获取商品最简化售卖信息
    getGoodsInfo: '/goods/get/info', // 获取商品详细信息
    postGoodsCollect: '/goods/collect', // 收藏商品
    postOrderPrepare: '/order/get/prepare', // 商品预提交
    postOrderCreated: '/order/created', // 商品订单支付
    getOrderInfo: '/order/get/info', // 商品订单支付

    getAddressList: '/user/address', // 获取地址列表
    postAddressChange: '/user/address/change', // 修改地址
    postAddressAdd: '/user/address/add', // 添加地址
    postAddressDel: '/user/address/del', // 添加地址

    postCartAdd: '/cart/add', // 添加商品进购物车
    getCartNumber: '/cart/number', // 获取数量角标
    getCartList: '/cart/List', // 获取购物车列表
    postCartReduce: '/cart/reduce', // 减少的商品数量
    postCartCleanup: '/cart/cleanup', // 清空失效商品
    postCartDelete: '/cart/delete' // 清空失效商品

};
