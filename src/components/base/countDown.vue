<template>
    <button class="vertical" :disabled="isDisable">
        {{ txt }}
    </button>
</template>

<script>
export default {
    name: 'CountDown',
    // 使用 DOM 中的模板时，camelCase的 prop 名需要使用其等价的 kebab-case命名
    props: {
        countNum: {
            type: Number,
            default: 0,
            required: true
        },
        id: {
            type: String,
            default: '',
            required: true
        },
        // startCounting: {
        //     type: Boolean,
        //     default: false,
        //     required: true
        // },
        defaultTxt: {
            type: String,
            default: '',
            required: true
        },
        postfixOnCounting: {
            type: String,
            default: '',
            required: true
        },
        prefixOnCounting: {
            type: String,
            default: '',
            required: true
        },
        disableOnCounting: {
            type: Boolean,
            default: true,
            required: false
        },
        autoHandleInterrupt: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {
            timerId: '',
            currentCount: 0,
            txt: this.defaultTxt,
            isDisable: false
        };
    },
    computed: {},
    watch: {
        // startCounting() {
        //     this.currentCount = this.countNum;
        //     if (this.startCounting) {
        //         if (this.disableOnCounting) {
        //             this.isDisable = true;
        //         }
        //         this.start();
        //     } else {
        //         this.stop();
        //         if (this.disableOnCounting) {
        //             this.isDisable = false;
        //         }
        //     }
        // },
        currentCount() {
            if (this.currentCount <= 0) {
                this.stop();
            }
        }

    },
    beforeCreate() {
        // beforecreate : 可以在这加个loading事件，在加载实例时触发
    },
    created() {
        // created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用
        // this.isInterrupt();
        window.addEventListener('beforeunload', e => {
            this.onInterrupt();
            this.stop();
        });
    },
    mounted() {
        this.isInterrupt();
        // mounted : 挂载元素，获取到DOM节点
    },
    updated() {
        // updated : 如果对数据统一处理，在这里写上相应函数
    },
    beforeDestroy() {
        // beforeDestroy : 可以做一个确认停止事件的确认框
        this.onInterrupt();
        this.stop();
    },
    methods: {
        start(sec = null) {
            if (this.timerId !== '') {
                return;
            }
            if (this.disableOnCounting) {
                this.isDisable = true;
            }
            if (sec === null) {
                this.currentCount = this.countNum;
            } else {
                this.currentCount = sec;
            }
            console.log('start');
            this.timerId = setInterval(() => {
                this.currentCount--;
                this.setTxt();
            }, 1000);
        },
        stop() {
            if (this.timerId !== '') {
                clearInterval(this.timerId);
                this.timerId = '';
            }
            if (this.disableOnCounting) {
                this.isDisable = false;
            }
            // this.$emit('update:startCounting', false);
        },
        setTxt() {
            if (this.currentCount <= 0) {
                this.txt = this.defaultTxt;
            } else {
                this.txt = this.prefixOnCounting + this.currentCount + this.postfixOnCounting;
            }
        },
        onInterrupt() {
            if (this.currentCount > 0) {
                const res = {
                    currentCount: this.currentCount,
                    time: new Date()
                };
                // console.log('onInterrupt' + '---' + res)
                localStorage.setItem(this.id, JSON.stringify(res));
            }
        },
        isInterrupt() {
            const str = localStorage.getItem(this.id);
            let isInterrupt = false;
            console.log('str' + str);
            if (str !== null) {
                isInterrupt = true;
                localStorage.setItem(this.id, null);
            }

            this.$emit('is-interrupt', isInterrupt, JSON.parse(str), this);

            if (this.autoHandleInterrupt) {
                this.handleInterrupt(isInterrupt, JSON.parse(str), this);
            }
        },
        handleInterrupt(res, obj, ref) {
            console.log('res' + '----' + res + '----' + obj + '----' + ref);
            if (!res) {
                return;
            }
            const now = new Date().getTime();
            const last = new Date(obj.time).getTime();
            const offsetSec = Math.floor((now - last) / 1000);
            if (offsetSec <= obj.currentCount) {
                ref.start(obj.currentCount - offsetSec);
            }
        },
        setTime(num) {
            this.currentCount = num;
        }
    }
};
</script>

<style lang="stylus" scoped>
    @import '~common/main.styl'
    .vertical {
        flex-y()
    }

    .horizontal {
        flex-x()
    }

    .divider {
        background-color transparent
        width 100%
        height 1px
    }

    .space {
        background-color transparent
        width 100%
        height vw(10)
    }
</style>
