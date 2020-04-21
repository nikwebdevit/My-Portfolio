$(document).ready(function () {

  $(".main").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $(".main").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }

});
