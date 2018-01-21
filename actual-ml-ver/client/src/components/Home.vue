<template lang="pug">
  div.home
    div.wrapper
      div.container
        div.row
          div.col-sm
          div.col-sm
            div.title
              div.bubble-cb-title(:class='{ active: titleClicked }' @click='titleClicked = !titleClicked')
                h1 {{ title }}
                  h2 {{ beginNotiText}}
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
      beginNotiText: 'asdf',
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
      titleClicked: false
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
  transition transform cubic-bezier(0.53, -0.19, 0.5, 1.25) 0.8s

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
  
// .bubble-cb-title h2
//   float left
//   width 100%
//   padding-top 75%
//   line-height 1em
//   margin-top -0.5em
//   font-size 2.2em
//   font-family 'SupermercadoOne-Regular'
//   text-align center
//   color $title-on-primary-light
//   pointer-events none
  
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
