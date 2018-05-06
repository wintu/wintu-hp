<template>
  <div class="app-view">
    <header-nav :activePage="pageName" />
    <div class="head-title" v-if="pageName !== 'Top' && pageName">{{common.title || pageName}}</div>
    <div :class="{ 'bg-color container': pageName !== 'Top' && pageName }">
      <transition name="fade">
        <router-view :common="common"></router-view>
      </transition>
    </div>
    <div class="particles">
      <vue-particles
          color="#ffffff"
          :particleOpacity="0.7"
          linesColor="#ffffff"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="5"
          :linesWidth="2"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="3"
          :hoverEffect="false"
          :clickEffect="false" />
    </div>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'App',
  components: { HeaderNav },

  data() {
    return ({
      common: {
        title: ''
      }
    })
  },

  computed: {
    pageName() {
      const path = this.$route.path
      if (path === '/') {
        return 'Top'
      } else if (path.indexOf('/about') !== -1) {
        return 'About Me'
      } else if (path.indexOf('/work') !== -1) {
        return 'Work'
      } else if (path.indexOf('/contact') !== -1) {
        return 'Contact'
      }
    }
  }
}
</script>

<style lang="stylus">
@import './libs/reset.styl'
@import '~bulma-stylus/bulma.styl'

.app-view
  .head-title
    color #ffffff
    font-size 90px
    text-align center
    margin 50px 0
  .particles
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background linear-gradient(to right, #16222a, #3a6073)
    z-index -2
    .particles-js-canvas-el 
      height 100vmax !important
      z-index -1
  .bg-color
    background rgba(236, 240, 241, 0.9)
    border-radius 5px
    color #000
    @media screen and (min-width: 600px)
      padding 50px
    @media screen and (max-width: 600px)
      padding 20px
  .fade-enter-active, .fade-leave-active
    transition-property opacity
    transition-duration .25s
  .fade-enter-active
    transition-delay .25s
  .fade-enter, .fade-leave-active
    opacity 0

.section-title
      margin-top 50px
      margin-bottom 20px
      font-size 2rem
      position relative
      display inline-block
      text-align center
      width 100%
      &:before
        content ''
        position absolute
        bottom -10px
        display inline-block
        width 60px
        height 5px
        left 50%
        transform: translateX(-50%)
        background-color black
        border-radius 2px

</style>