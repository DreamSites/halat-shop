let bathrobeAmount = 0;
let postalCode = "";
if (localStorage.getItem("bathrobeAmount")) {
  bathrobeAmount = parseInt(localStorage.getItem("bathrobeAmount"), 10);
} else {
  window.location = "index.html";
}

$(document).ready(function() {
  const stage = $(".stage a");
  $("#continue").click(function() {
    const boxberryAddress = $("#boxberryAddressInput").val();
    const deliveryTypeName = $("#selectedDeliveryTypeName").html();
    const cityName = $("#cityInput").val();
    const deliveryWayName = $("#selectedDeliveryWayName").html();
    const deliveryDayName = $("#selectedDeliveryDayName").html();
    const deliveryTimeName = $("#selectedDeliveryTimeName").html();
    const address = $("#addressInput").val();

    if ((deliveryTypeName !== "Выберите тип доставки" && cityName !== "Введите ваш город" && deliveryWayName === "Доставка" && deliveryDayName !== "Выберите дату доставки" && deliveryTimeName !== "Выберите время доставки" && address !== "") || (deliveryWayName === "Пункт BoxBerry" && boxberryAddress !== "")) {
      $(".deliveryInfo").removeClass("active");
      $(".clientInfo").addClass("active");
      stage.eq(0).css("color", "var(--brown-grey)");
      stage.eq(1).css("color", "var(--black)");
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500
      );
      return false;
    }
    checkEmptiness(cityName, "", $("#cityError"));
    checkEmptiness(deliveryWayName, "Выберите способ получения", $("#deliveryWayError"));
    checkEmptiness(deliveryTypeName, "Выберите тип доставки", $("#deliveryTypeError"));
    checkEmptiness(deliveryDayName, "Выберите дату доставки", $("#deliveryDayError"));
    checkEmptiness(deliveryTimeName, "Выберите время доставки", $("#deliveryTimeError"));
    checkEmptiness(address, "", $("#addressError"));
    checkEmptiness(boxberryAddress, "", $("#boxberryAddress"));
  });
  $("#addressInput").keyup(function() {
    $("#addressError").css("opacity", 0);
  });
  $("#boxberryAddressInput").keyup(function() {
    $("#boxberryAddressError").css("opacity", 0);
  });
  $("#cityInput").keyup(function() {
    $("#cityError").css("opacity", 0);
    clearDeliveryType();
    $(".deliveryPrice").css("opacity", 0);
  });
  $("#checkoutButton").click(function() {
    const nameInput = $("#nameInput").val();
    const phoneNumberInput = $("#phoneNumberInput").val();
    const emailInput = $("#emailInput").val();

    if (nameInput !== "" && emailInput !== "" && phoneNumberInput.length === 18) {
      // ОТПРАВКА ПИСЬМА НА ПОЧТУ
      var emailData = {
        name: $("#nameInput").val(),
        phone: $("#phoneNumberInput").val(),
        email: $("#emailInput").val(),

        city: $("#cityInput").val(),
        deliveryWay: $("#selectedDeliveryWayName").html(),
        deliveryDay: $("#selectedDeliveryDayName").html(),
        deliveryTime: $("#selectedDeliveryTimeName").html(),
        address: $("#addressInput").val(),

        pickedSex: localStorage.getItem("pickedSex"),
        pickedSize: localStorage.getItem("pickedSize"),
        signInput: localStorage.getItem("signInput"),
        pickedFont: localStorage.getItem("pickedFont"),
        pickedColor: localStorage.getItem("pickedColor"),
        pickedBathrobeColor: localStorage.getItem("pickedBathrobeColor"),
        pickedImage: localStorage.getItem("pickedImage")
      };

      $.ajax({
        type: "POST",
        url: "mail.php",
        data: emailData,
        success: function() {
          $(".clientInfo").removeClass("active");
          $(".checkoutEnd").addClass("active");
          stage.eq(1).css("color", "var(--brown-grey)");
          stage.eq(2).css("color", "var(--black)");
          $(".leftCircle h2").css({ opacity: 0 });
          localStorage.clear();
        }
      });
    }
    if (nameInput === "") {
      $("#nameError").css("opacity", 1);
    } else {
      $("#nameError").css("opacity", 0);
    }
    if (phoneNumberInput.length !== 18) {
      $("#phoneError").css("opacity", 1);
    } else {
      $("#phoneError").css("opacity", 0);
    }
    if (emailInput === "") {
      $("#emailError").css("opacity", 1);
    } else {
      $("#emailError").css("opacity", 0);
    }
  });

  $("#cityInput").keyup(function() {
    deliverySecondStage();
  });

  $("#selectedDeliveryWay").click(function() {
    openPicker($("#deliveryWayPicker"), $("#deliveryWayPicker .deliveryPickerItem"), $("#selectedDeliveryWay img"));
    $("#deliveryWayError").css("opacity", 0);
  });

  $(document).mouseup(function(e) {
    const deliveryWayPicker = $("#deliveryWayPicker");
    if (!deliveryWayPicker.is(e.target) && deliveryWayPicker.has(e.target).length === 0) {
      closePicker(deliveryWayPicker, $("#deliveryWayPicker .deliveryPickerItem"), $("#selectedDeliveryWay img"));
    }
  });

  $("#selectedDeliveryDay").click(function() {
    openPicker($("#deliveryDayPicker"), $("#deliveryDayPicker .deliveryPickerItem"), $("#selectedDeliveryDay img"));
    $("#deliveryDateError").css("opacity", 0);
  });

  $(document).mouseup(function(e) {
    const deliveryDayPicker = $("#deliveryDayPicker");
    if (!deliveryDayPicker.is(e.target) && deliveryDayPicker.has(e.target).length === 0) {
      closePicker(deliveryDayPicker, $("#deliveryDayPicker .deliveryPickerItem"), $("#selectedDeliveryDay img"));
    }
  });

  $("#selectedDeliveryTime").click(function() {
    openPicker($("#deliveryTimePicker"), $("#deliveryTimePicker .deliveryPickerItem"), $("#selectedDeliveryTime img"));
    $("#deliveryTimeError").css("opacity", 0);
  });

  $(document).mouseup(function(e) {
    const deliveryTimePicker = $("#deliveryTimePicker");
    if (!deliveryTimePicker.is(e.target) && deliveryTimePicker.has(e.target).length === 0) {
      closePicker(deliveryTimePicker, $("#deliveryTimePicker .deliveryPickerItem"), $("#selectedDeliveryTime img"));
    }
  });

  $("#selectedDeliveryType").click(function() {
    openPicker($("#deliveryTypePicker"), $("#deliveryTypePicker .deliveryPickerItem"), $("#selectedDeliveryType img"));
    $("#deliveryTypeError").css("opacity", 0);
    const deliveryPicker = $("#deliveryTypePicker");
    const MSK = new RegExp("Москва|Московская обл|Московская область");
    const SPB = new RegExp("Санкт-Петербург|Ленинградская обл|Ленинградская область");
    if (MSK.test($("#cityInput").val())) {
      deliveryPicker.addClass("MSK");
      $(".deliveryPickerItem.MSK").css("display", "flex");
    } else if (SPB.test($("#cityInput").val())) {
      deliveryPicker.addClass("SPB");
      $(".deliveryPickerItem.SPB").css("display", "flex");
    } else {
      deliveryPicker.addClass("RUS");
      $(".deliveryPickerItem.RUS").css("display", "flex");
    }
  });

  $(document).mouseup(function(e) {
    const deliveryTypePicker = $("#deliveryTypePicker");
    if (!deliveryTypePicker.is(e.target) && deliveryTypePicker.has(e.target).length === 0) {
      closePicker(deliveryTypePicker, $("#deliveryTypePicker .deliveryPickerItem"), $("#selectedDeliveryType img"));
      closeDeliveryTypePicker();
    }
  });

  $("#deliveryWay .deliveryPickerItem").click(function() {
    deliverySecondStage();
  });

  $("#deliveryType .deliveryPickerItem").click(function() {
    if ($("#deliveryType .deliveryPickerItem").html() !== "Выберите тип доставки") {
      getDeliveryPrice();
    }
  });

  responsiveNavigation();
});

