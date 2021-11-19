Contents = function(item) {
	//var today = new Date();
	//var year = today.getFullYear();
	//var month = today.getMonth() + 1;
	//var day = today.getDate() + 1;
	//if(month < 10)
	//	month = "0"+ month;
	//if(day < 10)
	//	day = "0"+ day;
	//alert(day);
	//console.log(item);
	switch(item){
		// Header
		case "mod_header01":
			var contents = "";
				//contents += "<script src='https://code.jquery.com/jquery-1.12.4.min.js' integrity='sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=' crossorigin='anonymous'></script>\n";
				contents += "<div class='module-wrap edit_wrap com_mod_header sty01'>\n";
				contents += "<div class='cnt-container header clearfix'>\n";
				contents += "<div class='biz_cate cate01 blue'><i></i>Consulting</div>\n";
				contents += "<div class='logo'><img src='/images/logo_smaple01.png' alt='' /></div>\n";
				contents += "<div class='info fc_fff'>\n";
				contents += "<dl class='clearfix'><dt>업종</dt><dd>사회적기업</dd><dt>대표자</dt><dd>제윤경</dd><dt>기업형태</dt><dd>사회적기업</dd></dl>\n";
				contents += "<div class='action fc_fff clearfix'><a href='javascript:void(0);'>관심기업 등록<i>♥</i></a><a href='javascript:void(0);'>공고 바로가기<i>→</i></a></div>\n";
				contents += "</div>\n</div>\n";
				contents += "</div>\n";
		break;
		case "mod_header02":
			var contents = '<div class="module-wrap edit_wrap com_mod_header sty02">\n'
						 + '	<div class="cnt-container header clearfix">\n'
						 + '		<div id="iconArea"><div class="biz_cate cate22 green"><i></i></div></div>\n'
						 + '		<div class="logo imgCi"><img src="/images/logo_smaple01.png" alt="" /></div>\n'
						 + '		<div class="info fc_000">\n'
						 + '			<dl class="clearfix">\n'
						 + '				<dt>업종</dt>\n'
						 + '				<dd class="incCate">사회적기업</dd>\n'
						 + '				<dt>대표자</dt>\n'
						 + '				<dd class="ceo">제윤경</dd>\n'
						 + '				<dt>기업형태</dt>\n'
						 + '				<dd class="comForm">사회적기업</dd>\n'
						 + '			</dl>\n'
						 + '			<div class="action fc_000 clearfix">\n'
						 + '				<a href="javascript:void(0);" id="scrapYn" onclick="onCntNew();">관심기업 등록<i>♥</i></a>\n'
						 + '				<a href="javascript:void(0);" id="copyUrlNew" onclick="copyUrlNew();" data-clipboard-action="copy">공고 바로가기<i>→</i></a>\n'
						 + '			</div>\n'
						 + '		</div>\n'
						 + '	</div>\n'
						 + '</div>\n';
		break;

		// Anchor Tab
		case "mod_anc_tab01":
			var contents = "<div class='module-wrap edit_wrap bg_color com_mod_anchor sty01'>\n";
				contents += "<div class='cnt-container fc_919191'>\n";
				contents += "<ul>\n"
				contents += "<li><a href='javascript:void(0);' class='active'>채용공고</a></li>\n";
				contents += "<li><a href='javascript:void(0);'>취업전략</a></li>\n";
				contents += "<li><a href='javascript:void(0);'>기업개요</a></li>\n";
				contents += "<li><a href='javascript:void(0);'>현직자 리뷰</a></li>\n";
				contents += "<li> <a href='javascript:void(0);'>기업 뉴스</a></li>\n";
				contents += "</ul>\n";
				contents += "</div>\n</div>\n";
		break;
		case "mod_anc_tab02":
			var contents = '<div class="module-wrap edit_wrap com_mod_anchor sty02">\n'
						 + '	<div class="cnt-container fc_fff">\n'
						 + '		<ul>\n'
						 + '			<li><a href="#summary" class="active">기업개요</a></li>\n'
						 + '			<li><a href="#product">제품소개</a></li>\n'
						 + '			<li><a href="#recruit">채용공고</a></li>\n'
						 + '			<li> <a href="#news">기업뉴스</a></li>\n'
						 + '		</ul>\n'
						 + '		<div class="siteGo">사이트</div>\n'
						 + '	</div>\n'
						 + '</div>\n';
		break;

		// 공통
		case "mod_com_recruit":
			var contents = '<a name="recruit"></a>\n'
						 + '<div class="module-wrap edit_wrap com_mod_recruit sty01" id="recruitArea">\n'
						 + '	<div class="bg_bot"></div>\n'
						 + '	<div class="cnt-container" id="recruitContainer">\n'
						 + '		<h3>채용공고</h3>\n'
						 + '		<table class="tb_recruit otherRecruit" summary="채용공고" >\n'
						 + '			<thead>\n'
						 + '			<tr>\n'
						 + '				<th>접수기간</th>\n'
						 + '				<th>채용제목</th>\n'
						 + '				<th>고용형태</th>\n'
						 + '			</tr>\n'
						 + '			</thead>\n'
						 + '			<tbody id="otherRecruitList">\n'
						 + '				<tr>\n<td>2021.05.31 까지</td><td>풀스택 개발자 채용/경력채용/급여250만원</td><td>정규직<a href="javascript:void(0);" class="btn apply">지원하기</a></td>\n</tr>\n'
						 + '				<tr>\n<td>상시채용</td><td>생산직 지원 채용/경력 무관/급여220만원</td><td>계약직<a href="javascript:void(0);" class="btn apply">지원하기</a></td>\n</tr>\n'
						 + '			</tbody>\n'
						 + '		</table>\n'
						 + '		<div class="box_recruit_wrap swiper">\n'
						 + '			<div class="swiper-wrapper">\n'
						 + '				<div class="box_recruit swiper-slide">\n'
						 + '					<h4>\n'
						 + '						<a href="javascript:;" >채용공고명</a>\n'
						 + '						<span class="period">오늘까지</span>\n'
						 + '					</h4>\n'
						 + '					<hr/>\n'
						 + '					<div class="detail_wrap">\n'
						 + '						<div>\n'
						 + '							<h5>지원자격</h5>\n'
						 + '							<dl class="clearfix">\n'
						 + '								<dt>경력</dt>\n'
						 + '								<dd>경력무관</dd>\n'
						 + '								<dt>학력</dt>\n'
						 + '								<dd>고졸이상</dd>\n'
						 + '								<dt>우대사항</dt>\n'
						 + '								<dd>인근거주자, 1종보통운전면허</dd>\n'
						 + '							</dl>\n'
						 + '						</div>\n'
						 + '						<div>\n'
						 + '							<h5>근무조건</h5>\n'
						 + '							<dl class="clearfix">\n'
						 + '								<dt>고용형태</dt>\n'
						 + '								<dd>정규직</dd>\n'
						 + '								<dt>급여</dt>\n'
						 + '								<dd>220만원 이상</dd>\n'
						 + '								<dt>근무지역</dt>\n'
						 + '								<dd>경기도 전체</dd>\n'
						 + '							</dl>\n'
						 + '						</div>\n'
						 + '					</div>\n'
						 + '				</div>\n'
						 + '			</div>\n'
						 + '			<div class="swiper-pagination"></div>\n'
						 + '		</div>\n'
						 + '	</div>\n'
						 + '</div>\n';
		break;
		case "mod_com_news":
			var contents = '<a name="news"></a>\n'
						 + '<div class="module-wrap edit_wrap com_mod_news sty01">\n'
						 + '	<div class="cnt-container">\n'
						 + '		<div id="news_wrap">\n'
						 + '			<div class="news_row">\n'
						 + '				<a href="javascript:vodi(0);" target="_blank" class="tit">뉴스 제목</a>\n'
						 + '				<div class="desc">뉴스 내용 뉴스 내용 뉴스 내용 뉴스 내용 뉴스 내용</div>\n'
						 + '				<div class="reg_date">2021.01.01</div>\n'
						 + '			</div>\n'
						 + '			<div class="news_row">\n'
						 + '				<a href="javascript:vodi(0);" target="_blank" class="tit">뉴스 제목</a>\n'
						 + '				<div class="desc">뉴스 내용 뉴스 내용 뉴스 내용 뉴스 내용 뉴스 내용</div>\n'
						 + '				<div class="reg_date">2021.01.01</div>\n'
						 + '			</div>\n'
						 + '		</div>\n'
						 + '		<div id="paging_wrap" class="paging_wrap">\n'
						 + '			<a href="javascript:void(0);" class="prev disable">이전</a><a href="javascript:void(0);" class="current">1</a><a href="javascript:void(0);">2</a><a href="javascript:void(0);">3</a><a href="javascript:void(0);">4</a><a href="javascript:void(0);">5</a><a href="javascript:void(0);" class="next">다음</a>\n'
						 + '		</div>\n'
						 + '	</div>\n'
						 + '</div>\n';
		break;
		case "mod_com_map":
			var contents = '<div class="module-wrap edit_wrap com_mod_map">\n';	
				contents += '<div id="map"></div>\n';
				contents += '<div class="map_info_wrap">\n';
				contents += '<div class="com_info">\n';
                contents += '<div class="comName">경기도일자리재단</div>\n';
                contents += '<a href="javascript:void(0);" target="_blank" class="find_road">길 찾기</a>\n';
                contents += '<p class="comAddress">경기도 부천시 부천로 136번길 27 원미어울림마당 3층</p>\n';
                contents += '<p class="tel">031-270-9988</p>\n';
				contents += '</div>\n';
				contents += '<div class="around_wrap">\n';
				contents += '<ul id="category"><li id="MT1" data-order="0"><span class="category_bg mt1"></span>대형마트</li><li id="CS2" data-order="1"><span class="category_bg cs2"></span>편의점</li><li id="AC5" data-order="2"><span class="category_bg ac5"></span>학원</li><li id="PK6" data-order="3"><span class="category_bg pk6"></span>주차장</li><li id="OL7" data-order="4"><span class="category_bg ol7"></span>주유소</li><li id="SW8" data-order="5"><span class="category_bg sw8"></span>지하철</li><li id="BK9" data-order="6"><span class="category_bg bk9"></span>은행</li><li id="CT1" data-order="7"><span class="category_bg ct1"></span>문화시설</li><li id="AT4" data-order="8"><span class="category_bg at4"></span>관광명소</li><li id="AD5" data-order="9"><span class="category_bg ad5"></span>숙박</li><li id="FD6" data-order="10"><span class="category_bg fd6"></span>음식점</li><li id="CE7" data-order="11"><span class="category_bg ce7"></span>카페</li><li id="HP8" data-order="12"><span class="category_bg hp8"></span>병원</li><li id="PM9" data-order="14"><span class="category_bg pm9"></span>약국</li></ul>';
				contents += '</div>\n';
				contents += '</div>\n</div>\n';
		break;

		// 재무정보
		case "mod_inf_finance01":
			var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_finance sty01">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<h3>Finance Information</h3>\n'
						+ '		<ul>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiPosition">순위없음</span></div>\n'
						+ '				동종업종내 위치\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiCapital">100</span></div>\n'
						+ '				자본금(백만원)\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiProfit">-48</span></div>\n'
						+ '				당기순이익(백만원)\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiSales">555</span></div>\n'
						+ '				매출액(백만원)\n'
						+ '			</li>\n'
						+ '		</ul>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		case "mod_inf_finance02":
			var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_finance sty02">\n'
						+ '	<div class="cnt-container txt_center">\n'
						+ '		<h3>Finance Information</h3>\n'
						+ '		<ul class="clearfix">\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiPosition">9위</span></div>\n'
						+ '				동종업종내 위치\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiCapital">5,731</span></div>\n'
						+ '				자본금(백만원)\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiProfit">2,948</span></div>\n'
						+ '				당기순이익(백만원)\n'
						+ '			</li>\n'
						+ '			<li>\n'
						+ '				<div class="ico"></div>\n'
						+ '				<div class="cnt"><span class="fiSales">3,162</span></div>\n'
						+ '				매출액(백만원)\n'
						+ '			</li>\n'
						+ '		</ul>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		case "mod_inf_percent01":
			var contents = ''
					+ '<div class="module-wrap edit_wrap inf_mod_percent sty01">\n'
					+ '	<div class="cnt-container">\n'
					+ '		<ul class="type_pink">\n'
					+ '			<li></li>\n'
					+ '			<li>\n'
					+ '				성장성<span class="bpGrowthability">상위25%</span>\n'
					+ '			</li>\n'
					+ '			<li></li>\n'
					+ '		</ul>\n'
					+ '		<ul class="type_orange">\n'
					+ '			<li></li>\n'
					+ '			<li>\n'
					+ '				규모형태<span class="bpScale">상위33%</span>\n'
					+ '			</li>\n'
					+ '			<li></li>\n'
					+ '		</ul>\n'
					+ '		<ul class="type_green">\n'
					+ '			<li></li>\n'
					+ '			<li></li>\n'
					+ '			<li>\n'
					+ '				안정성<span class="bpStability">상위20%</span>\n'
					+ '			</li>\n'
					+ '		</ul>\n'
					+ '		<ul class="type_blue">\n'
					+ '			<li></li>\n'
					+ '			<li>\n'
					+ '				수익성<span class="bpProfitability">상위57%</span>\n'
					+ '			</li>\n'
					+ '			<li></li>\n'
					+ '		</ul>\n'
					+ '	</div>\n'
					+ '</div>';
		break;
		case "mod_inf_percent02":
			var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_percent sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="growth">성장성<span class="bpGrowthability">상위25%</span></div>\n'
						+ '			<div class="scale">규모형태<span class="bpScale">상위33%</span></div>\n'
						+ '			<div class="stable">안정성<span class="bpStability">상위20%</span></div>\n'
						+ '			<div class="profit">수익성<span class="bpProfitability">상위57%</span></div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;

		// SWOT
		case "mod_inf_swot01":
			var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_swot sty01">\n'
						+ '	<div class="cnt-container swot_wrap">\n'
						+ '		<div class="title">\n'
						+ '			SWOT<br/>분석\n'
						+ '			<hr/>\n'
						+ '			<div class="imgCi"><img src="/images/logo_smaple01.png" alt="" /></div>\n'
						+ '		</div>\n'
						+ '		<div class="swotS">\n'
						+ '			<div class="tit">strengths</div>\n'
						+ '			<div class="desc">국내 스마트 홈 IoT허브 디바이스 시장점유율 1위</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotW">\n'
						+ '			<div class="tit">weakenesses</div>\n'
						+ '			<div class="desc">코로나19 여파로 인한 서비스 위축</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotO">\n'
						+ '			<div class="tit">opportunities</div>\n'
						+ '			<div class="desc">의료용 허브 디바이스 신규 개발을 통한 해외시장 개척</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotT">\n'
						+ '			<div class="tit">threats</div>\n'
						+ '			<div class="desc">자본력 한계에 따른 안정적인 투자여력 미흡</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		case "mod_inf_swot02":
			var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_swot sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="title">\n'
						+ '			<div class="imgCi"><img src="/images/logo_smaple01.png" alt="" /></div>\n'
						+ '			SWOT분석\n'
						+ '		</div>\n'
						+ '		<div class="swot_wrap mgtop_80">\n'
						+ '			<div class="swotS">\n'
						+ '				<div class="tit">strengths</div>\n'
						+ '				<div class="desc">국내 스마트 홈 IoT허브 디바이스 시장점유율 1위</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotW">\n'
						+ '				<div class="tit">weakenesses</div>\n'
						+ '				<div class="desc">코로나19 여파로 인한 서비스 위축</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotO">\n'
						+ '				<div class="tit">opportunities</div>\n'
						+ '				<div class="desc">의료용 허브 디바이스 신규 개발을 통한 해외시장 개척</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotT">\n'
						+ '				<div class="tit">threats</div>\n'
						+ '				<div class="desc">자본력 한계에 따른 안정적인 투자여력 미흡</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		case "mod_inf_swot03":
		var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_swot sty03">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="swot_wrap">\n'
						+ '			<div class="swotS">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">Strengths</div>\n'
						+ '					<div class="desc">Strengths\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotW">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">weakenesses</div>\n'
						+ '					<div class="desc">weakenesses\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotO">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">opportunities</div>\n'
						+ '					<div class="desc">opportunities\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotT">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">threats</div>\n'
						+ '					<div class="desc">threats\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		
		case "mod_inf_swot04":
		var contents = ''
					+ '<div class="module-wrap edit_wrap inf_mod_swot sty04">\n'
						+ '	<div class="cnt-container swot_wrap">\n'
						+ '		<div class="swotS">\n'
						+ '			<div class="tit">strengths</div>\n'
						+ '			<div class="desc">strengths</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotW">\n'
						+ '			<div class="tit">weakenesses</div>\n'
						+ '			<div class="desc">weakenesses</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotO">\n'
						+ '			<div class="tit">opportunities</div>\n'
						+ '			<div class="desc">opportunities</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotT">\n'
						+ '			<div class="tit">threats</div>\n'
						+ '			<div class="desc">threats</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
			
		case "mod_inf_swot05":
		var contents = ''
					+ '<div class="module-wrap edit_wrap inf_mod_swot sty05">\n'
						+ '	<div class="cnt-container swot_wrap">\n'
						+ '		<div class="swotS">\n'
						+ '			<span>S</span>\n'
						+ '			<div class="tit">strengths</div>\n'
						+ '			<div class="desc">strengths</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotW">\n'
						+ '			<span>W</span>\n'
						+ '			<div class="tit">weakenesses</div>\n'
						+ '			<div class="desc">weakenesses</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotO">\n'
						+ '			<span>O</span>\n'
						+ '			<div class="tit">opportunities</div>\n'
						+ '			<div class="desc">opportunities</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotT">\n'
						+ '			<span>T</span>\n'
						+ '			<div class="tit">threats</div>\n'
						+ '			<div class="desc">threats</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
			
		case "mod_rec_swot02":
		var contents = ''
					+ '<div class="module-wrap edit_wrap rec_mod_swot sty02">\n'
						+ '	<div class="swot_wrap">'
						+ '		<div class="diagram_area">\n'
						+ '		<div class="cnt-container">\n'
						+ '			<ul>\n'
						+ '				<li class="swotS">\n'
						+ '					<p><strong>S</strong>Strengths</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotW">\n'
						+ '					<p><strong>S</strong>Weaknesses</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotO">\n'
						+ '					<p><strong>S</strong>Opportunities</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotT">\n'
						+ '					<p><strong>S</strong>Threats</p>\n'
						+ '				</li>\n'
						+ '			</ul>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '		<div class="txt">\n'
						+ '		<div class="cnt-container">\n'
						+ '		<dl class="swotS">\n'
						+ '			<dt>Strengths</dt>\n'
						+ '			<dd>Strengths</dd>\n'
						+ '		</dl>\n'
						+ '		<dl class="swotW">\n'
						+ '			<dt>Weaknesses</dt>\n'
						+ '			<dd>Weaknesses</dd>\n'
						+ '		</dl>\n'
						+ '		<dl class="swotO">\n'
						+ '			<dt>Opportunities</dt>\n'
						+ '			<dd>Opportunities</dd>\n'
						+ '		</dl>\n'
						+ '		<dl class="swotT">\n'
						+ '			<dt>Threats</dt>\n'
						+ '			<dd>Threats</dd>\n'
						+ '		</dl>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
		case "mod_rec_swot03":
		var contents = ''
					+ '<div class="module-wrap edit_wrap rec_mod_swot sty03">\n'
						+ '	<div class="cnt-container swot_wrap">'
						+ '		<div class="diagram_area">\n'
						+ '			<ul>\n'
						+ '			<li class="title">기업 SWOT<br />분석</li>'
						+ '				<li class="swotS">\n'
						+ '					<p><strong>S</strong>Strengths</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotW">\n'
						+ '					<p><strong>S</strong>Weaknesses</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotO">\n'
						+ '					<p><strong>S</strong>Opportunities</p>\n'
						+ '				</li>\n'
						+ '				<li class="swotT">\n'
						+ '					<p><strong>S</strong>Threats</p>\n'
						+ '				</li>\n'
						+ '			</ul>\n'
						+ '		</div>\n'
						+ '		<div class="txt">\n'
						+ '		<div class="swotS">\n'
						+ '			<div class="tit">Strengths</div>\n'
						+ '			<div class="desc">Strengths</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotW">\n'
						+ '			<div class="tit">Weaknesses</div>\n'
						+ '			<div class="desc">Weaknesses</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotO">\n'
						+ '			<div class="tit">Opportunities</div>\n'
						+ '			<div class="desc">Opportunities</div>\n'
						+ '		</div>\n'
						+ '		<div class="swotT">\n'
						+ '			<div class="tit">Threats</div>\n'
						+ '			<div class="desc">Threats</div>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
			
		case "mod_rec_swot04":
		var contents = ''
					+ '<div class="module-wrap edit_wrap rec_mod_swot sty04">\n'
						+ '	<div class="cnt-container">'
						+ '		<div class="swot_wrap">\n'	
						+ '			<div class="swotS">\n'	
						+ '				<div class="diagram_area">\n'	
						+ '					<p><strong>S</strong>Strengths</p>\n'	
						+ '				</div>\n'	
						+ '				<div class="txt">\n'	
						+ '					<div class="tit">Strengths</div>\n'	
						+ '					<div class="desc">Strengths</div>\n'	
						+ '				</div>\n'	
						+ '			</div>'
						+ '			<div class="swotW">\n'	
						+ '				<div class="diagram_area">\n'	
						+ '					<p><strong>W</strong>Weaknesses</p>\n'	
						+ '				</div>\n'	
						+ '				<div class="txt">\n'	
						+ '					<div class="tit">Weaknesses</div>\n'	
						+ '					<div class="desc">Weaknesses</div>\n'	
						+ '				</div>\n'	
						+ '			</div>'
						+ '			<div class="swotO">\n'	
						+ '				<div class="diagram_area">\n'	
						+ '					<p><strong>O</strong>Opportunities</p>\n'	
						+ '				</div>\n'	
						+ '				<div class="txt">\n'	
						+ '					<div class="tit">Opportunities</div>\n'	
						+ '					<div class="desc">Opportunities</div>\n'	
						+ '				</div>\n'	
						+ '			</div>'
						+ '			<div class="swotT">\n'	
						+ '				<div class="diagram_area">\n'	
						+ '					<p><strong>T</strong>Threats</p>\n'	
						+ '				</div>\n'	
						+ '				<div class="txt">\n'	
						+ '					<div class="tit">Threats</div>\n'	
						+ '					<div class="desc">Threats</div>\n'	
						+ '				</div>\n'	
						+ '			</div>'
						+ '	</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;	
		case "mod_rec_swot05":
		var contents = ''
						+ '<div class="module-wrap edit_wrap rec_mod_swot sty05">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="swot_wrap">\n'
						+ '		<div>\n'
						+ '			<div class="swotS">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">Strengths</div>\n'
						+ '					<div class="desc">Strengths\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotW">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">weakenesses</div>\n'
						+ '					<div class="desc">weakenesses\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotO">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">opportunities</div>\n'
						+ '					<div class="desc">opportunities\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="swotT">\n'
						+ '				<div class="txt">\n'
						+ '					<div class="tit">threats</div>\n'
						+ '					<div class="desc">threats\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>';
		break;
			
		// 기업 리뷰	
		case "mod_mag_review01":
			var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_review sty01">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
						break;
			
			case "mod_mag_review02":
			var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_review sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			case "mod_mag_review03":
			var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_review sty03">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			case "mod_mag_review05":
			var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_review sty05">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
				case "mod_sns_review01":
				var contents = ''
						+ '<div class="module-wrap edit_wrap sns_mod_review sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
				case "mod_rec_review01":
				var contents = ''
						+ '<div class="module-wrap edit_wrap rec_mod_review sty01">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="review_wrap">\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '			<div class="item">\n'
						+ '				<p class="desc">기업리뷰</p>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "mag_mod_percent05":
				var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_percent sty05">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "mag_mod_percent04":
				var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_percent sty04">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "mag_mod_percent02":
				var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_percent sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="swiper percent">\n'
						+ '			<div class="swiper-wrapper">\n'
						+ '				<div class="swiper-slide">\n'
						+ '					<div><img src="/images/@img_percent_3308100104_01.png" alt="" /></div>\n'
						+ '						<div>\n'
						+ '						<span class="cate">규모형태</span><span class="value bpScale">-</span><br />\n'
						+ '						<span class="desc"></span>\n'
						+ '					</div>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '		<div class="swiper-pagination"></div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "mag_bro_percent01":
				var contents = ''
						+ '<div class="module-wrap edit_wrap bro_mod_percent sty01">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="title">\n'
						+ '			<img src="/images/bro_percent01_ico01.png" alt="이미지">\n'
						+ '		</div>\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
				case "mag_bro_percent01":
				var contents = ''
						+ '<div class="module-wrap edit_wrap bro_mod_percent sty01">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="title">\n'
						+ '			<img src="/images/bro_percent01_ico01.png" alt="이미지">\n'
						+ '		</div>\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
				
			case "mag_mod_percent03":
				var contents = ''
						+ '<div class="module-wrap edit_wrap mag_mod_percent sty03">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "inf_mod_percent03":
				var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_percent sty03">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
				case "inf_mod_percent04":
				var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_percent sty04">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '		<div class="title">\n'
						+ '			title\n'
						+ '		</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
				case "inf_mod_percent05":
				var contents = ''
						+ '<div class="module-wrap edit_wrap inf_mod_percent sty05">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="growth">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>성장성<span class="bpGrowthability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="scale">\n'
						+ '				<span class="ico"></span>\n'
						+ '					<div>규모형태<span class="bpScale">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>안정성<span class="bpStability">-</span></div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<span class="ico"></span>\n'
						+ '				<div>수익성<span class="bpProfitability">-</span></div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
				case "rec_mod_percent02":
				var contents = ''
						+ '<div class="module-wrap edit_wrap rec_mod_percent sty02">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<p>규모형태</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpScale">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<p>수익성</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpProfitability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<p>안정성</p>\n'
						+ '				<div class="circle">\n'
						+ '				<p>상위 <strong class="bpStability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<p>성장성</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpGrowthability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			case "rec_mod_percent03":
				var contents = ''
						+ '<div class="module-wrap edit_wrap rec_mod_percent sty03">\n'
						+ '	<div class="cnt-container">\n'
						+ '		<div class="percent_wrap">\n'
						+ '			<div class="scale">\n'
						+ '				<p>규모형태</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpScale">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="profit">\n'
						+ '				<p>수익성</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpProfitability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="stable">\n'
						+ '				<p>안정성</p>\n'
						+ '				<div class="circle">\n'
						+ '				<p>상위 <strong class="bpStability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			<div class="growth">\n'
						+ '				<p>성장성</p>\n'
						+ '				<div class="circle">\n'
						+ '					<p>상위 <strong class="bpGrowthability">-</strong>%</p>\n'
						+ '				</div>\n'
						+ '			</div>\n'
						+ '			</div>\n'
						+ '		</div>\n'
						+ '	</div>\n'
						+ '</div>\n'
					break;
			
			
		// 채용공고 형
		case "pt1_mod0101":
			var contents = "<div class='module-wrap edit_wrap bg_color'>1111</div>\n";
				contents += "";
		break;
		case "pt1_mod0102":
			var contents = "<div class='module-wrap edit_wrap bg_color'>2222</div>\n";
				contents += "";
		break;
		case "pt1_mod0103":
			var contents = "<div class='module-wrap edit_wrap bg_color'>3333</div>\n";
				contents += "";
		break;
		
		// Header	
		case "header1":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#5bb901;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='text-align:left;padding:18px 15px;vertical-align:bottom;'>\n";
				contents += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter.png' alt='' /></div>\n";
				contents += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter_desc.png' alt=''/></div>\n";
				contents += "</td>\n<td style='text-align:right;padding:18px 15px;'>\n";
				contents += "<a href='http://www.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_2ton_wh.png' alt=''/></a>\n";
				contents += "</td></tr>\n<tr>\n<td colspan='2'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/eduplan_mon.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/data_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb2.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/poo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/multi/multi_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/kid_magazine/index.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb5.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/ddoran/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb6.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://kas.kidkids.net/html/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb7.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://job.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb8.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://academy.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb9.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb10.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n";
				contents += "</td>\n</tr>\n</table>\n</div>\n";
			break;
			
		case "header2":
			var contents = "";
				contents += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
				contents += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
				contents += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
				contents += "<tr><td colspan='9' style='height:13px;'></td></tr>";
				contents += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu2.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu5.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu6.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu7.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=7' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu8.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu9.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
			
		case "header3":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#ffffff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='padding:20px 10px 15px;'><a href='http://www.edulove.co.kr/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_logo.png' alt=''/></a>\n</td>";
				contents += "<td style='text-align:right;padding:20px 10px 15px;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_cert.png' alt='' /></div>\n</td></tr>";
				contents += "<tr><td colspan='2' style='line-height:0;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_bg_header_line.png' alt='' /></div></td></tr>";
				contents += "</table>\n</div>\n";
			break;
			
		// Contents
		case "content1":
			var contents = "";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-1.png' alt=''/></a></td>\n";
				contents += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-2.png' alt=''/></a></td>\n";
				contents += "</tr>\n<tr>\n"
				contents += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-2.png' alt=''/></a></td>\n";
				contents += "<td style='width:50%;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-1.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content2":
			var contents = "";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content5":
			var contents = "";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/content_type5.png' alt='' /></div></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content3":
			var contents = "";
				contents += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td></tr>\n";
				contents += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content6":
			var contents = "";
				contents += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
				contents += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content4":
			var contents = "";
				contents += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:500px;' colspan='2'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img6.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "content7":
			var contents = "";
				contents += "<div class='edit_wrap' style='background-color:#fff;'><table>\n";
				contents += "<tr>\n<td>1</td>\n<td>2</td>\n<td>3</td>\n</tr>\n";
				contents += "</table></div>";
			break;
			
		// Blank
		case "blank1":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
			break;
		case "blank2":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:20px;'></div>\n";
			break;
			
		// Products
		case "product1":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "product2":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;padding:10px 0;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:345px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img2.png' alt='' style='border:1px solid #e4e4e4;' />\n";
				contents += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p>\n<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding-bottom:8px;'>상품명</h2>\n";
				contents += "<div id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000원</del></div>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000원</strong><strong style='font-size:12px;color:#c00;'>[<span id='discount'>50</span>%]</strong>\n</a></td>";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:345px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img2.png' alt='' style='border:1px solid #e4e4e4;' />\n";
				contents += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p>\n<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding-bottom:8px;'>상품명</h2>\n";
				contents += "<div id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000원</del></div>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000원</strong><strong style='font-size:12px;color:#c00;'>[<span id='discount'>50</span>%]</strong>\n</a></td>";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "product3":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;padding:10px 0;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
				contents += "<p id='simple_desc' style='font-size:12px;color:#999;padding:8px 0 0;margin:0;'>제품 간략 설명</p><h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
				contents += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
				contents += "<td style='width:25px;'></td>\n";
				contents += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
				contents += "<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
				contents += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
				contents += "<td style='width:25px;'></td>\n";
				contents += "<td style='width:220px;vertical-align:top;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;text-decoration:none;text-align:center;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img3.png' alt='' style='border:1px solid #e4e4e4;' />\n";
				contents += "<h2 style='font-weight:bold;font-size:13px;color:#212121;margin:0;padding:8px 0 3px;'>상품명</h2>\n";
				contents += "<span id='cost'><del style='font-size:11px;color:#999;text-decoration:line-through;'>30,000</del></span>\n<strong id='price' style='font-size:13px;color:#535353;'>15,000</strong><strong style='display:inline-block;padding:1px 4px;margin-left:5px;font-size:11px;border-radius:5px;background:#c00;color:#fff;'><span id='discount'>50</span>%</strong>\n</a></td>";
				contents += "</tr>\n</table>\n</div>\n";
			break;
		case "product4":
			var contents = "";
				contents += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
				contents += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
				contents += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
				contents += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
				contents += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
				contents += "</table></a></td>\n";
				contents += "<td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
				contents += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
				contents += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
				contents += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
				contents += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
				contents += "</table></a></td>\n";
				contents += "<tr><td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td class='bg_color' style='position:relative;width:180px;height:180px;padding:35px;background:#555;'>\n";
				contents += "<a href='#' class='obj_edit' data-type='product2' style='display:block;width:100%;text-decoration:none;'><table cellpadding='0' cellspacing='0' border='0' width='100%'>\n";
				contents += "<tr><td colspan='2' style='height:90px;vertical-align:top;'><h2 style='font-weight:bold;font-size:16px;color:#fff;margin:0;line-height:1.5;'>상품명이 긴 경우에는 줄바꿈이 일어납니다.</h2></td></tr>\n";
				contents += "<tr><td style='height:90px;vertical-align:bottom;'><div id='cost' style='line-height:1;'><del style='font-size:12px;color:#dfdfdf;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#fff;'>15,000원</div></td>\n";
				contents += "<td style='vertical-align:bottom;text-align:right;color:#c00;font-weight:bold;font-size:21px;line-height:34px;'><span id='discount' style='font-size:32px;'>50</span>%</td></tr>\n";
				contents += "</table></a></td>\n";
				contents += "<td style='width:250px;height:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
			
			case "product5":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td ><div style='color:#fff; background-color:#c00; font-weight:bold;font-size:16px;  text-align:center; line-height:74px;width:60px;'><span id='discount' style='font-size:24px;'>50</span>%</div></td>\n";
				contents += "<td style='width:230px; border-top:1px solid #e4e4e4;'><div style='line-height:1; '><h2 style='font-weight:bold;font-size:15px;color:#212121; padding-left:10px; margin:0;' >상품명</h2></div><div style='line-height:1;  '><p id='simple_desc' style='font-size:12px;color:#999; padding-left:10px; padding-top:4px;  margin:0;'>제품 간략 설명</p></div> </td>\n";
				contents +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px; text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td ><div style='color:#fff; background-color:#c00; font-weight:bold;font-size:16px; text-align:center;  line-height:74px;width:60px;'><span id='discount' style='font-size:24px;'>50</span>%</div></td>\n";
				contents += "<td style='width:230px;  border-top:1px solid #e4e4e4;' ><div style='line-height:1; '><h2 style='font-weight:bold;font-size:15px;color:#212121; padding-left:10px;  margin:0;'>상품명</h2></div><div style='line-height:1;  '><p id='simple_desc' style='font-size:12px;color:#999; padding-left:10px; padding-top:4px; margin:0;'>제품 간략 설명</p></div> </td>\n";
				contents +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px;  text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
				contents +="<td style='width:80px;  padding-right:10px;  border-top:1px solid #e4e4e4; text-align:right;'><div id='cost' style='line-height:1; '><del style='color:#999;font-size:11px;text-decoration:line-through; text-align:right;  padding-top:5px  '>30,000원</del></div><div id='cost' style='line-height:1;'><div id='price' style='font-weight:bold;font-size:15px;color:#212121; padding-bottom:7px;  text-align:right; padding-top:5px'>15,000원</div></td></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";		
			break;
			
			case "product6":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'><table cellpadding='0' cellspacing='0' border='0' width='100%'><tr>";
				contents += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
				contents += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
				contents += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
				contents += "</table></a></td><td style='width:15px;'></td>";
				contents += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
				contents += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
				contents += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
				contents += "</table></a></td><td style='width:15px;'></td>";
				contents += "<td style='width:240px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'>";
				contents += "<img src='http://imgup.kidkids.net/mail/templete/dummy_img7.png' alt='' /><table cellpadding='0' cellspacing='0' border='0' width='100%'>";
				contents += "<tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>3,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>1,000원</div></td></tr>";
				contents += "</table></a></td></tr></table></div>";
			break;
		
		// Footer
		case "footer1":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:110px;padding:25px 10px 30px 25px;vertical-align:top;'><div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mono.png' alt=''/></div></td>\n";
				contents += "<td style='padding:25px 25px 30px 15px;vertical-align:top;'><div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발송 전용으로 키드키즈에서 메일 수신에 동의하신 회원님께만 발송되는 메일입니다.<br/>\n";
				contents += "수신을 원치않을 경우 <strong>MY 키드키즈 > MY 기본정보 > 수신변경</strong>에서 수신여부를 체크하여 주세요.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;margin-top:15px;line-height:1.5;'><span>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈<br/>대표이사 : 이희주 / 사업자등록번호 : 214-86-51854 / 통신판매업신고 : 제2016-용인수지-0297호<br/>고객센터 : 02-5880-115 / <a href='mailto:kidkids@kidkids.net'>kidkids@kidkids.net</a></span></div></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
			
		case "footer2":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
				contents += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
				contents += "</td>";
				contents += "</tr>\n</table>\n</div>";
			break;
			
		case "footer3":
			var contents = "";
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:20px 0;border-top:2px solid #007dac;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발신 전용으로 교원대상에게 각종 교육정보를 제공하기 위해 발송되고 있습니다.<br/>전송오류로 이메일을 잘못 전달받으셨거나 메일 수신을 원하기 않으시면 [<a href='http://www.edulove.co.kr/menu01/email_reject.php' target='_blank' style='text-decoration:underline;'>여기</a>]를 클릭해주세요.<br/>교원연수 관련 문의는 <a href='mailto:edulove@kyocom.co.kr' style='text-decoration:underline;'>edulove@kyocom.co.kr</a>(으)로 문의 메일을 보내주십시오.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 119-81-88861  /  통신판매업신고 : 제2016-용인수지-0301호<br/>경기도 용인시 수지구 신수로 767 유타워 A동 2103호 (주)교컴_교육사랑연수원<br/>대표이사 : 이희주  /  개인정보 보호책임자 : 박무성(<a href='mailto:pakms2000@kyocom.co.kr' style='text-decoration:underline;'>pakms2000@kyocom.co.kr</a>)<br/>Tel : 02-854-0251  /  Fax : 0303-0799-1624</span></div>\n";
				contents += "</td>";
				contents += "<td style='width:120px;vertical-align:bottom;text-align:right;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_footer_cert.png' alt=''/></div>\n</td>";
				contents += "</tr>\n</table>\n</div>";
			break;
			
		// Full
		case "ad_letter1":
			var contents = "";
				// Header
				contents += "<div class='edit_wrap bg_color' style='background:#5bb901;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='text-align:left;padding:18px 15px;vertical-align:bottom;'>\n";
				contents += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter.png' alt='' /></div>\n";
				contents += "<div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/tit_ad_letter_desc.png' alt=''/></div>\n";
				contents += "</td>\n<td style='text-align:right;padding:18px 15px;'>\n";
				contents += "<a href='http://www.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_2ton_wh.png' alt=''/></a>\n";
				contents += "</td></tr>\n<tr>\n<td colspan='2'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/eduplan_mon.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/data_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb2.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/poo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/eduinfo_new/multi/multi_list.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/kid_magazine/index.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb5.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.kidkids.net/ddoran/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb6.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://kas.kidkids.net/html/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb7.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://job.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb8.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://academy.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb9.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/ad_letter_gnb10.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n";
				contents += "</td>\n</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Footer
				contents += "<div class='edit_wrap bg_color' style='background:#f5f5f5;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:110px;padding:25px 10px 30px 25px;vertical-align:top;'><div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mono.png' alt=''/></div></td>\n";
				contents += "<td style='padding:25px 25px 30px 15px;vertical-align:top;'><div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발송 전용으로 키드키즈에서 메일 수신에 동의하신 회원님께만 발송되는 메일입니다.<br/>\n";
				contents += "수신을 원치않을 경우 <strong>MY 키드키즈 > MY 기본정보 > 수신변경</strong>에서 수신여부를 체크하여 주세요.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;margin-top:15px;line-height:1.5;'><span>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈<br/>대표이사 : 이희주 / 사업자등록번호 : 214-86-51854 / 통신판매업신고 : 제2016-용인수지-0297호<br/>고객센터 : 02-5880-115 / <a href='mailto:kidkids@kidkids.net'>kidkids@kidkids.net</a></span></div></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
			break;
			
		case "mall_letter1":
			var contents = "";
				// Header
				contents += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
				contents += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
				contents += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
				contents += "<tr><td colspan='9' style='height:13px;'></td></tr>";
				contents += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu2.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu5.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu6.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu7.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=7' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu8.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mall_header_menu9.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:500px;' colspan='2'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img6.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<tr><td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img5.png' alt=''/></a></td>\n";
				contents += "<td style='width:250px;'><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img4.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Footer
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
				contents += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
				contents += "</td>";
				contents += "</tr>\n</table>\n</div>";
			break;
			
		case "mall_letter2":
			var contents = "";
				// Header
				contents += "<div class='edit_wrap' style='padding-top:15px;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td colspan='5' rowspan='2' style='vertical-align:bottom;'><a href='http://mall.kidkids.net' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_header.png' alt=''/></a>\n</td>";
				contents += "<td colspan='4' style='text-align:right;'><div class='obj_edit' data-type='text'><span style='color:#76b809;font-size:21px;font-family:tahoma;'>"+year+"-"+month+"-"+day+"</span></div></td></tr>";
				contents += "<tr><td colspan='4' style='text-align:right;vertical-align:bottom;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/desc_mall_header.png' alt='' /></div>\n</td></tr>";
				contents += "<tr><td colspan='9' style='height:13px;'></td></tr>";
				contents += "<tr><td><a href='http://mall.kidkids.net/html/make_moongoo.htm' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=17' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu2.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=8' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=3' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=2' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu5.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=4' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu6.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=5' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu7.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/html/contents.htm?cat=1' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu8.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://mall.kidkids.net/welfare/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/mail_newheader_menu9.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Product1
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div><div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "<td style='width:20px;'></td>\n";
				contents += "<td style='width:365px;'><a href='#' class='obj_edit' data-type='product' style='display:block;width:100%;background:#fafafa;border:1px solid #e4e4e4;text-decoration:none;'><img src='http://imgup.kidkids.net/mail/templete/dummy_img.png' alt='' />\n";
				contents += "<table cellpadding='0' cellspacing='0' border='0' width='100%'><tr><td colspan='2'><p id='simple_desc' style='font-size:12px;color:#999;padding:8px 13px 5px;margin:0;'>제품 간략 설명</p></td></tr>\n";
				contents += "<tr><td colspan='2'><h2 style='font-weight:bold;font-size:15px;color:#212121;padding:0 13px 8px;margin:0;'>상품명</h2></td></tr>\n";
				contents += "<tr><td style='color:#c00;font-weight:bold;font-size:21px;padding:0 0 0 13px;line-height:34px;width:80px;'><span id='discount' style='font-size:32px;'>50</span>%</td>\n";
				contents += "<td><div id='cost' style='line-height:1;'><del style='color:#999;font-size:11px;text-decoration:line-through;'>30,000원</del></div>\n<div id='price' style='font-weight:bold;font-size:15px;color:#212121;padding-bottom:7px;'>15,000원</div></td></tr></table>\n</a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Footer
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:30px 0;border-top:2px solid #333;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:120px;vertical-align:top;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/logo_mall_footer.png' alt=''/></div>\n</td>";
				contents += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;'><span>본 메일은 정보통신망 이용촉진 및 정보보호 등에 관한 법률 시행규칙에 의거 <strong>"+year+"년 "+month+"월 "+day+"일</strong> 기준으로 회원님의 이메일 수신동의 여부를 확인한 결과 회원님께서 수신동의를 하셨기 때문에 발송하는 발신전용<br/>메일입니다.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>더 이상 수신을 원하지 않으시면 <a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>여기</a>를 클릭해주세요.<br/>(If you don't want to receive this e-mail any more, Click [<a href='http://www.kidkids.net/magazine/reject.htm?st=S&email=[$email]' target='_blank' style='text-decoration:underline;'>HERE</a>])<br/><span style='color:#999;'>* 본 메일은 발신전용입니다. 문의가 있으신분은 <a href='mailto:kidkids@kidkids.net' target='_blank' style='text-decoration:underline;'>kidkids@kidkids.net</a>으로 문의 메일을 보내주십시오.</span></span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 214-86-51854&nbsp;&nbsp;&nbsp;통신판매업신고 : 제2016-용인수지-0297호<br/>경기도 용인시 수지구 신수로 767 유타워 A동-2101 EK(주)_키드키즈,&nbsp;&nbsp;대표이사 : 이희주</span></div>\n";
				contents += "</td>";
				contents += "</tr>\n</table>\n</div>";
			break;
		
		case "edulove_letter1":
			var contents = "";
				// Header
				contents += "<div class='edit_wrap bg_color' style='background-color:#ffffff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td style='padding:20px 10px 15px;'><a href='http://www.edulove.co.kr/' class='obj_edit' data-type='image2' style='display:inline-block;' target='_blank'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_logo.png' alt=''/></a>\n</td>";
				contents += "<td style='text-align:right;padding:20px 10px 15px;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_top_cert.png' alt='' /></div>\n</td></tr>";
				contents += "<tr><td colspan='2' style='line-height:0;'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_bg_header_line.png' alt='' /></div></td></tr>";
				contents += "</table>\n</div>\n";
				// Contents
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='#' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/sim-row-thumb_23-3.png' alt=''/></a></td>\n";
				contents += "</tr>\n</table>\n</div>\n";
				contents += "<div class='edit_wrap bg_color' style='background:#fff;height:10px;'></div>\n";
				contents += "<div class='edit_wrap' style='background:#fff;'>\n<table cellpadding='0' cellspacing='0' border='0' width='100%'>\n<tr>\n";
				contents += "<td><a href='http://www.edulove.co.kr/menu01/menu01.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu1.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.edulove.co.kr/menu02/menu01_1.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu2.png' alt=''/></a></td>\n";
				//contents += "<td><a href='http://mall.edulove.co.kr/' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu3.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.edulove.co.kr/menu03/main.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu4.png' alt=''/></a></td>\n";
				contents += "<td><a href='http://www.edulove.co.kr/menu08/menu01.php' target='_blank' class='obj_edit' data-type='image2' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_menu5.png' alt=''/></a></td>\n";
				contents += "<tr><td colspan='5'><div class='obj_edit' data-type='image' style='display:inline-block;'><img src='http://imgup.kidkids.net/mail/templete/edulove_goto_logo.png' alt='' /></div></td></tr>\n";
				contents += "</tr>\n</table>\n</div>\n";
				// Footer
				contents += "<div class='edit_wrap bg_color' style='background-color:#f5f5f5;padding:20px 0;border-top:2px solid #007dac;text-align:center;'>\n<table cellpadding='0' cellspacing='0' border='0' style='width:710px;text-align:left;margin:0 auto;'>\n<tr>\n";
				contents += "<td style='width:570px;vertical-align:top;'>\n<div class='obj_edit' data-type='text' style='color:#999;font-size:12px;line-height:1.5;'><span>본 메일은 발신 전용으로 교원대상에게 각종 교육정보를 제공하기 위해 발송되고 있습니다.<br/>전송오류로 이메일을 잘못 전달받으셨거나 메일 수신을 원하기 않으시면 [<a href='http://www.edulove.co.kr/menu01/email_reject.php' target='_blank' style='text-decoration:underline;'>여기</a>]를 클릭해주세요.<br/>교원연수 관련 문의는 <a href='mailto:edulove@kyocom.co.kr' style='text-decoration:underline;'>edulove@kyocom.co.kr</a>(으)로 문의 메일을 보내주십시오.</span></div>\n";
				contents += "<div class='obj_edit' data-type='text' style='color:#333;font-size:12px;line-height:1.5;margin-top:15px;'>\n<span>사업자등록번호 : 119-81-88861  /  통신판매업신고 : 제2016-용인수지-0301호<br/>경기도 용인시 수지구 신수로 767 유타워 A동 2103호 (주)교컴_교육사랑연수원<br/>대표이사 : 이희주  /  개인정보 보호책임자 : 박무성(<a href='mailto:pakms2000@kyocom.co.kr' style='text-decoration:underline;'>pakms2000@kyocom.co.kr</a>)<br/>Tel : 02-854-0251  /  Fax : 0303-0799-1624</span></div>\n";
				contents += "</td>";
				contents += "<td style='width:120px;vertical-align:bottom;text-align:right;'>\n<div href='#' class='obj_edit' data-type='image' style='display:block;line-height:0;'><img src='http://imgup.kidkids.net/mail/templete/edulove_footer_cert.png' alt=''/></div>\n</td>";
				contents += "</tr>\n</table>\n</div>";
			break;
	}
	return contents;
}