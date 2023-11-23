/* datepicker */
$(function () {
	$('.input_date').datepicker({
		dateFormat: 'yy-mm-dd',
		dayNames: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
		dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
		showOtherMonths: true,
		buttonImageOnly: true
	});
});

/* 순서변경 sortable */
$(function(){
	$( ".adm_sortable" ).sortable({
		items: "li:not(.adm_list_title)",
		placeholder: "ui-state-highlight",
		cancel: ".ui-state-disabled, input, textarea, select, button"
	});
	$( ".adm_sortable" ).disableSelection();
});

/* 파일 업로드(수정) */
$(function() {
    $('input[type="file"]').on('change', function() {
        var file = this.files[0];
        var fileType = file.type;
        var match = ['image/jpeg', 'image/png'];

        if (!((fileType === match[0]) || (fileType === match[1]))) {
            alert('JPG 또는 PNG 파일만 업로드 가능합니다.');
            $(this).val(''); // 파일 선택 초기화
            $(this).parent().find('.upload').val('');
            return;
        }

        var filePath = $(this).val();
        var fileName = filePath.split('\\').pop().split('/').pop();
        $(this).parent().find('.upload').val(fileName);
    });
});

/* 눈모양 노출 script */
$(function(){
	$('.pw_eye').on('click',function(){
		$('.input_pw').toggleClass('active');
		if($('.input_pw').hasClass('active')){
			$(this).attr('class',"pw_eye pw_eye_on").prev('input').attr('type',"text");
		}else {
			$(this).attr('class',"pw_eye").prev('input').attr('type','password');
			$('.input_pw').removeClass('active');
		}
	});
});

/* btn_date가 있는 날짜 선택시 btn_date 버튼이 활성화 */
$(document).ready(function() {
    // 'input_date' 클래스를 가진 모든 입력 필드에 대한 이벤트 리스너를 추가합니다.
    $('.input_date').on('change', function() {
        // 각 'date_sch_wrap' 마다 검사를 수행합니다.
        $('.date_sch_wrap').each(function() {
            // 현재 'date_sch_wrap' 내의 시작 및 종료 날짜 입력 필드를 찾습니다.
            var $startDate = $(this).find('.input_date').first();
            var $endDate = $(this).find('.input_date').last();

            // 검색 버튼을 찾습니다.
            var $searchButton = $(this).find('.btn_date');

            // 시작 날짜와 종료 날짜가 모두 유효한지 확인합니다.
            if ($startDate.val() && $endDate.val()) {
                // 두 날짜가 모두 입력되었다면 버튼을 활성화합니다.
                $searchButton.prop('disabled', false);
            } else {
                // 그렇지 않다면 버튼을 비활성화합니다.
                $searchButton.prop('disabled', true);
            }
        });
    });
});