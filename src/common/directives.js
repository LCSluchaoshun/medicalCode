import { COMMON_NUMBER } from 'common/reg';
import { debounce } from '@/common/utils';

const defaultMsg = '输入错误';
const defaultDelay = 1500;
const defaultRequire = false;
const defaultEventName = 'change';

export default {
    'check-number': {
        inserted: (el, binding, vNode) => {
            // 初始化各种参数
            const eventName = binding.arg || defaultEventName; // 触发事件
            const require = binding.modifiers.require || defaultRequire; // 是否必填
            const msg = binding.value.msg || defaultMsg; // 错误文字
            const paramReg = binding.value.reg || null; // 参数正则(替代默认的)
            const delay = binding.value.delay || defaultDelay; // 验证延迟
            const min = binding.value.min; // 最小值
            const max = binding.value.max; // 最大值

            el.addEventListener(
                eventName,
                debounce((event) => {
                    const val = el.value.trim(); // 表单值
                    // 首先去除已有error样式
                    el.className = el.className.replace('input-error', '').trim();
                    // 判断是否是否必填
                    if (require) {
                        if (!val || val === '') {
                            el.className += ' input-error';
                            showError(el, vNode, `不能为空`);
                            return;
                        }
                    }
                    // 判断正则
                    if (!val.match(paramReg || COMMON_NUMBER)) {
                        showError(el, vNode, msg);
                        return;
                    }
                    if (min !== undefined && +val < min) {
                        showError(el, vNode, `最小值为 ${min}`);
                        return;
                    }
                    if (max !== undefined && +val > max) {
                        showError(el, vNode, `最大值为 ${max}`);
                        return;
                    }
                }, delay)
            );
        }
    },
    'prevent-event': {
        inserted: (el, binding, vNode) => {
            if (binding.value instanceof Array) {
                binding.value.forEach((item) => {
                    el.addEventListener(item, (e) => {
                        e.preventDefault();
                    });
                });
            } else {
                binding.value.forEach((item) => {
                    el.addEventListener(binding.value, (e) => {
                        e.preventDefault();
                    });
                });
            }
        }
    }
};

// 错误处理
function showError(el, vNode, msg) {
    el.value = '';
    el.className += ' input-error';
    vNode.context.$toast(msg || defaultMsg);
    // el.focus()
}
