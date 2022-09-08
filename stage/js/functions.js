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
