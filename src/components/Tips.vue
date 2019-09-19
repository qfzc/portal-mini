<template>
    <popup class="popup-message-box" v-model="isActive">
        <div class="message-pop-content">
            <div>
                <div class="confirm-box-title"></div>
                <!-- 标题，关闭按钮 -->
                <div class="message-box-title flex-row flex-align-center">
                    <div class="flex-1" @click.stop=""><slot name="title"></slot></div>
                    <span class="right-fork"></span>
                </div>
            </div>
            <!-- 列表 -->
            <scroll class="message-scroll">
                <slot name="list"></slot>
            </scroll>
        </div>
    </popup>
</template>
<script>
    export default {
      props: {
        value: Boolean
      },
      data () {
        return {
          isActive: this.value
        }
      },
      watch: {
        isActive (val) {
          this.$emit('input', val)
        },
        value (val) {
          this.isActive = val
        }
      }
    }
</script>
<style lang="scss" >
    @import '../../static/sass/_variable.scss';
    .confirm-box-title {
        margin-top: -3rem;
        height: 60px;
        background: url(../../static/img/icon-prompt-pop-up.png) no-repeat;
        background-size: 30%;
        background-position: bottom;
    }
    .message-pop-content {
        word-wrap:break-word;
        width: 80%;
        height: 40%;
        position: absolute;
        top: 30%;
        left: 10%;
        right: 0;
    }
    .message-box-title {
        text-align: center;
        background-color: $main-blue;
        height: 2.25rem;
        line-height: 2.25rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
    .message-scroll {
        position: absolute;
        top: 2.25rem !important;
        bottom: 0;
        overflow-y: auto;
        padding: 0;
    }
    .popup-message-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        text-align: left;
        color: #444;
        background-color: rgba(0,0,0,0.7);
        z-index: 4;
        list-style: none;
    }
    .right-fork{
        width: 0.7rem;
        height: 0.675rem;
        background: url("../../static/img/pop-btn.png") no-repeat;
        background-size: contain;
    }
</style>