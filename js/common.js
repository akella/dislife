$(document).ready(function() {

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
	$('.js-fb').fancybox();
};


});