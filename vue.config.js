const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin'); // 骨架屏webpack plugin

function resolve(dir) {
    return path.join(__dirname, dir);
}

const cdn = {
    js: [
        // vue 必须优先加载(生产环境使用最小运行时版本runtime.min, 其他环境使用全版本)
        // process.env.NODE_ENV !== 'production'
        //     ? 'https://cdn.bootcss.com/vue/2.6.10/vue.js' : 'https://cdn.bootcss.com/vue/2.6.9/vue.runtime.min.js',
        // // vue-router
        // 'https://cdn.bootcss.com/vue-router/3.0.6/vue-router.min.js',
        // // vuex
        // 'https://cdn.bootcss.com/vuex/3.1.0/vuex.min.js',
        // // vant js
        // 'https://cdn.jsdelivr.net/npm/vant@1.6/lib/vant.min.js',
        // axios
        'https://cdn.bootcss.com/axios/0.19.0-beta.1/axios.min.js',
        // vConsole
        'https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js'
    ],
    css: [
        // vant css
        // 'https://cdn.jsdelivr.net/npm/vant@1.6/lib/index.css'
    ]
};

module.exports = {
    lintOnSave: process.env.NODE_ENV !== 'production',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                assets: resolve('src/assets'),
                common: resolve('src/common'),
                base: resolve('src/components/base')
            }
        },
        externals: {
            // vue: 'Vue',
            // 'vue-router': 'VueRouter',
            // vuex: 'Vuex ',
            // vant: 'vant',
            axios: 'axios',
            vconsole: 'VConsole'
        },
        plugins: [
            new SkeletonWebpackPlugin({
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/skeleton.js')
                    }
                },
                minimize: true,
                quiet: true
            })
        ]
    },
     publicPath:'./',
    chainWebpack: config => {
        // 通过 html-webpack-plugin注入到 index.html
        config.plugin('html').tap(args => {
            args[0].cdn = cdn;
            return args;
        });
    }
};
