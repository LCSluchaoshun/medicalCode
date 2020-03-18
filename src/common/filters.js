import { oss_baseUrl } from '../config'; // oss 图片地址

/**
 * 货币格式化-过滤器
 * (1234,2) => ￥1234.00
 * (1234,2,$) => $1234.00
 * (1234,2,'') => 1234.00
 */
function moneyFmt(value, decimals = 2, symbol = '￥') {
    const val = parseFloat(value);
    if (isNaN(val)) {
        return value;
    }

    // const money = getSubNumber(val, decimals).toFixed(decimals);
    // return `${symbol}${money}`;
    //
    // function getSubNumber(num, decimals) {
    //     const scale = Math.pow(10, decimals);
    //     return Math.floor(num * scale) / scale;
    // }

    const money = val.toFixed(decimals);
    return `${symbol}${money}`;
}

/**
 * 日期格式化-过滤器
 * 根据format格式化日期str
 * 2018-01-01 14:16:13 (yyyy/MM/dd hh-mm-ss) => 2018/01/01 14-16-13
 * 2018-01-01 14:16:13 (yy/M/d h-m) => 18/01/01 14-16
 * 2018-01-01 14:16:13 (yyMMdd) => 180101
 * 2018-01-01 (yyyyMM) => 201801
 * 14:16:13 (hh:mm) => 14:16
 */
function dateFmt(value, format = 'YYYY-MM-dd hh:mm:ss') {
    if (!value) {
        return;
    }
    const dateObj = parse(value);
    const year = dateObj.year;
    const month = dateObj.month;
    const day = dateObj.day;
    const hour = dateObj.hour;
    const minute = dateObj.minute;
    const second = dateObj.second;

    let str = format;
    str = str.replace(/yyyy|YYYY/, year);
    str = str.replace(/yy|YY/, year % 100 > 9 ? (year % 100).toString() : '0' + (year % 100));

    str = str.replace(/MM|M/g, month);

    str = str.replace(/dd|DD|d|D/g, day);

    str = str.replace(/hh|HH|h|H/g, hour);

    str = str.replace(/mm|m/g, minute);

    str = str.replace(/ss|SS|s|S/g, second);

    return str;

    // 解析日期string->{year,month...},参数格式可以是datetime/date/time
    function parse(dateStr) {
        const dateObj = {
            year: '',
            month: '',
            day: '',
            hour: '',
            minute: '',
            second: ''
        };
        if (typeof dateStr !== 'string') {
            return dateObj;
        }

        const arr = dateStr.split(' ');
        if (arr.length > 1) {
            // datetime
            const _date = arr[0].split('-');
            dateObj.year = _date[0];
            dateObj.month = _date[1];
            dateObj.day = _date[2];
            const _time = arr[1].split(':');
            dateObj.hour = _time[0];
            dateObj.minute = _time[1];
            dateObj.second = _time[2];
        } else if (arr.length === 1) {
            // date or time
            if (arr[0].indexOf('-') > -1) {
                // date
                const _date = arr[0].split('-');
                dateObj.year = _date[0];
                dateObj.month = _date[1];
                dateObj.day = _date[2];
            } else if (arr[0].indexOf(':') > -1) {
                // time
                const _time = arr[0].split(':');
                dateObj.hour = _time[0];
                dateObj.minute = _time[1];
                dateObj.second = _time[2];
            }
        }

        return dateObj;
    }
}

/**
 * 字符串长度溢出格式化-过滤器
 */
function ellipsis(value, len) {
    if (!value) return value;

    if (typeof value !== 'string') {
        value = value.toString();
    }

    return value.length > len ? value.substr(0, len) + '...' : value;
}

/**
 * 中间变星号
 * phone 手机号
 * bank 银行卡
 * IDcode 身份证
 */
function star(value, type) {
    if (!value) {
        return;
    }
    if (type === 'phone') {
        return value.substr(0, 3) + '****' + value.substr(7);
    } else if (type === 'bank') {
        return '************' + value.substr(12);
    } else if (type === 'IDcode') {
        return value.substr(0, 1) + '****************' + value.substr(17);
    }
}

