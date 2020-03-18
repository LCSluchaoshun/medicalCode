<template>
    <div class="dot" v-if="this.number > 0">
        {{ number }}
    </div>
</template>

<script>
export default {
    name: 'Dot',
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {};
    }
};
</script>

<style  lang="stylus" scoped>
    @import '~common/main.styl'
    .dot{
        position absolute
        top 0
        right vw(-7)
        height vw(15)
        min-width vw(15)
        line-height vw(15)
        background #FFBF55
        word-vw(word10,grayF)
        border-radius all-radius
        padding 0 vw(3)
    }
</style>
