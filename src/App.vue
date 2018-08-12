<template>
<div id="app">
  <PageTop />
  <OurWork />
  <UserComment />
  <Constructor />
</div>
</template>

<script>
import PageTop from './components/PageTop.vue'
import OurWork from './components/OurWork.vue'
import UserComment from './components/UserComment.vue'
import Constructor from './components/Constructor.vue'

export default {
  name: 'app',
  components: {
    PageTop,
    OurWork,
    UserComment,
    Constructor
  }
}
</script>

<style lang="scss">
#app {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
</style>
