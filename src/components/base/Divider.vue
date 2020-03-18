<template>
    <div class="divider" :style="dividerStyle">
        <div class="divider-line"></div>
        <div class="divider-text" v-if="text" :style="textStyle">{{ text }}</div>
        <div class="divider-line"></div>
    </div>
</template>

<script>
export default {
    name: 'Divider',
    props: {
        //  分割线文字 不传则是一条线
        text: {
            type: String
        },
        // 分割线 边距padding
        dividerPadding: {
            type: String,
            default: (15 / 3.75) + `vw`
        },
        //  文字 边距padding
        textPadding: {
            type: String,
            default: (37 / 3.75) + `vw`
        }
    },
    computed: {
        dividerStyle() {
            return {
                padding: this.dividerPadding
            };
        },
        textStyle() {
            return {
                padding: '0 ' + this.textPadding
            };
        }

    },
    data() {
        return {};
    }
};
</script>
<style lang="stylus" scoped>
    @import "~@/common/main.styl"
    .divider {
        display flex
        align-items center
        .divider-text {
            word-vw(word16, gray3)
            font-weight bold
        }
        .divider-line {
            background #efefef
            height vw(1)
            flex 1
        }
    }
</style>
