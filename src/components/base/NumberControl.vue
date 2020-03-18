<template>
    <div class="numControl">
        <svg class="symbol" aria-hidden="true" @click.stop="decrease">
            <use xlink:href="#icon-jian"/>
        </svg>
        <input
                v-model="count"
                class="count"
                placeholder=""
                disabled="disabled"
                type="number"
                onkeyup="this.value=this.value.replace(/[^\d]/g,'')"
        />
        <!--@blur="changeNum"-->
        <svg class="symbol" aria-hidden="true" @click.stop="add">
            <use xlink:href="#icon-jia"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'NumControl',
    props: {
        value: {
            type: Number | String,
            default: 1
        },
        isCart: {
            type: Boolean,
            default: true
        },
        goods: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            count: this.value,
            good: this.goods
        };
    },
    watch: {
        value(val) {
            this.count = Number(val);
        }
    },

    methods: {
        add() {
            this.count++;
            if (this.isCart) {
                // 购物车中传入商品信息，非购物车不传
                if (this.count <= this.good.stock) {
                    this.good.num = this.count;
                    this.$emit('changeNum', this.good);
                } else {
                    this.$toast('库存不足，请重新选择');
                    this.count = this.good.stock;
                }
            } else {
                this.$emit('input', this.count);
            }
        },
        decrease() {
            if (this.count <= 1) {
                this.count = 1;
            } else {
                this.count--;
                if (this.isCart) {
                    // 购物车中传入商品信息，非购物车不传
                    this.good.num = this.count;
                    this.$emit('changeNum', this.good);
                } else {
                    this.$emit('input', this.count);
                }
            }
        }
    }
};
</script>

<style scoped lang="stylus">
    @import '~common/main.styl';

    .numControl {
        display flex
        background-color grayF
        align-items center
        .symbol {
            width vw(15)
            height vw(15)
            fill #000

        }
        .count {
            width vw(40)
            text-align center
            height vw(22)
            line-height vw(22)
            outline none
            background-color grayF
            word-vw(word16, gray3)
        }
    }
</style>
