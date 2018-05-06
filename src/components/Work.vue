<template>
  <div class="work-view">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title">WiNtU HomePage</p>
          <p>このホームページはVue.js + Vue Routerで作ったSPAです。そしてビルドにはWebpack4を使用しております。</p>
          <div class="tech-tags">
            <span class="tag is-info">Vue.js</span>
            <span class="tag is-info">Webpack</span>
            <span class="tag is-info">Javascript</span>
          </div>
        </div>
        <div class="tile is-child box">
          <p class="title">Gamio Funny(開発途中)</p>
          <p>
            私が運営してる「Gamio」の機能の一環として開発中のファン向けサービスです。
            Minecraftと連携し、ゲームを持っていない人がクエストを作成し、実況者が
            そのクエストを遊べるサービスです。これを通じて双方向に楽しさを提供します。
          </p>
          <div class="tech-tags">
            <span class="tag is-info">JavaScript</span>
            <span class="tag is-info">Node.js</span>
            <span class="tag is-info">Vue.js</span>
            <span class="tag is-info">Mongodb</span>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child box">
          <p class="title">実況者コミュニティ - Gamio</p>
          <p>
            本当に実力がある実況者が埋もれているこのゲーム実況業界で、実況者同士が協力し合いお互いを刺激し合い成長する場があれば 真の力を発揮し、夢が実現できるのではないかと考え、できたのが「Gamio」です。
            2018年で3周年を迎えようとしていますが、現在では約120名の実況者が所属し、約60万人の視聴者さんに支えられております。
          </p>
          <div class="tech-tags">
            <span class="tag is-info">Ruby</span>
            <span class="tag is-info">Ruby on Rails</span>
            <span class="tag is-info">MySQL</span>
          </div>
          <div class="video">
            <iframe src="https://www.youtube.com/embed/Zb5Jf9HA0aI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <a class="button is-light" href="https://gamio.xyz" target="_blank">サイトへ飛ぶ！</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  props: ['common']
}
</script>

<style lang="stylus">
  .work-view
    .tech-tags
      margin-top 5px
    .video
      margin-top 10px
      position relative
      width 100%
      padding-top 56.25%
      iframe
        position absolute
        top 0
        right 0
        width 100%
        height 100%
    .button
      margin-top 10px
      width 100%
</style>