<template>
    <div class="addcut-container">
        <svg class="icon" aria-hidden="true" @click="cut">
            <use :xlink:href="'#'+cuticon"></use>
        </svg>
        <input
            :value="num"
            class="num"
            type="number"
            @change="change"
            pattern="^(\-|\+)?\d+(\.\d+)?$"
        >
        <svg class="icon add" aria-hidden="true" @click="add">
            <use :xlink:href="'#'+addicon"></use>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'AddCut',
    props: {
        value: {
            type: Number,
            required: true
        },
        addicon: {
            type: String,
            default: 'icon-selected'
        },
        cuticon: {
            type: String,
            default: 'icon-photo-close'
        },
        // 步长
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            num: this.value
        };
    },
    watch: {},
    methods: {
        add() {
            if (this.max && this.num >= this.max) {
                return;
            }
            this.num += this.step;
            this.$emit('input', this.num);
        },
        cut() {
            if (this.min && this.num <= this.min) {
                return;
            }
            this.num -= this.step;
            this.$emit('input', this.num);
        },
        change(e) {
            if (this.min && +e.target.value < this.min) {
                e.target.value = this.num;
                return;
            }
            if (this.max && +e.target.value > this.max) {
                e.target.value = this.num;
                return;
            }
            this.num = +e.target.value;
            this.$emit('input', this.num);
        }
    }
};
</script>

<style scoped lang="stylus">
@import '~common/main.styl';

.addcut-container {
    flex-x();
    background-color: grayF;

    .icon {
        width: vw(20);
        height: vw(20);
        fill: gray9;

        &.add {
            fill: main-color;
        }
    }

    .num {
        width: vw(40);
        text-align: center;
        line-height: vw(20);
        background-color: grayF;
        word-vw(word16, gray3);
        margin: 0 vw(10);
        border: 1px solid #BFBFBF;
        border-radius: vw(5);
    }
}
</style>
