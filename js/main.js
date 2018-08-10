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
      fontFamily: font,
      currentFont = font,
      FPisActive = false
    }
  }
})
