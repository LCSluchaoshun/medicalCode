<template>
    <div class="home">
        <header class="header">术前宣教</header>

        <!--适应症-->
        <div class="illness-what illness-what-top">
            <div class="content">
                <div class="title">术前准备</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                       <span>饮食</span>
                    </div>
                    <div class="msg-text-left">
                        <span>术前一天夜里十二点开始禁食水</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP1" alt="术前一天夜里十二点开始禁食水">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                      <span>签署同意书</span>
                    </div>
                    <div class="msg-text-left">
                        <span>患者及家属签知情同意书</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP2" alt="签署同意书">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>练习体位</span>
                    </div>
                    <div class="msg-text-left">
                        <span>练习俯卧位，头偏向右侧</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP3" alt="练习体位">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>留置套管针</span>
                    </div>
                    <div class="msg-text-left">
                        <span>护士会为您右手留置一枚套管针</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP4" alt="留置套管针">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>简装出发</span>
                    </div>
                    <div class="msg-text-left">
                        <span>取下活动性假牙、摘除金属饰品</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP5" alt="简装出发">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>睡眠</span>
                    </div>
                    <div class="msg-text-left">
                        <span>保持充足的睡眠</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP6" alt="保持充足的睡眠">
            </div>

        </div>

        <div class="illness-what  illness-what-bottom">
            <div class="content">
                <div class="title">术中小妙招</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>取俯卧位，头偏向右侧，双手放于身体两侧</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP7" alt="取俯卧位，头偏向右侧，双手放于身体两侧">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>尽量放松，用鼻吸气，用嘴慢慢呼气</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP8" alt="尽量放松，用鼻吸气，用嘴慢慢呼气">
            </div>

            <div class="content">
                <!--<div class="title">适应症</div>-->
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>有口水流出，不要吞咽，过程会有异物感，禁止屏气、向外吐或者是自行拉出内镜</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgBeforeERCP9" alt="有口水流出，不要吞咽，过程会有异物感">
            </div>

        </div>


        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_BeforeERCP1,
        img_BeforeERCP2,
        img_BeforeERCP3,
        img_BeforeERCP4,
        img_BeforeERCP5,
        img_BeforeERCP6,
        img_BeforeERCP7,
        img_BeforeERCP8,
        img_BeforeERCP9,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgBeforeERCP1: img_BeforeERCP1,
                imgBeforeERCP2: img_BeforeERCP2,
                imgBeforeERCP3: img_BeforeERCP3,
                imgBeforeERCP4:img_BeforeERCP4,
                imgBeforeERCP5: img_BeforeERCP5,
                imgBeforeERCP6: img_BeforeERCP6,
                imgBeforeERCP7: img_BeforeERCP7,
                imgBeforeERCP8: img_BeforeERCP8,
                imgBeforeERCP9: img_BeforeERCP9

            };
        },
        mounted() {
            document.title = "ERCP术前宣教";
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
            .msg-text-left{
                padding-left vw(16)
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
