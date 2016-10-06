
if ($(window).width() <= 900) {
	var counter = true;	
	$('.ul-nav-submenu').siblings('.a-li-menu').append('<div class="div-a-sign">+</div>');
} else {
	var counter = false;	
}

$(window).on('resize', function(event){
	if ($(window).width() <= 900 && counter === false) {
		counter = true;
		$('.div-ul-menu').hide();
		$('.ul-nav-submenu').siblings('.a-li-menu').append('<div class="div-a-sign">+</div>');		
	} else if ($(window).width() > 900 && counter === true) {
		$('.div-ul-menu').show();
		$('.div-a-sign').remove();
		counter = false;
	}
});

$('.div-btn').click(function() {
	if ($('.div-ul-menu').is(':hidden')) {
		$('.div-ul-menu').slideDown(200);
	} else {
		$('.div-ul-menu').slideUp(200);
		$('.a-li-menu').siblings('.ul-2').slideUp(200);
		$('.a-li-menu').find('.div-a-sign').text('+');
	}
})

$('.ul-nav-submenu').siblings('.a-li-menu').click(function(event){
	if ($(this).siblings('.ul-nav-submenu').is(':hidden') && $(window).width() <= 900) {
		event.preventDefault(); 
		$(this).siblings('.ul-nav-submenu').slideDown(200);
		$(this).find('.div-a-sign').text('-');
	} else if ($(window).width() <= 900) {
		event.preventDefault();
		$(this).siblings('.ul-nav-submenu').slideUp(200);
		$(this).find('.div-a-sign').text('+');
	}
})


	









