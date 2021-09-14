<script>
import Vue from 'vue'
export default {
  onLaunch: function () {
    uni.getSystemInfo({
      success: (e) => {
        this.initSize(e)
      }
    })
  },
  onShow: function () {},
  onHide: function () {},
  methods: {
    initSize(e) {
      const systemInfo = e
      // #ifdef MP-WEIXIN
      let custom = {}
      let navigationBarHeight
      // wx胶囊坐标，大小等
      custom = wx.getMenuButtonBoundingClientRect()
      // 导航栏高度
      navigationBarHeight = custom.bottom + custom.top - e.statusBarHeight * 2
      systemInfo.custom = custom
      systemInfo.navigationBarHeight = navigationBarHeight
      // #endif
      Vue.prototype.systemInfo = systemInfo
    }
  }
}
</script>

<style lang="scss">
@import 'common/css/index.scss';
</style>
