$(document).ready(function () {
  $(".tagline").hover(
    function (e) {
      $("p").html("💖").css("font-size", 60);
    },
    function (e) {
      $("p").html("made to make you happy ❣️").css("font-size", "initial");
    }
  );
});
