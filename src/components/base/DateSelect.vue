<template>
    <van-popup
        v-model="showSelect"
        :position="position"
        :close-on-click-overlay="false"
        :overlay="false"
    >
        <div class="select">
            <p class="title">交易时间</p>
            <button
                :class="{ tag: 1, active: activeChoose === '今日' }"
                @click="choose('今日')"
            >
                今日
            </button>
            <button
                :class="{ tag: 1, active: activeChoose === '本周' }"
                @click="choose('本周')"
            >
                本周
            </button>
            <button
                :class="{ tag: 1, active: activeChoose === '本月' }"
                @click="choose('本月')"
            >
                本月
            </button>
            <button
                :class="{ tag: 1, active: activeChoose === '近三月' }"
                @click="choose('近三月')"
            >
                近三月
            </button>
            <!--筛选-->
            <p class="title2">
                选择起止时间 <span class="label" v-text="getLimitTxt" />
            </p>
            <div class="pick">
                <div class="pick-item" @click="toPick(0)">
                    <p>{{ startText }}</p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chevronright" />
                    </svg>
                </div>
                <div class="pick-item" @click="toPick(1)">
                    <p>{{ endText }}</p>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chevronright" />
                    </svg>
                </div>
            </div>
            <div class="btn-container">
                <button class="btn" @click="hide">取消</button>
                <button class="btn" @click="onConfirm">确定</button>
            </div>

            <van-popup
                v-model="showStartPicker"
                position="bottom"
                :lock-scroll="false"
            >
                <van-datetime-picker
                    v-model="startDate"
                    type="date"
                    :max-date="new Date()"
                    @confirm="confirmStartDate"
                    @cancel="showStartPicker = false"
                />
            </van-popup>
            <van-popup
                v-model="showEndPicker"
                position="bottom"
                :lock-scroll="true"
            >
                <van-datetime-picker
                    v-model="endDate"
                    type="date"
                    :max-date="new Date()"
                    @confirm="confirmEndDate"
                    @cancel="showEndPicker = false"
                />
            </van-popup>
        </div>
    </van-popup>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

// dayjs本地化
dayjs.locale('zh-cn');

