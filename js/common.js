$(document).ready(function() {

//popup
$('.js-popup').click(function() {
	$('.popup_notices, .popup_mess').css('left', '-5000px');
	$(this).next().css('left', '50%');
});
$(document).click(function() {
	$('.popup_notices, .popup_mess').css('left', '-5000px');
});
$('.js-popup, .popup_notices, .popup_mess').click(function(event) {
	event.stopPropagation();
});

//select
if ($('.select').length > 0) {
	//$('select').styler();
	$('.select').selectBox();
};

//tabs
$('.js-tab li').click(function() {
  $(this).parent().children().removeClass('is-active');
  $(this).parent().parent().find('.js-tab-cnt').hide();
  $(this).addClass('is-active');
  var val = $(this).attr('data-tab');
  $('#' + val).fadeIn();
});

//fancybox
if ($('.js-fb').length > 0) {
	$('.js-fb').fancybox({
		padding: 0
	});
};

//scroollbar
if ($('.js-scrollbar').length > 0) {
	$('.js-scrollbar').jScrollPane({
		showArrows : true,
		mouseWheelSpeed: 20
	});
};


});