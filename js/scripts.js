// JavaScript Document
$(document).ready(function () {
   'use strict';
	$('header').fadeIn(1500).removeClass('hidden');
	$('.herotext').fadeIn(2000).removeClass('hidden');
	$('.herotext p').fadeIn(3000).removeClass('hidden');
	$('.episodetop').fadeIn(3000).removeClass('hidden');
});


$(document).ready(function() {   
    'use strict';
    $(window).scroll( function(){   
        $('.hideme').each( function(){ 
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();     
            if( bottom_of_window > bottom_of_object ){      
                $(this).animate({'opacity':'1'},2000);               
            }
        }); 
    }); 
});



$('#resp-menu-1').click(function(){
		 'use strict';
		
		setTimeout(function(){$('#pull1').fadeToggle(800);}, 200);
	});
$('#resp-menu-2').click(function(){
		 'use strict';
		
		setTimeout(function(){$('#pull2').fadeToggle(800);}, 200);
	});
$('#resp-menu-3').click(function(){
		 'use strict';
		
		setTimeout(function(){$('#pull3').fadeToggle(800);}, 200);
	});
$('#resp-menu-4').click(function(){
		 'use strict';
		
		setTimeout(function(){$('#pull4').fadeToggle(800);}, 200);
	});

$(document).ready(function(){
	
	'use strict';
	
	$('.menu-icon, .nav-link').click(function(){
		$('nav').slideToggle(600);
		$('herotext').slideToggle(600);
	});
	
	
	$('.link').click(function(){
		$('.videoplayer').slideToggle(600);
	});
	$('.link2').click(function(){
		$('.videoplayer1').slideToggle(600);
	});
});

/*SCOTTs & MARKES JS FOR CHANNEL SECTION*/

$(document).ready(function(){
	"use strict";
	
	$('.icon-bbc1').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-one').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc2').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-two').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc3').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-three').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc4').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-four').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc5').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-five').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc6').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-six').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc7').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-seven').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc8').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-eight').fadeIn(200);
		}, 200);
	});
	
	$('.icon-bbc9').click(function(){
		$('.container').fadeOut(200);
		setTimeout(function(){
				$('.cont-nine').fadeIn(200);
		}, 200);
	});
});
	