function openPicker(picker, pickerItem, selected) {
  picker.toggleClass("active");
  pickerItem.toggleClass("active");
  selected.toggleClass("flip");
}

function closePicker(picker, pickerItem, selected) {
  picker.removeClass("active");
  pickerItem.removeClass("active");
  selected.removeClass("flip");
}

function pick(picker, pickerItemText, pickerItem, selected, selectedName, selectedIMG) {
  selectedName.html(pickerItemText);
  selected.addClass("picked");
  closePicker(picker, pickerItem, selectedIMG);
}

function closeDeliveryTypePicker() {
  $(".deliveryPickerItem.MSK").css("display", "none");
  $(".deliveryPickerItem.SPB").css("display", "none");
  $(".deliveryPickerItem.RUS").css("display", "none");
}

const phoneMask = new IMask(document.getElementById("phoneNumberInput"), {
  mask: "+{7} (000) 000-00-00"
});

$("#bathrobePrice").html(3190 * bathrobeAmount + "₽");
$("#fullPrice").html(3190 * bathrobeAmount + 500 + "₽");

$(window).resize(function() {
  responsiveNavigation();
});

function responsiveNavigation() {
  if ($(window).width() > 1270) {
    $("#rightNav").html('<div class="navItem" id="phone">' + '      <img alt="" src="img/phoneBlue.svg">' + "      +7 (937) 667-98-49" + "    </div>" + '    <div class="navItem">' + '      <img alt="" src="img/leftArrowBlue.svg">' + '      <a href="cart.html">Назад в корзину</a>' + "    </div>");
  }
  if ($(window).width() < 1270) {
    $("#rightNav").html('<div class="circleButton" id="home" onclick="window.location=\'cart.html\';">' + '      <img alt="" src="img/leftArrowBlue.svg">' + "    </div>" + '    <div class="stage">');
  }
}

