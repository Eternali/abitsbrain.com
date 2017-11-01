<template lang="jade">
    div#header
        script(src='../scripts/p5.min.js')
        script(src='../scripts/particle.js')
        script(src='../scripts/background.js')
        div#background
        h1 {{title}}
        img(src='../assets/logo_main.jpg')
</template>

<script>

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
    },
    // created () {
    //     let p5lib = document.createElement('script')
    //     let particle = document.createElement('script')
    //     let background = document.createElement('script')
    //
    //     p5lib.setAttribute('src', '../scripts/p5.min.js')
    //     particle.setAttribute('src', '../scripts/particle.js')
    //     background.setAttribute('src', '../scripts/background.js')
    //
    //     document.head.appendChild(p5lib)
    //     document.head.appendChild(particle)
    //     document.head.appendChild(background)
    //
    //     // require('../scripts/p5.min.js')
    //     // require('../scripts/background.js')
    //     // require('../scripts/particle.js')
    // }
}
</script>

<style lang="stylus" scoped>
@import '../styles/globals.styl'

#header
    background transparent !important
    /*background-image url('../assets/background_main.jpg')*/
    // filter blur(3px)
    margin 0
    padding 0

#background
    width 100vw
    height 20vw
    display absolute
    position fixed
    top 0
    left 0
    z-index -999

h1
    text-align center
    color titleMain

img
    max-width 4em
    max-height 4em
    border none
    border-radius 10%

</style>
