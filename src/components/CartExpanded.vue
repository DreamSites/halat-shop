<template>
<div class="cartExpanded" v-bind:class="{ opened: this.$parent.CartIsOpened }">
  <h3>Корзина</h3>
  <div class="caption">Ваши покупки</div>
  <div class="product" id="P1">
    <div class="productInfo">
      <span>Махровый халат</span>
      <div class="productInfoSmall">Надпись: </div>
      <div class="productInfoSmall">Шрифт: </div>
      <div class="productInfoSmall">Цвет: Синий</div>
      <div class="productInfoSmall">Размер: 27px</div>
      <div class="productInfoSmall">Рисунок: Корона 1</div>
      <div class="productInfoSmall">Размер халата: XL</div>
    </div>
    <div class="productPrice">3990₽</div>
  </div>
  <div class="checkout">Оформить заказ</div>
</div>
</template>

<script>
export default {
  name: 'CartExpanded'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.cartExpanded {
  z-index: 10;
  transition: all 0.2s ease;
}
</style>
