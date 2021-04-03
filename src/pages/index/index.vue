<template>
  <view class="content">
    <!--    <image class="logo" src="/static/logo.png"></image>-->
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: new Date()
    }
  },
  onLoad() {},
  methods: {}
}
</script>

<style lang="scss" scoped></style>
