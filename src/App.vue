<template>
<div id="app">
  <PageTop />
  <OurWork />
  <UserComment />
</div>
</template>

<script>
import PageTop from './components/PageTop.vue'
import OurWork from './components/OurWork.vue'
import UserComment from './components/UserComment.vue'

export default {
  name: 'app',
  components: {
    PageTop,
    OurWork,
    UserComment
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
</style>
