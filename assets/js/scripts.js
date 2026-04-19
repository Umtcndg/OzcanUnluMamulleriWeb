        
       

        

(function($) {
	'use strict';
	jQuery(document).on('ready', function(){
	
		   
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		      
		jQuery('#gallery .row').mixitup({
			targetSelector: '.mix',
		});		
		$("a[class^='prettyPhoto']").prettyPhoto();
		      		
		 $("a[data-rel^='prettyPhoto']").prettyPhoto();				 
		 $('#projectModal').on('shown.bs.modal', function () {
		  $('#myInput').focus()
		 })
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		      		
		$('.partner').owlCarousel({
		  autoPlay: 9000,             
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		      
		
		      	
		$('.testimonial1-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			nextArrow: '<i class="fa fa-chevron-right next"></i>',
			prevArrow: '<i class="fa fa-chevron-left prev"></i>',
			dots: true,
			fade: false,
			autoplay: true,
			autoplaySpeed: 2000,
		});
		      			
	}); 		
	
	            
	(function () {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}
	}());
	               		
	
	         
	  new WOW().init();	
	         	
				
})(jQuery);


  

