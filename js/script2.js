// JavaScript Document

$(document).ready(function(){
	
	
	"use strict";
	
	$('.channel1').click(function(){
		
		$('.overlay, .thumb-1').fadeIn(500);
		
	});
	
	
	$(".channel2").click(function(){
		
		
		$(".overlay, .thumb-2").fadeIn(500);
		
	});
	
	$(".channel3").click(function(){
		
		
		$(".overlay, .thumb-3").fadeIn(500);
		
	});
	
	$(".channel4").click(function(){
		
		
		$(".overlay, .thumb-4").fadeIn(500);
		
	});
	$(".close").click(function(){
		
		$(".overlay, .gallery").fadeOut(500);
					
					
	});
	
	$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});
	
});


