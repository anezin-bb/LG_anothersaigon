/* 팝업 */
function popupOpen(targetId) {
    $('html').css({'overflow':'hidden'});
    $('html').css({'position':'fixed'});
    $('#'+targetId).fadeIn(100);
	$('#'+targetId).css("display", "flex");
	return false;
};
function popClose() {
	$('.popup_wrap').css("display", "none");
    $('html').css({'overflow':'unset'});
	$('html').css({'overflow-y':'scroll'});
    $('html').css({'position':'relative'}); 
	return false;
};
/* 터치시 active 클래스가 나타나는 js */
$(document).ready(function() {
	$('.active_toggle').on('touchstart', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
	$('.language').on('touchstart', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
});