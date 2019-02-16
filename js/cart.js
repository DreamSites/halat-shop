let bathrobeID = 0;
if (localStorage.getItem("bathrobeAmount")) {
  let bathrobeAmount = parseInt(localStorage.getItem("bathrobeAmount"), 10);
} else {
  bathrobeAmount = 0;
}
let pickedSize = JSON.parse(localStorage.getItem("pickedSize"));
let signInput = JSON.parse(localStorage.getItem("signInput"));
let pickedFont = JSON.parse(localStorage.getItem("pickedFont"));
let pickedColor = JSON.parse(localStorage.getItem("pickedColor"));
let pickedColorHEX = JSON.parse(localStorage.getItem("pickedColorHEX"));
let pickedBathrobeColor = JSON.parse(localStorage.getItem("pickedBathrobeColor"));
let pickedImage = JSON.parse(localStorage.getItem("pickedImage"));

$(document).ready(function() {
  checkCartEmptiness();
  getOrderInfo();

  $("#previousBathrobe").click(function() {
    if (bathrobeID !== 0) {
      bathrobeID -= 1;
    }
    getOrderInfo();
  });

  $("#nextBathrobe").click(function() {
    if (bathrobeID + 1 !== bathrobeAmount) {
      bathrobeID += 1;
    }
    getOrderInfo();
  });

  $(".price a").click(function() {
    pickedSize.splice(bathrobeID, 1);
    signInput.splice(bathrobeID, 1);
    pickedFont.splice(bathrobeID, 1);
    pickedColor.splice(bathrobeID, 1);
    pickedColorHEX.splice(bathrobeID, 1);
    pickedBathrobeColor.splice(bathrobeID, 1);
    pickedImage.splice(bathrobeID, 1);
    if (bathrobeID + 1 === bathrobeAmount) {
      bathrobeID -= 1;
    }
    bathrobeAmount -= 1;
    checkCartEmptiness();
    getOrderInfo();

    localStorage.setItem("bathrobeAmount", bathrobeAmount);
    localStorage.setItem("pickedSize", JSON.stringify(pickedSize));
    localStorage.setItem("signInput", JSON.stringify(signInput));
    localStorage.setItem("pickedFont", JSON.stringify(pickedFont));
    localStorage.setItem("pickedColor", JSON.stringify(pickedColor));
    localStorage.setItem("pickedColorHEX", JSON.stringify(pickedColorHEX));
    localStorage.setItem("pickedBathrobeColor", JSON.stringify(pickedBathrobeColor));
    localStorage.setItem("pickedImage", JSON.stringify(pickedImage));
  });
});

function getOrderInfo() {
  $("#size").html(pickedSize[bathrobeID]);
  $("#signInput").html(signInput[bathrobeID]);
  $("#font").html(pickedFont[bathrobeID]);
  $("#fontColor").html(pickedColor[bathrobeID]);
  $("#bathrobeColor").html(pickedBathrobeColor[bathrobeID]);
  $("#pickedImage").html(pickedImage[bathrobeID]);
  updateBathrobeID();
  $("#fullPrice").html(bathrobeAmount * 1790 + "₽");

  const sign = $("#sign");
  sign.html(signInput[bathrobeID]);
  sign.css({
    "font-family": pickedFont[bathrobeID],
    color: pickedColorHEX[bathrobeID]
  });

  if (bathrobeID < bathrobeAmount) {
    $("#nextBathrobe").addClass("active");
    $("#nextBathrobe img").attr("src", "img/rightArrowActive.svg");
  }
  if (bathrobeID > 0) {
    $("#previousBathrobe").addClass("active");
    $("#previousBathrobe img").attr("src", "img/leftArrowActive.svg");
  }
  if (bathrobeID + 1 === bathrobeAmount) {
    $("#nextBathrobe").removeClass("active");
    $("#nextBathrobe img").attr("src", "img/rightArrowNotActive.svg");
  }
  if (bathrobeID === 0) {
    $("#previousBathrobe").removeClass("active");
    $("#previousBathrobe img").attr("src", "img/leftArrowNotActive.svg");
  }
}

function updateBathrobeID() {
  $("#bathrobeID").html(bathrobeID + 1 + "/" + bathrobeAmount);
}

function checkCartEmptiness() {
  if (bathrobeAmount === 0) {
    $(".orderInfo").css({
      opacity: 0,
      "z-index": -1,
      "user-select": "none",
      cursor: "default"
    });
    $(".previewContainer").css("opacity", 0);
    $(".cartIsEmpty").css({ opacity: 1, "z-index": 1 });
  } else {
    $(".cartIsEmpty").css({ opacity: 0, "z-index": -10 });
    $(".orderInfo").css({ opacity: 1, "z-index": "initial" });
    $(".previewContainer").css("opacity", 1);
  }
}
