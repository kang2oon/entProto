$(document).ready(function(){
    var gnbOffset = $('.com_mod_anchor').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > gnbOffset.top) {
            $('.com_mod_header, .com_mod_anchor').addClass('fixed');
            var headerHeight = $('.com_mod_header').height();
            //console.log(headerHeight);
            $('.com_mod_anchor').css('top', headerHeight+48);
        } else {
            $('.com_mod_header, .com_mod_anchor').removeClass('fixed');
            $('.com_mod_anchor').css('top', 0);
        }
    });


	// 탭 컨텐츠 숨기기
			$(".tab_content").hide();

			// 첫번째 탭콘텐츠 보이기
			$(".tab_container").each(function() {
				$(this).children().children().children("li:first").addClass("active"); //Activate first tab
				$(this).children(".tab_content").first().show();
			});

			//탭메뉴 클릭 이벤트
			$(".tabs li a").click(function() {
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

	
	$(window).load(function(){
	//mag_mod_biz.sty03 사업분야 슬라이드
			var magBiz03 = $('.mag_mod_biz.sty03 .bizDiv')
			magBiz03.addClass('swiper');
			magBiz03.wrapInner('<div class="swiper-wrapper"></div>');
			var item = magBiz03.children().children().wrap('<div class="swiper-slide"></div>')
			magBiz03.append('<div class="swiper-pagination"></div>');
			magBiz03.append('<div class="swiper-button-prev"></div>');
			magBiz03.append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(magBiz03, {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_biz.sty03 .swiper-button-next",
					prevEl: ".mag_mod_biz.sty03 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					},
					1261: {
						slidesPerView: 3,
					}
				}
			});

			// 연혁 탭
			var tabCont = $('.bro_mod_history.sty03 .history').children();
			tabCont.each(function() {
				var year = $(this).children('span').html();
				$(this).addClass(year);
			});
			 var tabArray = Array();
			tabCont.each(function(){
				tabArray.push($(this).attr("class"));
			})
			var arrayList = $.map(tabArray, function(value){
				return "<a href='javascript:vold'" + "data-tab=" + value + ">" + value + "</a>";
			})
			$('.tabs').html(arrayList);
			$('.bro_mod_history.sty03 .tabs a:first').addClass('on')
			$('.bro_mod_history.sty03 .history > div').hide();
			$('.bro_mod_history.sty03 .history > div:first').show();
			$('.bro_mod_history.sty03 .tabs a').click(function() {
				var item = $(this).attr('data-tab');
				$(this).siblings().removeClass('on');
				$(this).addClass('on');
				$('.bro_mod_history.sty03 .history > div').hide();
				$('.bro_mod_history.sty03 .history > .' + item).show();

			});

			//.bro_mod_history.sty05 연혁 슬라이드
			var historySlider = $('.bro_mod_history.sty05 .history')
			historySlider.addClass('swiper');
			historySlider.wrapInner('<div class="swiper-wrapper"></div>');
			historySlider.children().children().addClass('swiper-slide')
			historySlider.append('<div class="swiper-button-prev"></div>');
			historySlider.append('<div class="swiper-button-next"></div>');

			var cultureSlider = new Swiper(".bro_mod_history.sty05 .history", {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".bro_mod_history.sty05 .swiper-button-next",
					prevEl: ".bro_mod_history.sty05 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					},
					1261: {
						slidesPerView: 3,
					}
				}
			});

			//mag_mod_biz.sty02 사업분야 슬라이드
			var magBiz02 = $('.mag_mod_biz.sty02 .bizDiv')
			magBiz02.addClass('swiper');
			magBiz02.wrapInner('<div class="swiper-wrapper"></div>');
			magBiz02.children().children().wrap('<div class="swiper-slide"></div>')
			magBiz02.append('<div class="swiper-pagination"></div>');
			magBiz02.append('<div class="swiper-button-prev"></div>');
			magBiz02.append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(magBiz02, {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_biz.sty02 .swiper-button-next",
					prevEl: ".mag_mod_biz.sty02 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					},
					1261: {
						slidesPerView: 3,
					}
				}
			});

			//mag_mod_biz.sty04 사업분야 슬라이드
			var magBiz04 = $('.mag_mod_biz.sty04 .bizDiv')
			magBiz04.addClass('swiper');
			magBiz04.wrapInner('<div class="swiper-wrapper"></div>');
			magBiz04.children().children().wrap('<div class="swiper-slide"></div>')
			magBiz04.append('<div class="swiper-pagination"></div>');
			magBiz04.parent().find('.txt').append('<div class="swiper-button-prev"></div>');
			magBiz04.parent().find('.txt').append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(magBiz04, {
				slidesPerView: 2,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_biz.sty04 .swiper-button-next",
					prevEl: ".mag_mod_biz.sty04 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 2
					},
					1261: {
						slidesPerView: 2,
					}
				}
			});


			//mag_mod_biz.sty05 사업분야 슬라이드

			var magBiz05 = $('.mag_mod_biz.sty05 .bizDiv')
			magBiz05.addClass('swiper');
			magBiz05.wrapInner('<div class="swiper-wrapper"></div>');
			magBiz05.children().children().wrap('<div class="swiper-slide"></div>')
			magBiz05.append('<div class="swiper-pagination"></div>');
			magBiz05.append('<div class="swiper-button-prev"></div>');
			magBiz05.append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(magBiz05, {
				slidesPerView: 1,
				navigation: {
					nextEl: ".mag_mod_biz.sty05 .swiper-button-next",
					prevEl: ".mag_mod_biz.sty05 .swiper-button-prev"
				}
			});
			$('.mag_mod_biz.sty05 .bizDiv  .swiper-slide > div').each(function() {
				$(this).find('h4, p').wrapAll('<div class="text_area"></div>')
			});

			//mag_mod_biz.sty02 사업분야 슬라이드
			var broBiz02 = $('.bro_mod_biz.sty02 .bizDiv')
			broBiz02.addClass('swiper');
			broBiz02.wrapInner('<div class="swiper-wrapper"></div>');
			broBiz02.children().children().wrap('<div class="swiper-slide"></div>')
			broBiz02.append('<div class="swiper-pagination"></div>');
			broBiz02.append('<div class="swiper-button-prev"></div>');
			broBiz02.append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(broBiz02, {
				slidesPerView: 4,
				spaceBetween: 30,
				navigation: {
					nextEl: ".bro_mod_biz.sty02 .swiper-button-next",
					prevEl: ".bro_mod_biz.sty02 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1261: {
						slidesPerView: 4,
					}
				}
			});


			// .bro_mod_biz.sty03 주요사업안내 탭
			var tabCont = $('.bro_mod_biz.sty03 .bizDiv').children();
			tabCont.each(function() {
				var title = $(this).children('h4').html();
				$(this).addClass(title);
			});
			$('.bro_mod_biz.sty03 .bizDiv > div ').each(function() {
				$(this).find('h4, p').wrapAll('<div class="text_area"></div>')
			})
			var tabArray = Array();
			tabCont.each(function() {
				tabArray.push($(this).attr("class"));
			})
			var arrayList = $.map(tabArray, function(value) {
				return "<li><a href='javascript:vold'" + "data-tab=" + value + ">" + value + "</a></li>";
			})
			$('.bro_mod_biz.sty03 .tabs').html(arrayList);

			$('.bro_mod_biz.sty03 .tabs li:first a').addClass('on')
			$('.bro_mod_biz.sty03 .bizDiv > div').hide();
			$('.bro_mod_biz.sty03 .bizDiv > div:first').show();
			$('.bro_mod_biz.sty03 .tabs a').click(function() {
				var item = $(this).attr('data-tab');
				$(this).parent().siblings().children().removeClass('on');
				$(this).addClass('on');
				$('.bro_mod_biz.sty03 .bizDiv > div').hide();
				$('.bro_mod_biz.sty03 .bizDiv > .' + item).show();

			});


			// .bro_mod_biz.sty04 주요사업안내 탭
			var tabCont = $('.bro_mod_biz.sty04 .bizDiv').children();
			tabCont.each(function() {
				var title = $(this).children('h4').html();
				$(this).addClass(title);
			});
			var tabArray = Array();
			tabCont.each(function() {
				tabArray.push($(this).attr("class"));
			})
			var arrayList = $.map(tabArray, function(value) {
				return "<li><a href='javascript:vold'" + "data-tab=" + value + ">" + value + "</a></li>";
			})
			$('.bro_mod_biz.sty04 .tabs').html(arrayList);

			$('.bro_mod_biz.sty04 .tabs a:first').addClass('on')
			$('.bro_mod_biz.sty04 .bizDiv > div').hide();
			$('.bro_mod_biz.sty04 .bizDiv > div:first').show();
			$('.bro_mod_biz.sty04 .tabs a').click(function() {
				var item = $(this).attr('data-tab');
				$(this).parent().siblings().children().removeClass('on');
				$(this).addClass('on');
				$('.bro_mod_biz.sty04 .bizDiv > div').hide();
				$('.bro_mod_biz.sty04 .bizDiv > .' + item).show();

			});

			//bro_mod_biz.sty05 사업분야 슬라이드
			var broBiz05 = $('.bro_mod_biz.sty05 .bizDiv')
			broBiz05.addClass('swiper');
			broBiz05.wrapInner('<div class="swiper-wrapper"></div>');
			broBiz05.children().children().wrap('<div class="swiper-slide"></div>')
			broBiz05.append('<div class="swiper-pagination"></div>');
			broBiz05.append('<div class="swiper-button-prev"></div>');
			broBiz05.append('<div class="swiper-button-next"></div>');
			var cultureSlider = new Swiper(broBiz05, {
				slidesPerView: 4,
				spaceBetween: 5,
				navigation: {
					nextEl: ".bro_mod_biz.sty05 .swiper-button-next",
					prevEl: ".bro_mod_biz.sty05 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1261: {
						slidesPerView: 4,
					}
				}
			});

			//bro_mod_biz.sty06 사업분야
			var bizDiv = $('.bro_mod_biz.sty06 .bizDiv > div');
			var bizTit = $('.bro_mod_biz.sty06 .bizDiv > div h4');
			bizDiv.first().addClass('active')
			bizTit.attr('tabindex', '0')
			$(bizDiv).each(function() {
				$(this).find('h4, p').wrapAll('<div class="text_area"></div>')
			});
			$(bizTit).click(function() {
				$(this).parent().parent().addClass('active');
				$(this).parent().parent().siblings().removeClass('active')
			})

			//bro_mod_biz.sty07 사업분야 슬라이드
			var broBiz07 = $('.bro_mod_biz.sty07 .bizDiv')
			broBiz07.addClass('swiper');
			broBiz07.wrapInner('<div class="swiper-wrapper"></div>');
			broBiz07.children().children().wrap('<div class="swiper-slide"></div>')
			broBiz07.append('<div class="swiper-pagination"></div>');
			broBiz07.append('<div class="swiper-button-prev"></div>');
			broBiz07.append('<div class="swiper-button-next"></div>');
			$('.bro_mod_biz.sty07 .bizDiv .swiper-slide > div ').each(function() {
				$(this).find('h4, p').wrapAll('<div class="text_area"></div>')
			});
			var cultureSlider = new Swiper(broBiz07, {
				slidesPerView: 4,
				spaceBetween: 20,
				navigation: {
					nextEl: ".bro_mod_biz.sty07 .swiper-button-next",
					prevEl: ".bro_mod_biz.sty07 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1
					},
					640: {
						slidesPerView: 2
					},
					1024: {
						slidesPerView: 3
					},
					1261: {
						slidesPerView: 4,
					}
				}
			});
		
				// mag_mod.interview.sty04
		$(".mag_mod_interview.sty04 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty04 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			}
		});
		
	});
	
