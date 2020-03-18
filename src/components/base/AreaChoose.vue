<template>
    <div class="area-choose">
        <van-popup v-model="show" position="bottom">
            <van-area
                :area-list="areaList"
                :columns-num="num"
                @cancel="cancel"
                @confirm="onchange"
            />
        </van-popup>
    </div>
</template>

<script>
import { Area, Popup } from 'vant';
import API from '../../common/api';
// import  AreaJS from  '../../common/area';
export default {
    name: 'AreaChoose',
    props: {
        num: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            show: false,
            areaList: {}
        };
    },
    computed: {},
    mounted() {
        // 获取省市区
        this.httpGet(API.getCommonArea).then(res => {
            this.areaList = res;
        });
    },
    methods: {
        changeShow() {
            this.show = !this.show;
        },
        onchange(msg) {
            this.show = false;
            const area = {
                province: {
                    name: '',
                    id: ''
                },
                city: {
                    name: '',
                    id: ''
                },
                county: {
                    name: '',
                    id: ''
                }
            };
            area.province.name = msg[0].name;
            area.province.id = msg[0].code;
            area.city.name = msg[1] === undefined ? '' : msg[1].name;
            area.city.id = msg[1] === undefined ? '' : msg[1].code;
            area.county.name = msg[2] === undefined ? '' : msg[2].name;
            area.county.id = msg[2] === undefined ? '' : msg[2].code;
            this.$emit('getArea', area);
        },
        cancel() {
            // console.log(111);
            // this.changeShow();
        }
    }
};
</script>

<style scoped lang="stylus">
</style>
