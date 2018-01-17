<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import 'bootstrap/dist/css/bootstrap.css'
@import 'bootstrap-vue/dist/bootstrap-vue.css'
@import 'font-awesome/css/font-awesome.css'

html, body
  margin 0

#app
  width 100vw 
  height 100vh
  margin 0
  
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>
