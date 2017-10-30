<template lang="jade">
    div#home
        Header
</template>

<script>
import Header from './Header.vue'

export default {
    name: 'Home',
    data () {
        return {
            title: "Abitsbrain"
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="stylus" scoped>

</style>
