<template>
    <transition name="confirm-fade">
        <div v-show="showFlag" class="confirm" @click.stop>
            <div class="confirm-wrapper">
                <svg class="close-icon" aria-hidden="true" @click.stop="cancel">
                    <use xlink:href="#icon-close" />
                </svg>
                <div class="confirm-content">
                    <p class="title">{{ title }}</p>
                    <p class="text">{{ text }}</p>
                    <p class="amount">{{ amount }}</p>
                    <div ref="operate" class="operate">
                        <password ref="password" @inputCode="getPassword" />
                        <div class="operate-btn" @click="forget">
                            忘记密码？
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
import Password from 'base/Password';

export default {
    name: 'PasswordPopup',
    components: { Password },
    props: {
        isAlert: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '请输入支付密码'
        },
        text: {
            type: String,
            default: '金额'
        },
        amount: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            showFlag: false,
            password: ''
        };
    },
    watch: {
        showFlag() {
            // this.dialogShow = !!value;
            this.$refs.password.clearCode();
        },
        password() {
            if (this.password.length === 6) {
                this.$emit('finishPass', this.password);
                this.hide();
            }
        }
    },
    methods: {
        show() {
            this.showFlag = true;
            this.$refs.password.clearCode();
            console.log(111, this.password);
        },
        hide() {
            this.showFlag = false;
        },
        forget() {
            this.hide();
            this.$emit('forget');
        },
        cancel() {
            this.hide();
            this.$emit('cancel');
        },
        getPassword(val) {
            this.password = val;
            // console.log('getPassword', val)
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/main.styl';

.confirm-fade-enter-active {
    animation: confirm-fadein 0.5s;

    .confirm-content {
        animation: confirm-zoom 0.5s;
    }
}

.confirm {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);

    .confirm-wrapper {
        width: 80vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: grayF;
        border-radius: main-radius;
        padding-top: smallMargin;

        .confirm-content {
            width: 100%;
            border-radius: main-radius;

            .title {
                padding: bigMargin cellPadding 0 cellPadding;
                line-height: vw(20);
                text-align: center;
                font-size: word16;
            }

            .text {
                padding-top: cellPadding;
                line-height: vw(19);
                text-align: center;
                font-size: word14;
            }

            .amount {
                word-vw(word36, gray3);
                line-height: vw(47);
                text-align: center;
                /* margin-top titleMargin */
            }

            .operate {
                width: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                font-size: word14;

                /* border-top 1px solid #f8f8f8 */
                .operate-btn {
                    display: flex;
                    justify-content: flex-end;
                    word-vw(word12, gray9);
                    line-height: vw(16);
                    margin-top: titleMargin;
                    margin-right: middleMargin;
                    margin-bottom: bigMargin;
                }
            }
        }

        .close-icon {
            position: absolute;
            top: smallMargin;
            right: smallMargin;
            width: vw(10);
            height: vw(10);
            overflow: hidden;
            fill: gray9;
        }
    }
}

@keyframes confirm-fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes confirm-zoom {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>
