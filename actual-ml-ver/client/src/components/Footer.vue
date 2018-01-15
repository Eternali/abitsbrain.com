<template lang="pug">
  div.footer

    h3.maintext(v-html="copyright")
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
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

.footer
  background #353535
  margin 0
  padding 20px 12px 20px 12px

.maintext
  text-align center
  text-size 30px
  font-family Arial
  color #858585

a
  color #42b983

</style>