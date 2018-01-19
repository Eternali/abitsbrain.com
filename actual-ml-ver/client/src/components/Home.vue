<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.row
          div.col-sm
          div.col-sm
            div.title
              div.bubble-title
                h1 {{ title }}  
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
  metaInfo: {
    title: 'Abitsbrain | Home'
  },
  data () {
    return {
      title: 'A Bit\'s Brain',
      subtitle: 'Welcome to Abitsbrain.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  min-height 100%
  background $home-background
  text-align center

.wrapper
  min-height "calc(100vh - %s)" % $footer-height
  
// base bubble class
[class*="bubble-"]
  width 50%
  
[class*="bubble-"]:after
  content ""
  display block
  width 100%
  height 0
  padding-bottom 100%
  border-radius 50%
  box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.2)

.title
  width 50%
  margin 2% auto

.bubble-title:after
  margin-left 50%
  background "radial-gradient(%s 5%, %s 75%)" % ($title-background-light $title-background-dark)
  border 1px solid $title-background-border

.bubble-title h1
  float left
  width 100%
  padding-top 50%
  line-height 1em
  margin-left 50%
  margin-top -0.5em
  font-size 3.2em
  font-family 'SupermercadoOne-Regular'
  text-align center
  color $title-color
  
h2
  color $subtitle-color

a
  color $link-primary

.footer-push
  height $footer-height

</style>
