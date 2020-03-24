<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <div v-for=" (item,index) in navData" class="navBox" :key="index">
                <div @click.stop="downClick(item)" class="title">
                    <span>{{item.title}}</span>
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>
    import {
        img_bottomImg,
    } from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'
    export default {
        name: 'StomachNav',
        components: {HeaderTitle},
        data() {
            return {
                navData: [
                    {
                    title:'认识贲门失驰缓症',
                    name:'POEM'
                    },
                    {
                        title:'认识POEM术',
                        name:'KnowPOEM'
                    },
                    {
                        title:'POEM治疗前注意事项',
                        name:'BeforePOEM'
                    },
                    {
                        title:'POEM治疗后注意事项',
                        name:'AfterPOEM'
                    },
                    {
                        title:'出院后家庭管理',
                        name:'POEMLeave'
                    },
                    {
                        title:'我要咨询',
                        name:'consultation'
                    }],
                imgBottomImg: img_bottomImg
            };
        },
        mounted() {
            document.title = "北京友谊医院消化中心内镜手术流程与注意事项";
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        },
        methods: {
            downClick(item) {
                    this.$router.push({name:item.name})
            },

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
        background-color #fafdff
    }

    .nav {
        margin-top vw(30)
        padding 0 vw(27.5)
        .navBox {
            border-bottom vw(3) solid #F6F6F6
            .title {
                padding 0
                margin  0
                width vw(320)
                height vw(45)
                background #fff
                flex-x()
                padding 0 vw(32)
                box-sizing border-box
                border vw(1) solid #F6F6F6
            }
            .content {
                background #F9F9F9
                padding 0 vw(33)
                padding-bottom vw(33)
                .item {
                    .content-title {
                        word-vw(word14, gray3)
                        line-height vw(18)
                        padding vw(16) 0
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
