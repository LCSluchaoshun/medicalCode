<template>
    <div class="home">
        <header class="header">术后宣教</header>

        <!--饮食篇-->
        <div class="illness-what illness-what-top">
            <div class="content">
                <div class="title">饮食篇</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>由于每个病人情况不同，医生会根据病人术中操作情况，术后血结果以及患者主诉和症状来调节饮食</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>一般禁食24小时后可由流食过度到半流食、软食、低脂饮食，避免粗纤维食物摄入，防止十二指肠乳头摩擦导致渗血</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgAfterERCP1" alt="饮食篇">
            </div>
        </div>

        <!--管路篇-->
        <div class="illness-what">
            <div class="content">
                <div class="title">管路篇</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>若您发现胶布松动，责任护士会为您及时更换</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>翻身及活动时，请您注意防止管路脱出、打折</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>请您保持引流管通畅，避免打折及受压</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>请您注意引流袋位置应低于腰部水平，利于胆汁引流</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>我们会及时观察引流液颜色、性质、量，若发现问题，我们会联系您的主管医生及时处理</span>
                    </div>
                </div>
            </div>
        </div>

        <!--症状观察篇-->
        <div class="illness-what">
            <div class="content">
                <div class="title">症状观察篇</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>术后护士会经常巡视病房，若您有不适，请及时告知医护人员，我们会第一时间为您进行相应的处理</span>
                    </div>
                </div>
                <div class="msg-btn">
                    <div class="top">
                        <span>腹痛</span>
                        <span>发热</span>
                    </div>
                    <div class="Middle">
                        <span>黄痘加重</span>
                        <span>呕吐呕血</span>
                    </div>
                    <div class="bottom">
                        黑便、鲜血便
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgAfterERCP2" alt="症状观察篇">
            </div>
        </div>


        <!--药物治疗篇-->
        <div class="illness-what">
            <div class="content">
                <div class="title">药物治疗篇</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>抑制胃酸分泌：如：耐信、洛赛克等</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>抑制胰酶分泌：善宁，根据您的病情可能需要持续24小时静脉泵入</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>抗炎：根据病情，应用各类消炎药</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>补液：葡萄糖、钾等维持电解质平衡</span>
                    </div>
                </div>
            </div>
        </div>

        <!--化验指标篇-->
        <div class="illness-what">
            <div class="content">
                <div class="title">化验指标篇</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>定时采血可以非常清楚的看到各个指标的变化，淀粉酶的情况，从而判断病人的情况</span>
                    </div>
                </div>
                <div class="msg-btn">
                    <div class="Middle">
                        <span>术后即刻血</span>
                        <span>术后6小时</span>
                    </div>
                    <div class="bottom">
                        术后24小时
                    </div>
                </div>
                <div class=" msg msg-bottom">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>抽取血常规和生化P2+P3+AMY→比较结果变化。</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgAfterERCP3" alt="化验指标篇">
            </div>
        </div>

        <div class="illness-what illness-what-bottom">
            <div class="content">
                <div class="title">生活护理篇 </div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>个人卫生</span>
                    </div>
                    <div class="msg-text-left">
                        <span>根据您的病情需要和自理能力，为您进行口腔护理，保持口腔清洁，防止感染。</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgAfterERCP4" alt="个人卫生 ">
            </div>

            <div class="content">
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>床单位整洁</span>
                    </div>
                    <div class="msg-text-left">
                        <span>  当床单、被罩被安尔碘、血渍、尿便等污染了，责任护士会为您进行更换，为您营造舒适的休息环境。</span>
                    </div>

                </div>
            </div>
            <div class="img">
                <img :src="imgAfterERCP5" alt="床单位整洁 ">
            </div>
        </div>



        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_AfterERCP1,
        img_AfterERCP2,
        img_AfterERCP3,
        img_AfterERCP4,
        img_AfterERCP5,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgAfterERCP1: img_AfterERCP1,
                imgAfterERCP2: img_AfterERCP2,
                imgAfterERCP3: img_AfterERCP3,
                imgAfterERCP4: img_AfterERCP4,
                imgAfterERCP5: img_AfterERCP5
            };
        },
        mounted() {
            document.title = "ERCP术后宣教";
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
             // 按钮状
             .msg-btn{
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
                       margin-top vw(16)
                   }
               }

            .msg-bottom{
                margin-top vw(16)
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

    .illness-what-bottom {
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
