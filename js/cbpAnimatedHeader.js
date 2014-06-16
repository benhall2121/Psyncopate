/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		first_header = document.querySelector( '.navbar-first' ),
		header = document.querySelector( '.navbar-fixed-top' ),
		shrink_header = $( '.navbar-nav li a' ),
		graph_icon = $('.graph_icon'),
		target_icon = $('.target_icon'),
		phone_icon = $('.phone_icon'),
		image_cluster = $('.image_cluster'),
		our_services_slide_down = $('.our_services_slide_down'),
		our_services_slide_up = $('.our_services_slide_up'),
		philosophy_icon = $('.philosophy_icon'),
		bios_icon = $('.bios_icon'),
		didScroll = false,
		changeHeaderOn = 80;
		about_us_start = 236;
		about_us_stop = 566;
		image_cluster_start = 767;
		our_services_start = 1365;
		philosophy_start = 2150;
		bios_start = 2700;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 1 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		//console.log(sy);
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
			classie.add( header, 'fixed-position' );
			shrink_header.removeClass('extra_padding');
		}
		else {
			classie.remove( header, 'navbar-shrink' );
			classie.remove( header, 'fixed-position' );
			shrink_header.addClass('extra_padding');
		}

		if(sy >= about_us_start){
		  	graph_icon.removeClass('come_in-from-left');
		  	phone_icon.removeClass('come_in-from-right');
			pos = about_us_stop-sy;

			if(pos < 0){
				pos = 0;
			}

			graph_icon.css('right', pos);
			phone_icon.css('left', pos);
		} else {
		  	graph_icon.addClass('come_in-from-left');
		  	phone_icon.addClass('come_in-from-right');
		}

		if(sy >= image_cluster_start){
			image_cluster.fadeIn("slow");
		} else {
			image_cluster.fadeOut("slow");
		}

		if(sy >= our_services_start){
			our_services_slide_down.slideDown();
			our_services_slide_up.show("slide", { direction: "down" }, 400);
		} else {
			our_services_slide_down.slideUp();
			our_services_slide_up.hide("slide", { direction: "down" }, 400);
		}

		if(sy >= philosophy_start){
			philosophy_icon.show( "fold" );
		} else {
		    philosophy_icon.hide( "fold" );
		}

		if(sy >= bios_start){
			bios_icon.show( "explode" );
		} else {
		    bios_icon.hide( "explode" );
		}


		


		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();