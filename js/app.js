(function($, document, window){
	
	
        $(document).ready(function() {
            $('.mobile-nav-toggle').click(function() {
                $('.main-navigation').slideToggle();
            });
        });
		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
		});
		
		



		$(".testimonial-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide"
		});

	    if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
				}
			},
			"autofit" );
	    	
	    }
	});

	$(window).load(function(){
		var $container = $('.filterable-items');

	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear',
	            queue: false
	        }
	    });

	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    

	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	});

})(jQuery, document, window);
