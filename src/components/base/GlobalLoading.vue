<template>
  <div v-show="globalState" class="global-loading">
    <img
      class="global-loading-img"
      src="http://iryoss3-0.oss-cn-beijing.aliyuncs.com/static/loading.gif"
    >
    <!--<p class="global-loading-desc" v-if="title">{{ title }}</p>-->
    <!--<div class="loading-fixed">-->
    <!--<div class="loader loader&#45;&#45;snake"></div>-->
    <!--</div>-->
  </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'GlobaLoading',
    props: {
        globalState: Boolean
    },
    data() {
        return {
        };
    },
    methods: {

    }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/main.styl'

.global-loading {
    width 100vw
    height 100vh
    text-align center
    position absolute
    top 0
    left 0
    z-index 9999
    background-color rgba(255, 255, 255, 1)
    .global-loading-img {
        position absolute
        top 50%
        left 50%
        width vw(70)
        transform translate(-50%, -50%)
    }
    .loader {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
    }

    .loader--snake {
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        -webkit-transform: translate(-4.125em);
        box-shadow: 1.375em 0em #c5b061, 1.375em 0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 2.75em 0.29721em #c5b061, 2.75em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em 0.18368em #c5b061, 4.125em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.5em -0.18368em #c5b061, 5.5em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.875em -0.29721em #c5b061, 6.875em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        -webkit-animation: snake 2s linear infinite;
    }

    @-webkit-keyframes snake {
        0% {
            box-shadow: 2.125em 0em #c5b061, 1.375em 0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em 0.29721em #c5b061, 2.75em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em 0.18368em #c5b061, 4.125em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em -0.18368em #c5b061, 5.5em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em -0.29721em #c5b061, 6.875em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
        20% {
            box-shadow: 2.125em 0.29721em #c5b061, 1.375em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em 0.18368em #c5b061, 2.75em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em -0.18368em #c5b061, 4.125em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em -0.29721em #c5b061, 5.5em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em 0.0em #c5b061, 6.875em 0.0em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
        40% {
            box-shadow: 2.125em 0.18368em #c5b061, 1.375em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em -0.18368em #c5b061, 2.75em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em -0.29721em #c5b061, 4.125em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em 0.0em #c5b061, 5.5em 0.0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em 0.29721em #c5b061, 6.875em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
        60% {
            box-shadow: 2.125em -0.18368em #c5b061, 1.375em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em -0.29721em #c5b061, 2.75em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em 0.0em #c5b061, 4.125em 0.0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em 0.29721em #c5b061, 5.5em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em 0.18368em #c5b061, 6.875em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
        80% {
            box-shadow: 2.125em -0.29721em #c5b061, 1.375em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em 0.0em #c5b061, 2.75em 0.0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em 0.29721em #c5b061, 4.125em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em 0.18368em #c5b061, 5.5em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em -0.18368em #c5b061, 6.875em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
        100% {
            box-shadow: 2.125em 0.0em #c5b061, 1.375em 0.0em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 3.125em 0.29721em #c5b061, 2.75em -0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 4.125em 0.18368em #c5b061, 4.125em -0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 5.125em -0.18368em #c5b061, 5.5em 0.18368em 0.625em -0.3125em rgba(0, 0, 0, 0.52), 6.125em -0.29721em #c5b061, 6.875em 0.29721em 0.625em -0.3125em rgba(0, 0, 0, 0.52);
        }
    }
}
</style>
