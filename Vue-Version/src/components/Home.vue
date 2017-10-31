<template lang="jade">
    div#home
        Header
        Footer
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    name: 'Home',
    data () {
        return {
            title: "Abitsbrain"
        }
    },
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/globals.styl'

#home
    margin 0
    padding 0
</style>
