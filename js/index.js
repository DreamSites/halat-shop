let bathrobeID = 0;
let bathrobeAmount = 0;
if (localStorage.getItem("bathrobeAmount") !== null) {
  bathrobeAmount = parseInt(localStorage.getItem("bathrobeAmount"), 10);
  bathrobeID = bathrobeAmount;
  if (bathrobeAmount > 0) {
    $("#headerOpenCartButton span").html(bathrobeAmount);
    $("#footerOpenCartButton span").html(bathrobeAmount);
    $("#mobileHeaderOpenCartButton span").html(bathrobeAmount);
    $("#mobileFooterOpenCartButton span").html(bathrobeAmount);
  }
}
let pickedSign = [];
let pickedSex = [];
let pickedSexID = [];
let pickedSize = [];
let pickedFont = [];
let pickedFontSize = [];
let pickedBathrobeColor = [];
let pickedBathrobeColorIMG = [];
let pickedImage = [];
let pickedImageID = [];

if (localStorage.getItem("signInput") !== null) {
  pickedSign = JSON.parse(localStorage.getItem("signInput"));
}
if (localStorage.getItem("pickedSex") !== null) {
  pickedSex = JSON.parse(localStorage.getItem("pickedSex"));
}
if (localStorage.getItem("pickedSexID") !== null) {
  pickedSexID = JSON.parse(localStorage.getItem("pickedSexID"));
}
if (localStorage.getItem("pickedSize") !== null) {
  pickedSize = JSON.parse(localStorage.getItem("pickedSize"));
}
if (localStorage.getItem("pickedFont") !== null) {
  pickedFont = JSON.parse(localStorage.getItem("pickedFont"));
}
if (localStorage.getItem("pickedFontSize") !== null) {
  pickedFontSize = JSON.parse(localStorage.getItem("pickedFontSize"));
}
if (localStorage.getItem("pickedBathrobeColor") !== null) {
  pickedBathrobeColor = JSON.parse(localStorage.getItem("pickedBathrobeColor"));
}
if (localStorage.getItem("pickedBathrobeColorIMG") !== null) {
  pickedBathrobeColorIMG = JSON.parse(localStorage.getItem("pickedBathrobeColorIMG"));
}
if (localStorage.getItem("pickedImage") !== null) {
  pickedImage = JSON.parse(localStorage.getItem("pickedImage"));
}
if (localStorage.getItem("pickedImageID") !== null) {
  pickedImageID = JSON.parse(localStorage.getItem("pickedImageID"));
}

pickedFontSize[bathrobeID] = parseInt($("#sign").css("font-size"));

