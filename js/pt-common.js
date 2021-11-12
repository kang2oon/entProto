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
		$('.qm_btn em').click(function () {
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
	
		//.mag_mod_culture.sty04 조직문화
			var cultureSlider = new Swiper(".mag_mod_culture.sty04 .dvCulture", {
				slidesPerView: 4,
				slidesPerColumn: 2,
				slidesPerGroup: 8,
				spaceBetween: 10,
				navigation: {
					nextEl: ".mag_mod_culture.sty04  .swiper-button-next",
					prevEl: ".mag_mod_culture.sty04  .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 1,
						slidesPerGroup: 3,
					},
					1261: {
						slidesPerView: 4,
						slidesPerColumn: 2,
						slidesPerGroup: 8,
					}
				}
			});


			// .mag_mod_culture.sty03
			//조직문화  masony 레이아웃 
			var divs = $(".mag_mod_culture.sty03 .dvCulture .swiper-wrapper > div");
			if ($(window).width() > 1260) {
				for (var i = 0; i < divs.length; i += 8) {
					divs.slice(i, i + 8).wrapAll("<div class='masony swiper-slide'></div>");
					$('.dvCulture .swiper-wrapper > div').each(function() {
						$(this).children().removeClass('swiper-slide');
					});
					$('.masony  > div').addClass('item');
				}
			} else {
				$('.dvCulture .swiper-wrapper').addClass("masony")
				$('.dvCulture .swiper-wrapper > div').each(function() {
					$(this).addClass('item');
				});
			}

			var ww = $(window).width();
			var dvCultureSlider = undefined;

			function initSwiper() {
				if (ww > 1260 && dvCultureSlider == undefined) {
					dvCultureSlider = new Swiper(".mag_mod_culture.sty03 .dvCulture", {
						slidesPerView: 1,
						navigation: {
							nextEl: ".mag_mod_culture.sty03 .swiper-button-next",
							prevEl: ".mag_mod_culture.sty03 .swiper-button-prev"
						}
					});
				} else if (ww >= 1260 && dvCultureSlider != undefined) {
					mySwiper.destroy();
					dvCultureSlider = undefined;
				}
			}

			initSwiper();

			$(window).on('resize', function() {
				ww = $(window).width();
				initSwiper();
			});


			// .mag_mod_culture.sty05 조직문화
			var cultureSlider = new Swiper(".mag_mod_culture.sty05 .dvCulture", {
				slidesPerView: 4,
				slidesPerColumn: 2,
				slidesPerGroup: 8,
				spaceBetween: 20,
				navigation: {
					nextEl: ".mag_mod_culture.sty05 .swiper-button-next",
					prevEl: ".mag_mod_culture.sty05 .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 1,
						slidesPerGroup: 3,
					},
					1261: {
						slidesPerView: 4,
						slidesPerColumn: 2,
						slidesPerGroup: 8,
					}
				}
			});

			// .mag_mod_welfare.sty03 조직문화
			var cultureSlider = new Swiper(".mag_mod_welfare.sty03 .dvCulture", {
				slidesPerView: 2,
				slidesPerColumn: 3,
				slidesPerGroup: 6,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_welfare.sty03 .culture_wrap .swiper-button-next",
					prevEl: ".mag_mod_welfare.sty03 .culture_wrap .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 2,
						slidesPerColumn: 3,
						slidesPerGroup: 6,
					}
				}
			});


			// .bro_mod_culture.sty02 복리후생 입력형
			var welfareSlider = new Swiper(".bro_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty02 복리후생 선택형
			var welfareSlider = new Swiper(".bro_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty02 조직문화
			var cultureSlider = new Swiper(".bro_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty02 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty02 .culture_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty03 복리후생 입력형
			var welfareSlider = new Swiper(".bro_mod_culture.sty03 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty03 복리후생 선택형
			var welfareSlider = new Swiper(".bro_mod_culture.sty03 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty03 조직문화
			var cultureSlider = new Swiper(".bro_mod_culture.sty03 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty03 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty03 .culture_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty04 복리후생 입력형
			var welfareSlider = new Swiper(".bro_mod_culture.sty04 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty04 복리후생 선택형
			var welfareSlider = new Swiper(".bro_mod_culture.sty04 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty04 조직문화
			var cultureSlider = new Swiper(".bro_mod_culture.sty04 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty04 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty04 .culture_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty04 조직문화
			$(".bro_mod_culture.sty05 .dvCulture").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty05 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.dvCulture .swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty05 복리후생 입력형
			$(".bro_mod_culture.sty05 .dvWelfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty05 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty05 복리후생 선택형
			$(".bro_mod_culture.sty05 .welfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty05 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty06 조직문화
			$(".bro_mod_culture.sty06 .dvCulture").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty06 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty06 복리후생 입력형
			$(".bro_mod_culture.sty06 .dvWelfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty06 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty06 복리후생 선택형
			$(".bro_mod_culture.sty06 .welfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".bro_mod_culture.sty06 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});

			// .bro_mod_culture.sty07 조직문화
			var cultureSlider = new Swiper(".bro_mod_culture.sty07 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty07 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty07 .culture_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty07 복리후생 입력형
			var cultureSlider = new Swiper(".bro_mod_culture.sty07 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-prev"
				}
			});

			// .bro_mod_culture.sty07 복리후생 선택형
			var cultureSlider = new Swiper(".bro_mod_culture.sty07 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-prev"
				}
			});

			// .mag_mod_culture.sty02 조직문화
			var cultureSlider = new Swiper(".mag_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				navigation: {
					nextEl: ".culture_wrap .swiper-button-next",
					prevEl: ".culture_wrap .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .mag_mod_culture.sty02 복리후생 선택형
			var welfareSlider = new Swiper(".mag_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .mag_mod_culture.sty02 복리후생 입력형
			var welfareSlider = new Swiper(".mag_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});


			// .rec_mod_welfare.sty01 복리후생 선택형
			var cultureSlider = new Swiper(".rec_mod_welfare.sty01 .welfare", {
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 6,
				spaceBetween: 10,
				navigation: {
					nextEl: ".rec_mod_welfare.sty01  .swiper-button-next",
					prevEl: ".rec_mod_welfare.sty01  .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					768: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1261: {
						slidesPerView: 3,
						slidesPerColumn: 2,
						slidesPerGroup: 6,
					}
				}
			});

			// .rec_mod_welfare.sty03 복리후생 선택형
			var cultureSlider = new Swiper(".rec_mod_welfare.sty03 .welfare", {
				slidesPerView: 3,
				slidesPerColumn: 2,
				slidesPerGroup: 6,
				spaceBetween: 10,
				navigation: {
					nextEl: ".rec_mod_welfare.sty03  .swiper-button-next",
					prevEl: ".rec_mod_welfare.sty03  .swiper-button-prev"
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					768: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1261: {
						slidesPerView: 3,
						slidesPerColumn: 2,
						slidesPerGroup: 6,
					}
				}
			});

			// .rec_mod_welfare.sty04 복리후생 선택형
			var cultureSlider = new Swiper(".rec_mod_welfare.sty04 .welfare", {
				slidesPerView: 3,
				scrollbar: {
					el: ".swiper-scrollbar",
					hide: false,
				}
			});




			// .inf_mod_culture.sty02 탭
			$('.conts > div').hide();
			$('.conts > div').first().show();
			$('.tab > a').click(function() {
				var item = $(this).attr('data-tab');
				$('.tab > a').removeClass('on');
				$(this).addClass('on');
				$('.conts > div').hide();
				$('.conts > .' + item).show();
			});

			// .inf_mod_culture.sty02 복리후생 선택형
			$(".inf_mod_culture.sty02 .welfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .inf_mod_culture.sty02 조직문화
			$(".inf_mod_culture.sty02 .dvCulture").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .inf_mod_culture.sty02 복리후생 입력형
			$(".inf_mod_culture.sty02 .dvWelfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});


			// .inf_mod_culture.sty01 조직문화
			$(".inf_mod_culture.sty01 .dvCulture").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty01 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .inf_mod_culture.sty01 복리후생 입력형
			$(".inf_mod_culture.sty01 .dvWelfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty01 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			// .inf_mod_culture.sty01 복리후생 선택형
			$(".inf_mod_culture.sty01 .welfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty01 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				},
				breakpoints: {
					280: {
						slidesPerView: 1,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					640: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 1,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 1,
						slidesPerGroup: 2,
					},
					1261: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					}
				}
			});

			//.inf_mod_welfare.sty02 복리후생
			var welfareSlider = new Swiper(".inf_mod_welfare.sty02 .welfare", {
				slidesPerView: 1,
				// grid: {
				//     rows: 2
				// },
				slidesPerColumn: 3,
				spaceBetween: 30,
				//loop: true,
				navigation: {
					nextEl: ".welfare_wrap .swiper-button-next",
					prevEl: ".welfare_wrap .swiper-button-prev"
				},
				breakpoints: {
					780: {
						slidesPerView: 2,
					}
				}
			});

			// .sns_mod_culture.sty02 복리후생 입력형
			var welfareSlider = new Swiper(".sns_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			// .sns_mod_culture.sty02 복리후생 선택형
			var welfareSlider = new Swiper(".sns_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});


			// .sns_mod_culture.sty02 조직문화
			var cultureSlider = new Swiper(".sns_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: ".sns_mod_culture.sty02 .culture_wrap .swiper-button-next",
					prevEl: ".sns_mod_culture.sty02 .culture_wrap .swiper-button-prev"
				}
			});

	
	
});
