$(document).ready(function() {
  var currentSize = 0;
  $("#SP-1").click(function() {
    document.getElementById("SP-1").className += " SP-Active";
    document.getElementById("SP-2").className = "SP SP-L";
    document.getElementById("SP-3").className = "SP SP-L";
    document.getElementById("SP-4").className = "SP";
    document.getElementById("SP-5").className = "SP SP-R";
    document.getElementById("SP-6").className = "SP SP-R";
    currentSize = 1;
  });
  $("#SP-2").click(function() {
    document.getElementById("SP-1").className = "SP SP-L";
    document.getElementById("SP-2").className += " SP-Active";
    document.getElementById("SP-3").className = "SP SP-L";
    document.getElementById("SP-4").className = "SP";
    document.getElementById("SP-5").className = "SP SP-R";
    document.getElementById("SP-6").className = "SP SP-R";
    currentSize = 2;
  });
  $("#SP-3").click(function() {
    document.getElementById("SP-1").className = "SP SP-L";
    document.getElementById("SP-2").className = "SP SP-L";
    document.getElementById("SP-3").className += " SP-Active";
    document.getElementById("SP-4").className = "SP";
    document.getElementById("SP-5").className = "SP SP-R";
    document.getElementById("SP-6").className = "SP SP-R";
    currentSize = 3;
  });
  $("#SP-4").click(function() {
    document.getElementById("SP-1").className = "SP SP-L";
    document.getElementById("SP-2").className = "SP SP-L";
    document.getElementById("SP-3").className = "SP SP-L";
    document.getElementById("SP-4").className += " SP-Active";
    document.getElementById("SP-5").className = "SP SP-R";
    document.getElementById("SP-6").className = "SP SP-R";
    currentSize = 4;
  });
  $("#SP-5").click(function() {
    document.getElementById("SP-1").className = "SP SP-L";
    document.getElementById("SP-2").className = "SP SP-L";
    document.getElementById("SP-3").className = "SP SP-L";
    document.getElementById("SP-4").className = "SP";
    document.getElementById("SP-5").className += " SP-Active";
    document.getElementById("SP-6").className = "SP SP-R";
    currentSize = 5;
  });
  $("#SP-6").click(function() {
    document.getElementById("SP-1").className = "SP SP-L";
    document.getElementById("SP-2").className = "SP SP-L";
    document.getElementById("SP-3").className = "SP SP-L";
    document.getElementById("SP-4").className = "SP";
    document.getElementById("SP-5").className = "SP SP-R";
    document.getElementById("SP-6").className += " SP-Active";
    currentSize = 6;
  });
});
