<template>
  <div v-show="state" class="loading-html">
    <div class="loading-fixed">
      <!--<div class="loader"></div>-->
      <img src="../../assets/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: `loading`,
    props: {
        state: Boolean
    },
    watch: {},
    methods: {
    }
};

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '~@/common/main.styl'
  .loading-html {
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 99999;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    position fixed;
    top: 0;
    opacity 0.6
  }

  .loading-fixed {
    width: 100vw;
    height: 100vh;
    background: #fff;
    z-index: 99999;
    overflow-x: hidden
    overflow-y: hidden
    flex-x()
    justify-content center
    & img {
      width 16vw;
      margin-bottom: 30vh
    }
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
</style>
