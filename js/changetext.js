function changetext() {
  $(document).ready(function() {
    var userInput = document.getElementById("signInput").value;
    document.getElementById("sign").innerHTML = userInput;
  });
}
