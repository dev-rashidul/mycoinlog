// Sticky Navbar for Header

window.addEventListener("scroll", function(){
  var header = document.querySelector(".navbar")
  header.classList.toggle("sticky", window.scrollY > 0)
})

// Dashboard Slider JavaScript

$(".dashboard-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});