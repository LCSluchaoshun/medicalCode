<template>
    <div class="home">
        <header class="header">出院出院后您需要注意</header>

        <!--接收入院通知-->
        <div class="illness-what  illness-what-top">
            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>出现发热、腹痛，黄疸加重等情况及时就诊</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgErcpLeave1" alt="生活指导">
            </div>

            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>去除诱因，少吃高胆固醇及油腻刺激性食物</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgErcpLeave2" alt="生活指导">
            </div>

            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>禁止吸烟、饮酒，定期监测血压及血糖情况</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgErcpLeave3" alt="生活指导">
            </div>

            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>按时服药，如有不适，及时就医</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgErcpLeave4" alt="生活指导">
            </div>
            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>请您按时复诊</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgErcpLeave5" alt="生活指导">
            </div>


        </div>


        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_ErcpLeave1,
        img_ErcpLeave2,
        img_ErcpLeave3,
        img_ErcpLeave4,
        img_ErcpLeave5,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgErcpLeave1: img_ErcpLeave1,
                imgErcpLeave2: img_ErcpLeave2,
                imgErcpLeave3: img_ErcpLeave3,
                imgErcpLeave4: img_ErcpLeave4,
                imgErcpLeave5: img_ErcpLeave5
            };
        },
        mounted() {
            document.title = "出院出院后您需要注意";
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

    .illness-what-top {
        margin-top vw(34)
    }

    // 什么是贲门失弛缓症？
    .illness-what {
       /* border-bottom vw(12) solid #F6F6F6*/
        /* padding vw(25.5) vw(48.5) vw(32) vw(48)*/
        background-color grayF
       /* padding-top vw(25.5)*/
       /* .title {
            word-vw(word18, #252525)
            font-weight bold
        }*/
        .content {
            padding 0 vw(30)
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
