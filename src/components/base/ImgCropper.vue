<template>
    <div class="modal-container" v-show="showFlag">
        <div class="crop-container" id="crop-container">
            <div class="crop">
                <vueCropper
                    ref="cropper"
                    :img="img"
                    :output-size="outputSize"
                    :fixed-box="true"
                    :center-box="false"
                    :can-move-box="false"
                    :auto-crop="true"
                    :auto-crop-width="cropWidth"
                    :auto-crop-height="cropHeight"
                    :mode="cropWidth+'px'"
                    :high="false"
                ></vueCropper>
            </div>

            <div class="btn" @click="confirm">完成裁剪</div>
        </div>
    </div>
</template>

<script>
import { VueCropper } from 'vue-cropper';
import { dataURLtoBlob } from 'common/utils';

export default {
    name: 'ImgCropper',
    data() {
        return {
            showFlag: false,
            previews: ''
        };
    },
    props: {
        outputSize: {
            type: Number,
            default: 0.8
        },
        // 剪裁宽度
        cropWidth: {
            type: Number,
            default: 300
        },
        // 剪裁高度
        cropHeight: {
            type: Number,
            default: 300
        },
        img: String
    },
    computed: {},
    created() {},
    mounted() {
        document
            .getElementById('crop-container')
            .addEventListener('touchmove', function(event) {
                event.preventDefault();
            });
    },
    methods: {
        show(key) {
            this.key = key;
            this.showFlag = true;
        },
        confirm() {
            this.$refs.cropper.getCropBlob(data => {
                this.showFlag = false;
                // data 是blob类型数据
                this.$emit('cropDone', data, this.key);
            });
        }
    },
    watch: {},
    components: { VueCropper }
};
</script>

<style lang='stylus' scoped>
@import '~common/main.styl';

.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    .crop-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);

        .crop {
            width: 100vw;
            height: 100vw;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            margin: auto;
        }

        .btn {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            middle-solid();
        }
    }
}
</style>
