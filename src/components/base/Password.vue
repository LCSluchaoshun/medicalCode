<template>
    <div class="password-input">
        <div class="pwd_frame">
            <input
                id="pwd_input"
                v-model="code"
                v-focus="focusStatus"
                type="tel"
                maxlength="6"
            />
            <div
                v-for="(item, index) in figure"
                :key="index"
                class="pwd_circle"
            >
                <span :class="{ pwdShow: item, pwdHide: !item }" />
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'Password',
    directives: {
        focus: {
            // 初始进入自动获取焦点
            inserted(el, { value }) {
                if (value) {
                    el.focus();
                }
            },
            // 焦点状态改变重新获取焦点
            update(el, { value }) {
                if (value) {
                    el.focus();
                }
            }
        }
    },
    data() {
        return {
            code: '',
            figure: [],
            focusStatus: true
        };
    },
    watch: {
        code(val) {
            // 每次先清空在赋值，避免删除不清空
            this.figure = new Array(6).fill(false);
            for (let i = 0; i < val.length; i++) {
                this.$set(this.figure, i, true);
            }
            // console.log(111, val);
            this.$emit('inputCode', val);
        }
    },
    created() {
        this.figure = new Array(6).fill(false);
    },
    methods: {
        clearCode() {
            this.code = '';
            this.figure = new Array(6).fill(false);
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/main.styl';

.pwd_frame {
    width: 70vw;
    letter-spacing: -0.5em;
    margin: auto;
    position: relative;
    text-align: center;
    /* border-top 1px solid #F5F5F5 */
    padding-top: smallMargin;

    & input {
        position: absolute;
        width: 61.3vw;
        height: 10.5vw;
        color: #000;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 1px;
        opacity: 0;
        z-index: 9999;
    }

    & .pwd_circle {
        background-color: #F5F5F5;
        display: inline-block;
        vertical-align: middle;
        width: 10vw;
        height: 10vw;
        text-align: center;
        margin-left: titleMargin;
        border-radius: main-radius;

        & span {
            width: 7px;
            height: 7px;
            border-radius: main-radius;
            background: #000;
            display: block;
            margin: 4vw auto;

            &.pwdShow {
                opacity: 1;
            }

            &.pwdHide {
                opacity: 0;
            }
        }
    }
}
</style>
