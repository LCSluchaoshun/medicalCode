<template>
    <div class="home">
        <header class="header">认识POEM术</header>

        <!--接收入院通知-->
        <div class="illness-what">
            <div class="title">接收入院通知</div>
            <div class="msg">POEM手术是指经口内镜下食管括约肌切开术。目前是治疗贲门失弛缓症的首选，病人无需开胸手术，全部手术过程均在无痛状态下通过胃镜进行操作，手术时间短、创伤小。</div>

        </div>
        <!--治疗步骤-->
        <div class="pathogeny">
            <div class="content">
                <div class="title">内镜下治疗步骤如下</div>
                <div class="msg">
                    <div>1.食管粘膜层切开：用针状刀纵形切开粘膜层显露粘膜下层</div>
                    <div>2.分离粘膜下层，建立粘膜下隧道</div>
                    <div>3.环形肌切开</div>
                    <div>4.金属夹关闭粘膜层切口</div>
                    <div>5.观察并处理创面</div>
                    </div>
            </div>
            <div class="img">
                <img :src="imgKnowPOEM" alt="内镜下治疗步骤">
            </div>

        </div>

        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_KnowPOEM,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgKnowPOEM: img_KnowPOEM
            };
        },
        mounted(){
            document.title = "认识POEM术";
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        },
        methods: {}

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
        background-color #fafdff
        padding 0 vw(12)
        padding-top vw(37.5)
        flex-y()
        .header {
            word-vw(word24, #252525)
            font-weight bold
        }
    }

    // 什么是贲门失弛缓症？
    .illness-what {
        margin-top vw(34)
        border-bottom vw(12) solid #F6F6F6
        padding vw(25.5) vw(48.5) vw(32) vw(48)
        background-color grayF
        .title {
            word-vw(word18, #252525)
            font-weight bold
        }
        .msg {
            margin-top vw(23)
            word-vw(word14, gray3)
            line-height vw(23)
        }
    }

    // 病因？
    .pathogeny {
        background-color grayF
        padding-top vw(25.5)
        .content{
            padding  0 vw(48)
            .title {
                word-vw(word18, #252525)
                font-weight bold
            }
            .msg {
                margin-top vw(23)
                word-vw(word14, gray3)
                line-height vw(30)
            }
        }
        .img{
            margin-top vw(18)
            text-align center
            img {
                width vw(351)
                height vw(248)
            }
        }
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
