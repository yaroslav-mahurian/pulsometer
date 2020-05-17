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

	/* Modal */
	$('[data-modal=consultation]').on('click', function(){
		$('.overlay, #consultation').fadeIn();
	});
	
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut();
	});

	$('.button_mini').each(function(i){
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn();
		});
	});

	/* Validation */
	function validateForms (form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите корректное имя.",
					minlength: jQuery.validator.format("Требуется как минимум {0} символа!")
				},
				phone: "Пожалуйста, введите корректный номер телефона.",
				email: {
					required: "Пожалуйста, введите свой email.",
					email: "Некорректный адрес почты."
				}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');


	/* Masked Input */
	$('input[name=phone]').mask("+38 (099) 999-99-99");

	/* Mail */
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut('fast');
			$('.overlay, #thanks').fadeIn('fast');

			$('form').trigger('reset');	
		});
		return false;
	});

	/* Smooth scroll and pageup */
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn('fast');
		} else {
			$('.pageup').fadeOut('fast');
		}
	});

	$("a[href='#up']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	$("a[href='#catalog']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});


	/* Animation */
	new WOW().init();

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