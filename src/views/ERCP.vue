<template>
    <div class="home">
        <header class="header">认识ERCP术</header>

        <!--接收入院通知-->
        <div class="illness-what  illness-what-top">
            <div class="content">
                <div class="title">ERCP术是什么</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>经内镜逆行性胰胆管造影术简称为ERCP。将十二指肠镜插至十二指肠降部，找到十二指肠乳头，由活检钳道内插入造影导管至乳头开口部，注入造影剂后x线摄片，以显示胰胆管的技术。</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div><span>现已发展为治疗胰胆疾病的内镜治疗方法</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP1" alt="ERCP术是什么">
            </div>
        </div>
        <!--ERCP优点与应用-->
        <div class="illness-what">
            <div class="content">
                <div class="title">ERCP优点与应用</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>优点：不用开刀，创伤小，手术时间短，并发症较外科手术少，住院时间也大大缩短。</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div><span>范围：除了显影以外，还可通过ERCP在内镜下放置鼻胆引流管（ENBD）治疗急性化脓性梗阻性胆管炎、行胆管支架引流术、 胆总管结石取石术等微创治疗。</span>
                    </div>
                </div>
            </div>
        </div>


        <!--适应症-->
        <div class="illness-what">
            <div class="content">
                <div class="title">适应症</div>
                <div class="msg">
                    <div class="msg-text">
                       <span>1.胰腺疾病：胰腺肿瘤、慢性胰腺炎、胰腺囊肿等</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP2" alt="适应症">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                      <span>2.内镜下胰胆管取石</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP3" alt="内镜下胰胆管取石">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                       <span>3.胰管或胆管的组织活检</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP4" alt="胰管或胆管的组织活检">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                       <span>4.胆道梗阻引起的黄疸</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP5" alt="胆道梗阻引起的黄疸">
            </div>
        </div>

        <div class="illness-what  illness-what-bottom">
            <div class="content">
                <div class="title">相对禁忌症</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>严重心脏病</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP6" alt="严重心脏病">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>对造影剂过敏</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP7" alt="对造影剂过敏">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>肾功能不全</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP8" alt="肾功能不全">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>不能配合</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgERCP9" alt="不能配合">
            </div>
        </div>


        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_ERCP1,
        img_ERCP2,
        img_ERCP3,
        img_ERCP4,
        img_ERCP5,
        img_ERCP6,
        img_ERCP7,
        img_ERCP8,
        img_ERCP9,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgERCP1: img_ERCP1,
                imgERCP2: img_ERCP2,
                imgERCP3: img_ERCP3,
                imgERCP4: img_ERCP4,
                imgERCP5: img_ERCP5,
                imgERCP6: img_ERCP6,
                imgERCP7: img_ERCP7,
                imgERCP8: img_ERCP8,
                imgERCP9: img_ERCP9

            };
        },
        mounted() {
            document.title = "认识ERCP术";
            window.scrollTo({
                top: 0,
                behavior: 'instant'
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

        .illness-what-top{
            margin-top vw(34)
        }
    // 什么是贲门失弛缓症？
    .illness-what {
        border-bottom vw(12) solid #F6F6F6
       /* padding vw(25.5) vw(48.5) vw(32) vw(48)*/
        background-color grayF
        padding-top vw(25.5)
        .title {
            word-vw(word18, #252525)
            font-weight bold
        }
        .content {
            padding 0 vw(48)
        .msg {
            margin-top vw(23)
            word-vw(word14, gray3)
            line-height vw(20)
            .msg-text {
                margin-bottom vw(13)
                flex-x(center, flex-start)
                .dian {
                    width vw(10)
                    height vw(10)
                    margin vw(5) vw(6) 0 0
                    background-color #CCCCCC
                    border-radius all-radius
                }
                span {
                    flex 1
                }
            }
        }
    }
        .img {
            margin-top vw(18)
            text-align center
            img {
                width vw(351)
                height vw(248)
            }
        }
    }

    .illness-what-bottom{
        border-bottom  none
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
