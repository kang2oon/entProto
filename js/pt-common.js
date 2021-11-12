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

		$(".mag_mod_interview.sty04 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty04 .ivMng", {
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

		$(".mag_mod_interview.sty04 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty04 .ivEmp", {
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

		// mag_mod.interview.sty03
		$(".mag_mod_interview.sty03 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivCeo", {
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

		$(".mag_mod_interview.sty03 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivMng", {
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

		$(".mag_mod_interview.sty03 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivEmp", {
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


		// mag_mod.interview.sty05
		$(".mag_mod_interview.sty05 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_ceo  .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_ceo .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty05 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_mng .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_mng .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty05 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_emp .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_emp .swiper-button-prev"
			}
		});

		// .mag_mod_interview.sty02 
		$('.mag_mod_interview.sty02 .cnt-container').addClass('tab_container')
		$('.mag_mod_interview.sty02 .cnt-container').prepend("<ul class='tabs'><li class='active'><a href='javascript:vold' data-tab='tab1'>CEO</a></li><li><a href='javascript:vold' data-tab='tab2'>인사담당자</a></li><li><a href='javascript:vold' data-tab='tab3'>신입사원</a></li></ul>");
		$('.mag_mod_interview.sty02  .iv_wrap').addClass('tab_content');
		$('.mag_mod_interview.sty02 .qa_ceo').attr('id', 'tab1');
		$('.mag_mod_interview.sty02 .qa_mng').attr('id', 'tab2');
		$('.mag_mod_interview.sty02 .qa_emp').attr('id', 'tab3');

		$(".mag_mod_interview.sty02 .ivCeo").append('<div class="swiper-pagination"></div>');
		$(".mag_mod_interview.sty02 .ivMng").append('<div class="swiper-pagination"></div>');
		$(".mag_mod_interview.sty02 .ivEmp").append('<div class="swiper-pagination"></div>');
			// 탭 컨텐츠 숨기기
		$(".mag_mod_interview.sty02 .tab_content").hide();

		// 첫번째 탭콘텐츠 보이기
		$(".mag_mod_interview.sty02 .tab_container").each(function() {
			$(this).children().children().children("li:first").addClass("active"); //Activate first tab
			$(this).children(".tab_content").first().show();
		});

		//탭메뉴 클릭 이벤트
		$(".mag_mod_interview.sty02 .tabs li a").click(function() {
			//탭 안에 슬라이드 있을 때
			var tab_id = $(this).attr('data-tab');
			$(this).parent().siblings().removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().parent().find(".tab_content").hide();
			//        var activeTab = $(this).attr("rel");
			//        $("#" + activeTab).fadeIn();
			$("#" + tab_id).fadeIn();
		});

		var ceoIvSlider = new Swiper(".mag_mod_interview.sty02 .ivCeo", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			slidesPerGroup: 4,
			spaceBetween: 0,
			//loop: true,
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
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

		var mngIvSlider = new Swiper(".mag_mod_interview.sty02 .ivMng", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

		var empIvSlider = new Swiper(".mag_mod_interview.sty02 .ivEmp", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

	


		// mag_mod.interview.sty05
		$(".mag_mod_interview.sty06 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_ceo  .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_ceo .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty06 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_mng .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_mng .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty06 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_emp .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_emp .swiper-button-prev"
			}
		});


		//.bro_mod_interview.sty02
		$('.bro_mod_interview.sty02 .q').click(function() {
			$(this).toggleClass('active');
			$(this).next().slideToggle();
		})

		$(".bro_mod_interview.sty02 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".bro_mod_interview.sty02 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_ceo .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_ceo .swiper-button-prev"
			}
		});
		$(".bro_mod_interview.sty02 .ivMng").append('<div class="swiper-pagination"></div>');
		var mngIvSlider = new Swiper(".bro_mod_interview.sty02 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_mng .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_mng .swiper-button-prev"
			}
		});

		$(".bro_mod_interview.sty02 .ivEmp").append('<div class="swiper-pagination"></div>');
		var empIvSlider = new Swiper(".bro_mod_interview.sty02 .ivEmp", {
			slidesPerView: 1,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_emp .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_emp .swiper-button-prev"
			}
		});

		/* .inf_mod_interview.sty03 */
		var ceoIvSlider = new Swiper(".inf_mod_interview.sty03 .ivCeo", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_ceo .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_ceo .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		var mngIvSlider = new Swiper(".inf_mod_interview.sty03 .ivMng", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_mng .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_mng .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		var empIvSlider = new Swiper(".inf_mod_interview.sty03 .ivEmp", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			observer: true,
			dots: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_emp .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_emp .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		// rec_mod_interview03
		//더보기 
		$(".rec_mod_interview.sty03 .qa_ceo .swiper-slide").slice(0, 3).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty03 .qa_ceo .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty03 .qa_ceo .swiper-slide:hidden").slice(0, 3).slideDown();
			if ($(".rec_mod_interview.sty03 .qa_ceo .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty03 .qa_ceo .load_more").addClass('active');
			}
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty03 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty03 .qa_mng .swiper-button-next",
				prevEl: ".rec_mod_interview.sty03 .qa_mng .swiper-button-prev"
			}
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty03 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty03 .qa_emp .swiper-button-next",
				prevEl: ".rec_mod_interview.sty03 .qa_emp .swiper-button-prev"
			}
		});

		// rec_mod_interview04
		$('.rec_mod_interview.sty04 .qa_ceo .q').attr('tabindex', '0')
		$('.rec_mod_interview.sty04 .qa_ceo .q').click(function() {
			$(this).next().slideToggle();
			$(this).toggleClass('active')
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty04 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty04 .qa_mng .swiper-button-next",
				prevEl: ".rec_mod_interview.sty04 .qa_mng .swiper-button-prev"
			}
		});

		//더보기 
		$(".rec_mod_interview.sty04 .ivEmp .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty04 .ivEmp .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty04 .ivEmp .swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(".rec_mod_interview.sty04 .ivEmp .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty04 .ivEmp .load_more").addClass('active');
			}
		});
		
		
		//.rec_mod_interview.sty05
		//더보기 
		$(".rec_mod_interview.sty05 .qa_ceo .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty05 .qa_ceo .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty05 .qa_ceo .swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(".rec_mod_interview.sty05 .qa_ceo .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty05 .qa_ceo .load_more").addClass('active');
			}
		});
		
		//tab
		// .rec_mod_interview.sty05 
		var tabWrap = $('.rec_mod_interview.sty05 .rec_itv05_wrap')
		$('.rec_mod_interview.sty05 .rec_itv05_wrap').addClass('tab_container');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap').prepend("<ul class='tabs'><li><a href='javascript:vold' data-tab='rec_itv05_tab1'>채용담당자 인터뷰</a></li><li><a href='javascript:vold' data-tab='rec_itv05_tab2'>신입사원 인터뷰</a></li></ul>");
		
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .iv_wrap').addClass('tab_content');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .qa_mng').attr('id', 'rec_itv05_tab1');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .qa_emp').attr('id', 'rec_itv05_tab2');


			// 탭 컨텐츠 숨기기
		$(".rec_mod_interview.sty05 .rec_itv05_wrap .tab_content").hide();

		// 첫번째 탭콘텐츠 보이기
		$('.rec_mod_interview.sty05 .tab_container').each(function() {
			$(this).find('.tabs').children("li:first").addClass("active"); //Activate first tab
			$(this).children(".tab_content").first().show();
		});

		//탭메뉴 클릭 이벤트
		$(".rec_mod_interview.sty05 .tab_container .tabs li a").click(function() {
			//탭 안에 슬라이드 있을 때
			var tab_id = $(this).attr('data-tab');
			$(this).parent().siblings().removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().find(".tab_content").hide();
			$("#" + tab_id).fadeIn();
		});
		
		//더보기 
		$(".rec_mod_interview.sty05 .qa_mng .swiper-slide").slice(0, 2).show();
		$(".rec_mod_interview.sty05 .qa_emp .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty05 .rec_itv05_wrap .load_more', function(e) {
			e.preventDefault();
			$(this).parent().find(".swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(this).parent().find(".swiper-slide:hidden").length == 0) {
				$(this).addClass('active');
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

		$(".mag_mod_interview.sty04 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty04 .ivMng", {
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

		$(".mag_mod_interview.sty04 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty04 .ivEmp", {
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

		// mag_mod.interview.sty03
		$(".mag_mod_interview.sty03 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivCeo", {
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

		$(".mag_mod_interview.sty03 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivMng", {
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

		$(".mag_mod_interview.sty03 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty03 .ivEmp", {
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


		// mag_mod.interview.sty05
		$(".mag_mod_interview.sty05 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_ceo  .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_ceo .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty05 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_mng .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_mng .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty05 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty05 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty05 .qa_emp .swiper-button-next",
				prevEl: ".mag_mod_interview.sty05 .qa_emp .swiper-button-prev"
			}
		});

		// .mag_mod_interview.sty02 
		$('.mag_mod_interview.sty02 .cnt-container').addClass('tab_container')
		$('.mag_mod_interview.sty02 .cnt-container').prepend("<ul class='tabs'><li class='active'><a href='javascript:vold' data-tab='tab1'>CEO</a></li><li><a href='javascript:vold' data-tab='tab2'>인사담당자</a></li><li><a href='javascript:vold' data-tab='tab3'>신입사원</a></li></ul>");
		$('.mag_mod_interview.sty02  .iv_wrap').addClass('tab_content');
		$('.mag_mod_interview.sty02 .qa_ceo').attr('id', 'tab1');
		$('.mag_mod_interview.sty02 .qa_mng').attr('id', 'tab2');
		$('.mag_mod_interview.sty02 .qa_emp').attr('id', 'tab3');

		$(".mag_mod_interview.sty02 .ivCeo").append('<div class="swiper-pagination"></div>');
		$(".mag_mod_interview.sty02 .ivMng").append('<div class="swiper-pagination"></div>');
		$(".mag_mod_interview.sty02 .ivEmp").append('<div class="swiper-pagination"></div>');
			// 탭 컨텐츠 숨기기
		$(".mag_mod_interview.sty02 .tab_content").hide();

		// 첫번째 탭콘텐츠 보이기
		$(".mag_mod_interview.sty02 .tab_container").each(function() {
			$(this).children().children().children("li:first").addClass("active"); //Activate first tab
			$(this).children(".tab_content").first().show();
		});

		//탭메뉴 클릭 이벤트
		$(".mag_mod_interview.sty02 .tabs li a").click(function() {
			//탭 안에 슬라이드 있을 때
			var tab_id = $(this).attr('data-tab');
			$(this).parent().siblings().removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().parent().find(".tab_content").hide();
			//        var activeTab = $(this).attr("rel");
			//        $("#" + activeTab).fadeIn();
			$("#" + tab_id).fadeIn();
		});

		var ceoIvSlider = new Swiper(".mag_mod_interview.sty02 .ivCeo", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			slidesPerGroup: 4,
			spaceBetween: 0,
			//loop: true,
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
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

		var mngIvSlider = new Swiper(".mag_mod_interview.sty02 .ivMng", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

		var empIvSlider = new Swiper(".mag_mod_interview.sty02 .ivEmp", {
			slidesPerView: 1,
			slidesPerColumn: 4,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerColumn: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				},
				300: {
					slidesPerColumn: 2,
					slidesPerGroup: 2,
				}
			}
		});

	


		// mag_mod.interview.sty05
		$(".mag_mod_interview.sty06 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_ceo  .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_ceo .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty06 .ivMng").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_mng .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_mng .swiper-button-prev"
			}
		});

		$(".mag_mod_interview.sty06 .ivEmp").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".mag_mod_interview.sty06 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".mag_mod_interview.sty06 .qa_emp .swiper-button-next",
				prevEl: ".mag_mod_interview.sty06 .qa_emp .swiper-button-prev"
			}
		});


		//.bro_mod_interview.sty02
		$('.bro_mod_interview.sty02 .q').click(function() {
			$(this).toggleClass('active');
			$(this).next().slideToggle();
		})

		$(".bro_mod_interview.sty02 .ivCeo").append('<div class="swiper-pagination"></div>');
		var ceoIvSlider = new Swiper(".bro_mod_interview.sty02 .ivCeo", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_ceo .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_ceo .swiper-button-prev"
			}
		});
		$(".bro_mod_interview.sty02 .ivMng").append('<div class="swiper-pagination"></div>');
		var mngIvSlider = new Swiper(".bro_mod_interview.sty02 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				observer: true,
				observeParents: true,
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_mng .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_mng .swiper-button-prev"
			}
		});

		$(".bro_mod_interview.sty02 .ivEmp").append('<div class="swiper-pagination"></div>');
		var empIvSlider = new Swiper(".bro_mod_interview.sty02 .ivEmp", {
			slidesPerView: 1,
			observer: true,
			dots: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			navigation: {
				nextEl: ".bro_mod_interview.sty02 .qa_emp .swiper-button-next",
				prevEl: ".bro_mod_interview.sty02 .qa_emp .swiper-button-prev"
			}
		});

		/* .inf_mod_interview.sty03 */
		var ceoIvSlider = new Swiper(".inf_mod_interview.sty03 .ivCeo", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_ceo .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_ceo .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		var mngIvSlider = new Swiper(".inf_mod_interview.sty03 .ivMng", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			spaceBetween: 0,
			observer: true,
			dots: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_mng .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_mng .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		var empIvSlider = new Swiper(".inf_mod_interview.sty03 .ivEmp", {
			slidesPerView: 1,
			slidesPerColumn: 3,
			slidesPerGroup: 3,
			observer: true,
			dots: true,
			observeParents: true,
			navigation: {
				nextEl: ".inf_mod_interview.sty03 .qa_emp .swiper-button-next",
				prevEl: ".inf_mod_interview.sty03 .qa_emp .swiper-button-prev"
			},
			breakpoints: {
				1260: {
					slidesPerColumn: 1,
					slidesPerView: 3,
				},
				1024: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				768: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				},
				300: {
					slidesPerColumn: 1,
					slidesPerView: 1,
				}
			}
		});

		// rec_mod_interview03
		//더보기 
		$(".rec_mod_interview.sty03 .qa_ceo .swiper-slide").slice(0, 3).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty03 .qa_ceo .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty03 .qa_ceo .swiper-slide:hidden").slice(0, 3).slideDown();
			if ($(".rec_mod_interview.sty03 .qa_ceo .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty03 .qa_ceo .load_more").addClass('active');
			}
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty03 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty03 .qa_mng .swiper-button-next",
				prevEl: ".rec_mod_interview.sty03 .qa_mng .swiper-button-prev"
			}
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty03 .ivEmp", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty03 .qa_emp .swiper-button-next",
				prevEl: ".rec_mod_interview.sty03 .qa_emp .swiper-button-prev"
			}
		});

		// rec_mod_interview04
		$('.rec_mod_interview.sty04 .qa_ceo .q').attr('tabindex', '0')
		$('.rec_mod_interview.sty04 .qa_ceo .q').click(function() {
			$(this).next().slideToggle();
			$(this).toggleClass('active')
		});

		var ceoIvSlider = new Swiper(".rec_mod_interview.sty04 .ivMng", {
			slidesPerView: 1,
			spaceBetween: 0,
			//loop: true,
			observer: true,
			observeParents: true,
			navigation: {
				nextEl: ".rec_mod_interview.sty04 .qa_mng .swiper-button-next",
				prevEl: ".rec_mod_interview.sty04 .qa_mng .swiper-button-prev"
			}
		});

		//더보기 
		$(".rec_mod_interview.sty04 .ivEmp .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty04 .ivEmp .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty04 .ivEmp .swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(".rec_mod_interview.sty04 .ivEmp .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty04 .ivEmp .load_more").addClass('active');
			}
		});
		
		
		//.rec_mod_interview.sty05
		//더보기 
		$(".rec_mod_interview.sty05 .qa_ceo .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty05 .qa_ceo .load_more', function(e) {
			e.preventDefault();
			$(".rec_mod_interview.sty05 .qa_ceo .swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(".rec_mod_interview.sty05 .qa_ceo .swiper-slide:hidden").length == 0) {
				$(".rec_mod_interview.sty05 .qa_ceo .load_more").addClass('active');
			}
		});
		
		//tab
		// .rec_mod_interview.sty05 
		var tabWrap = $('.rec_mod_interview.sty05 .rec_itv05_wrap')
		$('.rec_mod_interview.sty05 .rec_itv05_wrap').addClass('tab_container');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap').prepend("<ul class='tabs'><li><a href='javascript:vold' data-tab='rec_itv05_tab1'>채용담당자 인터뷰</a></li><li><a href='javascript:vold' data-tab='rec_itv05_tab2'>신입사원 인터뷰</a></li></ul>");
		
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .iv_wrap').addClass('tab_content');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .qa_mng').attr('id', 'rec_itv05_tab1');
		$('.rec_mod_interview.sty05 .rec_itv05_wrap .qa_emp').attr('id', 'rec_itv05_tab2');


			// 탭 컨텐츠 숨기기
		$(".rec_mod_interview.sty05 .rec_itv05_wrap .tab_content").hide();

		// 첫번째 탭콘텐츠 보이기
		$('.rec_mod_interview.sty05 .tab_container').each(function() {
			$(this).find('.tabs').children("li:first").addClass("active"); //Activate first tab
			$(this).children(".tab_content").first().show();
		});

		//탭메뉴 클릭 이벤트
		$(".rec_mod_interview.sty05 .tab_container .tabs li a").click(function() {
			//탭 안에 슬라이드 있을 때
			var tab_id = $(this).attr('data-tab');
			$(this).parent().siblings().removeClass("active");
			$(this).parent().addClass("active");
			$(this).parent().parent().parent().find(".tab_content").hide();
			$("#" + tab_id).fadeIn();
		});
		
		//더보기 
		$(".rec_mod_interview.sty05 .qa_mng .swiper-slide").slice(0, 2).show();
		$(".rec_mod_interview.sty05 .qa_emp .swiper-slide").slice(0, 2).show();
		$("body").on('click touchstart', '.rec_mod_interview.sty05 .rec_itv05_wrap .load_more', function(e) {
			e.preventDefault();
			$(this).parent().find(".swiper-slide:hidden").slice(0, 2).slideDown();
			if ($(this).parent().find(".swiper-slide:hidden").length == 0) {
				$(this).addClass('active');
			}
		});
	});
	
