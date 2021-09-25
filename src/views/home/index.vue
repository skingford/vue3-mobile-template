<!--
 * @Author: kingford
 * @Date: 2021-07-11 10:24:03
 * @LastEditTime: 2021-09-25 09:43:08
-->
<template>
  <div class="home">
    home
    <div class="t-1px">t-1px</div>
    <div class="r-1px">r-1px</div>
    <div class="b-1px">b-1px</div>
    <div class="l-1px">l-1px</div>
    <div class="f-1px">f-1px</div>
  </div>
  <!-- 拨打电话 -->
  <a href="tel:10086">拨打电话给10086小姐姐</a> <br />

  <!-- 发送短信 -->
  <a href="sms:10086">发送短信给10086小姐姐</a><br />

  <!-- 发送邮件 -->
  <a href="mailto:young.joway@aliyun.com">发送邮件给JowayYoung</a><br />

  <!-- 选择照片或拍摄照片 -->
  <input type="file" accept="image/*" /><br />

  <!-- 选择视频或拍摄视频 -->
  <input type="file" accept="video/*" /><br />

  <!-- 多选文件 -->
  <input type="file" multiple /><br />

  <!-- 纯数字 -->
  <input type="number" placeholder="纯数字" pattern="\d*" /><br />

  <!-- 打开微信 -->
  <a href="weixin://">打开微信</a>

  <!-- 打开支付宝 -->
  <a href="alipays://">打开支付宝</a>

  <!-- 打开支付宝的扫一扫 -->
  <a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫</a>

  <!-- 打开支付宝的蚂蚁森林 -->
  <a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>

  <van-icon name="chat-o" />
  <van-button type="primary">主要按钮</van-button> <br />
  <van-button type="primary" size="large">大号按钮</van-button> <br />
  <van-button type="primary" size="normal">普通按钮</van-button> <br />
  <van-button type="primary" size="small">小型按钮</van-button> <br />
  <van-button type="primary" size="mini">迷你按钮</van-button> <br />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>
<style lang="scss">
.home {
  font-size: 20px;
  color: $color;
  padding: 10px;
}
</style>
