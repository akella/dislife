$(document).ready(function() {

//tabs
$('.js-tab li').click(function() {
  $(this).parent().children().removeClass('is-active');
  $(this).parent().parent().find('.js-tab-cnt').hide();
  $(this).addClass('is-active');
  var val = $(this).attr('data-tab');
  $('#' + val).fadeIn();
});

//select
if ($('select').length > 0) {
	$('select').styler();
};

//fancybox
if ($('.js-fb').length > 0) {
	$('.js-fb').fancybox();
};

//popup
$('.js-enter').click(function() {
	$('.js-popup-enter, .overlay').fadeIn();
	return false;
});
$('.js-reg').click(function() {
	$('.js-popup-reg, .overlay').fadeIn();
	return false;
});
$('.overlay').click(function() {
	$('.js-popup-reg, .js-popup-enter, .overlay').fadeOut();
});

});