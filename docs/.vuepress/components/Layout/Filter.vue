<!-- https://github.com/30-seconds/30-seconds-of-interviews -->
<template>
  <div class="kit-qa">
    <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.title || $title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
    </div>
    <Content custom/>
    <!-- 搜索题目 名称、内容 或 编号 -->
    <!-- 题名 解答 通过率 难度（相关话题，相似题目） -->
    <!-- 入门、简单、中等、困难 -->
    <!-- 分类 算法/数据库/Shell -->
    <!-- <div class="tags" v-if="data.tags['全部']">
      <a class="tag" :href="`#${key}`" v-for="(value, key) in data.tags">{{key}}({{value}})</a>
    </div>
    <div class="kit-list" v-if="data.list && data.list.length">
      <div class="item" v-for="item in data.list">
        <h2 v-if="item.link">
          <NavLink :item="{link: item.link, text: item.title}" />
        </h2>
        <p>{{ item.desc }}</p>
      </div>
    </div> -->
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
// import NavLink from '@default-theme/NavLink.vue'
// import logo from '@/questions/img/logo.jpg';

export default {
  // components: { NavLink },
  computed: {
    data () {
      return {
        // logo: logo,
      };
      // const data = this.$page.frontmatter || {};
      // // 过滤所有数据提取对应的tags
      // data.tags = { '全部': 0 };
      // data.list.reduce((tags, item) => {
      //   tags['全部'] += 1;
      //   if (item.tags && Array.isArray(item.tags)) {
      //     item.tags.forEach((tag, index) => {
      //       if (!tags[tag]) {
      //         tags[tag] = 1;
      //       } else {
      //         tags[tag] += 1;
      //       }
      //     });
      //   }
      //   return tags;
      // }, data.tags);
      // // data.tags = data.list && data.list[0] && data.list[0].tags || [];
      // // data.tags.unshift('全部');
      // return data
    },
    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// @import "~@default-theme/styles/config.styl"

.tags
  display flex
  flex-wrap wrap
  justify-content flex-start
  align-items center

  .tag
    box-sizing border-box
    appearance none
    display inline-flex
    justify-content center
    align-items center
    white-space nowrap
    user-select none
    cursor pointer
    border 1px solid transparent
    margin 0 0.5em 0.5em 0
    padding 0 0.2em
    // color inherit
    // box-shadow 0 0 0 0.125em rgba(32, 156, 238, 0.25)

  // .tag + .tag
    // margin-left 1em

  // a.tag:active
  a.tag:focus
    color #fff
    border-radius 0.25em
    // margin-bottom -2px
    background $accentColor
    // border-bottom 2px solid $accentColor

.kit-list
  padding 1.2rem 0
  // margin-top 2.5rem
  display flex
  flex-wrap wrap
  // align-items flex-start
  align-content stretch
  justify-content space-between

  .item
    box-sizing border-box
    flex-grow 1
    flex-basis 30%
    max-width 30%
    // border 1px solid $borderColor
    margin-bottom 2em
    padding 0 1em
    border-radius 0.25em
    background lighten($borderColor, 10%)

    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
@media (max-width: $MQMobile)
  .kit-list
    flex-direction column
    .item
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .kit-list
    .item
      h2
        font-size 1.25rem
</style>
