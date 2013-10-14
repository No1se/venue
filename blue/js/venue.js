(function($) {
"use strict";

$(document).ready(function () {

/* --- NiceScroll --- */
$("html").niceScroll();
  
// Google Maps
$(window).load(function () {
    initGoogleMap(); //init Gmap3
});

function initGoogleMap() {
    var position = new google.maps.LatLng(40.77627, -73.910965); //change this to your coordinates
    $('#my-map').gmap3({
        map: {
            options: {
                center: position,
                zoom: 16, //adjust this depending upon how much you want to see
                styles: [{
                    stylers: [{
                            hue: '#4ac1f9'
                        }, //this is the accent color
                        {
                            saturation: -30
                        }
                    ]
                }]
            }
        },
        marker: {
            values: [{
                latLng: position,
                options: {
                    icon: 'images/icon-map.png'
                }
            }],
            options: {
                draggable: true,
            }
        }
    });

};

  
/* --- Image-Hover-Zoom --- */  
	
	  $('.picture a').hover(function () {
		$(this).find('.image-hover-zoom')
		.stop().fadeTo('fast', 1);
	  },function () {
		$(this).find('.image-hover-zoom')
		.stop().fadeTo('fast', 0);
	  });
	  
// Initialize prettyPhoto plugin
	$(".vn-work a[rel^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: false
	});
	
});

})(jQuery);
