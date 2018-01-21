<template lang="pug">
  div.footer
    a.fa.footer-social(:class="this.links[0].icon" :href="this.links[0].href")
    div.maintext(v-html="copyright")
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: '&copy; Copyright 2018 Conrad Heidebrecht',
      links: [
        {
          icon: 'fa-github',
          href: 'https://github.com/eternali'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.footer
  height $footer-height
  margin 0
  vertical-align middle
  background $footer-background

a.footer-social
  padding-top 1.2em
  text-decoration none
  transform scale(3)
  transition all 0.2s ease-in-out

.maintext
  margin-top 2.3em
  text-align center
  font-size 18px
  font-family Arial
  color $footer-maintext

</style>
