<template>
  <div class="about-view">
    <div class="profile-detail">
      <div class="icon-image">
        <img src="/assets/images/icon_real.jpg" alt="">
        <p>WiNtUの中身</p>
      </div>
      <div class="detail">
        <p>
          1997年5月、インドネシア人と日本人のハーフとして生まれました。
          そのため、よくインドネシアと日本を行き来しております。
          幼少期からパソコンに触れる機会があり、その時使ったインターネットに刺激を受けました。
          それ以来独学でプログラミング・サーバーに関して学び、高校生の頃にゲーム実況者コミュニティ「Gamio」を立ち上げました。
          大学生に進学したと同時にITベンチャー企業にインターン。その後も積極的にハッカソンや勉強会に参加して技術力を磨いています！
          みなさんがインターネットを全力で楽しめるようなサービスやプログラムを作っていきたいです！
        </p>
      </div>
    </div>

    <div class="skills">
      <div class="section-title">スキル一覧</div>
      <div class="skill-tags">
        <span class="tag is-info is-large">HTML</span>
        <span class="tag is-info is-large">CSS</span>
        <span class="tag is-info is-large">Stylus</span>
        <span class="tag is-info is-large">Ruby</span>
        <span class="tag is-info is-large">Ruby on Rails</span>
        <span class="tag is-info is-large">Javascript</span>
        <span class="tag is-info is-large">Node.js</span>
        <span class="tag is-info is-large">Vue.js</span>
        <span class="tag is-info is-large">Webpack</span>
        <span class="tag is-info is-large">MySQL</span>
        <span class="tag is-info is-large">Linux</span>
        <span class="tag is-info is-large">Kotlin</span>
        <span class="tag is-info is-large">Android(勉強中)</span>
        <span class="tag is-info is-large">React Native(勉強中)</span>
        <span class="tag is-info is-large">MongoDB</span>
        <span class="tag is-info is-large">jQuery</span>
        <span class="tag is-info is-large">Socket.IO</span>
        <span class="tag is-info is-large">Docker</span>
        <span class="tag is-info is-large">Wordpress</span>
        <span class="tag is-info is-large">PHP</span>
      </div>
    </div>

    <div class="other-skills">
      <div class="section-title">エンジニア以外の部分</div>
      <p>
        私は映像分野も大好きです。趣味程度にAdobe AfterEffectsやFinal Cut Pro Xなどを使用して動画編集や軽いMotion Graphicsなどを作ります。
        その技術を生かして時々YouTubeで動画を上げています。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['common']
}
</script>

<style lang="stylus">
  .about-view
    font-size 1.4rem
    .profile-detail
      @media screen and (min-width: 600px)
        display flex
        justify-content center
        align-items center
      .icon-image
        text-align center
        @media screen and (min-width: 600px)
          width 20%
        img
          width 200px
          border-radius 100px
        p
          @media screen and (max-width: 600px)
            display none
      .detail
        @media screen and (min-width: 600px)
          width 80%
          margin-left 50px
        @media screen and (max-width: 600px)
          margin-top 50px
        .button
          margin-top 10px
          width 100%
    .skill-tags
      text-align center
      span
        margin-bottom 10px
</style>