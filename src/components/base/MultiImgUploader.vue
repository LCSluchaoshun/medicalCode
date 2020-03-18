<template>
    <div class="mulImg">
        <div class="container">
            <div
                v-for="(url, index) in imgList"
                :key="index"
                class="wrapper"
                :style="{ width: setWidth, height: setHeight }"
            >
                <img :src="url" class="img" @click="preview(index)" />
                <svg class="closeIcon" aria-hidden="true" @click="deletePic(index)">
                    <use xlink:href="#icon-photo-close" />
                </svg>
            </div>
            <div class="btn-add" :style="{ width: setWidth, height: setHeight }">
                <input
                    ref="inputImg"
                    type="file"
                    class="add"
                    accept="image/gif, image/jpeg, image/png, image/jpg"
                    @change="addImg"
                    :disabled="disabled"
                />
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-add" />
                </svg>
            </div>
        </div>
        <p v-if="tips !== ''" class="tips">{{ tips }}</p>

        <ImgCropper
            ref="imgCropper"
            :img="currentImg"
            @cropDone="uploadImg"
            :crop-width="cropWidth"
            :crop-height="cropHeight"
        ></ImgCropper>
    </div>
</template>

<script type="text/ecmascript-6">
import { ImagePreview } from 'vant';
import ImgCropper from './ImgCropper';

export default {
    name: 'MulImgUploader',
    components: {
        ImagePreview,
        ImgCropper
    },
    props: {
        crop: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        imageList: {
            type: Array,
            default: () => {
                return [];
            }
        },
        imgType: {
            type: String,
            default: '1'
        },
        setWidth: {
            type: String,
            default: '80px'
        },
        setHeight: {
            type: String,
            default: '80px'
        },
        maxPicNum: {
            required: true,
            type: Number,
            default: -1
        },
        tips: {
            type: String,
            default: ''
        },
        cropWidth: {
            type: Number,
            default: 300
        },
        cropHeight: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            value: [], // 累计上传的轮播图
            picList: [], // 上传oss图片列表
            imgList: this.imageList, // 预览图片列表
            loadShow: true,
            currentImg: ''
        };
    },
    computed: {
        marginLeft() {
            return (parseInt(this.setWidth) - 30) / 2 + 'px';
        }
    },
    created() {},
    mounted() {},
    methods: {
        preview(index) {
            ImagePreview(this.imgList, index);
        },
        async addImg(e) {
            // 鉴别上传重复图片
            // const value = this.$refs.inputImg.value;
            // if (this.value.includes(value)) {
            //     this.$toast({
            //         message: '图片上传重复，请重新选择！',
            //         duration: 1000
            //     });
            //     this.$refs.inputImg.value = '';
            //     return;
            // }
            const file = e.target.files[0];

            const max = this.maxPicNum;
            if (!file) {
                // 如果打开文件夹未选择图片，不处理
                return;
            }
            if (max > 0 && this.imgList.length >= max) {
                // 如果超出最大张数限制，提示
                this.$toast({
                    message: '至多添加' + max + '张',
                    duration: 1000
                });
                return;
            }

            // 判断是否需要剪裁
            if (this.crop) {
                // 先剪裁再上传
                // 获取file的base64 调用剪裁
                const reader = new FileReader();
                reader.addEventListener(
                    'load',
                    () => {
                        this.currentImg = reader.result;
                        this.$refs.imgCropper.show();
                    },
                    false
                );
                reader.readAsDataURL(file);
            } else {
                // 不剪裁直接上传
                this.uploadImg(file);
            }
        },
        uploadImg(file) {
            const value = this.$refs.inputImg.value;

            this.httpUploadImg(file, this.imgType).then(
                res => {
                    this.imgList.push(res);
                    this.$emit('getPics', this.imgList);
                    // 将当前的value赋给this.value,将value置空，避免input重复上传图片不触发change事件
                    this.value.push(value);
                    this.$refs.inputImg.value = '';
                },
                res => {}
            );
        },
        deletePic(index) {
            if (this.disabled) return;
            this.imgList.splice(index, 1);
            this.$emit('getPics', this.imgList);
        }
    },
    watch: {
        imageList(val) {
            this.imgList = val;
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~common/main.styl';

.van-loading {
    position: absolute;
    z-index: 999;
}

.mulImg {
    .container {
        width: 100%;
        display: flex;
        align-content: flex-start;
        flex-wrap: wrap;

        .wrapper {
            margin: 10px 20px 10px 0;
            position: relative;

            .img {
                width: 100%;
                height: 100%;
                /* border-radius 5px */
            }
        }

        .btn-add {
            flex-y();
            margin: 10px 20px 10px 0;
            border: 1px solid border-color;
            font-size: 10px;
            color: gray9;
            position: relative;

            .add {
                width: 100%;
                height: 100%;
                opacity: 0;
                position: absolute;
            }
        }
    }
}

.tips {
    margin-top: 2vw;
    font-size: vw(12);
    color: gray9;
    text-align: left;
}

.icon {
    fill: border-color;
    width: 20px;
    height: 20px;
}

.closeIcon {
    fill: gray6;
    background-color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -10px;
    right: -10px;
    opacity: 0.5;
}
</style>
