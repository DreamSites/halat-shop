<template>
<section class="constructorSection">
  <h2>Конструктор</h2>
  <div class="caption">Создай свой халат сам</div>
  <div class="constructorGrid">
    <div class="constructor">
      <div>

        <h4>Надпись</h4>
        <input type="text" class="signInput" placeholder="Введите вашу надпись" v-model="sign" @keyup="signSize()">

        <h4>Шрифт</h4>
        <div class="fontPicker" id="fontPicker" v-bind:class="{ opened: FPisActive }" v-click-outside="hideFP">
          <div class="FP-Placeholder" id="FP-Placeholder" v-bind:class="{ opened: FPisActive, picked: currentFont != 'Выберите шрифт надписи' }" @click="FPisActive = true">
            {{ currentFont }}
            <img src="../assets/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">
          </div>
          <div class="FP-Item" id="FP-1" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'Academia' }" @click="pickFont('Academia')">Academia</div>
          <div class="FP-Item" id="FP-2" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'Campus' }" @click="pickFont('Campus')">Campus</div>
          <div class="FP-Item" id="FP-3" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'CyrillicOld' }" @click="pickFont('CyrillicOld')">CyrillicOld</div>
          <div class="FP-Item" id="FP-4" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'Lobster-Regular' }" @click="pickFont('Lobster-Regular')">Lobster-Regular</div>
          <div class="FP-Item" id="FP-5" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'MonAmour' }" @click="pickFont('MonAmour')">MonAmour</div>
          <div class="FP-Item" id="FP-6" v-bind:class="{ opened: FPisActive, FPisPicked: currentFont == 'Sladkoeshka' }" @click="pickFont('Sladkoeshka')">Sladkoeshka</div>
        </div>

        <h4>Цвет надписи</h4>
        <div class="colorPicker" id="colorPicker" v-bind:class="{ opened: CPisActive }" v-click-outside="hideCP">
          <div class="CP-Placeholder" id="CP-Placeholder" @click=" CPisActive = true " v-bind:class="{ opened: CPisActive, picked: currentColor != 'Выберите цвет надписи' }">
            {{ currentColor }}
            <img src="../assets/expandArrow.svg" alt="" style="float: right; margin-right: 15px;">
          </div>
          <div class="CP-Colors" v-bind:class="{ opened: CPisActive }">
            <div class="CP-Item" id="CP-1" v-bind:class="{ opened: CPisActive }" @click="pickColor('Красный', '#F03434')">
              <p v-bind:class="{ opened: CPisActive, CPisPicked: currentColor == 'Красный' }">Красный</p>
            </div>
            <div class="CP-Item" id="CP-2" v-bind:class="{ opened: CPisActive }" @click="pickColor('Оранжевый', '#FABE58')">
              <p v-bind:class="{ opened: CPisActive }">Оранжевый</p>
            </div>
            <div class="CP-Item" id="CP-3" v-bind:class="{ opened: CPisActive }" @click="pickColor('Синий', '#446CB3')">
              <p v-bind:class="{ opened: CPisActive }">Синий</p>
            </div>
            <div class="CP-Item" id="CP-4" v-bind:class="{ opened: CPisActive }" @click="pickColor('Фиолетовый', '#BF55EC')">
              <p v-bind:class="{ opened: CPisActive }">Фиолетовый</p>
            </div>
            <div class="CP-Item" id="CP-5" v-bind:class="{ opened: CPisActive }" @click="pickColor('Золотой', '#F7CA18')">
              <p v-bind:class="{ opened: CPisActive }">Золотой</p>
            </div>
          </div>
        </div>

        <h4>Рисунок</h4>
        <div>
          <input class="imgButton" type="button" id="imgButton-1">
          <input class="imgButton" type="button" id="imgButton-2">
          <input class="imgButton" type="button" id="imgButton-3">
          <input class="imgButton" type="button" id="imgButton-4">
        </div>
        <h4>Размер халата</h4>
        <div class="sizePicker" v-bind:class="{ active: currentSize != '' }">
          <div class="SP SP-L" id="SP-1" v-bind:class="{ SPisPicked: currentSize == 'S', active: currentSize != '' }" @click="setActiveSP('S')">S</div>
          <div class="SP SP-L" id="SP-2" v-bind:class="{ SPisPicked: currentSize == 'M', active: currentSize != '' }" @click="setActiveSP('M')">M</div>
          <div class="SP SP-L" id="SP-3" v-bind:class="{ SPisPicked: currentSize == 'L', active: currentSize != '' }" @click="setActiveSP('L')">L</div>
          <div class="SP" id="SP-4" v-bind:class="{ SPisPicked: currentSize == 'XL', active: currentSize != '' }" @click="setActiveSP('XL')">XL</div>
          <div class="SP SP-R" id="SP-5" v-bind:class="{ SPisPicked: currentSize == 'XXL', active: currentSize != '' }" @click="setActiveSP('XXL')">XXL</div>
          <div class="SP SP-R" id="SP-6" v-bind:class="{ SPisPicked: currentSize == 'XXXL', active: currentSize != '' }" @click="setActiveSP('XXXL')">XXXL</div>
        </div>
      </div>
      <div class="buttonContainer">
        <button type="button" name="addToCart" class="addToCart" onclick="addToCart()">Добавить в корзину</button>
      </div>
    </div>
    <div class="preview">
      <div class="previewContent" id="previewContent">
        <vue-drag-resize :parentLimitation="true" :isResizable="false" :h=signHeight :w=signWidth :minh="0" :minw="0"><span class="sign" id="sign" v-bind:style="signStyle">{{ sign }}</span></vue-drag-resize>
        <div class="../assets" id="../assets-1"></div>
        <div class="../assets" id="../assets-2"></div>
        <div class="../assets" id="../assets-3"></div>
        <div class="../assets" id="../assets-4"></div>
      </div>
    </div>
    <div class="buttonContainer" id="buttonContainer-2">

    </div>
  </div>
