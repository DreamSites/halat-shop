<template>
<div id="app">
  <PageTop />
  <OurWork />
  <UserComment />
  <Constructor />
  <AboutOrder />
  <AboutUs />
</div>
</template>

<script>
import PageTop from './components/PageTop.vue'
import OurWork from './components/OurWork.vue'
import UserComment from './components/UserComment.vue'
import Constructor from './components/Constructor.vue'
import AboutOrder from './components/AboutOrder.vue'
import AboutUs from './components/AboutUs.vue'

export default {
  name: 'app',
  components: {
    PageTop,
    OurWork,
    UserComment,
    Constructor,
    AboutOrder,
    AboutUs
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
</style>
