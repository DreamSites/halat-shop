<template>
<div id="app">
  <PageTop />
  <OurWork />
  <UserComment />
  <Constructor />
  <AboutOrder />
  <AboutUs />
  <PageBottom />
</div>
</template>

<script>
import PageTop from './components/PageTop.vue'
import OurWork from './components/OurWork.vue'
import UserComment from './components/UserComment.vue'
import Constructor from './components/Constructor.vue'
import AboutOrder from './components/AboutOrder.vue'
import AboutUs from './components/AboutUs.vue'
import PageBottom from './components/PageBottom.vue'

export default {
  name: 'app',
  components: {
    PageTop,
    OurWork,
    UserComment,
    Constructor,
    AboutOrder,
    AboutUs,
    PageBottom
  },
  data: function () {
    return {
      sign: '',
      signHeight: 0,
      signWidth: 0,
      signStyle: {
        fontFamily: 'Montserrat, sans-serif'
      },
      FPisActive: false,
      currentFont: 'Выберите шрифт надписи',
      CPisActive: false,
      currentColor: 'Выберите цвет надписи',
      currentSize: '',
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cartWithItem: false,
      CartIsOpened: false
    }
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
</style>
