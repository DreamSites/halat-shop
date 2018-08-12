<template>
<section class="ourWork">
  <h2>Наши работы</h2>
  <div class="caption">Галерея последних халатов</div>
  <div class="workBlocks">
    <div class="workBlock" id="workBlock-1"></div>
    <div class="workBlock" id="workBlock-2"></div>
    <div class="workBlock" id="workBlock-3"></div>
    <div class="workBlock" id="workBlock-4"></div>
    <div class="workBlock" id="workBlock-5"></div>
    <div class="workBlock" id="workBlock-6"></div>
    <div class="workBlock" id="workBlock-7"></div>
    <div class="workBlock" id="workBlock-8"></div>
  </div>
</section>
</template>

<script>
export default {
  name: 'OurWork'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.ourWork {
    max-width: 1024px;
    margin: 0 auto;
}

.workBlocks {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    margin-top: 20px;
}

.workBlock {
    height: 150px;
}

#workBlock-1 {
    background: url("../assets/workBlockBG-1.jpg") no-repeat center center / cover;
}

#workBlock-2 {
    background: url("../assets/workBlockBG-2.jpg") no-repeat center center / cover;
}

#workBlock-3 {
    background: url("../assets/workBlockBG-3.jpg") no-repeat center center / cover;
}

#workBlock-4 {
    background: url("../assets/workBlockBG-4.jpg") no-repeat center center / cover;
}

#workBlock-5 {
    background: url("../assets/workBlockBG-5.jpg") no-repeat center center / cover;
}

#workBlock-6 {
    background: url("../assets/workBlockBG-6.jpg") no-repeat center center / cover;
}

#workBlock-7 {
    background: url("../assets/workBlockBG-7.jpg") no-repeat center center / cover;
}

#workBlock-8 {
    background: url("../assets/workBlockBG-8.jpg") no-repeat center center / cover;
}
</style>
