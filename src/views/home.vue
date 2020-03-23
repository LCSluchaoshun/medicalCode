<template>
    <div class="home">
        <header-title></header-title>
        <div class="nav">
            <div class="top">
                <div class="item" @click.stop="handleStomachNav">
                    <img class="item-img" :src="imgMedicine" alt="">
                    <span class="item-title">胃肠息肉</span>
                </div>
                <div class="item" @click.stop="handlePOEM">
                    <img class="item-img" :src="imgBook" alt="">
                    <span class="item-title">POEM</span>
                </div>
                <div class="item" @click.stop="handlePOEM">
                    <img class="item-img" :src="imgMedicalLogo" alt="">
                    <span class="item-title">ERCP</span>
                </div>
                <div class="item" @click.stop="handleStop">
                    <img class="item-img" :src="imgMagnifier" alt="">
                    <span class="item-title">内镜安全</span>
                </div>
            </div>
            <div class="bottom">
                <div class="item" @click.stop="handleStop">
                    <img class="item-img" :src="imgDrug" alt="">
                    <span class="item-title">胶囊内镜</span>
                </div>
                <div class="item" @click.stop="handleStop">
                    <img class="item-img" :src="imgMedicineBottle" alt="">
                    <span class="item-title">肠镜</span>
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
        img_book,
        img_drug,
        img_Magnifier,
        img_MedicalLogo,
        img_Medicine,
        img_bottomImg,
        img_MedicineBottle
    } from '../assets/images/images';
    import HeaderTitle from '../components/medical/headerTitle.vue'

    export default {
        name: 'Home',
        components: {HeaderTitle},
        data() {
            return {
                imgBook: img_book,
                imgDrug: img_drug,
                imgMagnifier: img_Magnifier,
                imgMedicalLogo: img_MedicalLogo,
                imgMedicine: img_Medicine,
                imgBottomImg: img_bottomImg,
                imgMedicineBottle: img_MedicineBottle
            };
        },
        mounted(){
            document.title = "首页";
        },
        methods:{
            handleStomachNav(){
                this.$router.push({name:'StomachNav'})
            },
            handlePOEM(){
                this.$router.push({name:'POEMNav'})
            },
            handleStop(){
                this.$toast('此功能暂未开放哟')
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

    .item {
        flex-y()
        .item-img {
            width vw(40)
            height vw(40)
        }
        .item-title {
            margin-top vw(11)
            word-vw(word18, gray3)
        }
    }
    .home {
        height 100%
        background-color #fafdff
        padding-top vw(43)
        .nav {
            margin-top vw(85)
            padding 0 vw(28)
            .top {
                flex-x()
            }
            .bottom {
                margin-top vw(40)
                flex-x(flex-start)
                .item{
                    margin-right vw(33)
                }
            }
        }
    }

    .bottom-img{
        width 100vw
        margin-top vw(80)
        padding-bottom vw(19)
        text-align center
        img{
            height vw(188)
            width vw(286)
        }
    }

</style>
