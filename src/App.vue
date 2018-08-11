<template>
  <div id="app">
    <PageTop />
  </div>
</template>

<script>
import PageTop from './components/PageTop.vue'

export default {
  name: 'app',
  components: {
    PageTop
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}
</style>
