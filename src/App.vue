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
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,900&amp;subset=cyrillic,cyrillic-ext,latin-ext');

#app {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1 {
  font-size: 58px;
  font-weight: 900;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 36px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  padding-top: 50px;
}

h3 {
  font-size: 22px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

h4 {
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 0;
}

h4:first-child {
  margin-top: 0;
}

.caption {
  font-size: 12px;
  text-transform: uppercase;
  color: #828282;
}
</style>
