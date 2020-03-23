<template>
    <div class="home">
        <header class="header">在线咨询 <span class="test">(服务测试，暂不保存)</span></header>
        <div class="content">
            <div class="item">
                <div class="title">
                    <img :src="imgXing" alt="">
                    <span class="msg">请输入您要咨询的信息</span>
                </div>
                <div class="remark">
                    <textarea class="area" placeholder="点击输入..." v-model="remark"> </textarea>
                </div>
            </div>
            <div class="middle">请留下您的联系方式</div>
            <div class="item">
                <div class="title">
                    <img :src="imgXing" alt="">
                    <span class="msg">姓名</span>
                </div>
                <div class="input">
                    <van-field v-model="name"/>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <img :src="imgXing" alt="">
                    <span class="msg">性别<span class="title-msg">（请点击选择性别，默认男士）</span></span>
                </div>
                <div class="sex-box">
                    <div class="nan"  @click.stop="sexClickHandle">
                        <img class="img" :src="sexValue" alt="">
                        男士</div>
                    <div class="nv" @click.stop="sexClickHandle">
                        <img  class="img" :src="sexValue2" alt="">
                        女士</div>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <img :src="imgXing" alt="">
                    <span class="msg">联系方式</span>
                </div>
                <van-field v-model="phone"/>
            </div>
            <div class="item">
                <div class="title">
                    <img :src="imgXing" alt="">
                    <span class="msg">科室 <span class="title-msg">（不清楚科室的请填写病症）</span></span>
                </div>
                <van-field v-model="room"/>
            </div>

            <div class="submitBtn" @click.stop="submitBtn">立即提交</div>
        </div>

        <div class="bootomImg">
            <img :src="imgConsultation" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_Consultation,
        img_Xing,
        img_NoSelected,
        img_Selected
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgConsultation: img_Consultation,
                imgXing: img_Xing,
                imgNoSelected:img_NoSelected,
                imgSelected:img_Selected,
                sexStatus:1,
                name:'',
                phone:'',
                room:'',
                remark: ''
            };
        },
        computed:{
            sexValue(){
                return this.sexStatus ===1 ? this.imgSelected:this.imgNoSelected
            },
            sexValue2(){
                return this.sexStatus ===2 ? this.imgSelected:this.imgNoSelected
            }
        },
        methods: {
            sexClickHandle(){
                this.sexStatus=this.sexStatus === 1? 2:1
            },
            submitBtn(){
                if(this.name&&this.phone&&this.remark&&this.room){
                    this.$toast.success('保存成功')
                }else{
                    this.$toast.fail('请将信息填写完整')
                }

            }
        },
        mounted(){
            document.title = "在线咨询";
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        },

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
        width 100vw
        background-color #fafdff
        padding-top vw(37.5)
        .header {
            flex-y()
            word-vw(word24, #252525)
            font-weight bold
            margin-bottom vw(40)
            .test{
                word-vw(word12, red)
                font-weight 400

            }
        }
    }

    .content {
        padding 0 vw(28.5)
        .item {
            width 100%
            .van-cell {
                border vw(0.5) solid #ccc
                height vw(30)
                word-vw(word13, gray3)
                line-height vw(30)
                padding 0 vw(10)
            }
        }
    }

    .title {
        padding vw(12) 0
        flex-x(flex-start, center)
        .msg {
            word-vw(word13, black)
            margin-left vw(7)
            .title-msg {
                word-vw(word12, gray3)
            }
        }

    }

    .middle {
        font-weight bold
        word-vw(word15, black)
        margin-top vw(20)
    }

    .remark {
        padding vw(16)
        background grayF
        border vw(0.5) solid #ccc
        height vw(150)

        .area {
            height 100%
            width 100%
            word-vw(word13, gray3)
            line-height vw(18)
        }
    }

    .submitBtn {
        height vw(40)
        width vw(320px)
        background-color #2CBE94
        color grayF
        flex-x(center)
        margin vw(28) 0 vw(24.5) 0
    }
        .sex-box{
            height vw(30)
            width vw(320px)
            background-color #2CBE94
            color grayF
            flex-x()
            padding vw(7.5) 0
            .nan,.nv{
                flex 1
                display flex
                justify-content center
                align-items center
                word-vw(word15,grayF)
                .img{
                    margin-right vw(10)
                    height vw(10)
                    width vw(10)
                }
            }
            .nan{
                border-right vw(0.5) solid #13785B
            }
        }

    .bootomImg {
        text-align center
        img {
            width vw(293)
            height vw(302)
        }
    }
</style>
