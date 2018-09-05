<template>
<div class="cartExpanded" v-bind:class="{ opened: this.$parent.$parent.CartIsOpened }">
  <h3>Корзина</h3>
  <div class="caption">Ваши покупки</div>
  <div class="product" id="P1" v-bind:class="{ withItem: this.$parent.$parent.cartWithItem }">
    <div class="productInfo" v-bind:class="{ withItem: this.$parent.$parent.cartWithItem }">
      <span>Махровый халат</span>
      <div class="productInfoSmall">Надпись: {{ this.$parent.$parent.sign }} </div>
      <div class="productInfoSmall">Шрифт: {{ this.$parent.$parent.currentFont }} </div>
      <div class="productInfoSmall">Цвет: {{ this.$parent.$parent.currentColor }}</div>
      <div class="productInfoSmall">Размер: 27px</div>
      <div class="productInfoSmall">Рисунок: Корона 1</div>
      <div class="productInfoSmall">Размер халата: {{ this.$parent.$parent.currentSize }} </div>
    </div>
    <div class="productInfoPlaceholder" v-bind:class="{ withItem: this.$parent.$parent.cartWithItem }">
      Корзина пуста
    </div>
    <div class="productPrice" v-bind:class="{ withItem: this.$parent.$parent.cartWithItem }">3990₽</div>
  </div>
  <div class="checkout" v-bind:class="{ withItem: this.$parent.$parent.cartWithItem }">Оформить заказ</div>
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
