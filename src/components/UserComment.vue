<template>
<section class="comment">
  <div class="lightBlackLayer">
    <h2>«Очень мягкие и приятные халаты, качественная надпись, муж доволен!»</h2>
    <div style="margin: 0 auto; height: 100px; width: 100px; margin-top: 17px;">
      <img src="../assets/comment-Image.png" alt="" class="comment-Image">
    </div>
    <div class="caption">Мария охрипова</div>
  </div>
</section>
</template>

<script>
export default {
  name: 'UserComment'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.comment {
    width: 100%;
    margin-top: 50px;
    background: url("../assets/commentBG.jpg") no-repeat center top / cover;
    h2 {
        color: #FFF;
        text-align: center;
        max-width: 1024px;
        margin: 0 auto;
        padding: 0;
    }
    .caption {
        color: #FFF;
        text-align: center;
        margin-top: 15px;
        padding-bottom: 50px;
    }
}

.lightBlackLayer {
    background: rgba(20, 51, 47, 0.2);
    height: 100%;
    width: 100%;
    padding-top: 80px;
}

.comment-Image {
    height: 100px;
    width: 100px;
}
</style>
