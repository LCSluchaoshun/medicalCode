<template>
    <div class="singleImg">
        <div class="single" :class="{round:round}" :style="{ width: setWidth, height: setHeight }">
            <van-loading v-if="loadShow" />

            <img :src="img || defaultImg" :class="{round:round}" />
            <input
                ref="inputImg"
                type="file"
                class="file"
                accept="image/gif, image/jpeg, image/png, image/jpg"
                @change="addChangeImg"
                :disabled="disabled"
            />
        </div>
        <p v-if="tips !== ''" class="tips">{{ tips }}</p>

        <ImgCropper
            ref="imgCropper"
            :img="img"
            @cropDone="uploadImg"
            :crop-width="cropWidth"
            :crop-height="cropHeight"
        ></ImgCropper>
    </div>
</template>

<script type="text/ecmascript-6">
import ImgCropper from './ImgCropper';

export default {
    name: 'SingleImgUploader',
    props: {
        crop: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        img: {
            type: String,
            default: ''
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
        round: {
            type: Boolean,
            default: false
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
            defaultImg:
                'http://chenglianyijia.oss-cn-beijing.aliyuncs.com/manager/addImg.svg',
            showImg: this.img,
            loadShow: false
        };
    },
    computed: {},
    created() {},
    methods: {
        addChangeImg(e) {
            // 上传主图
            this.loadShow = true;
            const file = e.target.files[0];

            // 判断是否需要剪裁
            if (this.crop) {
                // 先剪裁再上传
                // 获取file的base64 调用剪裁
                const reader = new FileReader();
                reader.addEventListener(
                    'load',
                    () => {
                        this.img = reader.result;
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

            this.httpUploadImg(file, this.imgType)
                .then(imgUrl => {
                    this.$emit('getPic', imgUrl);
                    this.img = imgUrl;
                    // 单张图片上传不会触发change事件，所以清空value
                    this.$refs.inputImg.value = '';
                    this.loadShow = false;
                })
                .catch(err => {
                    console.log(err);
                    this.loadShow = false;
                });
        }
    },
    watch: {
        img(val) {
            this.showImg = val;
        }
    },
    components: {
        ImgCropper
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/main.styl';

.singleImg {
    position: relative;

    .van-loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }

    .single {
        position: relative;
        flex-x(flex-start);
        background: grayE;

        input {
            width: 100%;
            height: 100%;
            opacity: 0;
            position: absolute;
            left: 0;
        }

        img {
            object-fit: fill;
            width: 100%;
            height: 100%;

            &.round {
                border-radius: 10px;
            }
        }

        &.round {
            border-radius: 10px;
        }
    }

    .tips {
        margin-top: 2vw;
        font-size: vw(12);
        color: gray9;
        text-align: left;
    }

    p {
        float: left;
        width: 200px;
    }
}
</style>
