<template>
    <div ref="wrapper" class="list-wrapper">
        <div class="scroll-content">
            <!--列表内容slot-->
            <slot class="list" />

            <!--上拉加载slot 有默认值-->
            <slot
                v-if="listHeight > wrapperHeight"
                name="pullup"
                :pullUpLoad="pullUpLoad"
                :isPullUpLoading="isPullUpLoading"
            >
                <div v-if="pullUpLoad" class="pullup-wrapper">
                    <div
                        v-if="!isPullUpLoading && data.length"
                        class="before-trigger"
                    >
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
            </slot>
        </div>

        <!--下拉刷新slot 有默认值-->
        <slot
            name="pulldown"
            :pullDownRefresh="pullDownRefresh"
            :isPullDownLoading="isPullDownLoading"
        >
            <div v-if="pullDownRefresh" ref="pulldown" class="pulldown-wrapper">
                <div
                    v-if="preparePullDownRefresh && data.length"
                    class="before-trigger"
                >
                    <span>{{ pullDownBeforeTxt }}</span>
                </div>
                <div v-if="isPullDownLoading" class="after-trigger">
                    <van-loading class="loading" />
                    <span class="loading-text">{{ pullDownLoadingTxt }}</span>
                </div>
            </div>
        </slot>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';

export default {
    name: 'Scroll',
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        click: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default: null
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        pullDownRefresh: {
            type: null,
            default: false
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        },
        beforeScroll: {
            type: Boolean,
            default: false
        },
        refreshDelay: {
            type: Number,
            default: 300
        },
        preventDefault: {
            type: Boolean,
            default: true
        },
        bounce: {
            type: Boolean,
            default: true
        },
        stopPropagation: {
            type: Boolean,
            default: true
        },
        disableScroll: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            preparePullDownRefresh: false, // 准备下拉刷新，控制显示下拉刷新的相关提示
            isPullDownLoading: false, // 正在下拉刷新中
            pullDownBeforeTxt: '下拉刷新',
            pullDownLoadingTxt: '正在刷新',
            isPullUpLoading: false, // 正在上拉加载中
            pullUpBeforeTxt: '加载更多',
            pullUpLoadingTxt: '正在加载更多',
            hasMore: true, // 是否有更多数据
            wrapperHeight: 0,
            listHeight: 0
        };
    },
    watch: {
        data(newVal, oldVal) {
            if (newVal && oldVal) {
                const dataGrow = newVal.length !== oldVal.length;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.forceUpdate(dataGrow);
                    }, this.refreshDelay);
                });
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this._initScroll();
        }, this.refreshDelay);
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }

            this.scroll = new Bscroll(this.$refs.wrapper, {
                momentum: true,
                probeType: this.probeType,
                click: this.click,
                preventDefault: this.preventDefault,
                pullUpLoad: this.pullUpLoad,
                pullDownRefresh: this.pullDownRefresh,
                bounce: this.bounce,
                stopPropagation: this.stopPropagation
            });

            if (this.disableScroll) {
                this.scroll.disable();
            }

            if (this.listenScroll) {
                this.scroll.on('scroll', pos => {
                    this.$emit('scroll', pos);
                });
            }

            if (this.pullDownRefresh) {
                this._initPullDownRefresh();
            }
            // else {
            //     this._initPullDown()
            // }
            if (this.pullUpLoad) {
                this._initPullUpLoad();
            }
            if (this.beforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScroll');
                });
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.isPullDownLoading = true;
                this.$emit('pullingDown');
            });
        },
        // 不下拉刷新 仅仅抛出事件
        // _initPullDown() {
        //     this.scroll.on('pullingDown', () => {
        //         this.$emit('pullingDown');
        //     });
        // },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                // 没有更多的时候，不触发pullingUp
                if (this.hasMore) {
                    this.isPullUpLoading = true;
                    setTimeout(() => {
                        this.$emit('pullingUp');
                    }, this.refreshDelay);
                }
            });
        },
        // 强制更新 在data变化后调用,dataGrow是否data增长了
        forceUpdate(dataGrow) {
            if (this.pullDownRefresh && this.isPullDownLoading) {
                this.isPullDownLoading = false;
                this.hasMore = true;
                this.scroll.finishPullDown();
            } else if (this.pullUpLoad && this.isPullUpLoading) {
                if (!dataGrow) {
                    this.pullUpBeforeTxt = '没有更多了';
                    this.hasMore = false;
                }
                this.isPullUpLoading = false;
                this.scroll.finishPullUp();
            }

            this.refresh();

            // 更新wrapperHeight和listHeight
            this.wrapperHeight = document
                .querySelector('.list-wrapper')
                .getBoundingClientRect().height;
            this.listHeight = document
                .querySelector('.scroll-content')
                .getBoundingClientRect().height;
        },
        enable() {
            this.scroll && this.scroll.enable();
        },
        disable() {
            this.scroll && this.scroll.disable();
        },
        refresh() {
            this.wrapperHeight = document
                .querySelector('.list-wrapper')
                .getBoundingClientRect().height;
            this.listHeight = document
                .querySelector('.scroll-content')
                .getBoundingClientRect().height;
            this.scroll && this.scroll.refresh();
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
        },
        scrollToElement() {
            this.scroll &&
                this.scroll.scrollToElement.apply(this.scroll, arguments);
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/main.styl';

.list-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;

    .scroll-content {
        position: relative;
    }
}

.pullup-wrapper {
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

.pulldown-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: vw(8) 0;
    transition: all;

    .before-trigger {
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
            margin-left: vw(5);
        }
    }
}
</style>