/**
 * 距离值格式化-过滤器
 * 854 => '<854km'
 * 1234 => '<1.2km'
 * 5678 => '<5.7km'
 */
function distanceFmt(value) {
    value = parseFloat(value);
    let str = '';
    if (value < 1000) {
        str = `${value.toFixed(0)}m`;
    } else {
        str = `${(value / 1000).toFixed(1)}km`;
    }
    return str;
}

/**
 * 满减活动格式化-过滤器
 */
function activityFmt(act) {
    if (!act.money) {
        return '';
    }
    if (act.type == 1) {
        // 1满减
        return `满${act.money}减${act.dis}`;
    } else {
        // 2折扣
        return `满${act.money}打${parseFloat(act.dis * 10)}折`;
    }
}

/**
 * 订单状态-过滤器
 *
 *
 *
 */
function orderState(value) {
    value = parseInt(value);
    let str = '';
    if (value === 0) {
        str = `待付款`;
    } else if (value === 1) {
        str = `待发货`;
    } else if (value === 2) {
        str = `待收货`;
    } else if (value === 3) {
        str = `已收货`;
    } else if (value === 4) {
        str = `售后中`;
    } else if (value === 5) {
        str = `待使用`;
    } else if (value === 6) {
        str = `已使用`;
    } else if (value === 7) {
        str = `交易关闭`;
    } else if (value === 11) {
        str = `拼团成功`;
    } else if (value === 12) {
        str = `拼团中`;
    } else if (value === 13) {
        str = `拼团失败`;
    }
    return str;
}

/**
 * 线上售后订单详情状态-过滤器
 *
 *
 *
 */
function refundProcess(value) {
    value = parseInt(value);
    let str = '';
    if (value === 0) {
        str = `等待商家处理`;
    } else if (value === 1) {
        str = `退款成功`;
    } else if (value === 2) {
        str = `审核通过，请您及时退回商品`;
    } else if (value === 3) {
        str = `审核未通过`;
    } else if (value === 4) {
        str = `等待商家确认收货`;
    } else if (value === 5) {
        str = `退款失败，售后关闭`;
    } else if (value === 6) {
        str = `退款成功`;
    } else if (value === 7) {
        str = `退款关闭`;
    }
    return str;
}

/**
 * 线下售后订单详情状态-过滤器
 *
 *
 *
 */
function shopRefundProcess(value) {
    value = parseInt(value);
    let str = '';
    if (value === 0) {
        str = `退款中`;
    } else if (value === 6) {
        str = `退款成功`;
    } else if (value === 7) {
        str = `退款失败`;
    }
    return str;
}

/**
 * 线上售后订单列表状态-过滤器
 *
 *
 *
 */
function refundStatus(value) {
    value = parseInt(value);
    let str = '';
    if (value === 1 || value === 6) {
        str = `退款成功`;
    } else if (value === 5 || value === 7) {
        str = `退款关闭`;
    } else {
        str = `退款中`;
    }
    return str;
}

/**
 * 线上售后订单类型状态-过滤器
 *
 *
 *
 */
function refundType(value) {
    value = parseInt(value);
    let str = '';
    if (value === 0) {
        str = `仅退款`;
    } else if (value === 1) {
        str = `仅退款`;
    } else if (value === 2) {
        str = `退货退款`;
    }
    return str;
}

/**
 * 静态图片组装格式化-过滤器
 * name 图片名称
 * path 图片路径 默认static
 * type 图片格式 （jpg,images）
 */
function imageFmt(name, type = 'images', path = 'static') {
    return `${oss_baseUrl}/${path}/${name}.${type}`;
}

export default {
    moneyFmt,
    dateFmt,
    ellipsis,
    star,
    distanceFmt,
    activityFmt,
    orderState,
    imageFmt,
    refundStatus,
    refundProcess,
    refundType,
    shopRefundProcess
};
