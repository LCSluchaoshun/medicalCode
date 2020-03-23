<template>
    <div class="home">
        <header class="header">POEM治疗前注意事项</header>

        <!--接收入院通知-->
        <div class="illness-what">
            <div class="title">术前注意事项</div>
            <div class="msg">
                <div class="msg-text"> <div class="dian"></div><span>高血压者降压药使用至手术日晨，使血压维持在正常范围</span></div>
                <div class="msg-text"><div class="dian"></div><span>冠心病患者在心脏情况稳定，近期无频繁发作心绞痛和不稳定型心绞痛的情况即可手术</span></div>
                <div class="msg-text"><div class="dian"></div><span>慢性心功能不全者给予强心利尿治疗，使心功能达Ⅱ级以上</span></div>
                <div class="msg-text"><div class="dian"></div><span>合并呼吸系统疾病者术前常规行呼吸功能测定</span></div>
                <div class="msg-text"><div class="dian"></div><span>服用抗凝、抗血小板聚集药物者须停药一周</span></div>
                <div class="msg-text"><div class="dian"></div><span>凝血功能正常方可考虑手术治疗</span></div>
                <div class="msg-text"><div class="dian"></div><span>合并糖尿病者保持 接近血糖正常并稳定</span></div>
            </div>

        </div>
        <!--治疗步骤-->
        <div class="pathogeny">
            <div class="content">
                <div class="title">术前需要怎么准备呢</div>
                <div class="msg">
                    <div >1.医生会评估患者全身情况，询问患者是否有冠心病、高血压、糖尿病病史及其它禁忌证。完善心电图、胸片、心肺功能、血常规、血型、凝血功能等术前检查。</div>
                    <div >2.营养状况差者给予营养支持。</div>
                    <div >3.医生会向患者及家属告知手术的必要性和风险，签署手术同意书。</div>
                    <div >4.消化道准备：常规提前一天开始流质饮食，食管扩张明显者需遵医嘱提前禁食水，当日禁食、禁水。</div>
                    <div >5.治疗日穿领口宽松上衣，以便麻醉医生术中操作。</div>
                    <div >6. 治疗日须有一名家属（直系亲属或被委托人）陪同，手术由内镜中心安排（具体时间待通知），手术前有专人护送，请耐心等候。</div>
                    <div >7.如出现头晕、大汗、心慌等低血糖表现，请卧床并用呼叫器呼叫护理人员，勿随意走动。</div>
                    <div >9.术前取出活动性义齿，常规在右上肢建立静脉留置针，保证输液通畅，便于术中及时给药。</div>
                    <div >10.术中您需取左侧卧位，松开衣领和腰带，放松身体。</div>
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
            document.title = "POEM治疗前注意事项";
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
            line-height vw(20)
            .msg-text{
                margin-bottom vw(13)
                flex-x(center,flex-start)
                .dian{
                    width vw(10)
                    height vw(10)
                    margin  vw(5) vw(6) 0 0
                    background-color  #CCCCCC
                    border-radius all-radius
                }
                span{
                    flex 1
                }
            }
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
                line-height vw(20)
                div{
                    margin-bottom vw(13)
                }

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
