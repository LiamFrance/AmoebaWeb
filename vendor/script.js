$(document).ready(function () {
  // menu fixed and height down
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".header__top").addClass("fixed");
    } else $(".header__top").removeClass("fixed");
  });
  // js for scroll content
  // logo
  $(".logo").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "easeOutCubic"
    );
  });
  // button get started
  $(".slider__button").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".about-us").offset().top - 100,
      },
      1000,
      "easeOutCubic"
    );
  });
  // home
  $(".header__menu ul li:nth-child(1) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000,
      "easeOutCubic"
    );
  });
  // about-us
  $(".header__menu ul li:nth-child(2) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".about-us").offset().top - 100,
      },
      1000,
      "easeOutCubic"
    );
  });
  // service
  $(".header__menu ul li:nth-child(3) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".service").offset().top - 50,
      },
      1000,
      "easeOutCubic"
    );
  });
  // portfolio
  $(".header__menu ul li:nth-child(4) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".portfolio").offset().top - 50,
      },
      1000,
      "easeOutCubic"
    );
  });
  // team
  $(".header__menu ul li:nth-child(5) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".members").offset().top - 100,
      },
      1000,
      "easeOutCubic"
    );
  });
  // contact
  $(".header__menu ul li:nth-child(7) a").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(".contact").offset().top - 50,
      },
      1000,
      "easeOutCubic"
    );
  });
  // js for question section
  $(".answer").slideUp();
  $(".question__box").on("click", function () {
    // $(this).siblings(".answer").slideUp(500);
    // $(".answer").slideUp();
    // $(this).parent().parent().find("li .answer").slideUp(350);
    if (!$(this).hasClass("active")) {
      $(this).parent().parent().find("li .answer").slideUp(350);
      $(".question__box").removeClass("active");
      $(".question__box").parent().find(".icon-up").removeClass("icon_show");
      $(".question__box")
        .parent()
        .find(".icon-down")
        .removeClass("icon_hidden");
    }

    $(this).toggleClass("active");
    $(this).next(".answer").slideToggle(500);
    $(this).parent().find(".icon-up").toggleClass("icon_show");
    $(this).parent().find(".icon-down").toggleClass("icon_hidden");
  });

  // js for portfolio with Mixitup plugin
  $(".filter").on("click", function (event) {
    event.preventDefault();
    var mixer = mixitup(".portfolio__images");
  });
});
