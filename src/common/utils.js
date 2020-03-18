/**
 * 判空 Object Array String
 */
export function isEmpty(value) {
    if (value instanceof Object) {
        return Object.keys(value).length === 0;
    }
    if (value instanceof Array) {
        return value.length === 0;
    }
    return value === '' || value === null || value === undefined;
}

/**
 * 是否字符串
 */
export function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
        return true;
    }
    return false;
}

/**
 * 是否数组
 */
export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return Array.isArray(arg);
}

/**
 * 获取随机整数
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 打乱数组元素顺序
 */
export function shuffle(arr) {
    const _arr = arr.slice();
    for (let i = 0; i < _arr.length; i++) {
        const j = randomInt(0, i);
        const t = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = t;
    }
    return _arr;
}

/**
 * 防抖函数
 */
export function debounce(func, delay = 200) {
    let timer;

    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

/**
 * 给元素增加class
 */
export function addClass(el, className) {
    if (hasClass(el, className)) {
        return;
    }
    el.className += ' ' + className;
}

/**
 * 判断是否还有class
 */
export function hasClass(el, className) {
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className);
}

/**
 * get或者set元素的data-属性值
 */
export function getData(el, name, value) {
    const prefix = 'data-';
    name = prefix + name;
    if (value) {
        return el.setAttribute(name, value);
    } else {
        return el.getAttribute(name);
    }
}

/**
 * dom对象是否在视口内
 */
export function isVisible(el) {
    return (el.offsetWidth + el.offsetHeight) > 0;
}

/**
 * 是否IOS
 */
export function isIOS() {
    var isIphone = navigator.userAgent.includes('iPhone');
    var isIpad = navigator.userAgent.includes('iPad');
    return isIphone || isIpad;
}