export default {
    /* 筛选组件*/
    name: 'DateSelect',
    components: {},
    props: {
        position: {
            type: String,
            default: 'right'
        },
        fmt: {
            type: String,
            default: 'YYYY-MM-DD'
        },
        options: {
            type: Object,
            default: () => {
                return {
                    num: 6,
                    unit: 'months',
                    des: '6个月'
                };
            }
        }
    },
    data() {
        return {
            activeMap: {
                今日: [
                    dayjs()
                        .startOf('day')
                        .format(this.fmt),
                    dayjs().format('YYYY-MM-DD HH:mm:ss')
                ],
                本周: [
                    dayjs()
                        .startOf('week')
                        .format(this.fmt),
                    dayjs().format('YYYY-MM-DD HH:mm:ss')
                ],
                本月: [
                    dayjs()
                        .startOf('month')
                        .format(this.fmt),
                    dayjs().format('YYYY-MM-DD HH:mm:ss')
                ],
                近三月: [
                    dayjs()
                        .subtract(3, 'months')
                        .startOf('day')
                        .format(this.fmt),
                    dayjs().format('YYYY-MM-DD HH:mm:ss')
                ]
            },
            showSelect: false,
            startDate: '',
            endDate: '',
            showStartPicker: false,
            showEndPicker: false,
            activeChoose: ''
        };
    },
    computed: {
        startText() {
            return dayjs(this.startDate).format(this.fmt) || '开始日期';
        },
        endText() {
            return dayjs(this.endDate).format(this.fmt) || '结束日期';
        },
        getLimitTxt() {
            return '最长可查找时间跨度' + this.options.des + '的交易';
        }
    },
    watch: {
        activeChoose(val) {
            if (val) {
                this.startDate = new Date(
                    this.activeMap[this.activeChoose][0].replace(/-/g, '/')
                );
                this.endDate = new Date(
                    this.activeMap[this.activeChoose][1].replace(/-/g, '/')
                );
            }
        }
    },
    mounted() {
        this.activeChoose = '本月';
        this.startDate = new Date(
            this.activeMap[this.activeChoose][0].replace(/-/g, '/')
        );
        this.endDate = new Date(
            this.activeMap[this.activeChoose][1].replace(/-/g, '/')
        );
    },
    methods: {
        choose(type) {
            this.activeChoose = type;
            this.onConfirm();
        },
        show() {
            this.showSelect = true;
        },
        hide() {
            this.showSelect = false;
        },
        toPick(index) {
            this.activeChoose = '';
            if (index === 0) {
                this.showStartPicker = true;
            } else {
                this.showEndPicker = true;
            }
        },
        confirmStartDate(date) {
            if (!this.checkStartDate(date)) {
                return;
            }
            this.showStartPicker = false;
            this.startDate = date;
        },
        checkStartDate(startDate) {
            if (startDate > this.endDate) {
                this.$toast('开始日期不能大于结束日期');
                return false;
            }
            if (
                !dayjs(startDate).add(this.options.num, this.options.unit) >=
                dayjs(this.endDate)
            ) {
                this.$toast('最长可查找时间跨度' + this.options.des + '的交易');
                return false;
            }
            return true;
        },
        checkEndDate(endDate) {
            if (endDate < this.startDate) {
                this.$toast('结束日期不能小于开始日期');
                return false;
            }
            if (
                !dayjs(this.startDate).add(
                    this.options.num,
                    this.options.unit
                ) >= dayjs(endDate)
            ) {
                this.$toast('最长可查找时间跨度' + this.options.des + '的交易');
            }
            return true;
        },
        confirmEndDate(date) {
            if (!this.checkEndDate(date)) {
                return;
            }
            this.showEndPicker = false;
            this.endDate = date;
        },
        onConfirm() {
            if (this.activeChoose) {
                this.$emit(
                    'selectDone',
                    this.activeMap[this.activeChoose],
                    this.activeChoose
                );
            } else {
                const start = dayjs(this.startDate).format(this.fmt);
                // 结束时间+1天 相当于第二天0点
                const end = dayjs(this.endDate)
                    .add(1, 'days')
                    .format(this.fmt);
                const endStr = dayjs(this.endDate).format(this.fmt);
                this.$emit('selectDone', [start, end], `${start}--${endStr}`);
            }

            this.hide();
        },
        validateTimeLimit() {
            return; //
        }
    }
};
</script>

<style lang="stylus" scoped>
@import '~common/main.styl';

>>> .van-popup {
    overflow: hidden;
}

.select {
    position: relative;
    background: grayF;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 0 cellPadding;
    overflow: hidden;

    .title {
        margin: smallMargin 0;
        line-height: vw(20);
        color: gray3;
        font-size: word14;
    }

    .tag {
        width: vw(60);
        height: vw(25);
        color: gray3;
        background-color: grayE;
        text-align: center;
        border-radius: 13px;
        margin-right: vw(20);

        &.active {
            background-color: main-color;
            color: grayF;
        }
    }

    .title2 {
        margin: vw(20) 0 smallMargin 0;
        line-height: vw(20);
        color: gray3;
        font-size: word14;

        .label {
            float: right;
            font-size: word12;
            color: gray9;
        }
    }

    .pick {
        box-sizing: border-box;

        .pick-item {
            width: 100%;
            flex-x(space-between);
            border-bottom: 1px solid grayE;
            height: 8vw;
            margin-bottom: vw(5);

            p {
                word-vw(word14, gray6);
            }
        }
    }

    .icon {
        width: vw(12);
        height: vw(12);
        vertical-align: -0.15em;
        overflow: hidden;
        fill: gray9;
    }

    .btn-container {
        width: 100vw;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: middleMargin cellPadding;
        display: flex;
        justify-content: center;
        box-sizing: border-box;

        .btn:first-child {
            flex: 0 0 auto;
            secondary-hollow();
            margin: 0 smallMargin;
        }

        .btn:last-child {
            flex: 0 0 auto;
            secondary-solid();
            margin: 0 smallMargin;
        }
    }
}

>>> .van-picker__cancel {
    color: gray3;
}

>>> .van-picker__confirm {
    color: gray3;
}
</style>
