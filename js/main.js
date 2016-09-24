


$('.nav-menu-item').click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$('.nav-ul-submenu').each(function() {
  $(this).css('top', (parseFloat($(this).css('top')) - 20) + 'px');
})







