<template>
    <div class="nav-bar">
        <div class="back" @click="onClickLeft">
            <svg aria-hidden="true" class="icon-check">
                <use xlink:href="#icon-back"></use>
            </svg>
            <span class="back-text">{{ leftText }}</span>
        </div>
        <div>
            <slot name="title" >
                {{ title }}
            </slot>
        </div>
        <div>
            <div @click="onClickRight" v-if="close">
                <svg aria-hidden="true" class="icon-check">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
        </div>
        <confirm ref="confirm" :text="confirmText" confirm-text="确定" @confirm="operaSure()"/>
    </div>
</template>

<script>
import Confirm from '../../components/base/Confirm.vue';

export default {
    name: 'NavBar',
    components: { Confirm },
    props: {
        // 中间 页面标题
        title: {
            type: String,
            default: ''
        },
        // 是否显示关闭按钮
        close: {
            type: Boolean,
            default: false
        },
        // 返回地址
        leftBackAddress: {
            type: String,
            default: 'home'
        },
        // 返回按钮文案
        leftText: {
            type: String
        }
    },
    data() {
        return {
            confirmText: ''
        };
    },
    mounted() {
    },
    methods: {
        onClickLeft() {
            //                this.$emit('ClickLeft');
            console.log(location);
            this.$router.push({ name: this.leftBackAddress });
        },
        operaSure() {
            this.$router.push({ name: 'home' });
        },
        onClickRight() {
            this.confirmText = '即将退出该页面返回首页';
            this.$refs.confirm.show();
        }
    }
};
</script>

<style lang="stylus" scoped>
    @import "~@/common/main.styl"
    .nav-bar {

        z-index 999
        width 100%
        height vw(36)
        padding  0 cellPadding
        background grayF
        flex-x()
        word-vw(word16, gray3)
        .back {
            display flex
            align-items center
            .back-text {
                margin-left titleMargin
            }
        }
        .icon-check {
            width vw(15)
            height vw(15)
            fill gray9
        }

    }
</style>
