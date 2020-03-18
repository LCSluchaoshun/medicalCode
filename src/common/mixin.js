import { mapGetters, mapMutations, mapActions } from 'vuex';
import { isiOS } from 'common/utils';

// 提供slider（better-scroll）组件的图片加载完毕的刷新方法
export const sliderMixin = {
    methods: {
        // 图片全部加载完毕后刷新slider,确保正确渲染dom
        refreshSilider(totalCount, refname) {
            console.log('refreshSilider', totalCount, refname);
            if (!this.currentCount) {
                this.currentCount = 0;
            }
            this.currentCount++;
            if (this.currentCount >= totalCount) {
                setTimeout(() => {
                    this.$refs[refname].refresh();
                }, 500);
            }
        }
    }
};

// 修复iOS版微信HTML5 History兼容性问题
export const fixurlMixin = {
    beforeRouteEnter(to, from, next) {
        if (isiOS() && to.path !== location.pathname) {
            // 此处不可使用location.replace
            location.assign(to.fullPath);
        } else {
            next();
        }
    }
};
