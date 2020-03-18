<template>
    <div class="container">
        <span class="text-left" v-text="textLeft"></span>
        <!--<div class="expand"></div>-->
        <!--手机号-->
        <input
class="edit-right"
               v-model="getInputText"
               :placeholder="textHolder"
               type="number"
               pattern="[0-9]*"
               onkeypress="return( /[\d]/.test(String.fromCharCode(event.keyCode) ) )"
               @blur="blur"
               v-if="isNumber"
        />
        <!--所在地区-->
        <div class="disable-right" @click="click" v-if="isDisabled">
            <input
class="edit-right"
                   v-model="getInputText"
                   :placeholder="textHolder"
                   disabled
            />
            <svg class="icon-right" aria-hidden="true">
                <use xlink:href="#icon-next"></use>
            </svg>
        </div>
        <!--文字类输入-->
        <input
class="edit-right"
               v-model="getInputText"
               :placeholder="textHolder"
               @blur="blur"
               v-if="!isDisabled && !isNumber"
        />
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'InputItem',
    data() {
        return {
            inputText: ''
        };
    },
    props: {
        textLeft: {
            type: String,
            required: true,
            default: 'text-left-required!!!'
        },
        textDefault: {
            type: String
        },
        textHolder: {
            type: String
            // default: null
        },
        isNumber: {
            type: Boolean
        },
        isDisabled: {
            type: Boolean
        }
    },
    computed: {
        getInputText: {
            get: function() {
                // console.log('getInputText', 'text',this.inputText, 'def',this.textDefault)
                this.inputText = this.textDefault;
                return this.inputText;
            },
            set: function(newText) {
                this.inputText = newText;
                this.$emit('getText', this.inputText);
            }

        }
    },
    methods: {
        blur() {
            this.$emit('blur', this.inputText);
        },
        click() {
            this.$emit('click', this.inputText);
        }
    },
    watch: {
        textDefault(newValue, oldValue) {
            // console.log('getTebxtst', newValue,oldValue)
            this.$emit('getText', this.textDefault);
        }
    },
    mounted() {
        // console.log('textDefault', this.textDefault)
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '~@/common/main.styl'
    .container {
        display flex
        justify-content flex-end
        align-items center
        flex-wrap nowrap
        background white
        height vw(45)
        line-height vw(45)
        word-vw(word14, gray3)
    }

    .text-left {
        padding-left cellPadding
        flex 0.3
        /*border salmon 1px solid*/
    }

    .disable-right {
        /*border 1px slateblue solid*/
        height vw(45)
        display flex
        flex 1
        flex-direction row
        flex-wrap nowrap
        align-items center
    }

    /*.expand {
        flex 1
    }*/
    .edit-right {
        background-color grayF
        text-align right
        padding-right titleMargin
        flex 1
        height vw(19)
        line-height vw(19)
        ellipsis()
        /*border salmon 1px solid*/
    }

    .icon-right {
        margin-right cellPadding
        width vw(10)
        height vw(15)
        overflow hidden
        fill gray9
        display flex
        justify-content center
    }
    ::-webkit-input-placeholder
        word-vw(word12, gray9)

    :-moz-placeholder
        word-vw(word12, gray9)

    ::-moz-placeholder
        word-vw(word12, gray9)

    :-ms-input-placeholder
        word-vw(word12, gray9)

</style>
