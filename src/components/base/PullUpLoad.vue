<template>
    <div class="pull-up-load-container">
        <div v-if="!isPullUpLoading && data.length" class="before-trigger">
            <span>{{ pullUpBeforeTxt }}</span>
        </div>
        <div
            v-if="isPullUpLoading && data.length && hasMore"
            class="after-trigger"
        >
            <van-loading class="loading" type="spinner" />
            <span class="loading-text">{{ pullUpLoadingTxt }}</span>
        </div>
    </div>
</template>
<script>
import { isVisible, debounce } from 'common/utils';

export default {
    name: 'PullUpLoad',
    components: {},
    props: {
        // 列表数据
        data: {
            type: Array,
            default: null
        },
        // 触发loading的距离底部高度(px)
        distance: {
            type: Number,
            default: 50
        }
    },
    data() {
        return {
            isPullUpLoading: false, // 正在上拉加载中
            pullUpBeforeTxt: '加载更多',
            pullUpLoadingTxt: '正在加载更多',
            hasMore: true // 是否有更多数据
        };
    },
    computed: {},
    watch: {
        data(newVal, oldVal) {
            if (newVal && oldVal) {
                const dataGrow = newVal.length !== oldVal.length;
                this.$nextTick(() => {
                    setTimeout(() => {
                        if (!dataGrow) {
                            this.pullUpBeforeTxt = '没有更多了';
                            this.hasMore = false;
                        }
                        this.isPullUpLoading = false;
                    }, 20);
                });
            }
        }
    },
    mounted() {
        this.initPullUpLoad();
    },
    beforeDestroy() {
        if (this.scrollParent) {
            this.scrollParent.removeEventListener(
                'scroll',
                this.handScroll,
                true
            );
        }
    },
    methods: {
        initPullUpLoad() {
            // 父级中追溯可滚动的元素
            this.scrollParent = this.getScrollParent();
            // 该元素绑定scroll事件,注意节流处理
            this.handScroll = debounce(this.onParentScroll);
            this.scrollParent.addEventListener('scroll', this.handScroll);
        },
        getScrollParent(el = this.$el) {
            let result;
            if (el.tagName === 'BODY') {
                result = window;
            } else if (
                ['scroll', 'auto'].indexOf(getComputedStyle(el).overflowY) > -1
            ) {
                result = el;
            }
            return result || this.getScrollParent(el.parentNode);
        },
        onParentScroll() {
            if (
                !this.isPullUpLoading &&
                isVisible(this.$el) &&
                this.getCurrentDistance() <= this.distance &&
                this.hasMore
            ) {
                this.isPullUpLoading = true;
                this.$emit('load', this.stateChanger);
            }
        },
        getCurrentDistance() {
            let distance;
            if (this.direction === 'top') {
                distance =
                    typeof this.scrollParent.scrollTop === 'number'
                        ? this.scrollParent.scrollTop
                        : this.scrollParent.pageYOffset;
            } else {
                const infiniteElmOffsetTopFromBottom = this.$el.getBoundingClientRect()
                    .top;
                const scrollElmOffsetTopFromBottom =
                    this.scrollParent === window
                        ? window.innerHeight
                        : this.scrollParent.getBoundingClientRect().bottom;
                distance =
                    infiniteElmOffsetTopFromBottom -
                    scrollElmOffsetTopFromBottom;
            }
            return distance;
        }
    }
};
</script>
<style lang="stylus" scoped>
@import '~common/main.styl';

.pull-up-load-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: vw(20) 0;

    .before-trigger {
        color: gray9;
        font-size: word14;
        line-height: vw(20);
    }

    .after-trigger {
        .loading {
            display: inline-block;
            width: vw(20);
            height: vw(20);
        }

        .loading-text {
            color: gray9;
            font-size: word14;
            line-height: vw(20);
            margin-left: vw(5);
        }
    }
}
</style>
