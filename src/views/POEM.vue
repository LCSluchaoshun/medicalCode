<template>
    <div class="home">
       <header class="header">认识贲门失驰缓症</header>
        <div class="illness-what">
            <div class="title">什么是贲门失弛缓症？</div>
            <div class="msg">由于食管贲门部的神经肌肉功能障碍所致的食管功能障碍，引起食管下段括约肌弛缓不全，食物无法顺利通过而滞留，从而逐渐使食管张力、蠕动减低及食管扩张的一种疾病。</div>
            <img src="" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_book,
        img_drug,
        img_Magnifier,
        img_MedicalLogo,
        img_Medicine,
        img_bottomImg,
        img_MedicineBottle
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
            };
        },
        methods:{
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
        height 100%
        background grayF
        padding 0  vw(12)
        padding-top vw(37.5)
        flex-y()
        .header{
            word-vw(word24,#252525)
            font-weight bold
        }
    }
        // 什么是贲门失弛缓症？
    .illness-what{
        margin-top vw(34)
        padding vw(25.5) vw(48.5) vw(32) vw(48)
        .title{
            word-vw(word18,#252525)
            font-weight bold
        }
        .msg{
            margin-top vw(23)
            word-vw(word14,gray3)
            line-height vw(30)
        }
    }
</style>
