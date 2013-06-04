$(document).ready(function() {

//tabs
$('.js-tab li').click(function() {
  $(this).parent().children().removeClass('is-active');
  $(this).parent().parent().find('.js-tab-cnt').hide();
  $(this).addClass('is-active');
  var val = $(this).attr('data-tab');
  $('#' + val).fadeIn();
});


});