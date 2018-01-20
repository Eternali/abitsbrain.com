<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.row
          div.col-sm
          div.col-sm
            div.title
              div.bubble-cb-title
                h1 {{ title }}  
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
    title: 'Abitsbrain | Home',
    link: [
      { rel: 'favicon', href: '@logo.png' }
    ]
  },
  data () {
    return {
      title: 'A Bit\'s Brain',
      categories: [
        {
          'name': 'Supervised learning',
          'sub-categories': [
            {

            }
          ]
        }
      ]
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
  
.title
  width 50%
  margin 2% auto

.bubble-cb-title
  margin 0 auto
  background "radial-gradient(%s 20%, %s 90%, %s 95%, #000 100%)" % ($title-background-light $title-background-dark $title-background-border)

.bubble-cb-title h1
  float left // don't remove (will break title bubble)
  width 100%
  padding-top 50%
  line-height 1em
  margin-top -0.5em
  font-size 3.2em
  font-family 'SupermercadoOne-Regular'
  text-align center
  color $title-color
  pointer-events none
  
.bubble-cb-title.active
  translateX -50%
  
h2
  color $subtitle-color

a
  color $link-primary

.footer-push
  height $footer-height

</style>
