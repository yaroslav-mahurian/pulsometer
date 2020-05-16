/* Tiny Slider */

/* const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  fixedWidth: 750,
  autoWidth: true,
  

  responsive: {
    991: {
      nav: false
    }
  }
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
}); 

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});  */

$(document).ready(function(){

	/* Carousel */
	$(".owl-carousel").owlCarousel({
		center: true,
		items:1,
		loop:true,
		nav: false,
		dots: true,
		dotsContainer: ".carousel-dots",
		navContainer: ".carousel-nav",
		navText: ["<img src='../icons/arrow-left.png'>","<img src='../icons/arrow-right.png'>"],

		responsive : {

			1200 : {
				dots: false,
				nav: true
			}
		}
	});


  /* Tabs */
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide (item) {
		$(item).each(function(i) {
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		})
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

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