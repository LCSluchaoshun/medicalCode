/** 全局配置表*/
// 协议
const protocol = window.protocal ? window.protocal : process.env.NODE_ENV === 'production' ? 'https' : 'http';
// mock环境
const mock_baseUrl = `${protocol}:`;
// 开发(联调)环境
const dev_baseUrl = `${protocol}:`;
// 测试环境
const test_baseUrl = `${protocol}:`;
// 生产环境
const pro_baseUrl = `${protocol}:`;

// api请求地址
export const baseUrl = getBaseUrl();

// 静态图片域名 - OSS
export const oss_baseUrl = `${protocol}:`;

// 错误码常量
export const errCode = {
    5001001: '未获取到token',
    5001002: '无效的token',
    5001003: '注册失败',
    5001004: '用户异常'
};

// 请求地址处理
function getBaseUrl() {
    let currentUrl = '';
    switch (process.env.NODE_ENV) {
        case 'mock':
            currentUrl = mock_baseUrl;
            break;
        case 'development':
            currentUrl = dev_baseUrl;
            break;
        case 'test':
            currentUrl = test_baseUrl;
            break;
        case 'production':
            currentUrl = pro_baseUrl;
            break;
    }
    // 全局域名覆盖(有值就覆盖 一般不使用)
    if (window.domain) {
        currentUrl = `${protocol}://${window.domain}`;
    }
    console.log(`
        当前环境：${process.env.NODE_ENV}, baseUrl:${currentUrl}
        window.protocol:${window.protocol}, window.domain:${window.domain}
    `);
    return currentUrl;
}