</section>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import VueDragResize from 'vue-drag-resize'

export default {
  name: 'Constructor',
  data: function () {
    return {
      sign: '',
      signHeight: 0,
      signWidth: 0,
      signStyle: {
        fontFamily: 'Montserrat, sans-serif'
      },
      FPisActive: false,
      currentFont: 'Выберите шрифт надписи',
      CPisActive: false,
      currentColor: 'Выберите цвет надписи',
      currentSize: '',
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  },
  components: {
    VueDragResize
  },
  methods: {
    pickFont: function (font) {
      this.signStyle.fontFamily = font
      this.currentFont = font
      this.FPisActive = false
      this.signHeight = document.getElementById('sign').clientHeight
      this.signWidth = document.getElementById('sign').clientWidth
    },
    pickColor: function (color, colorHEX) {
      this.signStyle.color = colorHEX
      this.currentColor = color
      this.CPisActive = false
    },
    hideFP () {
      this.FPisActive = false
    },
    hideCP () {
      this.CPisActive = false
    },
    resize (newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
    },
    signSize () {
      this.signHeight = document.getElementById('sign').clientHeight
      this.signWidth = document.getElementById('sign').clientWidth
    },
    setActiveSP (activeSP) {
      this.currentSize = activeSP
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.constructorSection {
    max-width: 1024px;
    margin: 0 auto;
}

.constructorGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
}

.constructor {
    height: 800px;
    display: grid;
    grid-template-rows: 1fr 50px;
}

.signInput {
    height: 50px;
    border: 1px solid #E5E5E5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    padding-left: 15px;
    font-family: "Montserrat", sans-serif;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all 0.2s ease;
    border-radius: 5px;
}

.signInput:focus {
    outline: none;
    border-color: #1EA896;
}

.signInput::placeholder {
    color: #C4C4C4;
}

.fontPicker {
    height: 50px;
    width: 100%;
    border: 1px solid #E5E5E5;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.2s ease;
    overflow: hidden;
}

.fontPicker.opened {
    height: 240px;
    border-color: #1EA896;
}

.FP-Placeholder {
    padding-top: 15px;
    padding-left: 15px;
    color: #C4C4C4;
    position: relative;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 100%;
}

.FP-Placeholder.opened {
    z-index: 1;
    opacity: 0;
    height: auto;
}

.FP-Placeholder.picked {
    color: black;
}

.FP-Item {
    display: none;
    opacity: 0;
    padding-left: 10px;
    height: 40px;
    padding-top: 12px;
    transition: all 0.2s ease;
}

.FP-Item.opened {
    display: block;
    opacity: 100;
}

.FP-Item:hover {
    background: #F9F9F9;
}

.FPisPicked {
    background: #1EA896;
    color: white;
}

.FPisPicked:hover {
    background: #1EA896;
}

#FP-1 {
    margin-top: -33px;
    padding-top: 10px;
    position: relative;
    z-index: 1;
    font-family: "Academia", "Montserrat", sans-serif;
    border-radius: 3px 3px 0 0;
    height: 39px;
}

#FP-2 {
    font-family: "Campus", "Montserrat", sans-serif;
}

#FP-3 {
    font-family: "CyrillicOld", "Montserrat", sans-serif;
}

#FP-4 {
    font-family: "Lobster-Regular", "Montserrat", sans-serif;
}

#FP-5 {
    font-family: "MonAmour", "Montserrat", sans-serif;
}

#FP-6 {
    font-family: "Sladkoeshka", "Montserrat", sans-serif;
    height: 39px;
    border-radius: 0 0 3px 3px;
}

.colorPicker {
    height: 50px;
    width: 100%;
    border: 1px solid #E5E5E5;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: all 0.2s ease;
    overflow: hidden;
}

.colorPicker.opened {
    height: 100px;
    cursor: default;
    border-color: #1EA896;
}

