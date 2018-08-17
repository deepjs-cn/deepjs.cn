<template>
  <div class="home">
    <!-- <div class="hero">
      <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
      <h1>{{ data.heroText || $title || 'Hello' }}</h1>
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>
    </div> -->
    <Content custom/>
    <div class="tags" v-if="data.tags && data.tags.length">
      <a class="tag" :href="`#${tag}`" v-for="tag in data.tags">{{tag}}</a>
    </div>
    <div class="kit-list" v-if="data.list && data.list.length">
      <div class="item" v-for="item in data.list">
        <h2 v-if="item.link">
          <NavLink :item="{link: item.link, text: item.title}" />
        </h2>
        <p>{{ item.desc }}</p>
      </div>
    </div>
    <div class="footer" v-if="data.footer">
      {{ data.footer }}
    </div>
  </div>
</template>

<script>
import NavLink from '@default-theme/NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    data () {
      const data = this.$page.frontmatter;
      // 过滤所有数据提取对应的tags
      data.tags = data.list && data.list[0] && data.list[0].tags || [];
      // data.tags.unshift('全部');
      return data
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
@import "~@default-theme/styles/config.styl"

.tags
  .tag
    appearance none
    display inline-flex
    justify-content center
    align-items center
    white-space nowrap
    user-select none
    cursor pointer
    border 1px solid transparent
    color inherit
    // border-radius 0.25em
    // box-shadow 0 0 0 0.125em rgba(32, 156, 238, 0.25)

  .tag + .tag
    margin-left 1em

  a.tag:active
  a.tag:focus
    color $accentColor
    margin-bottom -2px
    border-bottom 2px solid $accentColor

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
  .list-docs
    flex-direction column
    .item
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .list-docs
    .item
      h2
        font-size 1.25rem
</style>
</style>
