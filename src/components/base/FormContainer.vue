<template>
    <form class="v-form">
        <slot></slot>
    </form>
</template>

<script>
import AsyncValidator from 'async-validator';

export default {
    name: 'FormContainer',
    componentName: 'FormContainer', // 通过 $options.componentName 来找 form 组件
    data() {
        return {
            fields: [], // field: {itemkey, el}
            formError: {}
        };
    },
    props: {
        model: Object,
        rules: Object
    },
    computed: {
        // 返回值: { name: [rule1, rule2],tel: [rule1, rule2] }
        formRules() {
            const descriptor = {};
            this.fields.forEach(({ itemkey, rules }) => {
                // 如果没有单item的rule 则使用container的配置rules
                if (!rules) {
                    rules = this.rules[itemkey];
                }
                if (!Array.isArray(rules)) {
                    console.warn(
                        `itemkey 为 ${itemkey} 的 FormItem 校验规则不存在或者其值不是数组`
                    );
                    descriptor[itemkey] = [{ required: true }];
                    return;
                }
                descriptor[itemkey] = rules;
            });
            return descriptor;
        },
        // 返回值: { name:'张三',tel:'13280396906' }
        formValues() {
            const formData = this.fields.reduce((_data, { itemkey }) => {
                _data[itemkey] = this.model[itemkey];
                return _data;
            }, {});
            return formData;
        }
    },
    created() {
        this.$on('form.addField', field => {
            if (field) {
                this.fields = [...this.fields, field];
            }
        });
        this.$on('form.removeField', field => {
            if (field) {
                this.fields = this.fields.filter(
                    ({ itemkey }) => itemkey !== field.itemkey
                );
            }
        });
    },
    methods: {
        // 传入keys可只验证部分字段
        validate(callback, keys) {
            let rules = {};
            // 是否只验证部分字段 默认是全部验证
            if (keys && keys.length) {
                keys.forEach(key => {
                    rules[key] = this.formRules[key];
                });
            } else {
                rules = this.formRules;
            }

            const validator = new AsyncValidator(rules);
            validator.validate(this.formValues, errors => {
                let formError = {};
                if (errors && errors.length) {
                    errors.forEach(({ message, field }) => {
                        formError[field] = message;
                    });
                } else {
                    formError = {};
                }
                this.formError = formError;
                // 让错误信息的顺序与表单组件的顺序相同
                // const errInfo = [];
                // this.fields.forEach(({ itemkey, el }, index) => {
                //     if (formError[itemkey]) {
                //         errInfo.push(formError[itemkey]);
                //     }
                // });
                callback(Object.values(formError));
            });
        }
    }
};
</script>
