<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <!--<van-collapse v-model="activeNames">-->
            <!--<template v-for="(item,index) in navData" >-->
            <!--<van-collapse-item :title="item" :name="index" class="navBox">-->
            <!--<div class="content" :class="contentStyle(index)">-->
            <!--<div class="item" v-for="i in contentData">-->
            <!--<div class="content-title">{{i.title}}</div>-->
            <!--<img :src="i.img" :alt="i.title">-->
            <!--</div>-->
            <!--</div>-->
            <!--</van-collapse-item>-->
            <!--</template>-->

            <!--</van-collapse>-->
            <div v-for=" (item,index) in navData" class="navBox" :key="index">
                <div @click.stop="downClick(index)" class="title" :class="index === active?'activeStyle':''">
                    <span>{{item}}</span>
                    <van-icon name="arrow" v-if="index === 5"/>
                    <van-icon name="arrow-up" color="#fff" v-else-if="index === active"/>
                    <van-icon name="arrow-down" color="#333" v-else/>
                </div>
                <!--v-show="index === active && index + 1 !== 5"-->
                <div :class="index === active?'contentStyle':'contentShowStyle'">
                    <div class="content">
                        <div class="item" v-for="i in contentData">
                            <div class="content-title">{{i.title}}</div>
                            <img :src="i.img" :alt="i.title">
                        </div>
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
    import {img_bottomImg, img_1, img_2, img_3, img_4} from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'

    export default {
        name: 'StomachNav',
        components: {HeaderTitle},
        data() {
            return {
                activeNames: ['0'],
                navData: ['接收住院通知', '入院携带物品', '当日住院流程', '次日住院流程', '特殊注意事项', '我要咨询'],
                contentData: [
                    {title: '医保卡、住院证', img: img_1},
                    {title: '病历资料、押金', img: img_2},
                    {title: ' 当天心电图结果、血化验结果', img: img_3},
                    {title: '个人生活用品、无色糖块', img: img_4},
                ],
                imgBottomImg: img_bottomImg,
                active: -1,
                activeStyle: '',
                conentStyle: '',
                contentShowStyle: '',
            };
        },
        mounted() {
            document.title = "北京友谊医院消化中心内镜手术流程与注意事项";
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        },
        methods: {
            downClick(index) {
                if (index == this.active) {
                    this.active = -1
                } else {
                    this.active = index
                  console.log();
//
//                    let top = this.heightToTop(document.getElementsByClassName('content')[index].target)
                    console.log(document.getElementsByClassName('content')[index].offsetTop);
                    if(document.getElementsByClassName('content')[index].offsetTop >46){
                        window.scrollTo({
                            top:document.getElementsByClassName('content')[index].offsetTop,
                            behavior:'instant'
                        })
                    }

                }
                if (index === 5) {
                    this.$router.push({name: 'consultation'})
                }
            },
            heightToTop(ele) {
                //ele为指定跳转到该位置的DOM节点
                let root = document.body;
                let height = 0;
                do {
                    height += ele.offsetTop;
                    ele = ele.offsetParent;
                } while (ele !== root)
                return height;
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
            border-bottom vw(3) solid #F6F6F6
            .title {
                width vw(320)
                height vw(45)
                background #fff
                flex-x()
                padding 0 vw(32)
                box-sizing border-box
                border vw(1) solid #F6F6F6
            }
            .activeStyle {
                background #2CBE94
                color grayF
            }
            .contentShowStyle {
                height 0
                overflow-y hidden
                transition: all .3s
            }
            .contentStyle {
                height: vw(708);
                overflow-y hidden
                transition: all 0.3s
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
                    img {
                        height vw(129)
                        width vw(254)
                    }
                }
            }

        }

    }

    .navBox:last-child {
        border-bottom none
    }

    .bottom-img {
        width 100vw
        margin-top vw(22.5)
        padding-bottom vw(19)
        text-align center
        img {
            height vw(188)
            width vw(286)
        }
    }


</style>
