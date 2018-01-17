<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.row
          div.col-sm
          div.col-sm
            h1.title {{ title }}
            h2 {{ subtitle }}
          div.col-sm
        div.footer-push

    main-footer
</template>

<script>
import Footer from './Footer'

export default {
  components: {
    'main-footer': Footer
  },
  name: 'Home',
  data () {
    return {
      title: 'ABitsBrain',
      subtitle: 'Welcome to Abitsbrain.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  min-height 100%
  background #757575
  text-align center

.wrapper
  min-height "calc(100vh - %s)" % $footer-height

.bubble
  

h1.title
  background #454545
  border-radius 10px
  font-weight strong

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

.footer-push
  height $footer-height

</style>
