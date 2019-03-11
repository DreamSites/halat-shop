let bathrobeID = 0;
let bathrobeAmount = 0;
if (localStorage.getItem("bathrobeAmount")) {
  bathrobeAmount = parseInt(localStorage.getItem("bathrobeAmount"), 10);
}
let pickedSex = JSON.parse(localStorage.getItem("pickedSex"));
let pickedSize = JSON.parse(localStorage.getItem("pickedSize"));
let signInput = JSON.parse(localStorage.getItem("signInput"));
let pickedFont = JSON.parse(localStorage.getItem("pickedFont"));
let pickedFontSize = JSON.parse(localStorage.getItem("pickedFontSize"));
let pickedBathrobeColor = JSON.parse(localStorage.getItem("pickedBathrobeColor"));
let pickedBathrobeColorIMG = JSON.parse(localStorage.getItem("pickedBathrobeColorIMG"));
let pickedImage = JSON.parse(localStorage.getItem("pickedImage"));
let pickedImageID = JSON.parse(localStorage.getItem("pickedImageID"));

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
    pickedSex.splice(bathrobeID, 1);
    pickedSize.splice(bathrobeID, 1);
    signInput.splice(bathrobeID, 1);
    pickedFont.splice(bathrobeID, 1);
    pickedFontSize.splice(bathrobeID, 1);
    pickedBathrobeColor.splice(bathrobeID, 1);
    pickedBathrobeColorIMG.splice(bathrobeID, 1);
    pickedImage.splice(bathrobeID, 1);
    pickedImageID.splice(bathrobeID, 1);
    if (bathrobeID + 1 === bathrobeAmount) {
      bathrobeID -= 1;
    }
    bathrobeAmount -= 1;
    checkCartEmptiness();
    getOrderInfo();

    localStorage.setItem("bathrobeAmount", bathrobeAmount);
    localStorage.setItem("pickedSex", JSON.stringify(pickedSex));
    localStorage.setItem("pickedSize", JSON.stringify(pickedSize));
    localStorage.setItem("signInput", JSON.stringify(signInput));
    localStorage.setItem("pickedFont", JSON.stringify(pickedFont));
    localStorage.setItem("pickedFontSize", JSON.stringify(pickedFontSize));
    localStorage.setItem("pickedBathrobeColor", JSON.stringify(pickedBathrobeColor));
    localStorage.setItem("pickedBathrobeColorIMG", JSON.stringify(pickedBathrobeColorIMG));
    localStorage.setItem("pickedImage", JSON.stringify(pickedImage));
    localStorage.setItem("pickedImageID", JSON.stringify(pickedImageID));
  });
});

function getOrderInfo() {
  $("#sex").html(pickedSex[bathrobeID]);
  $("#size").html(pickedSize[bathrobeID]);
  $("#signInput").html(signInput[bathrobeID]);
  $("#font").html(pickedFont[bathrobeID]);
  $("#fontSize").html(pickedFontSize[bathrobeID]);
  $("#bathrobeColor").html(pickedBathrobeColor[bathrobeID]);
  $(".preview").attr("src", pickedBathrobeColorIMG[bathrobeID]);
  $("#pickedImage").html(pickedImage[bathrobeID]);
  $(".picture").css("display", "none");
  $(".previewImageContainer img")
    .eq(pickedImageID[bathrobeID])
    .css("display", "block");
  updateBathrobeID();
  $("#fullPrice").html(bathrobeAmount * 3190 + "₽");

  if (pickedBathrobeColor[bathrobeID] === "Персиковый") {
    $("#wreathsWithCrown").attr("src", "img/wreathsWithCrownBlue.png");
    $("#curls").attr("src", "img/curlsBlue.png");
    $("#crown").attr("src", "img/crownBlue.png");
    $("#diadem").attr("src", "img/diademBlue.png");
    $("#sign").css("color", "#4053ff");
  } else {
    $("#wreathsWithCrown").attr("src", "img/wreathsWithCrownGold.png");
    $("#curls").attr("src", "img/curlsGold.png");
    $("#crown").attr("src", "img/crownGold.png");
    $("#diadem").attr("src", "img/diademGold.png");
    $("#sign").css("color", "#ffd400");
  }

  const sign = $("#sign");
  sign.html(signInput[bathrobeID]);
  sign.css({
    "font-family": pickedFont[bathrobeID],
    "font-size": pickedFontSize[bathrobeID]
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
