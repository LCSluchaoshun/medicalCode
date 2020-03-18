<template>
    <transition name="confirm-fade">
        <div class="confirm" v-show="showFlag" @click.stop>
            <div class="confirm-wrapper">
                <svg class="close-icon" aria-hidden="true" @click.stop="cancel" v-if="isShowClose">
                    <use xlink:href="#icon-close"></use>
                </svg>

                <div class="confirm-content">
                    <p class="title">{{ title }}</p>
                    <p class="text">{{ text }}</p>
                    <div class="operate" ref="operate">
                        <!--确认-->
                        <div @click="confirm" class="operate-btn left">{{ confirmBtnText }}</div>
                        <div class="erectLine" />
                        <!--取消-->
                        <div @click="cancel" class="operate-btn " v-if="!isAlert">{{ cancelBtnText }}</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        isAlert: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '提示'
        },
        text: {
            type: String,
            default: ''
        },
        confirmBtnText: {
            type: String,
            default: '确认'
        },
        cancelBtnText: {
            type: String,
            default: '取消'
        },
        isShowClose: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showFlag: false
        };
    },
    methods: {
        show() {
            this.showFlag = true;
        },
        hide() {
            this.showFlag = false;
        },
        // 确定操作
        confirm() {
            this.hide();
            this.$emit('confirm');
        },
        // 取消操作
        cancel() {
            this.hide();
            //                this.$emit('cancel')
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '~@/common/main.styl'

    .confirm {
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        z-index 9999
        background-color rgba(0, 0, 0, 0.5)
        .confirm-content{
            /*animation confirm-zoom 0.3s*/
        }
        &.confirm-fade-enter-active {
            animation confirm-fadein 0.3s
        }
        .confirm-wrapper {
            width vw(300)

            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            background-color grayF
            border-radius vw(5)
            padding-top vw(10)
            .confirm-content {
                width 100%
                .title {
                    animation confirm-zoom 0.3s
                    padding vw(10)vw(15) 0 vw(15)
                    line-height vw(20)
                    text-align center
                    font-size word16
                    font-weight bold
                }
                .text {
                    animation confirm-zoom 0.3s
                    padding-top vw(15)
                    padding-bottom  vw(25)
                    line-height vw(25)
                    text-align center
                    font-size word14
                }

                .operate {
                    display flex
                    justify-content center
                    text-align center
                    font-size word14
                    font-weight bold
                    border-top vw(1) solid #efefef
                    .operate-btn {
                        animation confirm-zoom 0.3s
                        flex 1
                        line-height vw(25)
                        padding vw(5) 0
                        margin vw(10)
                        color gray3
                        &.left {
                            color gray9
                        }
                    }
                    // 按钮之间的分割线
                    .erectLine{
                        width vw(1)
                        background #efefef
                    }
                }
            }
            .close-icon {
                position absolute
                top vw(10)
                right vw(10)
                width vw(10)
                height vw(10)
                overflow hidden
                fill gray9
            }
        }
    }

    @keyframes confirm-fadein
        0%
            opacity: 0
        100%
            opacity: 1

    @keyframes confirm-zoom
        0%
            transform: scale(0)
        50%
            transform: scale(1.1)
        100%
            transform: scale(1)
</style>
