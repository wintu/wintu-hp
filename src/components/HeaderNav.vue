<template>
  <div class="nav-view">
    <ul class="main-menu">
      <li :class="{ 'is-active': activePage === 'Top' }"><router-link to="/">HOME</router-link></li>
      <li :class="{ 'is-active': activePage === 'About Me' }"><router-link to="/about">ABOUT_ME</router-link></li>
      <li :class="{ 'is-active': activePage === 'Work' }"><router-link to="/work">WORK</router-link></li>
      <li :class="{ 'is-active': activePage === 'Contact' }"><router-link to="/contact">CONTACT</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: ['activePage']
}
</script>

<style lang="stylus">
  .nav-view
    .main-menu
      width 100%
      position absolute
      top 0
      left 0
      background linear-gradient(to bottom, rgba(0, 0, 0, 0.7) ,rgba(0, 0, 0, 0.0))
      display flex
      justify-content center
      padding 20px
      li+ li
        margin-left 20px
      li > a
        color #fff
        transition all 0.3s ease
        &:hover
          color rgba(41, 128, 185,1.0)
      li.is-active > a
        color rgba(41, 128, 185,1.0)
        
</style>