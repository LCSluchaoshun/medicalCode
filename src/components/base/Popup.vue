<template>
    <van-popup
        v-model="display"
        postion="right"
        :close-on-click-overlay="false"
        class="bo"
    >
        <h1>提示</h1>
        <div>{{ point }}</div>
        <div class="err">
            {{ msg }}
        </div>
        <div v-if="type === 'single'" class="sure" @click="sure">
            {{ singleText }}
        </div>
        <div v-else-if="type === 'double'" class="btn">
            <div class="cancel" @click="cancel">{{ doubleCancelText }}</div>
            <div class="confirm" @click="confirm">{{ doubleConfirmText }}</div>
        </div>
    </van-popup>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        type: {
            type: String,
            default: 'single'
        },
        msg: {
            type: String,
            default: '确定删除吗'
        },
        singleText: {
            type: String,
            default: '确定'
        },
        doubleConfirmText: {
            type: String,
            default: '确定'
        },
        doubleCancelText: {
            type: String,
            default: '取消'
        },
        point: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            display: false
        };
    },
    computed: {
        // show: {
        //     get: function() {
        //         return true;
        //         // return this.$store.state.login.errShow
        //     },
        //     set: function(val) {
        //         this.$store.commit('errShow', val)
        //     }
        // },
        // err() {
        //     // return this.$store.state.login.err
        // }
    },
    methods: {
        show() {
            this.display = true;
        },
        sure() {
            this.display = false;
        },
        cancel() {
            this.display = false;
        },
        confirm() {
            this.display = false;
            this.$emit('confirm');
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/main.styl';

.bo {
    width: vw(300);
    height: vw(300);
    z-index: 3019 !important;
    border-radius: smallMargin;
    overflow: hidden;

    h1 {
        margin-top: cellPadding;
        margin-bottom: cellPadding;
    }

    .err {
        text-align: center;
        margin-top: vw(50);
        font-size: word20;
        font-weight: bold;
    }
}

.sure {
    big-solid();
    position: absolute;
    left: 50%;
    margin-left: vw(-100);
    bottom: vw(50);
}

.btn {
    display: flex;
    position: absolute;
    justify-content: space-around;
    width: 100%;
    bottom: vw(50);

    .confirm {
        secondary-solid();
    }

    .cancel {
        secondary-hollow();
    }
}
</style>
