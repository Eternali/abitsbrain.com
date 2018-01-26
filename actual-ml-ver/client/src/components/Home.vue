<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.title
          div.bubble-cb-title(:class='{ active: mainEnabled }'
                                @mouseover='titleHovered = true'
                                @mouseout='titleHovered = false'
                                @click='mainEnabled = !mainEnabled')
            h1 {{ title }}
              h2(:class='{flashing: !titleHovered}' v-if='!mainEnabled') {{ beginNotiText }}
        div.categories
          transition-group(name='radialButtons' tag='div')
            span(v-if='mainEnabled' v-for='cat in categories' :key='cat.name' class='category')
              div {{ cat.name }}
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
          'categories': [
            {
              'name': 'Unsupervised Learning'
            },
            {
              'name': 'Supervised Learning'
            },
            {
              'name': 'Reinforcement Learning'
            }
          ]
        }
      ],
      // menu activations
      titleHovered: false,
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
  margin 0
  min-height 'calc(100vh - %s)' % $footer-height

.title
  width 50%
  margin 2% auto

.bubble-cb-title
  margin 0 auto
  background 'radial-gradient(%s 20%, %s 90%, %s 95%, #000 100%)' % ($primary-light $primary-color $primary-dark)
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
  opacity 1
  // fader(@opacity)
  // animation 0.8s easeFade 1 alternate

.bubble-cb-title h2.flashing
  opacity 1
  fader(@opacity)
  animation-duration 1.6s
  animation-name easeFade
  animation-iteration-count infinite
  animation-direction alternate

.bubble-cb-title h2[style*='display: none;']
  opacity 0
  pointer-events none
  user-select none

.active
  transform translateY(75%)
  // backgroundGradienter($primary-light, $primary-dark, $primary-dark, $title-background-light, $title-background-dark, $title-background-border)
  // animation-duration 0.8s
  // animation-name easeBackgroundGradient
  // animation-iteration-count 1
  // animation-direction linear
  // background 'radial-gradient(%s 20%, %s 90%, %s 95%, #000 100%)' % ($title-background-light $title-background-dark $title-background-border)

h2
  color $subtitle-color

.categories
  margin-top 5%

.radialButtons-enter-active, .radialButtons-leave-active
  transition opacity 0.8s
  transition-delay 0.8s

.radialButtons-enter, .radialButtons-leave-to
  opacity 0

.category-enter-active, .category-leave-active
  transition opacity 0.8s

.category

.category


.footer-push
  height $footer-height

</style>
