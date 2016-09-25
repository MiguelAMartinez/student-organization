

$('.nav-menu-item').click(function() {
	window.location = $(this).find("a").attr("href"); 
	return false;
});

$(window).load(function(){
	$('.nav-ul-submenu').each(function() {
	  $(this).css('top', ($(this).position().top - 23) + 'px');
	})
});

	









