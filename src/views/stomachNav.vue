<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <div v-for=" (item,index) in navData" class="navBox" :key="index">
                <div @click.stop="downClick(index)" class="title" :class="index+1 === active?'activeStyle':''">
                    <span>{{item}}</span>
                    <van-icon name="arrow"  v-if="index+1 ===5 "/>
                    <van-icon name="arrow-up" color="#fff" v-else-if="index+1 === active"/>
                    <van-icon name="arrow-down" color="#333" v-else/>
                </div>
                <div class="content" v-show="index+1 === active && index+1 !==5">
                    <div class="item" v-for="i in contentData">
                        <div class="content-title">{{i.title}}</div>
                        <img :src="i.img" :alt="i.title">
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {img_bottomImg,img_1,img_2,img_3,img_4} from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'

    export default {
        name: 'StomachNav',
        components: {HeaderTitle},
        data() {
            return {
                navData:['接收住院通知','当日住院流程','次日住院流程','特殊注意事项','特殊注意事项'],
                contentData: [
                    {title:'医保卡、住院证',img:img_1},
                    {title:'病历资料、押金',img:img_2},
                    {title:' 当天心电图结果、血化验结果',img:img_3},
                    {title:'个人生活用品、无色糖块',img:img_4},
                    ],
                imgBottomImg: img_bottomImg,
                active: 0,
                activeStyle: ''
            };
        },
        methods: {
            downClick(index) {
                if (index + 1 == this.active) {
                    this.active = 0
                } else {
                    this.active = index + 1
                }
            }
        }

    };
</script>

<style scoped lang="stylus">
    @import '~common/main.styl';
    ::-webkit-scrollbar { //scroll滚动条设置
        width: 0px;
        height: 0px;
    }

    .home {
        background grayF
        padding-top vw(43)
    }

    .nav {
        margin-top vw(30)
        padding 0 vw(27.5)
        .navBox {
            border-bottom vw(12) solid #F6F6F6
            .title {
                width vw(320)
                height vw(45)
                background #fff
                flex-x()
                padding 0 vw(32)
            }
            .activeStyle {
                background #2CBE94
            }
            .content {
                background #F9F9F9
                padding 0 vw(33)
                .item {
                    .content-title {
                        word-vw(word14, gray3)
                        height vw(47)
                        line-height vw(47)
                    }
                    .img {
                        height vw(129)
                        width vw(254)
                    }
                }
            }

        }
    }

    .bottom-img{
        width 100vw
        margin-top vw(22.5)
        padding-bottom vw(19)
        text-align center
        img{
            height vw(188)
            width vw(286)
        }
    }


</style>
