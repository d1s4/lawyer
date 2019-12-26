$(function() {
  $(".lang-flag").click(function() {
    $(".language-dropdown").toggleClass("open");
  });
  $("ul.lang-list li").click(function() {
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).hasClass("lang-en")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-en")
        .removeClass("lang-es")
        .removeClass("lang-pt");
      $("#lang_selected").html("<p>EN</p>");
    } else if ($(this).hasClass("lang-pt")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-pt")
        .removeClass("lang-es")
        .removeClass("lang-en");
      $("#lang_selected").html("<p>PT</p>");
    } else {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-es")
        .removeClass("lang-en")
        .removeClass("lang-pt");
      $("#lang_selected").html("<p>ES</p>");
    }
    $(".language-dropdown").removeClass("open");
  });

  $(".work-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: "<div class=' slick-arrow slick-next icon-angle-right'></div>",
    prevArrow: "<div class=' slick-arrow slick-prev icon-angle-left'></div>",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".header-menu__mini").on("click", function() {
    $(".header-mini__btn").toggleClass("active");
    $(".header-menu").slideToggle();
  });

  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init();
});
