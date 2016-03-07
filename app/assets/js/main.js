;(function () {
	
	// Carousel Feature Slide
	var owlCrouselFeatureSlide = function() {
		
		var owl = $('.owl-carousel');

		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
			$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');
		
		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 700);
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
			}, 900);
     	});
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoHeight: true,
		    smartSpeed: 500,
		    autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
		    navText: [	
		      "<i class='icon-arrow-left2 owl-direction'></i>",
		      "<i class='icon-arrow-right2 owl-direction'></i>"
	     	]
		});

	};

	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}

			event.preventDefault();
			
		});

	};

	// Page Nav
	var clickMenu = function() {

		$('a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});

	};

	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

	// Document on load.
	$(function(){

		burgerMenu();
		owlCrouselFeatureSlide();
		clickMenu();
		windowScroll();
	});

}());