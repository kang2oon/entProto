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

	$(".imgFill").imgLiquid();
<<<<<<< Updated upstream
=======
	
	
			// 조직문화&복리후생 masony 레이아웃 
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
					300: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 4,
						slidesPerColumn: 2,
						slidesPerGroup: 8,
					}
				}
			});

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
					300: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 4,
						slidesPerColumn: 2,
						slidesPerGroup: 8,
					}
				}
			});

			var welfareSlider = new Swiper(".bro_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".bro_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty02 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty02 .culture_wrap .swiper-button-prev"
				}
			});

			var welfareSlider = new Swiper(".bro_mod_culture.sty03 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty03 .welfare_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".bro_mod_culture.sty03 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty03 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty03 .culture_wrap .swiper-button-prev"
				}
			});


			var welfareSlider = new Swiper(".bro_mod_culture.sty04 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty04 .welfare_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".bro_mod_culture.sty04 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty04 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty04 .culture_wrap .swiper-button-prev"
				}
			});

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

			var cultureSlider = new Swiper(".bro_mod_culture.sty07 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty07 .culture_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty07 .culture_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".bro_mod_culture.sty07 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				navigation: {
					nextEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-next",
					prevEl: ".bro_mod_culture.sty07 .welfare_wrap .swiper-button-prev"
				}
			});

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
					300: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 2,
						slidesPerGroup: 6,
					}
				}
			});

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
					300: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 3,
						slidesPerColumn: 2,
						slidesPerGroup: 6,
					}
				}
			});

			var cultureSlider = new Swiper(".rec_mod_welfare.sty04 .welfare", {
				slidesPerView: 3,
				scrollbar: {
					el: ".swiper-scrollbar",
					hide: false,
				}
			});

			var welfareSlider = new Swiper(".mag_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".mag_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".mag_mod_welfare.sty03 .dvCulture", {
				slidesPerView: 2,
				slidesPerColumn: 3,
				slidesPerGroup: 6,
				spaceBetween: 30,
				navigation: {
					nextEl: ".culture_wrap .swiper-button-next",
					prevEl: ".culture_wrap .swiper-button-prev"
				},
				breakpoints: {
					300: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					640: {
						slidesPerView: 1,
						slidesPerColumn: 3,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 2,
						slidesPerColumn: 3,
						slidesPerGroup: 6,
					}
				}
			});

			var cultureSlider = new Swiper(".mag_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				navigation: {
					nextEl: ".culture_wrap .swiper-button-next",
					prevEl: ".culture_wrap .swiper-button-prev"
				}
			});

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
				}
			});

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
				}
			});

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
				}
			});
			
			var welfareSlider = new Swiper(".sns_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-next",
					prevEl: ".sns_mod_culture.sty02 .welfare_wrap .swiper-button-prev"
				}
			});

			var cultureSlider = new Swiper(".sns_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 1,
				spaceBetween: 30,
				navigation: {
					nextEl: ".sns_mod_culture.sty02 .culture_wrap .swiper-button-next",
					prevEl: ".sns_mod_culture.sty02 .culture_wrap .swiper-button-prev"
				}
			});
			
			$(".inf_mod_culture.sty02 .dvCulture").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});
			
			$(".inf_mod_culture.sty02 .dvWelfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .dvWelfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});
			
			$(".inf_mod_culture.sty02 .welfare").append('<div class="swiper-pagination"></div>');
			var cultureSlider = new Swiper(".inf_mod_culture.sty02 .welfare", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 10,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
					observer: true,
					observeParents: true,
				}
			});
			
			// 탭
			$('.conts > div').hide();
			$('.conts > div').first().show();
			$('.tab > a').click(function() {
				var item = $(this).attr('data-tab');
				$('.tab > a').removeClass('on');
				$(this).addClass('on');
				$('.conts > div').hide();
				$('.conts > .' + item).show();
			});

	
	
});
>>>>>>> Stashed changes
