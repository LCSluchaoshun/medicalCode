<template>
    <div class="tabber-container">
        <a
            v-for="(item, index) in tabs"
            :key="index"
            :class="['tabber-item', active === index ? 'active' : '']"
            @click.stop="tabClick(index)"
        >
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
            </svg>
            <div class="title">{{ item.title }}</div>
        </a>
    </div>
</template>

<script>
import { type } from 'os';
export default {
    name: 'Tabber',
    props: {
        tabs: {
            type: Array,
            default: () => {
                return [
                    {
                        title: '推荐',
                        page: 'front',
                        icon: '#icon-favorite'
                    },
                    {
                        title: '购物车',
                        page: 'cart',
                        icon: '#icon-favorite'
                    },
                    {
                        title: '消息',
                        page: 'news',
                        icon: '#icon-favorite'
                    },
                    {
                        title: '推广',
                        page: 'spread',
                        icon: '#icon-favorite'
                    },
                    {
                        title: '我的',
                        page: 'user',
                        icon: '#icon-favorite'
                    }
                ];
            }
        }
    },
    data() {
        return {
            active: 0
        };
    },
    methods: {
        tabClick(index) {
            this.active = index;
            this.$router.push({
                name: this.tabs[this.active].page
            });
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~@/common/main.styl';

// 目前整个tab高度为vh(52) 上面剩余高度为vh(615)
.tabber-container {
    position: fixed;
    bottom: 0;
    width: 100vw;
    background: tab-bg-color;
    padding: vh(8) cellPadding;
    flex-x();
    box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.05);

    .tabber-item {
        text-align: center;

        &.active {
            .icon {
                fill: tab-active-color;
            }

            .title {
                color: tab-active-color;
            }
        }

        .icon {
            width: vw(18);
            height: vh(18);
            overflow: hidden;
            fill: tab-color;
        }

        .title {
            font-size: word10;
            color: tab-color;
            line-height: vh(16);
        }
    }
}
</style>
