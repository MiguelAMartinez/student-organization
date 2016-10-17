
$('.ul-nav-submenu').before('<div class="div-a-sign">+</div>');

if ($(window).width() <= 900) {
	var smallWindow = true;	
	$('.ul-nav-submenu').siblings('.a-li-menu').addClass('a-li-menu-sub');
} else {
	var smallWindow = false;	
	$('.div-a-sign').hide();
}

$(window).on('resize', function(event){
	if ($(window).width() <= 900 && smallWindow === false) {
		$('.ul-nav-submenu').siblings('.a-li-menu').addClass('a-li-menu-sub');
		$('.div-a-sign').show();
		$('.div-ul-menu').hide();
		smallWindow = true;
	} else if ($(window).width() > 900 && smallWindow === true) {
		$('.a-li-menu-sub').removeClass('a-li-menu-sub');	
		$('.div-a-sign').hide();	
		$('.div-ul-menu').show();
		$('.ul-nav-submenu').hide();
		smallWindow = false;
	}
});

$('.div-btn').click(function() {
	if ($('.div-ul-menu').is(':hidden')) {
		$('.div-ul-menu').slideDown(200);
	} else {
		$('.div-ul-menu').slideUp(200);
		$('.a-li-menu').siblings('.ul-nav-submenu').slideUp(200);
		$('.div-a-sign').text('+');
	}
});

$('.div-a-sign').click(function(event){
	if ($(this).siblings('.ul-nav-submenu').is(':hidden')) {
		$(this).siblings('.ul-nav-submenu').slideDown(200);
		$(this).text('-');
	} else {
		$(this).siblings('.ul-nav-submenu').slideUp(200);
		$(this).text('+');
	}
});


	









