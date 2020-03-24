<template>
    <div class="home">
        <header class="header">出院后家庭管理</header>

        <!--接收入院通知-->
        <div class="illness-what  illness-what-top">
            <div class="content">
                <div class="title">生活指导</div>
                <div class="msg">
                    <div class="msg-text">
                        <div class="dian"></div><span>注意避免情绪激动，保持舒畅的心情</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div><span>注意避保证充足睡眠，规律作息免情绪激动，保持舒畅的心情</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div><span>保持大便通畅，如出现便秘可适当应用缓泻剂</span>
                    </div>
                    <div class="msg-text">
                        <div class="dian"></div><span>忌烟忌酒，养成良好的生活习惯</span>
                    </div>
                </div>
            </div>
            <div class="img">
                <img :src="imgPoemLeave1" alt="生活指导">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">活动指导</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>劳逸结合，勿过于劳累，１个月内避免重体力劳动和剧烈运动</span></div>
            </div>
            </div>
            <div class="img">
                <img :src="imgPoemLeave2" alt="活动指导">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">用药指导</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>遵医嘱按时服用抑酸药及黏膜保护剂，注意抑酸药和胃黏膜保护剂需饭前服用</span>
                </div>
            </div>
            </div>
            <div class="img">
                <img :src="imgPoemLeave3" alt="用药指导">
            </div>
        </div>
        <div class="illness-what">
            <div class="content">
            <div class="title">饮食指导</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>饮食宜清淡易消化，少量多餐，细嚼慢咽，营养丰富，均衡膳食，避免饮酒、咖啡、浓茶及坚硬、粗糙食物。餐后勿立即平卧，保持站立式或坐位１小时后再卧位。睡前不宜饱餐</span>
                </div>
            </div>
            </div>
            <div class="img">
                <img :src="imgPoemLeave4" alt="饮食指导">
            </div>
        </div>
        <div class="illness-what illness-what-bottom">
            <div class="content">
            <div class="title">定时复查</div>
            <div class="msg">
                <div class="msg-text">
                    <div class="dian"></div>
                    <span>常规出院后两周需至消化科门诊进行复诊，请您复查时携带出院记录，以便医生更详细的了解您的病情，医生会根据您的情况制定下一步治疗方案及复诊时间。按医嘱定期复查胃镜或食管钡餐等检查，观察食管创面愈合和贲门口情况。如出现吞咽困难加重，或其他不适请及时就诊</span>
                </div>
            </div>
            </div>
            <div class="img">
                <img :src="imgPoemLeave5" alt="定时复查 ">
            </div>
        </div>
        <div class="bottom-img">
            <img :src="imgBottomImg" alt="">
        </div>
    </div>
</template>

<script>

    import {
        img_PoemLeave1,
        img_PoemLeave2,
        img_PoemLeave3,
        img_PoemLeave4,
        img_PoemLeave5,
        img_bottomImg
    } from '../assets/images/images';

    export default {
        name: 'POEM',
        data() {
            return {
                imgBottomImg: img_bottomImg,
                imgPoemLeave1: img_PoemLeave1,
                imgPoemLeave2: img_PoemLeave2,
                imgPoemLeave3: img_PoemLeave3,
                imgPoemLeave4: img_PoemLeave4,
                imgPoemLeave5: img_PoemLeave5
            };
        },
        mounted() {
            document.title = "出院后家庭管理";
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
