<template>
    <div class="content">
        <div class="title">
            <span>北京友谊医院消化中心内镜</span>
            <span>手术流程与注意事项</span>
        </div>
        <div class="medical">
            <img :src="imgLogo" alt="">
            <span class="msg">北京友谊医院消化中心</span>
        </div>
        <div class="address">
            <img :src="imgRedCross" alt="">
            <span class="msg">国家消化系统疾病临床医学研究中心</span>
        </div>
    </div>
</template>

<script>

    import {img_logo, img_RedCross} from '../../assets/images/images'

    export default {
        name: 'HeaderTitle',
        data() {
            return {
                imgLogo: img_logo,
                imgRedCross: img_RedCross,
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '~common/main.styl';
    .content {
        text-align center
        .title {
            flex-y()
            line-height vw(30)
            font-weight bold
            word-vw(word24, gray3)
        }
        .medical {
            flex-x(center)
            margin-top vw(23.5)
        }
        .address {
            flex-x(center)
            margin-top vw(15)
        }

        .medical, .address {
            .msg {
                word-vw(word13, gray3)
                margin-left vw(8)
            }
        }
    }

</style>