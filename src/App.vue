<template>
  <div id="app">
    <PageTop />
    <OurWork />
  </div>
</template>

<script>
import PageTop from './components/PageTop.vue'
import OurWork from './components/OurWork.vue'

export default {
  name: 'app',
  components: {
    PageTop,
    OurWork
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}
</style>
