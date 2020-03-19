<template>
    <div class="home">
        <header class="header">认识贲门失驰缓症</header>

        <!--什么是-->
        <div class="illness-what">
            <div class="title">什么是贲门失弛缓症？</div>
            <div class="msg">由于食管贲门部的神经肌肉功能障碍所致的食管功能障碍，引起食管下段括约肌弛缓不全，食物无法顺利通过而滞留，从而逐渐使食管张力、蠕动减低及食管扩张的一种疾病。</div>

            <div class="img">
                <img :src="imgPOEM1" alt="什么是贲门失弛缓症">
            </div>
        </div>
        <!--病因-->
        <div class="pathogeny">
            <div class="content">
                <div class="title">贲门失弛缓症的病因是什么？</div>
                <div class="msg">1、原发性贲门失弛缓症的病因可能与病毒感染、自身免疫因素及遗传因素有关。</div>
            </div>
            <div class="img">
                <img :src="imgPOEM2" alt="贲门失弛缓症的病因是什么">
            </div>
            <div class="content">
                <div class="msg">2、继发性贲门失弛缓症指其继发于某些明确疾病，迷走神经切断术、胃窦切除术等。</div>
            </div>
            <div class="img">
                <img :src="imgPOEM3" alt="贲门失弛缓症的病因是什么">
            </div>
        </div>
        <!--表现-->
        <div class="performance">
            <div class="content">
                <div class="title">贲门失弛缓症有哪些表现?</div>
                <div class="msg">
                    <div class="top">
                        <span>吞咽困难</span>
                        <span>食物反流</span>
                    </div>
                    <div class="Middle">
                        <span>体重下降</span>
                        <span>出血贫血</span>
                    </div>
                    <div class="bottom">
                        疼痛
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgPOEM4" alt="">
            </div>
        </div>

        <!--辅助检查-->
        <div class="inspect">
            <div class="content">
                <div class="title">贲门失弛缓症的辅助检查</div>
                <div class="msg">
                    <div class="top">
                        食管钡餐X射线造影
                    </div>
                    <div class="Middle">
                        食管动力学检测
                    </div>
                    <div class="bottom">
                        疼痛
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgPOEM5" alt="贲门失弛缓症的辅助检查">
            </div>
        </div>

        <!--并发症-->
        <div class="complication">
            <div class="content">
                <div class="title">贲门失弛缓症的并发症</div>
                <div class="msg">
                    <div class="top">
                        呼吸道并发症 <span class="small">(吸入性肺炎、支气管扩张等)</span>
                    </div>
                    <div class="Middle">
                        <span>食管炎</span>
                        <span>食管扩张</span>
                    </div>
                    <div class="bottom">
                        食管癌、贲门癌

                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgPOEM6" alt="贲门失弛缓症的并发症">
            </div>
        </div>
        <div
        class="bootomImg">
            <img :src="imgPOEM7" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_POEM1,
        img_POEM2,
        img_POEM3,
        img_POEM4,
        img_POEM5,
        img_POEM6,
        img_POEM7
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgPOEM1: img_POEM1,
                imgPOEM2: img_POEM2,
                imgPOEM3: img_POEM3,
                imgPOEM4: img_POEM4,
                imgPOEM5: img_POEM5,
                imgPOEM6: img_POEM6,
                imgPOEM7: img_POEM7,
            };
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
        background grayF
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
        .title {
            word-vw(word18, #252525)
            font-weight bold
        }
        .msg {
            margin-top vw(23)
            word-vw(word14, gray3)
            line-height vw(30)
        }
        .img {
            margin-top vw(18)
            text-align center
            img {
                width vw(205)
                height vw(180.5)
            }

        }
    }

    // 病因？
    .pathogeny {
        border-bottom vw(12) solid #F6F6F6
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

        .img {
            margin-top vw(18)
            text-align center
            img {
                width vw(351)
                height vw(197)
            }

        }
    }

    // 表现
    .performance {
        border-bottom vw(12) solid #F6F6F6
        padding-top vw(25.5)
        .content{
            padding  0 vw(48)
            .title {
                word-vw(word18, #252525)
                font-weight bold
            }
            .msg {
              .top,.Middle{
                  margin-top vw(16)
                  flex-x()
                  span{
                      width  vw(120)
                      height  vw(30)
                      line-height vw(30)
                      text-align center
                      word-vw(word14, #333)
                      border-radius  all-radius
                      background-color #F3F3F3
                  }
              }
                .bottom{
                    margin-top vw(16)
                    width  vw(254.5)
                    height  vw(30)
                    line-height vw(30)
                    text-align center
                    word-vw(word14, #333)
                    border-radius  all-radius
                    background-color #F3F3F3
                }
                .top{
                    margin-top vw(28)
                }
            }
        }

        .img {
            margin-top vw(32)
            text-align center
            img {
                width vw(294.5)
                height vw(171)
            }

        }
    }

    // 辅助检查
    .inspect {
        border-bottom vw(12) solid #F6F6F6
        padding-top vw(25.5)
        .content{
            padding  0 vw(48)
            .title {
                word-vw(word18, #252525)
                font-weight bold
            }
            .msg {
              .top,.Middle ,.bottom{
                    margin-top vw(12)
                    width  vw(254.5)
                    height  vw(30)
                    line-height vw(30)
                    text-align center
                    word-vw(word14, #333)
                    border-radius  all-radius
                    background-color #F3F3F3
                }
                .top{
                    margin-top vw(28)
                }
            }
        }

        .img {
            margin-top vw(27.5)
            text-align center
            img {
                width vw(351)
                height vw(179.6)
            }

        }
    }

    // 并发症
    .complication {
        padding-top vw(25.5)
        .content{
            padding  0 vw(48)
            .title {
                word-vw(word18, #252525)
                font-weight bold
            }
            .msg {
              .top,.bottom{
                    margin-top vw(12)
                    width  vw(254.5)
                    height  vw(30)
                    line-height vw(30)
                    text-align center
                    word-vw(word14, #333)
                    border-radius  all-radius
                    background-color #F3F3F3
                }
                .Middle{
                    margin-top vw(16)
                    flex-x()
                    span{
                        width  vw(120)
                        height  vw(30)
                        line-height vw(30)
                        text-align center
                        word-vw(word14, #333)
                        border-radius  all-radius
                        background-color #F3F3F3
                    }
                }
                .top{
                    margin-top vw(28)
                    .small{
                        font-size word12
                    }
                }
            }
        }

        .img {
            margin-top vw(15)
            text-align center
            img {
                width vw(351)
                height vw(179.6)
            }

        }
    }

    .bootomImg{
        img{
            width vw(375)
            height  vw(322)
        }
    }
</style>
