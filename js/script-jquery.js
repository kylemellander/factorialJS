$(document).ready(function() {
  $("form").submit(function(event) {
    var num = parseInt($("input#number").val());
    var result = factorial(num);

    $("#result").empty();
    $("#result").append(result);
    $("#result").show();
    event.preventDefault();
  });
});
