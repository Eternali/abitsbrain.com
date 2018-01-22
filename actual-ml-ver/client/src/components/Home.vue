<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.row
          div.col-sm
          div.col-sm
            div.title
              // @mouseover/mouseout='var = val / expression'
              div.bubble-cb-title(:class='{ active: mainEnabled }'
                                  @click='mainEnabled = !mainEnabled')
                h1 {{ title }}
                  h2(v-if='!mainEnabled') {{ beginNotiText }}
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
      // central menu data
      title: 'A Bit\'s Brain',
      beginNotiText: 'begin',
      categories: [
        {
          'name': 'Supervised learning',
          'sub-categories': [
            {

            }
          ]
        }
      ],
      // menu activations
      mainEnabled: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  min-height 100%
  background $primary-background
  text-align center

.wrapper
  min-height 'calc(100vh - %s)' % $footer-height
  
.title
  width 50%
  margin 2% auto

.bubble-cb-title
  margin 0 auto
  background 'radial-gradient(%s 20%, %s 90%, %s 95%, #000 100%)' % ($primary-light $primary-color $primary-dark)
  transition ease-background-gradient 0.8s ease-in-out
  transition transform 0.8s cubic-bezier(0.53, -0.19, 0.5, 1.25)

.bubble-cb-title h1
  float left // don't remove (will break title bubble)
  width 100%
  padding-top 50%
  line-height 1em
  margin-top -0.5em
  font-size 3.2em
  font-family 'SupermercadoOne-Regular'
  text-align center
  color $title-on-primary-light
  pointer-events none
  
.bubble-cb-title h2
  font-size 0.6em
  display inherit !important
  animation-duration 2s
  animation-name ease-fade
  animation-iteration-count infinite
  // animation-direction alternate
  

.bubble-cb-title h2[style*='display: none;']
  opacity 0
  pointer-events none
  user-select none
  
.active
  transform translateY(75%)
  background 'radial-gradient(%s 20%, %s 90%, %s 95%, #000 100%)' % ($title-background-light $title-background-dark $title-background-border)
  
h2
  color $subtitle-color

a
  color $link-primary

.footer-push
  height $footer-height

</style>
