// Tooltip
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// fade in - fade out Quienes Somos
$(document).ready(function () {
  $(".txt-fade").click(function () {
    $(".title-fade1").fadeOut();
    $(".title-fade2").fadeOut("slow");
    $(".title-fade3").fadeOut(3000);
  });
  $(".txt-fade").click(function () {
    $(".title-fade1").fadeIn();
    $(".title-fade2").fadeIn("slow");
    $(".title-fade3").fadeIn(3000);
  });
});

$(window).scroll(function () {
  if ($("#nav-menu").offset().top > 56) {
    $("#nav-menu").addClass("bg-dark");
  } else {
    $("#nav-menu").removeClass("bg-dark");
  }
});
