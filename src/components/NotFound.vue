<template>
  <div class="not-found-view">
    <div class="error-code">404</div>
    <p>ページが見つかりませんでした...</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="stylus">
  .not-found-view
    font-size 1.4rem
    color #fff
    text-align center
    position absolute
    top 50%
    left 50%
    transform translateY(-50%) translateX(-50%)
    .error-code
      font-weight bold
      font-size 100px
</style>