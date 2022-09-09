//function to add active class to current page
$(".page .header ul li a")
  .filter(function () {
    return this.href === location.href;
  })
  .addClass("active");

//function for button to go top

$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$("#toTop").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

//function for mobile menu

$(".mobile-menu").click(function () {
  $(".header ul").toggleClass("show");
  $(".mobile-menu").toggleClass("bars-x");
});

//function to scroll links inside page smoothly
$('a[href*="#"]:not([href="#"])').click(function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
      return false;
    }
  }
});

//portfolio functions
/*
(function (window, document, $, undefined) {
  var $slides, $btnArr;

  function onClick(e) {
    var $target = $(e.target);
    if (
      $target.hasClass("slide") &&
      !$target.hasClass("active") &&
      !$target.siblings().hasClass("active")
    ) {
      $target.removeClass("anim-in last-viewed").addClass("active");
      $target
        .siblings()
        .removeClass("anim-in last-viewed")
        .addClass("anim-out");
    }
  }

  function closeSlide(e) {
    var $slide = $(e.target).parent();
    $slide.removeClass("active anim-in").addClass("last-viewed");
    $slide.siblings().removeClass("anim-out").addClass("anim-in");
  }

  $(function () {
    $slides = $(".slide");
    $btnArr = $slides.find(".btn-close");
    $slides.on("click", onClick);
    $btnArr.on("click", closeSlide);
  });
})(this, document, jQuery);
*/
(function (window, document, $, undefined) {
  var $slides, $btnArr;

  function onClick(e) {
    var $target = $(e.target);
    if (
      $target.hasClass("slide") &&
      !$target.hasClass("active") &&
      !$target.siblings().hasClass("active")
    ) {
      $target.removeClass("anim-in last-viewed").addClass("active");
      $target
        .siblings()
        .removeClass("anim-in last-viewed")
        .addClass("anim-out");
    }
  }

  function closeSlide(e) {
    var $slide = $(e.target).parent();
    $slide.removeClass("active anim-in").addClass("last-viewed");
    $slide.siblings().removeClass("anim-out").addClass("anim-in");
  }

  $(function () {
    $slides = $(".slide");
    $btnArr = $slides.find(".btn-close");
    $slides.on("click", onClick);
    $btnArr.on("click", closeSlide);
  });
})(this, document, jQuery);

const myMap = new Map;