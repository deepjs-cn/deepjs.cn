<template>
  <ParentLayout>
    <!-- <CarbonAds slot="sidebar-top"/>
    <BuySellAds slot="page-bottom"/> -->
    <PageTop slot="page-top"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
// import CarbonAds from '../components/CarbonAds.vue'
// import BuySellAds from '../components/BuySellAds.vue'
import PageTop from '../components/PageTop.vue'

export default {
  components: {
    ParentLayout,
    // CarbonAds,
    // BuySellAds,
    PageTop,
  },
}
</script>

<style lang="stylus" scoped>
.page-interview >>> .page-edit,
.page-interview >>> .page-nav {
  display: none
}
</style>
