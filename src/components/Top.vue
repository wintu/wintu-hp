<template>
  <div class="top-view">
    <div class="profile">
      <div class="icon-image">
        <img src="/assets/images/icon.png" alt="">
      </div>
      <div class="about-me-short">
        <div class="my-name">WiNtU520</div>
        <p class="slogan">インターネットを全力で楽しむのが目標！</p>
        <p class="comment">フロントエンド、バックエンドを中心に書いてるWebエンジニアです</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: ['common']
}
</script>

<style lang="stylus">
  .top-view
    .profile
      width 100%
      min-height 100vh
      padding 20px
      @media screen and (min-width: 600px)
        align-items center
        display flex
        justify-content center
      @media screen and (max-width: 600px)
        text-align center
        top 50%
        padding-top 36.25%
      .icon-image
        img
          border-radius 5px
          @media screen and (min-width: 600px)
            width 300px
          @media screen and (max-width: 600px)
            width 200px
      .about-me-short
        color #fff
        line-height 1
        @media screen and (min-width: 600px)
          margin-left 50px
          text-align left
        .my-name
          font-weight bold
          @media screen and (min-width: 600px)
            font-size 120px
          @media screen and (max-width: 600px)
            font-size 60px
        .slogan
          margin-top 20px
          font-weight bold
          @media screen and (min-width: 600px)
            font-size 50px
          @media screen and (max-width: 600px)
            font-size 40px
        .comment
          line-height 40px
          font-size 1.6rem
          @media screen and (max-width: 600px)
            font-size 1.4rem
</style>