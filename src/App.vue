<template>
    <div id="app">
        <!-- 根据meta.keepAlive区分缓存组件 -->
        <div class="content">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>

        <GlobaLoading :global-state="globalState" />
        <Loading :state="loading" />
    </div>
</template>
<script>
import apis from 'common/api';
import GlobaLoading from 'base/GlobalLoading';
import Loading from 'base/Loading';

export default {
    components: {
        GlobaLoading,
        Loading
    },
    data() {
        return {
            loading: false,
            globalState: false
        };
    },
    created() {
        // 全局loading
        this.$root.globalshow = () => {
            this.globalState = true;
        };
        this.$root.globalhide = () => {
            this.globalState = false;
        };
        // 局部loading
        this.$root.show = () => {
            this.loading = true;
        };
        this.$root.hide = () => {
            this.loading = false;
        };

        // ★★★挂载全局api
        for (const key in apis) {
            this.$root[key] = apis[key];
        }
    },
    methods: {}
};
</script>
<style lang="stylus">
</style>
