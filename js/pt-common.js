$(document).ready(function () {
	var gnbOffset = $('.com_mod_anchor').offset();
	$(window).scroll(function () {
		if ($(document).scrollTop() > gnbOffset.top) {
			$('.com_mod_header, .com_mod_anchor').addClass('fixed');
			var headerHeight = $('.com_mod_header').height();
			//console.log(headerHeight);
			$('.com_mod_anchor').css('top', headerHeight + 48);
		} else {
			$('.com_mod_header, .com_mod_anchor').removeClass('fixed');
			$('.com_mod_anchor').css('top', 0);
		}
	});


	// 탭 컨텐츠 숨기기
	$(".tab_content").hide();

	// 첫번째 탭콘텐츠 보이기
	$(".tab_container").each(function () {
		$(this).children().children().children("li:first").addClass("active"); //Activate first tab
		$(this).children(".tab_content").first().show();
	});

	//탭메뉴 클릭 이벤트
	$(".tabs li a").click(function () {
		//탭 안에 슬라이드 있을 때
		var tab_id = $(this).attr('data-tab');
		$(this).parent().siblings().removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().parent().parent().parent().find(".tab_content").hide();
		//        var activeTab = $(this).attr("rel");
		//        $("#" + activeTab).fadeIn();
		$("#" + tab_id).fadeIn();
	});

	// 도움말 버튼
	$('.qm_txt a').click(function () {
		$(this).parent().find('span').toggle()
	})

	// 외부영역 클릭 시 팝업 닫기
	$(document).mouseup(function (e) {
		var qmbtn = $(".qm_btn");
		if (qmbtn.has(e.target).length === 0) {
			qmbtn.find('span').hide();
		}
	});

	$(".imgFill").imgLiquid();



});

window.addEventListener('DOMContentLoaded', function() {
	






});