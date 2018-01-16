<template lang="pug">
  div.home(v-title="title")
    h1 {{ msg }}

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
      title: 'ABitsBrain | Home',
      msg: 'Welcome to Abitsbrain.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home
  margin -8px
  background #aaaaaa
  text-align center

h1, h2
  margin 0
  font-weight strong

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

</style>