.CP-Colors {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    padding-top: 10px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 1;
    transition: all 0.2s ease;
}

.CP-Colors.opened {
    opacity: 100;
    z-index: 2;
}

.CP-Placeholder {
    padding-top: 15px;
    padding-left: 15px;
    color: #C4C4C4;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
    height: 100%;
}

.CP-Placeholder.opened {
    opacity: 0;
    z-index: 1;
}

.CP-Placeholder.picked {
    color: black;
}

.CP-Item {
    height: 0;
    width: 60px;
    border-radius: 5px;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.2s ease;
}

.CP-Item.opened {
    height: 60px;
}

.CP-Item p {
    text-align: center;
    margin-top: 10px;
    transition: all 0.2s ease;
}

.CP-Item p.opened {
    margin-top: 65px;
    transition: none;
}

.CP-Item p.CPisPicked {
    color: #F03434;
}

#CP-1 {
    background: #F03434;
}

#CP-1:hover {
    color: #F03434;
    transform: scale(1.05);
}

#CP-1 p {
    margin-left: -1px;
}

#CP-2 {
    background: #FABE58;
}

#CP-2:hover {
    color: #FABE58;
    transform: scale(1.05);
}

#CP-2 p {
    margin-left: -12px;
}

#CP-3 {
    background: #446CB3;
}

#CP-3:hover {
    color: #446CB3;
    transform: scale(1.05);
}

#CP-4 {
    background: #BF55EC;
}

#CP-4:hover {
    color: #BF55EC;
    transform: scale(1.05);
}

#CP-4 p {
    margin-left: -15px;
}

#CP-5 {
    background: #F7CA18;
}

#CP-5:hover {
    color: #F7CA18;
    transform: scale(1.05);
}

.signSize {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 5px;
    height: 50px;
    border: 1px solid #E5E5E5;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.2s ease;
    background: -moz-linear-gradient(left, #E5E5E5 50%, #FFFFFF 50%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0.5, #E5E5E5), color-stop(0.5, #FFFFFF));
    background: -webkit-linear-gradient(left, #E5E5E5 50%, #FFFFFF 50%);
    background: -o-linear-gradient(left, #E5E5E5 50%, #FFFFFF 50%);
    background: -ms-linear-gradient(left, #E5E5E5 50%, #FFFFFF 50%);
}

.signSize::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: none;
    border: none;
    height: 50px;
    width: 1px;
}

.sizePicker {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    border: 1px solid #E5E5E5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
}

.sizePicker.active {
    border-color: #1EA896;
}

.SP-L {
    border-right: 1px solid #E5E5E5;
}

.SP-R {
    border-left: 1px solid #E5E5E5;
}

.SP {
    text-align: center;
    padding-top: 16px;
    transition: all 0.2s ease;
}

.SP:hover {
  background: #F9F9F9;
}

.SP.active {
  border-color: #1EA896;
}

.SPisPicked {
    background: #1EA896;
    color: #FFF;
    font-weight: 900;
}

.SPisPicked:hover {
    background: #1EA896;
}

.addToCart {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 50px;
    width: 100%;
    background: #1EA896;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFF;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.sign {
    font-size: 27.5px;
    position: absolute;
    transition: all 0.2s ease;
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.preview {
    background: url("../assets/halat.png") no-repeat center;
    text-align: center;
    padding-top: 80px;
    height: 800px;
    display: flex;
    justify-content: center;
}

.previewContent {
    border: 1px dotted red;
    width: 220px;
    height: 150px;
    overflow: hidden;
    position: relative;
}

.imgButton {
    background-size: 50px;
    color: #000000;
    cursor: pointer;
    font-weight: bold;
    height: 50px;
    padding-bottom: 2px;
    width: 100px;
    border: 0;
}

#imgButton-1 {
    background-size: 100px auto;
}

#imgButton-2 {
    background-size: 100px auto;
}

#imgButton-3 {
    background-size: 80px auto;
}

#imgButton-4 {
    background-size: 100px auto;
    position: relative;
    top: 20px;
}

.img {
    opacity: 0;
    margin: 0 auto;
    position: relative;
    display: none;
}

#img-1 {
    height: 100px;
    width: 187px;
    margin-top: -55px;
}

#img-2 {
    width: 60px;
    height: 37px;
}

#img-3 {
    height: 60px;
    width: 92px;
}

#img-4 {
    height: 30px;
    width: 148px;
}

#img-1,
#imgButton-1 {
    background: url("../assets/img.png") no-repeat center top / cover;
}

#img-2,
#imgButton-2 {
    background: url("../assets/img2.png") no-repeat center top / cover;
}

#img-3,
#imgButton-3 {
    background: url("../assets/img3.png") no-repeat center top / cover;
}

#img-24,
#imgButton-4 {
    background: url("../assets/img1.png") no-repeat center top / cover;
}
</style>