$(document).ready(function() {
  responsiveNavigation();
  const reviewButtonRight = $("#reviewButtonRight");
  const reviewButtonLeft = $("#reviewButtonLeft");

  $("nav a").click(function() {
    const scrollTo = $(this).attr("href");
    if ($(scrollTo).length !== 0) {
      $("html, body").animate(
        {
          scrollTop: $(scrollTo).offset().top
        },
        500
      );
    }
    return false;
  });

  $(".links a").click(function() {
    $("#headerNavigation").css({ opacity: 0, "z-index": 1 });
    const scrollTo = $(this).attr("href");
    if ($(scrollTo).length !== 0) {
      $("html, body").animate(
        {
          scrollTop: $(scrollTo).offset().top
        },
        500
      );
    }
    return false;
  });

  // Кнопка вниз

  $("#scrollDown").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(document).height()
      },
      500
    );
    return false;
  });

  // КНОПКА ВВЕРХ

  $("#scrollUp").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });

  $("#openNavigation").click(function() {
    $("#headerNavigation").css({ opacity: 1, "z-index": 3 });
  });

  $("#closeNavigation").click(function() {
    $("#headerNavigation").css({ opacity: 0, "z-index": 1 });
  });

  reviewButtonRight.click(function() {
    reviewID += 1;
    reviewsDotIndicatorID += 1;
    $("#sliderReviewsContent").css({
      opacity: "0",
      transition: "all 0.2s ease"
    });
    getReview();
  });

  reviewButtonLeft.click(function() {
    reviewID -= 1;
    reviewsDotIndicatorID -= 1;
    $("#sliderReviewsContent").css({
      opacity: "0",
      transition: "all 0.2s ease"
    });
    getReview();
  });

  $("#selectedFont").click(function() {
    openFontPicker();
  });

  $(document).mouseup(function(e) {
    const fontPicker = $("#fontPicker");
    if (!fontPicker.is(e.target) && fontPicker.has(e.target).length === 0) {
      closeFontPicker();
    }
  });

  $("#selectedBathrobeColor").click(function() {
    openBathrobeColorPicker();
  });

  $(document).mouseup(function(e) {
    const bathrobeColorPicker = $("#bathrobeColorPicker");
    if (!bathrobeColorPicker.is(e.target) && bathrobeColorPicker.has(e.target).length === 0) {
      closeBathrobeColorPicker();
    }
  });

  $("#selectedImage").click(function() {
    openImagePicker();
  });

  $(document).mouseup(function(e) {
    const imagePicker = $("#imagePicker");
    if (!imagePicker.is(e.target) && imagePicker.has(e.target).length === 0) {
      closeImagePicker();
    }
  });

  $("#ourWorksButtonLeft").click(function() {
    if (pickedWorkID > 1) {
      pickedWorkID -= 1;
      updateOurWorks();
      updateOurWorksMargin();
    }
  });

  $("#ourWorksButtonRight").click(function() {
    if (pickedWorkID < 6) {
      pickedWorkID += 1;
      updateOurWorks();
      updateOurWorksMargin();
    }
  });

  $("#order").click(function() {
    if (
      typeof pickedSize[bathrobeID] !== "undefined" &&
      typeof pickedSex[bathrobeID] !== "undefined" &&
      typeof pickedSexID[bathrobeID] !== "undefined" &&
      typeof pickedSign[bathrobeID] !== "undefined" &&
      typeof pickedFont[bathrobeID] !== "undefined" &&
      typeof pickedFontSize[bathrobeID] !== "undefined" &&
      typeof pickedBathrobeColor[bathrobeID] !== "undefined" &&
      typeof pickedBathrobeColorIMG[bathrobeID] !== "undefined" &&
      typeof pickedImage[bathrobeID] !== "undefined" &&
      typeof pickedImageID[bathrobeID] !== "undefined"
    ) {
      $("#successAlert").addClass("active");
      bathrobeAmount += 1;
      localStorage.setItem("bathrobeAmount", bathrobeAmount);
      localStorage.setItem("pickedSex", JSON.stringify(pickedSex));
      localStorage.setItem("pickedSexID", JSON.stringify(pickedSexID));
      localStorage.setItem("pickedSize", JSON.stringify(pickedSize));
      localStorage.setItem("signInput", JSON.stringify(pickedSign));
      localStorage.setItem("pickedFont", JSON.stringify(pickedFont));
      localStorage.setItem("pickedFontSize", JSON.stringify(pickedFontSize));
      localStorage.setItem("pickedBathrobeColor", JSON.stringify(pickedBathrobeColor));
      localStorage.setItem("pickedBathrobeColorIMG", JSON.stringify(pickedBathrobeColorIMG));
      localStorage.setItem("pickedImage", JSON.stringify(pickedImage));
      localStorage.setItem("pickedImageID", JSON.stringify(pickedImageID));
      if (bathrobeAmount > 0) {
        $("#headerOpenCartButton span").html(bathrobeAmount);
        $("#footerOpenCartButton span").html(bathrobeAmount);
        $("#mobileHeaderOpenCartButton span").html(bathrobeAmount);
        $("#mobileFooterOpenCartButton span").html(bathrobeAmount);
      }
    } else {
      alert("Сначала заполните все поля!");
    }
  });

  $("#successAlert a").click(function() {
    $("#successAlert").removeClass("active");
    clearConstructor();
    bathrobeID += 1;
  });

  $(".headerLeftBG .mainButton").click(function() {
    const constructor = $(".previewContainer");
    if (constructor.length !== 0) {
      $("html, body").animate(
        {
          scrollTop: constructor.offset().top
        },
        500
      );
    }
    return false;
  });

  $(".size a").click(function() {
    $("#sizeTable").addClass("active");
  });

  $("#sizeTable .mainButton").click(function() {
    $("#sizeTable").removeClass("active");
  });
});

