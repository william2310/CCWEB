(function ($) {
	"use strict";


	jQuery(document).ready(function($) {
        
		// jQuery Custom scrollbar
		$("body").niceScroll({
			cursorcolor: "#333333",
			cursorborderradius: "0px",
			cursorwidth: "10px",
			cursorminheight: 100,
			cursorborder: "0px solid #fff",
			zindex: 9999,
			autohidemode: true,
			horizrailenabled:false
		});          
	   
        // Activation one page menu
        $("div.navbar-collapse ul li a").click(function(){
            $("div.navbar-collapse").removeClass("in");
        });

		// Sticky bar		
		$(".header").sticky({topSpacing: 0});
		
		// One page nav
		$(".nav").onePageNav();
		
		// Homepage carousel slider		
        $("#home-slider").carousel({
            interval: 5000
        });
        
		// jQuery counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});        
		
		// jQuery Parallax
		$('.slide-bg, .parallax-bg').scrolly({bgParallax: true});
        
        // Portfolio hover function
        $(".grid-item-on-hover").hover(function() {
            $(this).animate({
                opacity: .9
            }, 200)
        }, function() {
            $(this).animate({
                opacity: 0
            }, 200)
        });
        
        // Lightbox
        $("a[data-gal^='prettyPhoto']").prettyPhoto();
        
        // color change function
        $(".demo-panel-close").click(function(){
            $(".demo-panel").css('left', '-175px');
            $(this).hide();
            $(".demo-panel-open").show();
        });
        // color change function
        $(".demo-panel-open").click(function(){
            $(".demo-panel").css('left', '0px');
            $(this).hide();
            $(".demo-panel-close").show();
        });
        
        // color change function
        $("#dark-green-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme magenta-theme dark-theme yellow-theme orange-theme pink-theme");
            $("body").addClass("dark-green-theme");
            
        });
        $("#green-color").click(function(){
            $("body").removeClass("dark-green-theme sky-theme magenta-theme dark-theme yellow-theme orange-theme");
            $("body").addClass("light-green-theme");
            
        });
        $("#sky-color").click(function(){
            $("body").removeClass("light-green-theme dark-green-theme magenta-theme dark-theme yellow-theme orange-theme");
            $("body").addClass("sky-theme");
        });
        $("#magenta-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme dark-green-theme dark-theme yellow-theme orange-theme");
            $("body").addClass("magenta-theme");
        });
        $("#dark-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme magenta-theme dark-green-theme yellow-theme orange-theme");
            $("body").addClass("dark-theme");
        });
        $("#yellow-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme magenta-theme dark-theme dark-green-theme orange-theme");
            $("body").addClass("yellow-theme");
        });
        $("#orange-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme magenta-theme dark-theme yellow-theme dark-green-theme");
            $("body").addClass("orange-theme");
        });
        $("#default-color").click(function(){
            $("body").removeClass("light-green-theme sky-theme magenta-theme dark-theme yellow-theme orange-theme dark-green-theme");
        });
        

	});


		    


	/* ==============================================
	 Smooth Scroll To Anchor
	 =============================================== */

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	jQuery(function($) {
		$('.navbar a,.btn,.to-top').bind('click', function(event) {
			var $anchor = $(this);
			$('html').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 50
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    
    jQuery(window).load(function(){

        // Hide preloader slowly
        $('#preloader').delay(350).fadeOut('slow'); 
        
        // Show body slowly
        $('body').delay(350);
    });


}(jQuery));	