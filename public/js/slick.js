$(document).ready(function () {
  $('.client-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 8,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  $('.feedback-slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
  });
  $('.directors-slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
