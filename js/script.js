/* 팝업 */
function popupOpen(targetId) {
    $('body').css({'overflow':'hidden'});
    //$('body').css({'position':'fixed'});
    $('#'+targetId).css("display", "flex");
    requestAnimationFrame(() => {
        $('#'+targetId).find('.blur_bg').addClass('active');
    });
    return false;
};
/* 팝업 닫기 */
function popClose() {
	$('.popup_wrap').css("display", "none");
    $('body').css({'overflow':'unset'});
	$('body').css({'overflow-y':'scroll'});
    //$('body').css({'position':'relative'}); 
	return false;
};
/* 터치시 active 클래스가 나타나는 js */
$(document).ready(function() {
    $('.active_toggle').on('click touchstart', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    // 언어 선택 드롭다운 토글
    $(".language .current").on('click touchstart', function(e){
        e.preventDefault(); // 기본 이벤트 방지
        $(".dropdown_cont").toggle(); // 클릭 혹은 터치 시 토글
        $(this).toggleClass("active");
    });
    $(document).on('click touchstart', function(e) {
        if (!$(e.target).closest('.language .current, .dropdown_cont').length) {
            if ($(".language .current").hasClass("active") || $(".dropdown_cont").is(":visible")) {
                $(".language .current").removeClass("active");
                $(".dropdown_cont").hide();
            }
        }
    });
});
/* 모바일 브라우저 세로 높이값 측정 */
function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
$(document).ready(function() {
	setScreenSize();
    window.addEventListener('resize', setScreenSize);
});
