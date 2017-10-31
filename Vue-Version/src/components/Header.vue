<template lang="jade">
    div#header
        h1 {{title}}
        img(src='../assets/logo_main.jpg')
</template>

<script>
require('../scripts/p5.min.js')
require('../scripts/background.js')


export default {
    name: 'Header',
    data () {
        return {
            title: 'A Bit\'s Brain',
            searchTerm: '',
            algos: {
                'Supervised': {
                    'Linear Regression': {},
                    'Vanilla Neural Network': {}
                },
                'Unsupervised': {},
                'Reinforcement': {
                    'Genetic': {
                        'Population Flappy': {}
                    }
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../styles/globals.styl'

#header
    background-image url('../assets/background_main.jpg')
    // filter blur(3px)
    margin 0
    padding 0

h1
    text-align center
    color titleMain

img
    max-width 4em
    max-height 4em
    border none
    border-radius 10%

</style>
