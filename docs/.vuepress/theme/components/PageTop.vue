<template>
  <div class="page-questions">
    <div class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        alt="hero"
      >

      <h1>{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </div>
    <div class="guide">请选择你需要的面试等级，从易到难分1-9级</div>
    <div class="filter">分类 难度 状态</div>
    <div class="questions">
      <ul class="question-list">
        <li class="question-wrapper is-visible">
          <div class="badge is-easy">简单、中等、困难</div>
          <div class="question">
            <div class="question-tag is-html"></div>
            <div class="question-heading">What is the purpose of the `alt` attribute on images?</div>
            <div class="question-button">显示答案</div>
            <div class="question-answer"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'

// 生成一份面试题，全屏界面，显示一题，可展开参考答案
// 可以刷新，刷新为同类型题目
// 两个按钮，上一题、下一题，星际评定后，直接下一题
// 有个答案页面，评定结果

// 从1到9级，面试题包含的难易问题数
// html+css+js问题数 以及笔试问题数
// html css  js  笔试
// 1~3  2~5 5~15 0~2
// 至少包含 html css 各一个，笔试1个，总数至少20个
// 可选择偏重技术 chennel（vue react miniprogram 等），生成的面试题有所偏重
// 1：9+3+2
// 2：7+5+2
// 3：5+7+2
// 4：5+9+2
// 5：5+9+2
// 6：5+9+3
// 7：3+7+5
// 8：3+5+7
// 9：3+3+9+2

export default {
  components: {
    NavLink,
  },
  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.hero
  padding-top 48px
  text-align center
  img
    max-width: 100%
    max-height 280px
    display block
    margin 3rem auto 1.5rem
  h1
    font-size 3rem
  h1, .description, .action
    margin 1.8rem auto
  .description
    max-width 35rem
    font-size 1.6rem
    line-height 1.3
    color lighten($textColor, 40%)
  .action-button
    display inline-block
    font-size 1.2rem
    color #fff
    background-color $accentColor
    padding 0.8rem 1.6rem
    border-radius 4px
    transition background-color .1s ease
    box-sizing border-box
    border-bottom 1px solid darken($accentColor, 10%)
    &:hover
      background-color lighten($accentColor, 10%)
</style>
