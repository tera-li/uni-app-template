<template>
  <view class="content">
    <!--    <image class="logo" src="/static/logo.png"></image>-->
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import { userInfo } from '@/common/api'

export default {
  data() {
    return {
      title: new Date()
    }
  },
  onLoad() {
    userInfo({ user: '123' }).then((res) => {
      console.log(res)
    })
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
