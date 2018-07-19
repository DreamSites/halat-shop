$(document).ready(function() {
  $(".MP-L").click(function() {
    document.getElementById("MP-1").className = "MP-L MP-Active";
    document.getElementById("MP-2").className = "MP";
    document.getElementById("MP-3").className = "MP-R";
  });
  $(".MP").click(function() {
    document.getElementById("MP-1").className = "MP-L";
    document.getElementById("MP-2").className = "MP MP-Active";
    document.getElementById("MP-3").className = "MP-R";
  });
  $(".MP-R").click(function() {
    document.getElementById("MP-1").className = "MP-L";
    document.getElementById("MP-2").className = "MP";
    document.getElementById("MP-3").className = "MP-R MP-Active";
  });
});
