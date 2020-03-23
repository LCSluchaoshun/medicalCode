<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <div v-for=" (item,index) in navData" class="navBox" :key="index">
                <div @click.stop="downClick(index)" class="title" :class="index === active?'activeStyle':''">
                    <span>{{item}}</span>
                    <van-icon name="arrow" v-if="index === 5"/>
                    <van-icon name="arrow-up" color="#fff" v-else-if="index === active"/>
                    <van-icon name="arrow-down" color="#333" v-else/>
                </div>
                <div :class="index === active?'contentStyle0':'contentShowStyle'" v-if="index === 0">
                    <div class="content">
                        <div class="item">
                            <div class="content-title">就诊时医生会为您开具住院证</div>
                            <img :src="imgRuyuan1" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">请您耐心等待电话通知，医生将于住院前一周与您取得联系（电话号码以“<span style="color: red">010-6301</span>
                                或<span style="color: red">010-6313</span>”开头），通知您停止相关药物（<span
                                        style="color: red">抗凝血药物</span> 和<span style="color: red">抗抑郁药物</span>），不能停止的特殊用药，请您咨询专科医生；
                            </div>
                            <img :src="imgRuyuan2" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">请仔细阅读发放的<span style="color: red">“胃、肠息肉日间患者须知单”</span>，避免造成肠道准备不佳，无法进行肠镜操作
                            </div>
                            <img :src="imgRuyuan3" alt="">
                        </div>
                    </div>
                </div>

                <div :class="index === active?'contentStyle1':'contentShowStyle'" v-if="index === 1">
                    <div class="content">
                        <div class="item" v-for="i in contentData">
                            <div class="content-title">{{i.title}}</div>
                            <img :src="i.img" :alt="i.title">
                        </div>
                    </div>
                </div>

                <div :class="index === active?'contentStyle2':'contentShowStyle'" v-if="index === 2">
                    <div class="content">
                        <div class="item">
                            <div class="content-title">当日<span style="color: red">10:00 - 10:30</span>至门诊五层收费处日间窗口，办理日间住院手续
                            </div>
                            <img :src="imgZhuyuan1" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">办理后至日间病房</div>
                            <img :src="imgZhuyuan2" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">病房护士、医生接诊</div>
                            <img :src="imgZhuyuan3" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">下午请您在日间病房耐心等待，会有陪检人员将您送至内镜中心</div>
                            <img :src="imgZhuyuan4" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">治疗后回到日间病房进行术后观察及用药</div>
                            <img :src="imgZhuyuan5" alt="">
                        </div>
                    </div>
                </div>

                <div :class="index === active?'contentStyle3':'contentShowStyle'" v-if="index === 3">
                    <div class="content">
                        <div class="item">
                            <div class="content-title">自费患者：<span style="color: red">次日 7:30 </span>携带住院押金条、出院证明到<span
                                    style="color: red">门诊楼五层财务处窗口</span>办理出院（<span
                                    style="color: red">周六</span>出院患者请<span style="color: red">8:00</span>到<span
                                    style="color: red">内科楼一层住院处出院窗口</span>办理结账手续）
                            </div>
                            <img :src="imgCiri1" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">医保患者：次日可直接出院，不必到住院处办理手续，于4个工作日后携带<span
                                    style="color: red">押金条</span>到内科楼层住院处出院窗口办理结账手续
                            </div>
                            <img :src="imgCiri2" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">
                                <div style="text-align: center">温馨提示</div>
                                办理出院结算的患者较多，办理手续时均需<span style="color: red">取号</span>后顺序办理
                            </div>
                            <img :src="imgCiri3" alt="">
                        </div>
                    </div>
                </div>
                <div :class="index === active?'contentStyle4':'contentShowStyle'" v-if="index === 4">
                    <div class="content">
                        <div class="item">
                            <div class="content-title">病理结果：出院后<span style="color: red">10个工作日</span>后携带<span
                                    style="color: red">本人身份证</span>到<span style="color: red">内科楼地下一层病案科</span>复印病理报告结果
                            </div>
                            <img :src="imgTeshu1" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">防止低血糖：检查当日携带无色糖块、果汁饮料，遵医嘱应用</div>
                            <img :src="imgTeshu2" alt="">
                        </div>
                        <div class="item">
                            <div class="content-title">因日间患者较多，检查候诊，请您耐心等待</div>
                            <img :src="imgTeshu3" alt="">
                        </div>

                    </div>
                </div>
                <!--<div :class="index === active?'contentStyle':'contentShowStyle'">-->
                <!--<div class="content">-->
                <!--<div class="item" v-for="i in contentData">-->
                <!--<div class="content-title">{{i.title}}</div>-->
                <!--<img :src="i.img" :alt="i.title">-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->

            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>
    import {
        img_bottomImg,
        img_1,
        img_2,
        img_3,
        img_4,
        img_ruyuan1,
        img_ruyuan2,
        img_ruyuan3,
        img_zhuyuan1,
        img_zhuyuan2,
        img_zhuyuan3,
        img_zhuyuan4,
        img_zhuyuan5,
        img_ciri1,
        img_ciri2,
        img_ciri3,
        img_teshu1,
        img_teshu2,
        img_teshu3
    } from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'

    export default {
        name: 'StomachNav',
        components: {HeaderTitle},
        data() {
            return {
                activeNames: ['0'],
                navData: ['接收住院通知', '入院携带物品', '当日住院流程', '次日住院流程', '特殊注意事项', '我要咨询'],
                contentData: [
                    {title: '医保卡、住院证', img: img_1},
                    {title: '病历资料、押金', img: img_2},
                    {title: ' 当天心电图结果、血化验结果', img: img_3},
                    {title: '个人生活用品、无色糖块', img: img_4},
                ],
                imgRuyuan1: img_ruyuan1,
                imgRuyuan2: img_ruyuan2,
                imgRuyuan3: img_ruyuan3,
                imgZhuyuan1: img_zhuyuan1,
                imgZhuyuan2: img_zhuyuan2,
                imgZhuyuan3: img_zhuyuan3,
                imgZhuyuan4: img_zhuyuan4,
                imgZhuyuan5: img_zhuyuan5,
                imgCiri1: img_ciri1,
                imgCiri2: img_ciri2,
                imgCiri3: img_ciri3,
                imgTeshu1: img_teshu1,
                imgTeshu2: img_teshu2,
                imgTeshu3: img_teshu3,
                imgBottomImg: img_bottomImg,
                active: -1,
                activeStyle: '',
                conentStyle: '',
                contentShowStyle: '',
            };
        },
        mounted() {
            document.title = "北京友谊医院消化中心内镜手术流程与注意事项";
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            })
        },
        methods: {
            downClick(index) {
                if (index == this.active) {
                    this.active = -1
                } else {
                    this.active = index
                    console.log();
//
//                    let top = this.heightToTop(document.getElementsByClassName('content')[index].target)
                    console.log(document.getElementsByClassName('content')[index].offsetTop);
                    if (document.getElementsByClassName('content')[index].offsetTop > 42) {
                        window.scrollTo({
                            top: document.getElementsByClassName('content')[index].offsetTop,
                            behavior: 'instant'
                        })
                    }

                }
                if (index === 5) {
                    this.$router.push({name: 'consultation'})
                }
            },
            heightToTop(ele) {
                //ele为指定跳转到该位置的DOM节点
                let root = document.body;
                let height = 0;
                do {
                    height += ele.offsetTop;
                    ele = ele.offsetParent;
                } while (ele !== root)
                return height;
            }
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
        background grayF
        padding-top vw(43)
        background-color #fafdff
    }

    .nav {
        margin-top vw(30)
        padding 0 vw(27.5)
        .navBox {
             border-bottom vw(3) solid #F6F6F6
             background-color #f9f9f9
            .title {
                padding 0
                margin  0
                width vw(320)
                height vw(45)
                background #fff
                flex-x()
                padding 0 vw(32)
                box-sizing border-box
                border vw(1) solid #F6F6F6
            }
            .activeStyle {
                background #2CBE94
                color grayF
            }
            .contentShowStyle {
                height 0
                overflow-y hidden
                transition: all .4s
            }
            .contentStyle0 {
                height: vw(690);
                overflow-y hidden
                transition: all 0.4s
            }
            .contentStyle1 {
                height: vw(752);
                overflow-y hidden
                transition: all 0.4s
            }
            .contentStyle2 {
                height: vw(965);
                overflow-y hidden
                transition: all 0.4s
            }
            .contentStyle3 {
                height: vw(695);
                overflow-y hidden
                transition: all 0.4s
            }
            .contentStyle4 {
                height: vw(640);
                overflow-y hidden
                transition: all 0.4s
            }
            .content {
                background #F9F9F9
                padding 0 vw(33)
                padding-bottom vw(33)
                height inherit
                .item {
                    .content-title {
                        word-vw(word14, gray3)
                        line-height vw(18)
                        padding vw(16) 0
                    }
                    img {
                        height vw(129)
                        width vw(254)
                    }
                }
            }

        }

    }

    .navBox:last-child {
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
