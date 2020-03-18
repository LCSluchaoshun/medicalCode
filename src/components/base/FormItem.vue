<template>
    <div class="form-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FormItem',
    props: {
        itemkey: String,
        rules: Array,
        label: String
    },
    computed: {
        form() {
            let parent = this.$parent;
            while (parent.$options.componentName !== 'FormContainer') {
                parent = parent.$parent;
            }
            return parent;
        },
        fieldError() {
            if (!this.itemkey) {
                return '';
            }
            const formError = this.form.formError;
            return formError[this.itemkey] || '';
        }
    },
    mounted() {
        if (this.itemkey) {
            this.dispatchEvent('form.addField', {
                itemkey: this.itemkey,
                rules: this.rules,
                el: this.$el
            });
        }
    },
    beforeDestroy() {
        if (this.itemkey) {
            this.dispatchEvent('form.removeField', {
                itemkey: this.itemkey
            });
        }
    },
    methods: {
        dispatchEvent(eventName, params) {
            if (typeof this.form !== 'object' && !this.form.$emit) {
                console.error('FormItem必须在FormContainer组件内');
                return;
            }
            this.form.$emit(eventName, params);
        }
    }
};
</script>