let reviewID = 0;
let reviewsDotIndicatorID = 0;

const sliderReviewsContent = document.getElementById("sliderReviewsContent");
sliderReviewsContent.addEventListener("touchstart", reviewsStartTouch, false);
sliderReviewsContent.addEventListener("touchmove", reviewsMoveTouch, false);

function reviewsStartTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function reviewsMoveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let diffX = initialX - currentX;
  let diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      if ($(window).width() <= 920) {
        reviewID += 1;
        reviewsDotIndicatorID += 1;
        $("#sliderReviewsContent").css({
          opacity: "0",
          transition: "all 0.2s ease"
        });
        getReview();
      }
    } else {
      // swiped right
      if ($(window).width() <= 920) {
        reviewID -= 1;
        reviewsDotIndicatorID -= 1;
        $("#sliderReviewsContent").css({
          opacity: "0",
          transition: "all 0.2s ease"
        });
        getReview();
      }
    }
  } else {
    //sliding vertically
    if (diffY > 0) {
      // swiped up
      const constructor = $(".constructor");
      if (constructor.length !== 0) {
        $("html, body").animate(
          {
            scrollTop: constructor.offset().top
          },
          500
        );
      }
    } else {
      // swiped down
      const ourWorks = $(".ourWorks");
      if (ourWorks.length !== 0) {
        $("html, body").animate(
          {
            scrollTop: ourWorks.offset().top
          },
          500
        );
      }
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
}

function updateReviewDotIndicator() {
  const reviewsDotContainer = $("#reviewsDotsContainer").children();
  reviewsDotContainer.removeClass("active");
  reviewsDotContainer.eq(reviewsDotIndicatorID).addClass("active");
}

function updateOurWorks() {
  const ourWorksDotContainer = $("#ourWorksDotsContainer").children();
  ourWorksDotContainer.removeClass("active");
  ourWorksDotContainer.eq(pickedWorkID).addClass("active");
  const sliderPhotoContainer = $(".sliderContent");
  sliderPhotoContainer.removeClass("active");
  sliderPhotoContainer.removeClass("leftActive");
  sliderPhotoContainer.removeClass("rightActive");
  sliderPhotoContainer.eq(pickedWorkID).addClass("active");
  if ($(window).width() > 600) {
    sliderPhotoContainer.eq(pickedWorkID + 1).addClass("rightActive");
    sliderPhotoContainer.eq(pickedWorkID - 1).addClass("leftActive");
  }
  if (pickedWorkID === 1) {
    const ourWorksButtonLeft = $("#ourWorksButtonLeft");
    const ourWorksButtonRight = $("#ourWorksButtonRight");
    ourWorksButtonLeft.removeClass("active");
    ourWorksButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
    ourWorksButtonRight.addClass("active");
    ourWorksButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
  } else if (pickedWorkID === 6) {
    const ourWorksButtonLeft = $("#ourWorksButtonLeft");
    const ourWorksButtonRight = $("#ourWorksButtonRight");
    ourWorksButtonLeft.addClass("active");
    ourWorksButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
    ourWorksButtonRight.removeClass("active");
    ourWorksButtonRight.html('<img src="img/rightArrowNotActive.svg" alt="">');
  } else {
    const ourWorksButtonLeft = $("#ourWorksButtonLeft");
    const ourWorksButtonRight = $("#ourWorksButtonRight");
    ourWorksButtonLeft.addClass("active");
    ourWorksButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
    ourWorksButtonRight.addClass("active");
    ourWorksButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
  }
}

function getReview() {
  const reviewRef = firebase.database().ref("reviews");
  const review = reviewRef.child(reviewID);
  review.once("value").then(function(snapshot) {
    const reviewName = snapshot.val().name;
    const reviewText = snapshot.val().text;
    const reviewDate = snapshot.val().date;

    $("#reviewName").html(reviewName);
    $("#reviewText").html(reviewText);
    $("#reviewDate").html(reviewDate);
  });
  if (reviewsDotIndicatorID > 0 && reviewsDotIndicatorID < 3) {
    const reviewButtonLeft = $("#reviewButtonLeft");
    const reviewButtonRight = $("#reviewButtonRight");
    reviewButtonLeft.addClass("active");
    reviewButtonLeft.html('<img src="img/leftArrowActive.svg" alt="">');
    reviewButtonRight.addClass("active");
    reviewButtonRight.html('<img src="img/rightArrowActive.svg" alt="">');
    updateReviewDotIndicator();
  } else if (reviewsDotIndicatorID === 0) {
    const reviewButtonLeft = $("#reviewButtonLeft");
    reviewButtonLeft.removeClass("active");
    reviewButtonLeft.html('<img src="img/leftArrowNotActive.svg" alt="">');
    updateReviewDotIndicator();
  } else if (reviewsDotIndicatorID === 3) {
    const reviewButtonRight = $("#reviewButtonRight");
    reviewButtonRight.removeClass("active");
    reviewButtonRight.html('<img src="img/rightArrowNotActive.svg" alt="">');
    updateReviewDotIndicator();
  }
}

getReview();

// АНИМАЦИЯ ЗАГРУЗКИ

let i = 0;
while (i < 100) {
  (function(i) {
    setTimeout(function() {
      document.getElementById("reviewsLoading").style.transform = "rotate(" + 360 * (i + 2) + "deg)";
      document.getElementById("reviewsLoadingContainer").style.transform = "rotate(" + 360 * (i + 2) + "deg)";
      const nameText = document.getElementById("reviewName").innerHTML;
      if (nameText !== "Имя") {
        $("#sliderReviewsContent").css("opacity", "1");
        $("#reviewsButtons").css("opacity", "1");
        $(".loading").css("display", "none");
        $("#reviewsDotsContainer").css("opacity", "1");
      }
    }, 1000 * i);
  })(i++);
}

function responsiveNavigation() {
  if ($(window).width() > 1240) {
    $("#headerLeftBG nav").html('<img alt="" class="logo" src="img/logo.png">' + '<a href="#ourWorks">Галерея</a>' + '<a href="#reviews">Отзывы</a>' + '<a href="#previewContainer">Конструктор</a>' + '<a href="#delivery">Доставка</a>' + '<a href="#aboutUs">О нас</a>');
    $("footer nav").html('<img alt="" class="logo" src="img/logo.png">' + '<a href="#ourWorks">Галерея</a>' + '<a href="#reviews">Отзывы</a>' + '<a href="#constructor">Конструктор</a>' + '<a href="#delivery">Доставка</a>' + '<a href="#aboutUs">О нас</a>' + '<div class="circleButton" id="footerOpenCartButton" onclick="window.location=\'cart.html\';">' + '<img alt="" src="img/cartBold.svg">' + "<span></span>" + "</div>");
  }
  if ($(window).width() > 1200) {
    pickedWorkID = 1;
    updateOurWorks();
    updateOurWorksMargin();
  } else {
    pickedWorkID = 0;
    updateOurWorks();
    updateOurWorksMargin();
  }
  if ($(window).width() < 1240) {
    $("#headerLeftBG nav").html('<div class="circleButton" id="openNavigation">' + '   <img src="img/navigation.svg" alt="">' + "</div>" + '<div class="circleButton" onclick="window.location=\'cart.html\';" id="mobileHeaderOpenCartButton">' + '   <img src="img/cart.svg" alt="">' + "   <span></span>" + "</div>" + '<img src="img/logo.png" alt="" class="logo">');
    $("footer nav").html('<img src="img/logo.png" alt="" class="logo">' + '<div class="circleButton" onclick="window.location=\'cart.html\';" id="mobileFooterOpenCartButton">' + '   <img src="img/cartBold.svg" alt="">' + "   <span></span>" + "</div>");
    if (bathrobeAmount > 0) {
      $("#mobileHeaderOpenCartButton span").html(bathrobeAmount);
      $("#mobileFooterOpenCartButton span").html(bathrobeAmount);
    }
  }
  if ($(window).width() < 760) {
    $(".constructor h2").html("Ваш уникальный<br>халат");
    $(".sizeNumbersContainer").html('<div class="sexSign">Мужские</div>' + '<div class="sexSign">Женские</div>' + "<div>46-47</div>" + "<div>44-45</div>" + "<div>48-49</div>" + "<div>46-47</div>" + "<div>50-51</div>" + "<div>48-49</div>" + "<div>52-53</div>" + "<div>50-51</div>" + "<div>54-57</div>" + "<div>52-53</div>" + "<div>58-60</div>" + "<div>54-56</div>");
  }
  if ($(window).width() < 675) {
    $("#copyright span").text = "Copyright 2018 Магазин халатов.";
  }
  if ($(window).width() < 1200) {
    $(".sliderContent").removeClass("active");
    $("#work1").addClass("active");
  }
}

function changeFontSize(value) {
  let currentSize = parseInt($("#sign").css("font-size"));
  currentSize = currentSize + value;
  $("#sign").css({ "font-size": currentSize });
  $("#currentFontSize").html(currentSize);
  pickedFontSize[bathrobeID] = currentSize;
  if (currentSize >= 56) {
    $("#plus").css("pointer-events", "none");
    $("#minus").click(function() {
      $("#plus").css("pointer-events", "auto");
    });
  }
  if (currentSize <= 12) {
    $("#minus").css("pointer-events", "none");
    $("#plus").click(function() {
      $("#minus").css("pointer-events", "auto");
    });
  }
}

function openFontPicker() {
  $("#fontPicker").toggleClass("active");
  $(".fontPickerItem").toggleClass("active");
  $("#selectedFont img").toggleClass("flip");
}

function closeFontPicker() {
  $("#fontPicker").removeClass("active");
  $(".fontPickerItem").removeClass("active");
  $("#selectedFont img").removeClass("flip");
}

function openBathrobeColorPicker() {
  $("#bathrobeColorPicker").toggleClass("active");
  $(".bathrobeColor, .colorPickerItem").toggleClass("active");
  if (pickedSexID[bathrobeID] === 1) {
    $("#bathrobeColorPicker").toggleClass("female");
    $("#bathrobeColorPickerItem2").css("display", "none");
    $("#bathrobeColorPickerItem3").css("display", "flex");
    $("#bathrobeColorPickerItem4").css("display", "none");
  } else {
    $("#bathrobeColorPicker").toggleClass("male");
    $("#bathrobeColorPickerItem2").css("display", "flex");
    $("#bathrobeColorPickerItem3").css("display", "none");
    $("#bathrobeColorPickerItem4").css("display", "flex");
  }
  $("#selectedBathrobeColor img").toggleClass("flip");
}

function closeBathrobeColorPicker() {
  $("#bathrobeColorPicker").removeClass("active");
  $(".bathrobeColor, .colorPickerItem").removeClass("active");
  $("#bathrobeColorPicker").removeClass("male");
  $("#bathrobeColorPicker").removeClass("female");
  $("#bathrobeColorPickerItem2").css("display", "none");
  $("#bathrobeColorPickerItem3").css("display", "none");
  $("#bathrobeColorPickerItem4").css("display", "none");
  $("#selectedBathrobeColor img").removeClass("flip");
}

function openImagePicker() {
  $("#imagePicker").toggleClass("active");
  $(".image, .imagePickerItem").toggleClass("active");
  $(".image, .imagePicture").toggleClass("active");
  $("#selectedImage img").toggleClass("flip");
}

function closeImagePicker() {
  $("#imagePicker").removeClass("active");
  $(".image, .imagePickerItem").removeClass("active");
  $(".image, .imagePicture").removeClass("active");
  $("#selectedImage img").removeClass("flip");
}

function pickFont(font) {
  const selectedFontName = $("#selectedFontName");
  selectedFontName.html(font);
  selectedFontName.css("font-family", font);
  $(".previewContainer .sign").css("font-family", font);
  $("#selectedFont").addClass("picked");
  closeFontPicker();
  pickedFont[bathrobeID] = font;
}

function pickBathrobeColor(color, colorLinkMale, colorLinkFemale) {
  $("#selectedBathrobeColorName").html(color);
  $("#selectedBathrobeColor").addClass("picked");
  if (pickedSexID[bathrobeID] === 0) {
    $("#previewContainer img")
      .eq(0)
      .attr("src", colorLinkMale);
    pickedBathrobeColorIMG[bathrobeID] = colorLinkMale;
  } else if (pickedSexID[bathrobeID] === 1) {
    $("#previewContainer img")
      .eq(0)
      .attr("src", colorLinkFemale);
    pickedBathrobeColorIMG[bathrobeID] = colorLinkFemale;
  } else {
    pickSex("Мужской", 0);
    $("#previewContainer img")
      .eq(0)
      .attr("src", colorLinkMale);
    pickedBathrobeColorIMG[bathrobeID] = colorLinkMale;
  }
  if (color === "Персиковый") {
    $("#wreathsWithCrown").attr("src", "img/wreathsWithCrownBlue.png");
    $("#curls").attr("src", "img/curlsBlue.png");
    $("#crown").attr("src", "img/crownBlue.png");
    $("#diadem").attr("src", "img/diademBlue.png");
    $("#sign").css("color", "#4053ff");
    $("#wreathsWithCrownPicker").attr("src", "img/wreathsWithCrownBlue.png");
    $("#curlsPicker").attr("src", "img/curlsBlue.png");
    $("#crownPicker").attr("src", "img/crownBlue.png");
    $("#diademPicker").attr("src", "img/diademBlue.png");
  } else {
    $("#wreathsWithCrown").attr("src", "img/wreathsWithCrownGold.png");
    $("#curls").attr("src", "img/curlsGold.png");
    $("#crown").attr("src", "img/crownGold.png");
    $("#diadem").attr("src", "img/diademGold.png");
    $("#wreathsWithCrownPicker").attr("src", "img/wreathsWithCrownGold.png");
    $("#curlsPicker").attr("src", "img/curlsGold.png");
    $("#crownPicker").attr("src", "img/crownGold.png");
    $("#diademPicker").attr("src", "img/diademGold.png");
    $("#sign").css("color", "#ffd400");
  }
  closeBathrobeColorPicker();
  pickedBathrobeColor[bathrobeID] = color;
}

function pickImage(image, imageID) {
  $("#selectedImageName").html(image);
  $("#selectedImage").addClass("picked");
  $(".picture").css("display", "none");
  if (imageID) {
    $("#previewContainer img")
      .eq(imageID)
      .css("display", "block");
  } else {
    $(".picture").css("display", "none");
  }
  closeImagePicker();
  pickedImage[bathrobeID] = image;
  pickedImageID[bathrobeID] = imageID;
}

const ourWorksSlider = document.getElementById("ourWorksSlider");
ourWorksSlider.addEventListener("touchstart", ourWorkStartTouch, false);
ourWorksSlider.addEventListener("touchmove", ourWorkMoveTouch, false);
let pickedWorkID = 0;

function updateOurWorksMargin() {
  if ($(window).width() < 600) {
    let margin = 260 * pickedWorkID - 1;
    let marginSign = "calc((50vw - 320px/2) - " + margin + "px)";
    $("#ourWorksSlider").css("margin-left", marginSign);
  } else if ($(window).width() > 1500) {
    let margin = -825 * (pickedWorkID - 1);
    let marginSign = margin + "px";
    $("#work1").css("margin-left", marginSign);
  } else if ($(window).width() > 1200) {
    let margin = -470 * (pickedWorkID - 1);
    let marginSign = margin + "px";
    $("#work1").css("margin-left", marginSign);
  } else if ($(window).width() > 600) {
    let margin = -690 * pickedWorkID;
    let marginSign = margin + "px";
    $("#work1").css("margin-left", marginSign);
  }
}

// Swipe Up / Down / Left / Right
let initialX = null;
let initialY = null;

function ourWorkStartTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function ourWorkMoveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let diffX = initialX - currentX;
  let diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      if (pickedWorkID < 7) {
        pickedWorkID += 1;
        updateOurWorks();
        updateOurWorksMargin();
      }
    } else {
      // swiped right
      if (pickedWorkID > 0) {
        pickedWorkID -= 1;
        updateOurWorks();
        updateOurWorksMargin();
      }
    }
  } else {
    //sliding vertically
    if (diffY > 0) {
      // swiped up
      const reviews = $(".reviews");
      if (reviews.length !== 0) {
        $("html, body").animate(
          {
            scrollTop: reviews.offset().top
          },
          500
        );
      }
    } else {
      // swiped down
      const header = $("header");
      if (header.length !== 0) {
        $("html, body").animate(
          {
            scrollTop: header.offset().top
          },
          500
        );
      }
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
}

function changePickedWorkID(clickedDot) {
  if (clickedDot > 0 && clickedDot < 7 && $(window).width() > 1200) {
    pickedWorkID = clickedDot;
    updateOurWorks();
    updateOurWorksMargin();
  } else if ($(window).width() <= 1200) {
    pickedWorkID = clickedDot;
    updateOurWorks();
    updateOurWorksMargin();
  }
}

function pickSize(size, sizeID) {
  const sizePickerSelector = $(".sizePickerSelector");
  const pickedSizeBlock = $(".sizePicker div");
  sizePickerSelector.css({
    left: pickedSizeBlock.eq(sizeID).position().left,
    width: pickedSizeBlock.eq(sizeID).outerWidth(true)
  });
  pickedSizeBlock.css("color", "var(--black)");
  pickedSizeBlock.eq(sizeID).css("color", "white");
  sizePickerSelector.addClass("active");
  pickedSize[bathrobeID] = size;
}

function pickSex(sex, sexID) {
  const sexPickerSelector = $(".sexPickerSelector");
  const pickedSexBlock = $(".sexPicker div");
  sexPickerSelector.css({
    left: pickedSexBlock.eq(sexID).position().left,
    width: pickedSexBlock.eq(sexID).outerWidth(true)
  });
  pickedSexBlock.css("color", "var(--black)");
  pickedSexBlock.eq(sexID).css("color", "white");
  sexPickerSelector.addClass("active");
  pickedSex[bathrobeID] = sex;
  pickedSexID[bathrobeID] = sexID;
  $("#selectedBathrobeColorName").html("Выберите цвет халата");
  $("#selectedBathrobeColor").removeClass("picked");
  if (sexID === 0) {
    $("#previewContainer img")
      .eq(0)
      .attr("src", "img/previewWhiteMale.png");
  } else {
    $("#previewContainer img")
      .eq(0)
      .attr("src", "img/previewWhiteFemale.png");
  }
}

const signInput = $("#signInput");
const sign = $(".previewContainer .sign");
signInput.keyup(function() {
  sign.html(signInput.val());
  pickedSign[bathrobeID] = signInput.val();
});

function clearConstructor() {
  const previewSign = $(".previewContainer .sign");
  $(".sexPicker div").css("color", "var(--black)");
  $(".sexPickerSelector").removeClass("active");
  $(".sizePicker div").css("color", "var(--black)");
  $(".sizePickerSelector").removeClass("active");

  signInput.val("");
  sign.html("");

  const selectedFontName = $("#selectedFontName");
  selectedFontName.html("Выберите шрифт");
  selectedFontName.css("font-family", "Ubuntu");
  previewSign.css("font-family", "Ubuntu");
  $("#selectedFont").removeClass("picked");

  previewSign.css("color", "#ffd400");

  $("#selectedBathrobeColorName").html("Выберите цвет халата");
  $("#selectedBathrobeColor").removeClass("picked");

  $("#selectedImageName").html("Выберите рисунок");
  $("#selectedImage").removeClass("picked");
}

$(window).resize(function() {
  responsiveNavigation();
});
