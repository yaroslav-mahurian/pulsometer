/* Tiny Slider */

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  navPosition: "bottom",

  responsive: {
    991: {
      nav: false,
      
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
}); 

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
}); 


/* Jquery slick slider */
/* $(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 800,
      //adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"> <img src="icons/arrow-left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="icons/arrow-right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    });
  });

   */