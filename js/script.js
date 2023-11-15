/* 팝업 */
function popupOpen(targetId) {
    $('html').css({'overflow':'hidden'});
    $('html').css({'position':'fixed'});
    $('#'+targetId).css("display", "flex");
    requestAnimationFrame(() => {
        $('#'+targetId).find('.blur_bg').addClass('active');
    });
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
    $('.active_toggle').on('click touchstart', function(e) {
        e.preventDefault();
        $(this).addClass('active');
        setTimeout(function() {
            $('.active_toggle').removeClass('active');
        }, 300);
    });
    
    $('.language li').on('click touchstart', function(e) {
        e.preventDefault();  // 기본 동작 방지
        $('.language li').toggleClass('active');
    });
});
/* */
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
$(document).ready(function() {
	setScreenSize();
    window.addEventListener('resize', setScreenSize);
});
