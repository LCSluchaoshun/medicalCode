<template>
    <div ref="slider" class="slider">
        <div ref="sliderGroup" class="slider-group"><slot /></div>
        <div v-if="pageType === 'dots'" class="dots">
            <span
                v-for="(item, index) in dots"
                :key="index"
                class="dot"
                :class="{ active: currentPageIndex === index }"
            />
        </div>
        <div v-if="pageType === 'page' && maxPageIndex > 0" class="page">
            {{ currentPageIndex + 1 }}/{{ maxPageIndex + 1 }}
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
import { addClass } from '@/common/utils';

export default {
    name: 'Slider',
    components: {},
    props: {
        // 每项宽度(swipe = false时必传 )
        itemWidth: {
            type: Number,
            default: 0
        },
        // 间隔宽度
        gapWidth: {
            type: Number,
            default: 0
        },
        // 是否轮播模式
        swipe: {
            type: Boolean,
            default: false
        },
        // 是否循环
        loop: {
            type: Boolean,
            default: false
        },
        // 是否自动播放
        autoPlay: {
            type: Boolean,
            default: false
        },
        // 自动播换间隔
        interval: {
            type: Number,
            default: 4000
        },
        // 是否显示索引
        showIndex: {
            type: Boolean,
            default: false
        },
        // 页码类型 ['', 'dots', 'page']
        pageType: {
            type: String,
            default: '',
            validator(value) {
                // 这个值必须匹配下列字符串中的一个
                return ['', 'dots', 'page'].indexOf(value) !== -1;
            }
        },
        // 是否阻止浏览器默认行为
        preventDefault: {
            type: Boolean,
            default: true
        }
    },
    data: function() {
        return {
            slider: {},
            currentPageIndex: 0, // 当前项
            maxPageIndex: 0, // 最大索引(项数-1)
            dots: []
        };
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {
        // 等待
        setTimeout(() => {
            this._setSliderWidth();
            this._initSlider();
            if (this.autoPlay) {
                this._play();
            }
        }, 500);

        window.addEventListener('resize', () => {
            if (!this.slider) {
                return;
            }
            this._setSliderWidth(true);
            this._initSlider();
        });
    },
    methods: {
        _setSliderWidth(isResize) {
            // 重设slider宽度的时候 将区域高度恢复 初始化为0 避免初次渲染的时候的错误结构
            // 如果只有一个item 直接return 不做任何处理
            if (
                !this.$refs.sliderGroup ||
                !(this.$refs.sliderGroup instanceof Array)
            ) {
                return;
            }
            this.$refs.sliderGroup.style.height = '100%';

            const sliderWidth = this.$refs.slider.clientWidth;
            const items = (this.children = this.$refs.sliderGroup.children); // 获取所有子项挂载在this实例中children

            this.maxPageIndex = this.loop ? items.length - 3 : items.length - 1; // 初始化最大索引值

            // 总宽度
            let totalWidth = 0;
            // 项宽度：swipe(轮播模式) 项宽=slider视口宽;滑动模式 项宽=itemWidth参数
            let itemWidth = this.swipe ? sliderWidth : this.itemWidth;
            // 抛出swipe模式下未传itemWidth的error
            if (!this.swipe && !this.itemWidth) {
                console.error(
                    `slider组件的传送带模式下需要传入itemWidth的props`
                );
            }
            // 间隔宽度(第一和最后一项分别trim处理,两端去边)
            const gapWidth = this.gapWidth;
            for (let i = 0; i < items.length; i++) {
                const child = items[i];
                const img = items[0];
                addClass(child, 'slider-item');
                if (i > 0 && i < items.length - 1) {
                    // 中间
                    child.style.width = itemWidth + 'px';
                    child.style.marginLeft = gapWidth / 2 + 'px';
                    child.style.marginRight = gapWidth / 2 + 'px';
                    totalWidth += itemWidth + gapWidth;
                } else if (i === 0) {
                    // 第一项
                    itemWidth = this.swipe ? sliderWidth : itemWidth;
                    child.style.width = itemWidth + 'px';
                    child.style.marginLeft = '0';
                    child.style.marginRight = gapWidth / 2 + 'px';
                    totalWidth += itemWidth + gapWidth / 2;
                } else {
                    // 最后项
                    itemWidth = this.swipe ? sliderWidth : itemWidth;
                    child.style.width = itemWidth + 'px';
                    child.style.marginLeft = gapWidth / 2 + 'px';
                    child.style.marginRight = '0';
                    totalWidth += itemWidth + gapWidth / 2;
                }
            }

            if (this.loop && !isResize) {
                totalWidth += 2 * sliderWidth;
            }
            this.$refs.sliderGroup.style.width = totalWidth + 'px';
            // 初始化dots
            this._initDots();
        },
        _initSlider() {
            this.slider = new Bscroll(this.$refs.slider, {
                scrollX: true,
                scrollY: false,
                momentum: true,
                click: true,
                tap: this.swipe,
                snap: this.swipe
                    ? {
                        loop: this.loop,
                        threshold: 0.1,
                        speed: 400
                    }
                    : false,
                preventDefault: this.preventDefault
            });

            if (this.swipe) {
                const _this = this;
                this.slider.on('scrollEnd', () => {
                    const pageIndex = _this.slider.getCurrentPage().pageX;
                    _this.currentPageIndex = pageIndex;

                    if (_this.autoPlay) {
                        clearTimeout(_this.timer);
                        _this._play();
                    }
                });
            }
        },
        _play() {
            const _this = this;
            _this.timer = setTimeout(() => {
                let nextPageIndex = _this.currentPageIndex + 1;
                if (nextPageIndex > _this.maxPageIndex) {
                    nextPageIndex = 0;
                }
                _this.slider.goToPage(nextPageIndex, 0, 400);
            }, _this.interval);
        },
        _initDots() {
            this.dots = new Array(this.children.length);
        },
        refresh() {
            this._setSliderWidth(true);
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~common/main.styl';

.slider {
    position: relative;
    min-height: 1px;
    max-height: 60vh;
    padding: 0 0;

    .slider-group {
        height: 0;
        position: relative;
        overflow: hidden;
        white-space: nowrap;

        .slider-item {
            float: left;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
        }
    }

    .page {
        position: absolute;
        right: 6px;
        bottom: 12px;
        /* background rgba(0, 0, 0, 0.2); */
        background: gray9;
        word-vw(word12, grayF);
        width: vw(37);
        text-align: center;
        border-radius: all-radius;
        line-height: vw(20);
    }

    .dots {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 12px;
        text-align: center;
        font-size: 0;

        .dot {
            display: inline-block;
            margin: 0 2px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: gray9;

            &.active {
                width: 20px;
                border-radius: 5px;
                background: gray6;
            }
        }
    }
}
</style>
