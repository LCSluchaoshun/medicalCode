<template>
    <div class="nodata" v-show="show">
        <div class="main">
            <img class="nodata-img" src="../../assets/nodata.png">
            <p class="nodata-desc" v-if="title">{{ title }}</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
            default: '什么都没有...'
        },
        show: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/main.styl';

.nodata {
    position: relative;
    width: 100vw;
    height: 100%;
    text-align: center;

    // background-color: #fff;
    .main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        flex-y();

        .nodata-img {
            width: vw(120);
            flex: 1;
            margin-bottom: smallMargin;
        }

        .nodata-desc {
            flex: 1;
            line-height: 20px;
            font-size: word14;
            color: gray6;
        }
    }
}
</style>
