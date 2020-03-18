<template>
    <div class="mini-spec" @click.native="refreshSpecList">
        <scroll
ref="specList"
class="specList"
:data="Object.keys(showSpec)"
:probe-type="2"
:click="true"
                :bounce="false"
>
            <ul>
                <li v-for="(key, index) in Object.keys(showSpec)" :key="index" class="spec-item">
                    <div class="spec-title">{{ key }}</div>
                    <!--多个选项-->
                    <div class="spec-list">
                        <div
                                v-for="(item, i) in showSpec[key]"
                                :key="i"
                                class="spec-value"
                                :class="{
                                no: notSelectable.includes(item),
                                active: selectedArr[key] === item
                            }"
                                @click="chooseSpec(key, item)"
                        >
                            {{ item }}
                        </div>
                    </div>
                    <div class="line"/>
                </li>
                <div ref="slotKey">
                    <slot/>
                </div>
            </ul>
        </scroll>
    </div>
</template>

<script>
import Scroll from './Scroll.vue';

export default {
    name: 'MiniSpec',
    components: { Scroll },
    props: {
        proContent: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            showSpec: {}, // 用于展示的规格选项
            reSku: [], // 重组后的sku-->[{path: "三人份-BT辣-羊肉-炒",sku: "000UNLI4"},]
            selectedArr: [], // 所有选中的规格与key的组合
            curtSelect: '', // 当前选中的规格
            notSelectable: [], // 不可选择的规格值集合 ['材质','亚麻']
            allPath: {},
            keys: this.proContent.keys, // 所有可选属性行
            selectedCache: [], // 已选中的缓存
            spliter: '-' // 分隔符
        };
    },
    created() {
        // 将商品数据中的 sku 用 key 过滤出所有可选的商品规格
        this.showSpec = this.getShowSpec(this.proContent);
        console.log('showSpec', this.showSpec);
        // 过滤库存为空的sku
        this.filterNullSku();
        // 计算组合数据
        const arr = this.combineAttr(this.proContent.sku, this.keys); // =>{item:[{path:塑料-1Kg,sku:1551},...]}
        this.reSku = arr.items; // =>[{path:塑料-1Kg,sku:1551},...]
        console.log('reSku', this.reSku);
        // 生成所有子集是否可选、库存状态 map
        this.buildResult(this.reSku);
        // 只有一个sku时默认选中所有选项
        const oneSku = this.proContent.sku.length === 1;
        if (oneSku) {
            const sku = this.proContent.sku;
            for (const k in this.selectedArr) {
                this.selectedArr[k] = sku[0][k];
            }
            this.updateStatus(this.getSelectedItem());
            this.$emit('getChoose', this.selectedArr, oneSku);
        }
    },
    methods: {
        // 将商品数据中的 sku 用 key 过滤出所有可选的商品规格
        getShowSpec(product) {
            const keys = product['keys']; // ==>['商品','尺寸']
            const jsons = {};
            const select = {};
            for (const key of keys) {
                jsons[key] = {};
                select[key] = '';
                for (let j = 0; j < product['sku'].length; j++) {
                    jsons[key][product['sku'][j][key]] = 0;
                }
            }
            this.selectedArr = select; // 储存已选属性{颜色:'',尺寸: ''...}
            for (const i in jsons) {
                const arr = [];
                for (const j in jsons[i]) {
                    arr.push(j);
                }
                jsons[i] = arr;
            }
            return jsons;
        },
        // 将sku stock为0的sku过滤掉
        filterNullSku() {
            if (this.proContent) {
                this.proContent.sku = this.proContent.sku.filter(item => {
                    return item.stock > 0;
                });
            }
        },
        // 属性点击事件
        chooseSpec(skey, sval) {
            // skey->选中的规格key,sval->选中的规格值
            this.curtSelect = sval;
            if (!this.notSelectable.includes(sval)) {
                if (this.selectedArr[skey] === sval) {
                    this.selectedArr[skey] = '';
                } else {
                    this.selectedArr[skey] = sval;
                }
                this.updateStatus(this.getSelectedItem());
                this.$emit('getChoose', this.selectedArr);
            }
        },

        // 触发scroll刷新，重新计算dom
        refresh() {
            // 触发scroll刷新，重新计算dom
            this.$nextTick(() => {
                setTimeout(() => {
                    console.log('referderere');
                    this.$refs.specList.refresh();
                }, 200);
            });
        },

        // 计算组合数据
        combineAttr(data, keys) {
            const allKeys = [];
            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                const values = [];
                for (let j = 0; j < keys.length; j++) {
                    values.push(item[keys[j]]);
                }
                allKeys.push({
                    path: values.join(this.spliter),
                    sku: item['buyid']
                });
            }
            return {
                items: allKeys
            };
        },

        // 获取所有可选路径
        getAllKeys(arr) { // arr =>[{path:塑料-1Kg,sku:1551},...]
            const result = [];
            for (let i = 0; i < arr.length; i++) {
                result.push(arr[i].path);
            }
            return result; // =>['塑料-1KG','塑料-2KG','金属-1KG',]
        },

        /**
             * 取得集合的所有子集「幂集」
             arr = [1,2,3]

             i = 0, ps = [[]]:
             j = 0; j < ps.length => j < 1:
             i=0, j=0 ps.push(ps[0].concat(arr[0])) => ps.push([].concat(1)) => [1]
             ps = [[], [1]]

             i = 1, ps = [[], [1]] :
             j = 0; j < ps.length => j < 2
             i=1, j=0 ps.push(ps[0].concat(arr[1])) => ps.push([].concat(2))  => [2]
             i=1, j=1 ps.push(ps[1].concat(arr[1])) => ps.push([1].concat(2)) => [1,2]
             ps = [[], [1], [2], [1,2]]

             i = 2, ps = [[], [1], [2], [1,2]]
             j = 0; j < ps.length => j < 4
             i=2, j=0 ps.push(ps[0].concat(arr[2])) => ps.push([3])    => [3]
             i=2, j=1 ps.push(ps[1].concat(arr[2])) => ps.push([1, 3]) => [1, 3]
             i=2, j=2 ps.push(ps[2].concat(arr[2])) => ps.push([2, 3]) => [2, 3]
             i=2, j=3 ps.push(ps[3].concat(arr[2])) => ps.push([2, 3]) => [1, 2, 3]
             ps = [[], [1], [2], [1,2], [3], [1, 3], [2, 3], [1, 2, 3]]
             */
        powerset(arr) { // 取[塑料,1KG]的子集 => [ [] ,[塑料],[1KG],[塑料,1KG]]
            const ps = [[]];
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0, len = ps.length; j < len; j++) {
                    ps.push(ps[j].concat(arr[i]));
                }
            }
            return ps;
        },

        // 生成所有子集是否可选、库存状态 map
        buildResult(items) { // items=>[{path:塑料-1Kg,sku:1551},...]
            const allKeys = this.getAllKeys(items); // => ['塑料-1KG','塑料-2KG','金属-1KG',]

            for (let i = 0; i < allKeys.length; i++) {
                const curr = allKeys[i];
                const sku = items[i].sku;
                const values = curr.split(this.spliter); // =>['塑料','1KG'] ...
                const allSets = this.powerset(values); // => [ [] ,[塑料],[1KG],[塑料,1KG]]

                // 每个组合的子集
                for (let j = 0; j < allSets.length; j++) {
                    const set = allSets[j];
                    const key = set.join(this.spliter);
                    if (this.allPath[key]) {
                        this.allPath[key].skus.push(sku);
                    } else {
                        this.allPath[key] = { skus: [sku] };
                        // console.log('this.allPath[key]',this.allPath[key]);
                    }
                }
            }
        },

        // 过滤分隔符
        trimSpliter(str) {
            // ⊙abc⊙ => abc
            // ⊙a⊙⊙b⊙c⊙ => a⊙b⊙c
            const reLeft = new RegExp('^' + this.spliter + '+', 'g');
            const reRight = new RegExp(this.spliter + '+$', 'g');
            const reSpliter = new RegExp(this.spliter + '+', 'g');
            return str
                .replace(reLeft, '')
                .replace(reRight, '')
                .replace(reSpliter, this.spliter);
        },

        // 获取当前选中的属性
        getSelectedItem() {
            let result = [];
            result = Object.values(this.selectedArr);
            return result;
        },

        // 更新所有属性状态
        updateStatus(selected) {
            this.notSelectable = [];
            for (let i = 0; i < this.keys.length; i++) {
                const key = this.keys[i];
                const data = this.showSpec[key];
                const copy = selected.slice();
                for (let j = 0; j < data.length; j++) {
                    const item = data[j];
                    if (selected[i] === item) continue;
                    copy[i] = item;
                    const curr = this.trimSpliter(
                        copy.join(this.spliter),
                        this.spliter
                    );
                    if (!this.allPath[curr]) {
                        this.notSelectable.push(item);
                    }
                }
            }
            if (!this.getSelectedItem().includes('')) {
                const choSku = this.getSelectedItem().join(this.spliter);
                this.$emit('findSku', this.allPath[choSku].skus[0]);
                // console.log('this.allPath[curr]',choSku,this.allPath[choSku].skus[0],this.getSelectedItem())
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
    @import '~common/main.styl';

    .mini-spec {
        position: relative;
        width: 100%;
        padding-top: smallMargin;
        max-height: vh(400);

        .specList {
            background-color: grayF;
            position: relative;
            /*width: 100vw;*/
            max-height: vh(400);
            overflow-x: hidden;

            .spec-item {
                position: relative;
                margin: middleMargin 0;

                .spec-title {
                    text-align: left;
                    word-vw(word14,gary3);
                    /*max-width: vw(345);*/
                    ellipsis();
                }

                .spec-list {
                    display: flex;
                    flex-flow: row wrap;
                    .spec-value {
                        word-vw(word16,gray3);
                        flex-x(center,center)
                        min-width:vw(100);
                        max-width: vw(345);
                        ellipsis();
                        height: vw(40);
                        line-height: vw(40);
                        border-radius: main-radius;
                        background-color: grayF ;
                        margin-right: middleMargin;
                        margin-top: smallMargin;
                        main-shadow()
                        &.no {
                            color: gray9;
                            background-color: grayE;
                            box-shadow none
                        }
                        &.active {
                            gradient(to right, main-color1, main-color2)
                            main-shadow(0,vw(2),vw(2),rgba(40, 188, 163, 0.5))
                            color: grayF;
                        }
                    }
                }
            }

            .line {
                line();
                position: absolute;
                margin-top: smallMargin;
            }
        }
    }
</style>