var token = "ff3fbb891db61fb3390e11167fef0e6462e67595",
  type = "ADDRESS",
  $city = $("#cityInput"),
  $street = $("#addressInput");

$city.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  bounds: "city",
  count: 3,
  /* Вызывается, когда пользователь выбирает одну из подсказок */
  onSelect: function(suggestion) {
    console.log(suggestion);
    postalCode = suggestion.data.postal_code;
  }
});

$street.suggestions({
  token: token,
  type: "ADDRESS",
  hint: false,
  bounds: "street-house",
  count: 3,
  constraints: $city,
  /* Вызывается, когда пользователь выбирает одну из подсказок */
  onSelect: function(suggestion) {
    console.log(suggestion);
  }
});

function deliverySecondStage() {
  if ($("#cityInput").val() !== "" && $("#selectedDeliveryWayName").html() === "Доставка") {
    $("#type-delivery").show();
    $("#type-boxberry").hide();
    $("#deliveryType").show();
    $(".deliveryInfo").removeClass("type-boxberry");
    $(".deliveryInfo").addClass("type-delivery");
  } else if ($("#cityInput").val() !== "" && $("#selectedDeliveryWayName").html() === "Пункт BoxBerry") {
    $("#type-delivery").hide();
    $("#type-boxberry").show();
    $("#deliveryType").hide();
    $(".deliveryInfo").removeClass("type-delivery");
    $(".deliveryInfo").addClass("type-boxberry");
  } else if ($("#cityInput").val() !== "" && $("#selectedDeliveryWayName").html() === "Самовывоз из магазина") {
    $("#type-delivery").hide();
    $("#type-boxberry").hide();
    $("#deliveryType").hide();
    $(".deliveryInfo").removeClass("type-boxberry");
    $(".deliveryInfo").removeClass("type-delivery");
  }
}

// Выбрать пункт BoxBerry
function callback_function(result) {
  console.log(result);
  if (result.price !== "") {
    $("#deliveryPrice").html(result.price);
  } else {
    $("#deliveryPrice").html("300₽");
  }
  $("#boxberryAddressInput").val(result.address);
  if (result.prepaid == "1") {
    alert("Отделение работает только по предоплате!");
  }
}

function checkEmptiness(field, defaultState, error) {
  if (field === defaultState) {
    error.css("opacity", 1);
  } else {
    error.css("opacity", 0);
  }
}

function getDate(additionalDays) {
  const selectedDeliveryType = $("#selectedDeliveryType").html();
  const deliveryDay = $(".deliveryPrice span");
  if (selectedDeliveryType !== "Выберите тип доставки") {
    const today = new Date();
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let dd = today.getDate() + additionalDays;
    const mm = today.getMonth();
    if (dd < 10) {
      dd = "0" + dd;
    }
    deliveryDay.html("С " + dd + " " + monthNames[mm]);
  }
}

function getDeliveryPrice() {
  const deliveryType = $("#selectedDeliveryTypeName").html();
  switch (deliveryType) {
    case "В пределах МКАД":
      setPrice("280₽", 2);
      break;
    case "В пределах КАД":
      setPrice("280₽", 3);
      break;
    case "До 10 км. от МКАД":
      setPrice("350₽", 2);
      break;
    case "До 10 км. от КАД":
      setPrice("350₽", 3);
      break;
    case "От 10 до 25 км. от МКАД":
      setPrice("500₽", 2);
      break;
    case "От 10 до 30 км. от КАД":
      setPrice("500₽", 3);
      break;
    case "Срочная доставка в пределах МКАД":
      setPrice("500₽", 1);
      break;
    case "Почта России":
      let getDeliveryPriceRequest = new XMLHttpRequest();
      const requestLink = "https://tariff.pochta.ru/tariff/v1/calculate?json&object=27030&from=101000&to=" + postalCode + "&weight=1000&pack=10&date=20190304";
      getDeliveryPriceRequest.open("GET", requestLink, true);

      getDeliveryPriceRequest.send();
      getDeliveryPriceRequest.onreadystatechange = function() {
        const response = getDeliveryPriceRequest.response;
        let price = JSON.parse(response).paynds;
        price = price.toString();
        console.log(price);
        setPrice(price.slice(0, price.length - 2) + "₽", 10);
      };
      break;
  }
}

function setPrice(price, additionalDays) {
  const deliveryPrice = $(".deliveryPrice h4");
  deliveryPrice.html(price);
  getDate(additionalDays);
  $(".deliveryPrice").css("opacity", 1);
}

function clearDeliveryType() {
  $("#selectedDeliveryTypeName").html("Выберите тип доставки");
  $("#selectedDeliveryType").removeClass("picked");
}
