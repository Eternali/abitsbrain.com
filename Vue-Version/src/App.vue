<template lang="jade">
    div#app
        router-view
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="stylus">
@import 'styles/globals.styl'

#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    margin 0
    padding 0
</style>
