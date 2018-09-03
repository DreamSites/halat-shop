<template>
<section class="aboutOrder">
  <div class="blackLayer">
    <div class="aboutOrderContent">
      <div class="AO-Item">
        <div class="AO-Circle"><img src="../assets/AO-Item-1.svg" alt="" class="AO-Item-Image"></div>
        <h3>Заказ сделан</h3>
        <div class="caption">Вы только что сделали заказ</div>
      </div>
      <img src="../assets/nextArrow.svg" alt="—>" class="nextArrow">
      <div class="AO-Item">
        <div class="AO-Circle"><img src="../assets/AO-Item-2.svg" alt="" class="AO-Item-Image"></div>
        <h3>Звонок</h3>
        <div class="caption">Наш менеджер свяжется с вами и уточнит детали</div>
      </div>
      <img src="../assets/nextArrow.svg" alt="—>" class="nextArrow">
      <div class="AO-Item">
        <div class="AO-Circle"><img src="../assets/AO-Item-3.svg" alt="" class="AO-Item-Image"></div>
        <h3>Доставка</h3>
        <div class="caption">Наш курьер доставит вам халат</div>
      </div>
      <img src="../assets/nextArrow.svg" alt="—>" class="nextArrow">
      <div class="AO-Item">
        <div class="AO-Circle"><img src="../assets/AO-Item-4.svg" alt="" class="AO-Item-Image"></div>
        <h3>Оплата</h3>
        <div class="caption">Вы оплачиваете заказ наличными или картой</div>
      </div>
      <img src="../assets/nextArrow.svg" alt="—>" class="nextArrow">
      <div class="AO-Item">
        <div class="AO-Circle"><img src="../assets/AO-Item-5.svg" alt="" class="AO-Item-Image"></div>
        <h3>Поздравляем!</h3>
        <div class="caption">Вы обладатель собственного именного халата!</div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'AboutOrder'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.aboutOrder {
    margin-top: 50px;
    width: 100%;
    height: 350px;
    background: url("../assets/aboutOrderBG.jpg") no-repeat center center / cover;
}

.blackLayer {
    background: rgba(20, 51, 47, 0.6);
    height: 100%;
    width: 100%;
}

.aboutOrderContent {
    display: grid;
    grid-template-columns: repeat(4, 1fr auto) 1fr;
    padding-top: 62px;
}

.AO-Item {
    color: #FFFFFF;
    text-align: center;
}

.AO-Item .caption {
    color: #FFFFFF;
    font-weight: 300;
    margin: 20px auto 0;
    max-width: 207px;
}

.AO-Circle {
    height: 150px;
    width: 150px;
    background: #1EA896;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
}

.AO-Item-Image {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.nextArrow {
    margin: 66px 0 0;
}

@media (max-width: 955px) {
  .aboutOrder {
    background: url(../assets/aboutOrderVerticalBG.jpg) no-repeat center center / cover;
    height: auto;
  }
  .blackLayer {
    padding-bottom: 50px;
  }
  .aboutOrderContent {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto 1fr) auto;
  }
  .nextArrow {
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    transform: rotate(90deg);
  }
}

</style>
