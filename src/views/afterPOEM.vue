<template>
    <div class="home">
        <header class="header">POEM治疗后注意事项</header>

        <!--接收入院通知-->
        <div class="illness-what illness-what-top">
            <div class="content">
                <div class="title">体位</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div>
                        <span>术后取半卧位，床头摇高20-30度。睡眠时最好保持斜卧位，头部抬高 15 ～30 度，防止反流不适。</span></div>
                </div>
            </div>
            <div class="img">
                <img :src="imgAfterPoem1" alt="体位">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">药物</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>应用抑酸药物、胃黏膜保护剂、营养支持治疗</span></div>
            </div>
            </div>
            <div class="img">
                <img :src="imgAfterPoem2" alt="药物">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">饮食</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>术后遵医嘱进食</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>一般需禁食48-72小时，如未出现并发症可遵医嘱开始进食流质饮食，注意食物温度不宜过高</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>饮食由温水到米汤、面汤等清淡流食，逐步到米粥、藕粉等半流食，再过渡到面片、蛋羹等软食，避免较早食用牛奶、豆浆、果汁等易胀气或胃酸的食品</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>餐后适当保持半坐位或坐位</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>餐后适当保持半坐位或避免刺激性及过冷、过热食物。进食过程注意食物要充分咀嚼，小口慢咽</span></div>
            </div>
            </div>
            <div class="img">
                <img :src="imgAfterPoem3" alt="药物">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">胃管护理</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>留置胃管者注意保护胃管，防止脱出</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>保持胃肠减压管通畅</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>发现固定胶布不牢固或者引流管内出现暗红色液体时应及时通知医护人员</span></div>
            </div>
            </div>
            <div class="img">
                <img :src="imgAfterPoem4" alt="胃管护理">
            </div>
        </div>
        <div class="illness-what illness-what-bottom">
            <div class="content">
            <div class="title">并发症的观察和护理 </div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>胸痛：术后有可能会出现程度不等的胸痛不适。请勿焦虑，轻微的胸痛，一般无需特殊处理，若疼痛较为剧烈影响休息和睡眠，在排除其他原因后可给予镇静药和止痛药。</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>感染：术后监测体温变化</span></div>
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>出血：由于胃食管连接部血管较丰富，术后有可能并发出血。如出现恶心、呕血、黑便、暗红色血便等情况及时通知医护人员。术后禁止做扩胸、剧烈抬头等颈胸部大幅度运动，避免用力咳嗽、用力排便等增加腹压的动作，以免牵拉伤口，引起疼痛，增加出血风险。</span>
                </div>
            </div>
            </div>
            <div class="img">
                <img :src="imgAfterPoem5" alt="并发症的观察和护理 ">
            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_AfterPoem1,
        img_AfterPoem2,
        img_AfterPoem3,
        img_AfterPoem4,
        img_AfterPoem5,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgAfterPoem1: img_AfterPoem1,
                imgAfterPoem2: img_AfterPoem2,
                imgAfterPoem3: img_AfterPoem3,
                imgAfterPoem4: img_AfterPoem4,
                imgAfterPoem5: img_AfterPoem5
            };
        },
        mounted() {
            document.title = "POEM治疗后注意事项";
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
    .illness-what  {
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
