<template>
<header>
  <div class="navigation">
    <div></div>
    <nav>
      <div class="navItem"><a href="header">Главная</a></div>
      <div class="navItem"><a href=".ourWork">Наши работы</a></div>
      <div class="navItem" id="logo"><img src="../assets/logoWhite.png" alt="" class="logo"></div>
      <div class="navItem"><a href=".constructorSection">Конструктор</a></div>
      <div class="navItem"><a href=".aboutUs">О нас</a></div>
    </nav>
    <div class="cart">
      <img src="../assets/cartIcon.svg" alt="Корзина" class="cartIcon">
    </div>
  </div>
  <p>Магазин халатов</p>
  <div class="headerLine" style="margin-top: -9px; height: 3px;"><svg width="145" height="3" viewBox="0 0 145 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="-1.5" x2="144.5" y2="-1.5" transform="translate(0.5 3)" stroke="#1EA896" stroke-width="3"/>
    </svg></div>
  <h1>Мы делаем лучшие именные халаты на заказ!</h1>
  <div class="headerScrollButton" href=".constructorSection">
    Создай свой халат сам
  </div>
  <div class="cartExpanded">
    <img src="../assets/closeIcon.svg" alt="" class="closeCart">
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
</header>
</template>

<script>
export default {
  name: 'PageTop'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$mainColor: #1EA896;
header {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 700px;
  background: url(../assets/headerBG.jpg) no-repeat center top / cover;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  p {
    color: #FFFFFF;
    text-transform: uppercase;
    margin-left: 50px;
    margin-top: 62px;
  }
  svg {
    margin-left: 51px;
  }
  h1 {
    color: #FFFFFF;
    margin-left: 50px;
    width: 582px;
    margin-top: 15px;
  }
}

.navigation {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 85px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

nav {
  height: 85px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 40px;
  a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 300;
    color: #FFFFFF;
  }
}

.navItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo {
  height: 75px;
}

.cart {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  float: left;
  padding-right: 30px;
}

.cartIcon {
  height: 40px;
  margin-top: -10px;
  cursor: pointer;
  z-index: 2;
}

.cartExpanded {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 300px;
  background: #FFF;
  border-radius: 5px;
  -webkit-box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  opacity: 0;
  padding: 5px 15px 15px 15px;
  overflow: hidden;
  z-index: 1;
  .caption {
    font-weight: 300;
  }
  h4 {
    font-size: 14px;
  }
  h4:first-child {
    margin-top: 10px;
  }
  input {
    width: 260px;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #E5E5E5;
    transition: all 0.2s ease;
    padding-left: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  input:focus {
    border-color: #1EA896;
    outline: none;
  }
  input::placeholder {
    color: #C4C4C4;
  }
}

.closeCart {
  position: absolute;
  top: 20px;
  right: 15px;
  height: 20px;
  cursor: pointer;
}

.product {
  display: grid;
  grid-template-columns: 1fr auto;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #E5E5E5;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  span {
    font-weight: 900;
    font-size: 16px;
    color: black;
  }
}

.productInfo {
  color: #828282;
  font-size: 12px;
  font-weight: 300;
}

.productInfoSmall {
  color: #828282;
  font-size: 12px;
  font-weight: 300;
}

.productPrice {
  border-left: 1px solid #E5E5E5;
  padding-left: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.checkout {
  width: 270px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #1EA896;
  margin-top: 30px;
  color: #1EA896;
  text-transform: uppercase;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.checkout:hover {
  color: #FFF;
  background: #1EA896;
}

.headerScrollButton {
  height: 50px;
  width: 425px;
  margin-left: 50px;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1EA896;
  border-radius: 25px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
