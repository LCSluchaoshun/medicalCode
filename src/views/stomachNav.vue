<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <div v-for=" item in navData" class="navBox">
                <span class="title">{{item}}</span>
                <div class="content">
                    内容内容
                </div>
            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {img_bottomImg} from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'

    export default {
        name: 'StomachNav',
        components: {HeaderTitle},
        data() {
            return {
                navData:['1111','11111','1231','2131441'],
                imgBottomImg: img_bottomImg,
            };
        },

    };
</script>

<style scoped lang="stylus">
    @import '~common/main.styl';
    ::-webkit-scrollbar { //scroll滚动条设置
        width: 0px;
        height: 0px;
    }

    .home {
        display flex
        flex-direction column
        justify-content space-between
        height 100vh
        background grayF
        padding-top vw(43)
    }

        .navBox{
            width vw(320)
            height vw(45)
            background grayF
            border-bottom  vw(12) solid  #F6F6F6
        }

    .bottom-img{
        width 100vw
        padding-bottom vw(19)
        text-align center
        img{
            height vw(188)
            width vw(286)
        }
    }

</style>
