$(document).ready(function () {

	// 플로팅메뉴
	$('.com_mod_anchor a').off("click").on('click', function () {
		$(this).addClass('active');
		$(this).parent().siblings().children().removeClass('active');
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


	var sections = $('.target'),
		nav = $('.com_mod_anchor'),
		nav_height = nav.innerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});


	nav.find('a').on('click', function () {
		var $el = $(this),
			id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 500);

	});



	$(window).on('scroll', function () {
		//스크롤의 위치가 상단에서 190보다 크면
		if ($(window).scrollTop() > 244) {
			$('.com_mod_anchor').addClass("fixed");
		} else {
			$('.com_mod_anchor').removeClass("fixed");
		}

		// 도움말 버튼
		$('.qm_btn a').click(function () {
			$(this).parent().find('span').toggle()
		})

		// 외부영역 클릭 시 팝업 닫기
		$(document).mouseup(function (e) {
			var qmbtn = $(".qm_btn");
			if (qmbtn.has(e.target).length === 0) {
				qmbtn.find('span').hide();
			}
		});
	});

	$(".imgFill").imgLiquid();


	function winResize() {
		ovf.style.top = slider.offsetHeight + "px";
	}

	function winScroll() {
		var op = 1 - (window.pageYOffset / slider.offsetHeight);
		slider.style.opacity = op;
	}







});
