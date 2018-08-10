var constructorSection = new Vue({
  el: '.constructorSection',
  data: {
    sign: '',
    signStyle: {
      fontFamily: 'Montserrat, sans-serif'
    },
    FPisActive: false,
    currentFont: 'Выберите шрифт надписи'
  },
  methods: {
    pickFont: function(font) {
      this.signStyle.fontFamily = font;
      this.currentFont = font;
      this.FPisActive = false;
    }
  }
});

function addToCart() {
  cart.sign = constructorSection.sign;
  cart.font = constructorSection.currentFont;
}

var cart = new Vue({
  el: '.cartExpanded',
  data: {
    sign: '',
    font: ''
  }
})
