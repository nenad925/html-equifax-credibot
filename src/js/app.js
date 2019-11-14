import 'popper.js';
import 'bootstrap';
import '@fancyapps/fancybox';
import $ from 'jquery';
import 'slick-carousel';

var slider = document.getElementById("myRange");
var output = document.getElementById("price");
if(output && slider) {
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
}

$('.carousel').slick({
  infinite: false,
  centerMode: true,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
