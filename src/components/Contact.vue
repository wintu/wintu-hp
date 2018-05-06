<template>
  <div class="contact-view">
    <p>
      お問い合わせを希望の方は「Gamio」のフォーム、またはSNS、メッセンジャーを利用してお願いします。
      メールやフォームの場合だと埋もれてしまい、返信が遅くなる可能性があります。返信が無かった場合はSNSやメッセンジャーに送ってもらえると幸いです。
    </p>
    <div class="form-btns">
      <a href="https://gamio.xyz/contact" target="_blank" class="button is-info is-large">
        <span class="icon is-medium">
          <i class="fab fa-wpforms"></i>
        </span>
        <span>お問い合わせフォーム</span>
      </a>
      <a href="mailto:contact@wintu520.com" class="button is-light is-large">
        <span class="icon is-medium">
          <i class="far fa-envelope"></i>
        </span>
        <span>メール</span>
      </a>
    </div>
    <div class="sns-links">
      <div class="section-title">Links</div>
      <a href="https://github.com/wintu" target="_blank" class="button is-large">
        <span class="icon is-medium">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <a href="https://twitter.com/wintu520" target="_blank" class="button is-large">
        <span class="icon is-medium">
          <i class="fab fa-twitter"></i>
        </span>
        <span>Twitter</span>
      </a>
      <a target="_blank" href="https://www.instagram.com/wintu520/" class="button is-large">
        <span class="icon is-medium">
          <i class="fab fa-instagram"></i>
        </span>
        <span>Instagram</span>
      </a>
      <a href="https://www.youtube.com/user/Wintu520" target="_blank" class="button is-large">
        <span class="icon is-medium">
          <i class="fab fa-youtube"></i>
        </span>
        <span>YouTube</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['common']
}
</script>

<style lang="stylus">
  .contact-view
    font-size 1.4rem
    .button+ .button
      @media screen and (min-width: 600px)
        margin-left 5px
    .button
      @media screen and (max-width: 600px)
        width 100%
        margin-top 5px
    .form-btns
      text-align center
      margin-top 15px
    .sns-links
      text-align center
</style>