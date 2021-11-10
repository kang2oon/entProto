//1102추가
//사업자 등록번호 입력
var bizrNoStr = $("#bizrnoStr").val();
var loginYn = "";
$(document).ready(function() {
    afterAjax(bizrNoStr);
});

function isNull(str){
    if(typeof str == "undefined" || str == null || str == ""){
        return false;
    }else{
        return true;
    }
}

function isNullList(str){
    if( typeof str != "undefined" && str.length > 0 ){
        return true;
    }else{
        return false;
    }
}

function afterAjax(srchBizrno) {
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/empmn/desEntDtlAjax2.do",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
            "bizrno" : srchBizrno
        }
        , success: function(data, status, xhr){
            if(data.result=="fail"){
                alert("처리중 문제가 발생하였습니다. 관리자에게 문의해주세요");
                return false;
            }
            //데이터 new
            var entInfo 		    = data.ENT_INFO;				    //기초자료
            var empmnVO 		    = data.usrEmpmnCmnVO;			    //인증현황
            var coreValue 		    = data.DTAIL_MAP.fieldListAt0; 	    //핵심가치 목록
            var strtgTask 		    = data.DTAIL_MAP.fieldListAt1; 	    //전략과제 목록
            var historyList 	    = data.historyList; 			    //기업 연혁목록

            var mainBiz 		    = data.DTAIL_MAP.fieldListAt2; 		//주요사업영역 목록
            var mainBizImgMap 	    = data.mainBizImgMap;				//주요사업영역 이미지 목록
            var bizCnt			    = data.mainBizImgMapCnt;
            var korMainPrdt 		= data.DTAIL_MAP.fieldListAt3; 		//주요상품 목록
            var korMainPrdtImgMap 	= data.korMainPrdtImgMap;	        //주요상품 이미지 목록
            var prdtCnt				=  data.korMainPrdtImgMapCnt;

            var orgnz 			    = data.DTAIL_MAP.fieldListAt4; 	    //조직문화 목록
            var welfareInput	    = data.DTAIL_MAP.fieldListAt5; 	    //복리후생 입력형 목록
            var welfareChoice	    = data.WELFARE_MAP; 			    //복리후생 선택형 map
            var deduct 		        = welfareChoice.WELFARE_01; 	    //공제
            var insurance	        = welfareChoice.WELFARE_02;		    //연금/보험
            var education	        = welfareChoice.WELFARE_03; 	    //교육/연수
            var convenience	        = welfareChoice.WELFARE_04; 	    //생활편의
            var leisure		        = welfareChoice.WELFARE_05; 	    //여가/행사
            var reward		        = welfareChoice.WELFARE_06; 	    //보상/수당
            var facilities	        = welfareChoice.WELFARE_07; 	    //사내시설
            var holiday		        = welfareChoice.WELFARE_08; 	    //휴가/휴무
            var handicap	        = welfareChoice.WELFARE_09; 	    //장애인지원

            var ceoIntvw  		    = data.DTAIL_MAP.fieldListAt6; 	    //대표이사인터뷰 목록
            var entCeoImg 			= data.entCeoImg;				    //대표이사인터뷰 이미지
            var entCeoImgAlt 		= data.entCeoImgAlt;				//대표이사인터뷰 이미지Alt
            var prsnlMngIntvw  	    = data.DTAIL_MAP.fieldListAt7; 	    //인사담당자 인터뷰 목록
            var prsnlMngImg 		= data.prsnlMngImg;				    //인사담당자인터뷰 이미지
            var prsnlMngImgAlt 		= data.prsnlMngImgAlt;				//인사담당자인터뷰 이미지Alt
            var incmbIntvw 		    = data.DTAIL_MAP.fieldListAt8; 	    //현직자 인터뷰 목록
            var entIncmbImg 	    = data.entIncmbImg;				    //인사담당자인터뷰 이미지
            var entIncmbImgAlt 	    = data.entIncmbImgAlt;				//인사담당자인터뷰 이미지Alt

            var inOutSideImgMap     = data.inOutSideImgMap;             //기업 내/외부 사진 이미지 목록
            var comMovUrl 		    = entInfo.prmtnMvUrl;               // 기업홍보영상
            var interviewMvUrl 	    = entInfo.interviewMvUrl;           // 인터뷰영상

            var emplProcess 	    = data.DTAIL_MAP.fieldListAt9; 	    //채용절차목록
            var cvrltQstGuide 	    = data.DTAIL_MAP.fieldListAt10;     //자소서 문항별 가이드 목록
            var rcnIntQst 		    = data.DTAIL_MAP.fieldListAt11;     //최근 면접질문 목록
            var intvwTip 		    = data.DTAIL_MAP.fieldListAt12;     //면접꿀팁 목록
            var extraPointFactor    = data.DTAIL_MAP.fieldListAt13;     //가산점요인 목록
            var rcnEntrnPsSpec 	    = data.DTAIL_MAP.fieldListAt14;     //최근 입사자 합격스팩 목록

            var finncstmtList	    = data.ENT_FINNCSTMT_LIST; 	        //기업 재무 목록(동종업계순위, 매출, 당기순이익)

            var niceInfo; 		//= data.ENT_INFO; 				        //NICE 기타정보

            const addDtailList = 11; // 공통 (기업컨텐츠 추가상세 목록 사이즈)

            //1102추가
            //관심기업 로그인여부
            loginYn = data.loginYn;
            //채용정보
            var otherEmpmnListCnt = data.otherEmpmnListCnt;
            var otherEmpmnList = data.otherEmpmnList;
            //입/퇴사자,총원 정보
            var annlNmprInfoList = data.annlNmprInfoList;

//데이터 변수
            //1102추가
            //상단 아이콘 변경
            var iconAreaStr = "";
                iconAreaStr += "<div class=\"biz_cate cate"+empmnVO.clCd+" green\">";
                iconAreaStr += "<i></i>";
                //iconAreaStr += "Consulting";
                iconAreaStr += "</div>";
            $("#iconArea").html(iconAreaStr);
//**기업정보 탭
            //1.기업명
            var comName = isNull(entInfo.entNm) ? entInfo.entNm : "비공개";
            //console.log("기업명 : " + comName);
            $(".comName").html(comName);
            //2.사업자등록번호

            //3.기업형태
            var comForm = isNull(entInfo.entsclNm) ? entInfo.entsclNm : "비공개";
            //console.log("기업형태 : " + comForm);
            $(".comForm").html(comForm);
            //4.업종(표준산업분류)
            var comKsicNm = entInfo.ksicNm;
            //console.log("업종 : " + comKsicNm);
            $(".incCate").html(comKsicNm);
            //5.대표자명
            var ceo = isNull(entInfo.korCeoNm) ? entInfo.korCeoNm : "비공개";
            //console.log("대표자명 : " + ceo);
            $(".ceo").html(ceo);
            //6.전화번호
            var tel = isNull(entInfo.hdqtrTelno) ? entInfo.hdqtrTelno : "비공개";
            //console.log("전화번호 : " + tel);
            var telLink = "<a href='tel:"+tel+"'>"+tel+"</a>";
            $(".tel").html(telLink);
            //7.주소
            var zipcode;
            if(entInfo.hdqtrZip != null){
                    zipcode = entInfo.hdqtrZip;
            }else{
                    zipcode ="";
            }
            var address = entInfo.hdqtrKorAdrs;
            //console.log("우편번호 : " + zipcode);
            //console.log("주소 : " + address);
            var fullAdd = "("+zipcode+") "+address;
            $(".address").html(fullAdd);
            $(".comAddress").html(address);

            //8.홈페이지
            if(isNull(entInfo.homeUrlNew)){
                var site = entInfo.homeUrlNew;
                //console.log("홈페이지 : " + site);
                var siteLink = "<a href='"+site+"' target='_blank'>"+site+"</a>";
                var siteLink2 = "<a href='"+site+"' target='_blank'>홈페이지 바로가기</a>";
                $(".site").html(siteLink);
                $(".siteGo").html(siteLink2);
            }

            //9.담당자
            if(isNull(entInfo.mngNm)){
                var mngNm = entInfo.mngNm;
                //console.log("담당자 : " + mngNm);
            }

            //10.담당자 연락처
            if(isNull(entInfo.mngTelno)){
                var mngTelno = entInfo.mngTelno;
                //console.log("담당자 연락처 : " + mngTelno);
            }

            //11.담당자 이메일
            if(isNull(entInfo.mngEmail)){
                var mngEmail = entInfo.mngEmail;
                //console.log("담당자 이메일 : " + mngEmail);
            }

            //12.등록회원

            //13.등록일자
            var regData = isNull(entInfo.regDt) ? entInfo.regDt : "비공개";
            //console.log("등록일자 : " + regData);
            //14.최종 수정일자
            var modData = isNull(entInfo.updDt) ? entInfo.updDt : "비공개";
            //console.log("최종 수정일자 : " + modData);
            //15.지역(X 폐지)

            //16.기업 CI(BI)
            var entNewLogoImg 		= data.entNewLogoImg;
            var entNewLogoImgAlt    = data.entNewLogoImgAlt;
            //console.log("기업 CI(BI) : " + entNewLogoImg);
            //console.log("기업 CI(BI) alt : " + entNewLogoImgAlt);
            var imgCi = "<img src='"+entNewLogoImg+"' alt='"+comName+"'/>";
            $(".imgCi").html(imgCi);

            //17.기업연혁
            var historyCnt = historyList.length;
            if(historyCnt > 0){
                var historyYear = "";//연혁 년도
                var historyMonth = "";//연혁 월
                var historyCntnt = "";//연혁 내용
                
                var history = "";
                var historyCntntSplit = null;
                for(var i=0; i<historyCnt; i++){
                    historyYear = historyList[i].stdYy;
                    //console.log("연혁 년도"+i+" : " + historyYear);
                    history += "<div><span>"+historyYear+"</span><ul>";
                    historyMonth = historyList[i].stdMm;
                    //console.log("연혁 월"+i+" : " + historyMonth);
                    history += "<li><div class='month'>"+historyMonth+"</div><div class='event'>";
                    historyCntnt = historyList[i].cnts;
                    historyCntntSplit = historyCntnt.split("::");
                    for(var j=0 ; j<historyCntntSplit.length ; j++){
                        //console.log("연혁 내용"+i+"_"+j+" : " + historyCntntSplit[j]);
                        history += "<span>"+historyCntntSplit[j]+"</span>";
                    }
                    history += "</div></li></ul></div>";
                }
            }
            $(".history").html(history);
            $("div.holder").jPages({
                containerID : "history",
                perPage     : 5,
                previous    : ".arrow_prev",
                next        : ".arrow_next",
            });

//**기업인증정보 탭 -> Y값인경우 인증
            //18.일자리우수기업
            var cert1 = empmnVO.jobExclncYn;
            //console.log("일자리우수기업 : " + cert1);
            //19.여성고용우수기업
            var cert2 = empmnVO.wmExclncYn;
            //console.log("여성고용우수기업 : " + cert2);
            //20.청년친화강소기업
            var cert3 = empmnVO.ythSmlGntYn;
            //console.log("청년친화강소기업 : " + cert3);
            //21.경기유망중소기업
            var cert4 = empmnVO.bhrcYn;
            //console.log("경기유망중소기업 : " + cert4);
            //22.기타기업(X)

            //23.면접수당 지급인증기업
            var cert5 = empmnVO.itvPayYn;
            //console.log("면접수당 지급인증기업 : " + cert5);

//**기업복지정보 탭
            //24.복리후생-선택형
            var welfare = "<div class='swiper-wrapper'>";
            if ( isNullList(deduct) ){//공제                 
                var deductStr = "";
                welfare += "<div class='swiper-slide deduct'>";
                welfare += "<dl><dt>공제</dt>";
                for(var i=0; i<deduct.length; i++){
                    deductStr = deduct[i].cmnNm;
                    //console.log("복리후생 공제"+i+" : " + deductStr);
                    welfare += "<dd>"+deductStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(insurance) ){//연금/보험
                var insuranceStr = "";
                welfare += "<div class='swiper-slide insurance'>";
                welfare += "<dl><dt>연금/보험</dt>";
                for(var i=0; i<insurance.length; i++){
                    insuranceStr = insurance[i].cmnNm;
                    //console.log("복리후생 연금/보험"+i+" : " + insuranceStr);
                    welfare += "<dd>"+insuranceStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(education)){//교육/연수
                var educationStr = "";
                welfare += "<div class='swiper-slide education'>";
                welfare += "<dl><dt>교육/연수</dt>";
                for(var i=0; i<education.length; i++){
                    var nullcheck = education[i];
                    if (nullcheck !=""){
                        educationStr = education[i].cmnNm;
                            //console.log("복리후생 교육/연수"+i+" : " + educationStr);
                            welfare += "<dd>"+educationStr+"</dd>";
                    }
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(convenience) ){//생활편의
                var convenienceStr = "";
                welfare += "<div class='swiper-slide convenience'>";
                welfare += "<dl><dt>생활편의</dt>";
                for(var i=0; i<convenience.length; i++){
                    convenienceStr = convenience[i].cmnNm;
                    //console.log("복리후생 생활편의"+i+" : " + convenienceStr);
                    welfare += "<dd>"+convenienceStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(leisure) ){//여가/행사
                var leisureStr = "";
                welfare += "<div class='swiper-slide leisure'>";
                welfare += "<dl><dt>여가/행사</dt>";
                for(var i=0; i<leisure.length; i++){
                    leisureStr = leisure[i].cmnNm;
                        //console.log("복리후생 여가/행사"+i+" : " + leisureStr);
                        welfare += "<dd>"+leisureStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(reward) ){//보상/수당
                var rewardStr = "";
                welfare += "<div class='swiper-slide reward'>";
                welfare += "<dl><dt>보상/수당</dt>";
                for(var i=0; i<reward.length; i++){
                    rewardStr = reward[i].cmnNm;
                    //console.log("복리후생 보상/수당"+i+" : " + rewardStr);
                    welfare += "<dd>"+rewardStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(facilities) ){//사내시설
                var facilitiesStr = "";
                welfare += "<div class='swiper-slide facilities'>";
                welfare += "<dl><dt>사내시설</dt>";
                for(var i=0; i<facilities.length; i++){
                    facilitiesStr = facilities[i].cmnNm;
                    //console.log("복리후생 사내시설"+i+" : " + facilitiesStr);
                    welfare += "<dd>"+facilitiesStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(holiday) ){//휴가/휴무
                var holidayStr = "";
                welfare += "<div class='swiper-slide holiday'>";
                welfare += "<dl><dt>휴무/휴가</dt>";
                for(var i=0; i<holiday.length; i++){
                    holidayStr = holiday[i].cmnNm;
                    //console.log("복리후생 휴가/휴무"+i+" : " + holidayStr);
                    welfare += "<dd>"+holidayStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNullList(handicap) ){//장애인지원
                var handicapStr = "";
                welfare += "<div class='swiper-slide handicap'>";
                welfare += "<dl><dt>장애인지원</dt>";
                for(var i=0; i<handicap.length; i++){
                    handicapStr = handicap[i].cmnNm;
                    //console.log("복리후생 장애인지원"+i+" : " + handicapStr);
                    welfare += "<dd>"+handicapStr+"</dd>";
                }
                welfare += "</dl></div>";
            }
            if ( isNull(entInfo.etc1)){
                var etcStr = "";
                welfare += "<div class='swiper-slide etc'>";
                welfare += "<dl><dt>기타</dt>";
                for(var i=0; i<10; i++){ //기타항목 총 10개 고정
                    var etcValue = "etcStr = entInfo.etc"+i;
                    eval(etcValue);
                    if (isNull(etcStr)){
                        //console.log("복리후생 기타항목 총 10개 고정"+i+" : " + etcStr);
                        welfare += "<dd>"+etcStr+"</dd>";
                    }
                }
                welfare += "</dl></div>";
            }
            welfare += "</div>";
            $(".welfare").html(welfare);
            var welfareSlider = new Swiper(".welfare",{
                slidesPerView: 1,
                slidesPerColumn: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".welfare_wrap .swiper-button-next",
                    prevEl: ".welfare_wrap .swiper-button-prev"
                },
                breakpoints:{
                    780: {
                        slidesPerView: 1,
                    }
                }
            });

             //복리후생 - 입력형
            if(isNull(welfareInput)){
                var welfareInputTitle = "";//복리후생 입력형 제목
                var welfareInputCntnt = "";//복리후생 입력형 내용
				
				var dvWelfare = "<div class='swiper-wrapper'>";
                for(var i=1; i<addDtailList; i++){
                    welfareInputTitle = "welfareInputTitle = welfareInput.addTitle"+i;
                    eval(welfareInputTitle);
                    if (isNull(welfareInputTitle)){
                        //console.log("복리후생 입력형 제목"+i+" : " + welfareInputTitle);
						dvWelfare += "<div class='swiper-slide'><div>";
						dvWelfare += "<div class='tit'>"+welfareInputTitle+"</div>";
                    }
                    welfareInputCntnt = "welfareInputCntnt = welfareInput.addCntnt"+i;
                    eval(welfareInputCntnt);
                    if (isNull(welfareInputCntnt)){
                        //console.log("복리후생 입력형 내용"+i+" : " + welfareInputCntnt);
						dvWelfare += "<div class='desc'>"+welfareInputCntnt+"</div>";
                        dvWelfare += "</div></div>";
                    }
                }
				dvWelfare += "</div>";
            }
			$(".dvWelfare").html(dvWelfare);

            //25.조직문화
            if(isNull(orgnz)){
                var orgnzTitle = "";//조직문화
                var orgnzCntnt = "";//조직문화 내용

                var dvCulture = "<div class='swiper-wrapper'>";
                for(var i=1; i<addDtailList; i++){
                    orgnzTitle = "orgnzTitle = orgnz.addTitle"+i;
                    eval(orgnzTitle);
                    if (isNull(orgnzTitle)){
                        //console.log("조직문화"+i+" : " + orgnzTitle);
                        dvCulture += "<div class='swiper-slide'><div>";
                        dvCulture += "<div class='tit'>"+orgnzTitle+"</div>";
                    }
                    orgnzCntnt = "orgnzCntnt = orgnz.addCntnt"+i;
                    eval(orgnzCntnt);
                    if (isNull(orgnzCntnt)){
                        //console.log("조직문화 내용"+i+" : " + orgnzCntnt);
                        dvCulture += "<div class='desc'>"+orgnzCntnt+"</div>";
                        dvCulture += "</div></div>";
                    }
                }
                dvCulture += "</div>";
            }
            $(".dvCulture").html(dvCulture);
            var cultureSlider = new Swiper(".dvCulture", {
				slidesPerView: 1,
				slidesPerColumn: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: ".culture_wrap .swiper-button-next",
					prevEl: ".culture_wrap .swiper-button-prev"
				},
				breakpoints: {
                    780: {
                        slidesPerView: 1,
                    }
				}
			});

//**기업콘텐츠 탭
            //26.기업 썸네일 목록 이미지
            var entListImg 		= data.entListImgUrl;
            var entListImgAlt 		= data.entListImgUrlAlt;
            //console.log("기업 썸네일 목록 이미지 : " + entListImg);
            //console.log("기업 썸네일 목록 이미지Alt : " + entListImg);

            //27.기업 썸네일 오버 이미지
            var entMouseImg 		= data.entMouseImgUrl;
            var entMouseImgAlt 		= data.entMouseImgUrlAlt;
            //console.log("기업 썸네일 오버 이미지 : " + entMouseImg);
            //console.log("기업 썸네일 오버 이미지Alt : " + entMouseImgAlt);

            //28.기업 대표 이미지
            var entRepresentImg 		= data.entRepresentImgUrl;
            var entRepresentImgAlt 		= data.entRepresentImgUrlAlt;
            //console.log("기업 대표 이미지 : " + entRepresentImg);
            //console.log("기업 대표 이미지Alt : " + entRepresentImgAlt);
            var imgCom = "<img src='"+entRepresentImg+"' alt='"+comName+"'/>";
            $(".imgCom").html(imgCom);

            //29.슬로건
            var slogan = entInfo.slogan;
            //console.log("슬로건 : " + slogan);
            $(".slogan").html(slogan);

            //30.기업비전
            var vision = entInfo.entVision;
            //console.log("기업비전 : " + vision);
            $(".vision").html(vision);

            //31.기업미션
            var mission = entInfo.entMission;
            //console.log("기업미션 : " + mission);
            $(".mission").html(mission);

            //32.핵심가치
            if(isNull(coreValue)){
                var coreValueTitle = "";//핵심가치 제목
                var coreValueCntnt = "";//핵심가치 내용

                var keyValue = "<dl>";
                for(var i=1; i<addDtailList; i++){
                    coreValueTitle = "coreValueTitle = coreValue.addTitle"+i;
                    eval(coreValueTitle);
                    if (isNull(coreValueTitle)){
                        //console.log("핵심가치 제목"+i+" : " + coreValueTitle);
                        keyValue += "<dt>"+coreValueTitle+"</dt>";
                    }
                    coreValueCntnt = "coreValueCntnt = coreValue.addCntnt"+i;
                    eval(coreValueCntnt);
                    if (isNull(coreValueCntnt)){
                        //console.log("핵심가치 내용"+i+" : " + coreValueCntnt);
                        keyValue += "<dd>"+coreValueCntnt+"</dd>";
                    }
                }
                keyValue += "</dl>";
            }
            $(".keyValue").html(keyValue);

            //33.SWOT 분석
            if(isNull(entInfo.swotS)){
                var s = entInfo.swotS;
                var w = entInfo.swotW;
                var o = entInfo.swotO;
                var t = entInfo.swotT;
                // console.log("SWOT 분석 S : " + s);
                // console.log("SWOT 분석 W : " + w);
                // console.log("SWOT 분석 O : " + o);
                // console.log("SWOT 분석 T : " + t);
                $(".swotS .desc").html(s);
                $(".swotW .desc").html(w);
                $(".swotO .desc").html(o);
                $(".swotT .desc").html(t);
            }

            //34.주요 사업영역
            var bizImgCnt  = isNull(bizCnt) ? bizCnt : 0;
            if(isNull(mainBiz)){
                var mainBizTitle = "";//주요사업영역 제목
                var mainBizCntnt = "";//주요사업영역 내용
                var mainBizImg = "";//주요사업영역 이미지
                var mainBizImgAlt = "";//주요사업영역 이미지Alt

                var bizDiv = "";
                for(var i=1; i<addDtailList; i++){
                    mainBizImg = "";
                    mainBizImgAlt = "";
                    mainBizTitle = "mainBizTitle = mainBiz.addTitle"+i;
                    eval(mainBizTitle);
                    mainBizCntnt = "mainBizCntnt = mainBiz.addCntnt"+i;
                    eval(mainBizCntnt);                 

                    if(i < bizImgCnt+1){
                        mainBizImg = "mainBizImg = mainBizImgMap.mainBizImg"+i;
                        eval(mainBizImg);
                        if (isNull(mainBizImg)){
                            //console.log("주요사업영역 이미지"+i+" : " + mainBizImg);
                            bizDiv += "<div><img src='"+mainBizImg+"' alt='"+mainBizImg+"' />";
                        }
                        mainBizImgAlt = "mainBizImgAlt = mainBizImgMap.mainBizImgAlt"+i;
                        eval(mainBizImgAlt);
                        if (isNull(mainBizImgAlt)){
                            //console.log("주요사업영역 이미지Alt"+i+" : " + mainBizImgAlt);
                        }
                    }else{
                        break;
                    }
                    
                    if (isNull(mainBizTitle)){
                        //console.log("주요사업영역 제목"+i+" : " + mainBizTitle);
                        bizDiv += "<h4>"+mainBizTitle+"</h4>";
                    }
                    
                    if (isNull(mainBizCntnt)){
                        //console.log("주요사업영역 내용"+i+" : " + mainBizCntnt);
                        bizDiv += "<p>"+mainBizCntnt+"</p></div>";
                    }
                }
            }
            $(".bizDiv").html(bizDiv);

            //35.주요 상품이미지
            var prdtImgCnt = isNull(prdtCnt) ? prdtCnt : 0;
            if(isNull(korMainPrdt)){
                var productTitle = "";//주요상품 제목
                var productCntnt = "";//주요상품 내용
                var productImg = "";//주용상품 이미지
                var productImgAlt = "";//주용상품 이미지Alt

                var product = "";
                for(var i=1; i<addDtailList; i++){
                    productTitle = "productTitle = korMainPrdt.addTitle"+i;
                    eval(productTitle);
                    productImg = "productImg = korMainPrdtImgMap.korMainPrdtImg"+i;
                    eval(productImg);
                    productImgAlt = "productImgAlt = korMainPrdtImgMap.korMainPrdtImgAlt"+i;
                    eval(productImgAlt);
                    
                    if(i < prdtImgCnt+1){
                        if (isNull(productImg)){
                            //console.log("주요상품 이미지"+i+" : " + productImg);
                            product += "<div><img src='"+productImg+"' alt='"+productTitle+"' />";
                        }
                        if (isNull(productImgAlt)){
                            //console.log("주요상품 이미지Alt"+i+" : " + productImgAlt);
                        }
                    }else{
                        break;
                    }

                    if (isNull(productTitle)){
                        //console.log("주요상품 제목"+i+" : " + productTitle);
                        product += "<h4>"+productTitle+"</h4>";
                    }

                    productCntnt = "productCntnt = korMainPrdt.addCntnt"+i;
                    eval(productCntnt);
                    if (isNull(productCntnt)){
                        //console.log("주요상품 내용"+i+" : " + productCntnt);
                        product += "<p>"+productCntnt+"</p></div>";
                    }
                }
            }
            $(".product").html(product);

            //36.기업 전략과제
            if(isNull(strtgTask)){
                var strtgTaskTitle = "";//전략과제 제목
                var strtgTaskCntnt = "";//전략과제 내용

                var keyTask = "<dl>";
                for(var i=1; i<addDtailList; i++){
                    strtgTaskTitle = "strtgTaskTitle = strtgTask.addTitle"+i;
                    eval(strtgTaskTitle);
                    if (isNull(strtgTaskTitle)){
                        //console.log("전략과제 제목"+i+" : " + strtgTaskTitle);
                        keyTask += "<dt>"+strtgTaskTitle+"</dt>";
                    }
                    strtgTaskCntnt = "strtgTaskCntnt = strtgTask.addCntnt"+i;
                    eval(strtgTaskCntnt);
                    if (isNull(strtgTaskCntnt)){
                       // console.log("전략과제 내용"+i+" : " + strtgTaskCntnt);
                       keyTask += "<dd>"+strtgTaskCntnt+"</dd>";
                    }
                }
                keyTask += "</dl>";
            }
            $(".keyTask").html(keyTask);

            //37.CEO 인터뷰
            var ivCeoPhoto = '';//CEO 이미지
            var ivCeoPhotoAlt = '';//CEO 이미지Alt
            if(isNull(entCeoImg)){
                ivCeoPhoto = entCeoImg;
                //console.log("CEO 이미지 : " + ivCeoPhoto);
                var ivCeoPhotoUrl = "<img src='"+ivCeoPhoto+"' alt='대표이사'>";
                $(".ivCeoPhoto").html(ivCeoPhotoUrl);
                ivCeoPhotoAlt = entCeoImgAlt;
                //console.log("CEO 이미지Alt : " + ivCeoPhotoAlt);
            }
            if(isNull(ceoIntvw)){//CEO 인터뷰
                var ivCeoTitle = "";//CEO 인터뷰 질문
                var ivCeoCntnt = "";//CEO 인터뷰 답변

                var ivCeo = "<div class='swiper-wrapper'>";
                for(var i=1; i<addDtailList; i++){
                    ivCeoTitle = "ivCeoTitle = ceoIntvw.addTitle"+i;
                    eval(ivCeoTitle);
                    if (isNull(ivCeoTitle)){
                        //console.log("CEO 인터뷰 질문"+i+" : " + ivCeoTitle);
                        ivCeo += "<div class='swiper-slide'>";
                        ivCeo += "<div class='q'>"+ivCeoTitle+"</div>";
                    }
                    ivCeoCntnt = "ivCeoCntnt = ceoIntvw.addCntnt"+i;
                    eval(ivCeoCntnt);
                    if (isNull(ivCeoCntnt)){
                        //console.log("CEO 인터뷰 답변"+i+" : " + ivCeoCntnt);
                        ivCeo += "<div class='a'>"+ivCeoCntnt+"</div>";
                        ivCeo += "</div>";
                    }
                }
                ivCeo += "</div>";
            }
            $(".ivCeo").html(ivCeo);
            var ceoIvSlider = new Swiper(".ivCeo",{
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                navigation: {
                    nextEl: ".iv_wrap.qa_ceo .swiper-button-next",
                    prevEl: ".iv_wrap.qa_ceo .swiper-button-prev"
                }
            });

            //38.채용담당자 인터뷰
            var ivMngPhoto = '';
            var ivMngPhotoAlt = '';
            if(isNull(prsnlMngImg)){//채용담당자 이미지
                    ivMngPhoto = prsnlMngImg;
                    //console.log("채용담당자 이미지 : " + ivMngPhoto);
                    var ivMngPhotoUrl = "<img src='"+ivMngPhoto+"' alt='인사담당자'>";
                    $(".ivMngPhoto").html(ivMngPhotoUrl);
                    ivMngPhotoAlt = prsnlMngImgAlt;
                    //console.log("채용담당자 이미지Alt : " + ivMngPhotoAlt);
            }
            if(isNull(prsnlMngIntvw)){//채용담당자 인터뷰
                var ivMngTitle = "";//채용담당자 인터뷰 질문
                var ivMngCntnt = "";//채용담당자 인터뷰 답변

                var ivMng = "<div class='swiper-wrapper'>";
                for(var i=1; i<addDtailList; i++){
                    ivMngTitle = "ivMngTitle = prsnlMngIntvw.addTitle"+i;
                    eval(ivMngTitle);
                    if (isNull(ivMngTitle)){
                        //console.log("채용담당자 인터뷰 질문"+i+" : " + ivMngTitle);
                        ivMng += "<div class='swiper-slide'>";
                        ivMng += "<div class='q'>"+ivMngTitle+"</div>";
                    }
                    ivMngCntnt= "ivMngCntnt = prsnlMngIntvw.addCntnt"+i;
                    eval(ivMngCntnt);
                    if (isNull(ivMngCntnt)){
                        //console.log("채용담당자 인터뷰 답변"+i+" : " + ivMngCntnt);
                        ivMng += "<div class='a'>"+ivMngCntnt+"</div>";
                        ivMng += "</div>";
                    }
                }
                ivMng += "</div>"; 
            }
            $(".ivMng").html(ivMng);
            var mngIvSlider = new Swiper(".ivMng",{
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                navigation: {
                    nextEl: ".iv_wrap.qa_mng .swiper-button-next",
                    prevEl: ".iv_wrap.qa_mng .swiper-button-prev"
                }
            });

            //39.신입사원 인터뷰
            var ivEmpPhoto = '';
            var ivEmpPhotoAlt = '';
            if(isNull(entIncmbImg)){//신입사원 이미지
                ivEmpPhoto = entIncmbImg;
                //console.log("신입사원 이미지 : " + ivEmpPhoto);
                var ivEmpPhotoUrl = "<img src='"+ivEmpPhoto+"' alt='재직자'>";
                $(".ivEmpPhoto").html(ivEmpPhotoUrl);
                ivEmpPhotoAlt = entIncmbImgAlt;
                //console.log("신입사원 이미지Alt : " + ivEmpPhotoAlt);
            }
            if(isNull(incmbIntvw)){
                var ivEmpTitle = "";//신입사원 인터뷰 질문
                var ivEmpCntnt = "";//신입사원 인터뷰 답변

                var ivEmp = "<div class='swiper-wrapper'>";
                for(var i=1; i<addDtailList; i++){
                    ivEmpTitle = "ivEmpTitle = incmbIntvw.addTitle"+i;
                    eval(ivEmpTitle);
                    if (isNull(ivEmpTitle)){
                        //console.log("신입사원 인터뷰 질문"+i+" : " + ivEmpTitle);
                        ivEmp += "<div class='swiper-slide'>";
                        ivEmp += "<div class='q'>"+ivEmpTitle+"</div>";
                    }
                    ivEmpCntnt = "ivEmpCntnt = incmbIntvw.addCntnt"+i;
                    eval(ivEmpCntnt);
                    if (isNull(ivEmpCntnt)){
                        //console.log("신입사원 인터뷰 답변"+i+" : " + ivEmpCntnt);
                        ivEmp += "<div class='a'>"+ivEmpCntnt+"</div>";
                        ivEmp += "</div>";
                    }
                }
                ivEmp += "</div>";
            }
            $(".ivEmp").html(ivEmp);
            var empIvSlider = new Swiper(".ivEmp",{
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: true,
                navigation: {
                    nextEl: ".iv_wrap.qa_emp .swiper-button-next",
                    prevEl: ".iv_wrap.qa_emp .swiper-button-prev"
                }
            });

            //40.채용절차
            if(isNull(emplProcess)){
                var recruitProcessTitle = "";//채용단계
                var recruitProcessCntnt = "";//채용내용
                for(var i=1; i<addDtailList; i++){
                    recruitProcessTitle = "recruitProcessTitle = emplProcess.addTitle"+i;
                    eval(recruitProcessTitle);
                    if (isNull(recruitProcessTitle)){
                        //console.log("채용단계"+i+" : " + recruitProcessTitle);
                    }
                    recruitProcessCntnt = "recruitProcessCntnt = emplProcess.addCntnt"+i;
                    eval(recruitProcessCntnt);
                    if (isNull(recruitProcessCntnt)){
                        //console.log("채용내용"+i+" : " + recruitProcessCntnt);
                    }
                }
            }

            //41.현직자 복지 사용후기
            var incmbDept = isNull(entInfo.incmbDept) ? entInfo.incmbDept : "비공개"; //소속부서(현직자복지후기)
            var incmbNm = isNull(entInfo.incmbNm) ? entInfo.incmbNm : "비공개"; //이름(현직자복지후기)
            var incmbReview = isNull(entInfo.incmbReview) ? entInfo.incmbReview : "비공개"; //후기(현직자복지후기)
            // console.log("소속부서(현직자복지후기) : " + incmbDept);
            // console.log("이름(현직자복지후기) : " + incmbNm);
            // console.log("후기(현직자복지후기) : " + incmbReview);

            //42.자소서 문항별 가이드
            if(isNull(cvrltQstGuide)){
                var cvrltQstGuideTitle = "";//자소서 문항
                var cvrltQstGuideCntnt = "";//자소서 답변
                for(var i=1; i<addDtailList; i++){
                    cvrltQstGuideTitle = "cvrltQstGuideTitle = cvrltQstGuide.addTitle"+i;
                    eval(cvrltQstGuideTitle);
                    if (isNull(cvrltQstGuideTitle)){
                        //console.log("자소서 문항"+i+" : " + cvrltQstGuideTitle);
                    }
                    cvrltQstGuideCntnt = "cvrltQstGuideCntnt = cvrltQstGuide.addCntnt"+i;
                    eval(cvrltQstGuideCntnt);
                    if (isNull(cvrltQstGuideCntnt)){
                        //console.log("자소서 답변"+i+" : " + cvrltQstGuideCntnt);
                    }
                }
            }

            //43.최근 면접질문
            if(isNull(rcnIntQst)){
                var rcnIntQstTitle = "";//질문
                for(var i=1; i<addDtailList; i++){
                    rcnIntQstTitle = "rcnIntQstTitle = rcnIntQst.addTitle"+i;
                    eval(rcnIntQstTitle);
                    if (isNull(rcnIntQstTitle)){
                        //console.log("최근 면접질문"+i+" : " + rcnIntQstTitle);
                    }
                }
            }

            //44.채용 가산점 요인
            if(isNull(extraPointFactor)){
                var extraPointFactorTitle = "";//가산점 요인
                var extraPointFactorCntnt = "";//가산점 내용
                for(var i=1; i<addDtailList; i++){
                    extraPointFactorTitle = "extraPointFactorTitle = extraPointFactor.addTitle"+i;
                    eval(extraPointFactorTitle);
                    if (isNull(extraPointFactorTitle)){
                        //console.log("가산점 요인"+i+" : " + extraPointFactorTitle);
                    }
                    extraPointFactorCntnt = "extraPointFactorCntnt = extraPointFactor.addCntnt"+i;
                    eval(extraPointFactorCntnt);
                    if (isNull(extraPointFactorCntnt)){
                        //console.log("가산점 내용"+i+" : " + extraPointFactorCntnt);
                    }
                }
            }

            //45.최근 입사자 합격스펙
            if(isNull(rcnEntrnPsSpec)){
                var rcnEntrnPsSpecTitle = "";//입사자 스펙
                var rcnEntrnPsSpecCntnt = "";//입사자 내용
                for(var i=1; i<addDtailList; i++){
                    rcnEntrnPsSpecTitle = "rcnEntrnPsSpecTitle = rcnEntrnPsSpec.addTitle"+i;
                    eval(rcnEntrnPsSpecTitle);
                    if (isNull(rcnEntrnPsSpecTitle)){
                        //console.log("입사자 스펙"+i+" : " + rcnEntrnPsSpecTitle);
                    }
                    rcnEntrnPsSpecCntnt = "rcnEntrnPsSpecCntnt = rcnEntrnPsSpec.addCntnt"+i;
                    eval(rcnEntrnPsSpecCntnt);
                    if (isNull(rcnEntrnPsSpecCntnt)){
                        //console.log("입사자 내용"+i+" : " + rcnEntrnPsSpecCntnt);
                    }
                }
            }

            //46.면접 꿀팁
            if(isNull(intvwTip)){
                var intvwTipTitle = "";//꿀팁 항목
                var intvwTipCntnt = "";//꿀팁 내용
                for(var i=1; i<addDtailList; i++){
                    intvwTipTitle = "intvwTipTitle = intvwTip.addTitle"+i;
                    eval(intvwTipTitle);
                    if (isNull(intvwTipTitle)){
                        //console.log("꿀팁 항목"+i+" : " + intvwTipTitle);
                    }
                    intvwTipCntnt = "intvwTipCntnt = intvwTip.addCntnt"+i;
                    eval(intvwTipCntnt);
                    if (isNull(intvwTipCntnt)){
                        //console.log("꿀팁 내용"+i+" : " + intvwTipCntnt);
                    }
                }
            }

            //47.기업 홍보영상
            var comMovUrl = entInfo.prmtnMvUrl;
            //console.log("기업 홍보영상 : " + comMovUrl);
            var comMov = "<iframe src='"+comMovUrl+"' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowfullscreen></iframe>";
            $(".comMov").html(comMov);

            //48.기업 내/외부 사진
            if(isNull(inOutSideImgMap)){
                var inOutSideImg = "";//기업 내/외부 사진
                var inOutSideImgAlt = "";//기업 내/외부 사진Alt
                var comPic = "";
                for(var i=0; i<inOutSideImgMap.length; i++){
                    inOutSideImg = inOutSideImgMap[i].inOutSideImg;
                    inOutSideImgAlt = inOutSideImgMap[i].inOutSideImgAlt;
                    if (isNull(inOutSideImg)){
                        //console.log("기업 내/외부 사진"+i+" : " + inOutSideImg);
                    }
                    if (isNull(inOutSideImgAlt)){
                        inOutSideImgAlt = inOutSideImgAlt.split(".");
                        inOutSideImgAlt = inOutSideImgAlt[0];
                        //console.log("기업 내/외부 사진Alt"+i+" : " + inOutSideImgAlt);
                    }
                    comPic += "<div class='comPic imgFill'><img src='"+inOutSideImg+"' alt='"+inOutSideImgAlt+"' /><div class='over'><span>"+inOutSideImgAlt+"</span></div></div>";
                }
                $('.img_wrap').html(comPic);
            }


//**추가정보탭
            //49.직원정보 -> 사용X

            //50.콘텐츠 노출여부

            //51.기업 콘텐츠 CSS

            //52.기업 콘텐츠 JS

            //53.기업 콘텐츠 IMAGES

            //54.기업 콘텐츠 HTML

//**나이스 정보
            //개요정보
            //1.기업명
            var korEntNm = entInfo.entNm;
            //console.log("기업명 : " + korEntNm);

            //2.대표자명
            var korCeoNm = entInfo.korCeoNm;
            //console.log("대표자명 : " + korCeoNm);

            //3.설립일자/상장일자
            var estbDe = entInfo.estbDe;//설립일자
            var pubcDe = entInfo.pubcDe;//상장일자
            //console.log("설립일자 : " + estbDe);
            //console.log("상장일자 : " + pubcDe);

            //4.사업자번호
            var bizrno = entInfo.bizrno;
            //console.log("사업자번호 : " + bizrno);

            //5.기업형태
            var entsclNm = entInfo.entsclNm;
            //console.log("기업형태 : " + entsclNm);

            //6.표준사업분류 10차
            var ksicNm = entInfo.ksicNm;
            //console.log("표준사업분류 10차 : " + ksicNm);

            //7.종업원
            var empleCnt = entInfo.empleCnt;
            //console.log("종업원 : " + empleCnt);

            //8.주요상품
            var korMainPrdt = entInfo.korMainPrdt;
            //console.log("주요상품 : " + korMainPrdt);

            //9.전화번호
            var hdqtrTelno = entInfo.hdqtrTelno;
            //console.log("전화번호 : " + hdqtrTelno);

            //10.주소
            var hdqtrKorAdrs = entInfo.hdqtrKorAdrs;
            //console.log("주소 : " + hdqtrKorAdrs);

            //재무정보
            //11.수익
            //12.영업이익(손실)
            //13.당기순이익(손실)
            //14.자본금
            var indstRank = ""; //동종업계 내 순위
            var salamt = ""; //수익 - 매출액(백만원)
            var oprtprft = ""; //영업이익(백만원)
            var netincm = ""; //당기순이익(백만원)
            var capital = ""; //자본금 (백만원)
            if(isNullList(finncstmtList)){
                var financeCnt = finncstmtList.length;

                if(financeCnt > 0){
                    //최근 1년 재무정보
                    indstRank = finncstmtList[0].indstRank;
                    salamt = Math.floor(finncstmtList[0].salamt / 1000).toLocaleString();
                    oprtprft = Math.floor(finncstmtList[0].oprtprft / 1000).toLocaleString();
                    netincm = Math.floor(finncstmtList[0].netincm / 1000).toLocaleString();
                    capital = Math.floor(finncstmtList[0].capital / 1000).toLocaleString();
                    //console.log("동종업계 내 순위 최근 1년 : " + indstRank);
                    $(".fiPosition").html(indstRank+"위");
                    //console.log("수익 - 매출액(백만원) 최근 1년 : " + salamt);
                    $(".fiSales").html(salamt);
                    //console.log("영업이익(백만원) 최근 1년: " + oprtprft);
                    //console.log("당기순이익(백만원) 최근 1년 : " + netincm);
                    $(".fiProfit").html(netincm);
                    //console.log("자본금 (백만원) 최근 1년 : " + capital);
                    $(".fiCapital").html(capital);

                    //최근 3년 재무정보
                    //financeCnt = 3;
                    for(var i=0; i<financeCnt; i++){ //최근 3년간의 재무정보를 보여줘야할경우 주석 해제
                        indstRank = finncstmtList[i].indstRank;
                        salamt = Math.floor(finncstmtList[i].salamt / 1000);
                        oprtprft = Math.floor(finncstmtList[i].oprtprft / 1000);
                        netincm = Math.floor(finncstmtList[i].netincm / 1000);
                        capital = Math.floor(finncstmtList[i].capital / 1000);
                        // console.log("동종업계 내 순위 최근 3년"+i+" : " + indstRank);
                        // console.log("동종업계 내 순위 최근 3년"+i+" : " + salamt);
                        // console.log("동종업계 내 순위 최근 3년"+i+" : " + oprtprft);
                        // console.log("동종업계 내 순위 최근 3년"+i+" : " + netincm);
                        // console.log("동종업계 내 순위 최근 3년"+i+" : " + capital);
                    }
                }else{
                    indstRank = "순위없음";
                    salamt = "비공개";
                    oprtprft = "비공개";
                    netincm = "비공개";
                    capital = "비공개";
                }
            }

            //등급정보
            //15.기업평가등급
            var bizGrade = isNull(entInfo.credGrd) ? entInfo.credGrd : "비공개";
            //console.log("기업평가등급 : " + bizGrade);

            //산업현황
            //16.산업명
            var bizNm = entInfo.ksicNm;;
            //console.log("산업명 : " + bizNm);

            //17.평가기준일 TB_ENT_INDSTGRD_EVAHST - 키값이없음

            //18.산업평가 종합등급 TB_ENT_INDSTGRD_EVAHST - 키값이없음


            //19.산업 내 위치 - 활동성(수기 등록)
            var bpActivity = entInfo.bpActivity;
            //console.log("활동성 : " + bpActivity);

            //20.산업 내 위치 - 수익성(수기 등록)
            var bpProfitability = entInfo.bpProfitability;
            //console.log("수익성 : " + bpProfitability);
            $(".bpProfitability").html(bpProfitability);

            //21.산업 내 위치 - 안정성(수기 등록)
            var bpStability = entInfo.bpStability;
            //console.log("안정성 : " + bpStability);
            $(".bpStability").html(bpStability);

            //22.산업 내 위치 - 성장성(수기 등록)
            var bpGrowthability = entInfo.bpGrowthability;
            //console.log("성장성 : " + bpGrowthability);
            $(".bpGrowthability").html(bpGrowthability);

            //23.산업 내 위치 - 규모(수기 등록)
            var bpScale = entInfo.bpScale;
            //console.log("규모 : " + bpScale);
            $(".bpScale").html(bpScale);

            var percentSlider = new Swiper(".percent",{
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: ".mag_mod_percent .swiper-pagination",
                    clickable: true,
                },
                breakpoints:{
                    780: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    }
                }
            });

            //-----------------------------------------------------
            //경쟁현황 - tb_ent_wrkplc_stlescl 확인필요 데이터가 이상함
            //24.산업평균

            //25.중간값

            //26.조회대상기업

            //27.산업 내 순위 1~10위 - 산업 내 순위(최근1년) 1~10위
            //최근 3년 정보만 있고 산업코드로 검색해도 1위 부터 안나옴?
            //tb_ent_wrkplc_stlescl INDST_RANK1~3 확인필요
            //-----------------------------------------------------

            //28.예상평균연봉 - 평균연봉(국민연금공단)
            var avgAnslry = isNull(entInfo.newAvgAnslry) ? Math.floor(entInfo.newAvgAnslry / 1000).toLocaleString() : "비공개";
            //console.log("예상평균연봉 : " + avgAnslry);

            //29.올 해 입사자 연봉 - 신입사원 평균연봉 - 옛날정보 - 연동안됨
            var nwEmplyrAvgAnslry = isNull(entInfo.nwEmplyrAvgAnslry) ? Math.floor(entInfo.nwEmplyrAvgAnslry / 1000).toLocaleString() : "비공개";
            //console.log("올 해 입사자 연봉 : " + nwEmplyrAvgAnslry);

            //30.종업원 수(국민연금공단) tb_ent_cntnts_adit
            var empleAditCnt = entInfo.empleCnt;
            //console.log("종업원 수 : " + empleAditCnt);
            $(".lastEmployeeState .lastTotal").html(empleAditCnt);

            //31.입사율(입사자)(국민연금공단) tb_ent_cntnts_adit
            var annlEpmtrt = isNull(entInfo.annlEpmtrt) ? entInfo.annlEpmtrt : "비공개";
            //console.log("입사율 : " + annlEpmtrt);
            var annlEpmtNmpr = isNull(entInfo.annlEpmtNmpr) ? entInfo.annlEpmtNmpr : "비공개";
            //console.log("입사자 : " + annlEpmtNmpr);
            $(".lastEmployeeState .lastJoin").html(annlEpmtNmpr);

            //32.퇴사율(퇴사자)(국민연금공단) tb_ent_cntnts_adit
            var annlRetirt = isNull(entInfo.annlRetirt) ? entInfo.annlRetirt : "비공개";
            //console.log("퇴사율 : " + annlRetirt);
            var annlRetireNmpr = isNull(entInfo.annlRetireNmpr) ? entInfo.annlRetireNmpr : "비공개";
            //console.log("퇴사자 : " + annlRetireNmpr);
            $(".lastEmployeeState .lastResign").html(annlRetireNmpr);
            
            //31-32 입/퇴사자,총원 12개 데이터 정보
            if(isNullList(annlNmprInfoList)){
                var stdYm = "";//해당 년월
                var annlEpmtNmpr = "";//입사자
                var annlRetireNmpr = "";//퇴사자
                var annlTotalNmpr = "";//총원

                var ctLabel = "";
                var joinCnt = "";
                var resignCnt = "";
                var totalCnt = "";

                //차트영역
                var ctLabelDataList = [];
                var joinCntList = [];
                var resignCntList = [];
                var totalCntList = [];
                joinCntList.push("입사자");
                resignCntList.push("퇴사자");
                totalCntList.push("총원");
                for(var i=0; i<annlNmprInfoList.length; i++){
                    stdYm = annlNmprInfoList[i].stdYm;
                    //console.log("해당년월 : " + stdYm);
                    ctLabel += "<span>"+stdYm+"</span>";

                    annlEpmtNmpr = annlNmprInfoList[i].annlEpmtNmpr;
                    //console.log("입사자 : " + annlEpmtNmpr);
                    joinCnt += "<span>"+annlEpmtNmpr+"</span>";

                    annlRetireNmpr = annlNmprInfoList[i].annlRetireNmpr;
                    //console.log("퇴사자 : " + annlRetireNmpr);
                    resignCnt += "<span>"+annlRetireNmpr+"</span>";

                    annlTotalNmpr = annlNmprInfoList[i].annlTotalNmpr;
                    //console.log("총원 : " + annlTotalNmpr);
                    totalCnt += "<span>"+annlTotalNmpr+"</span>";

                    //차트영역
                    ctLabelDataList.push(stdYm);
                    joinCntList.push(annlEpmtNmpr);
                    resignCntList.push(annlRetireNmpr);
                    totalCntList.push(annlTotalNmpr);
                }
                $('.ctLabel').html(ctLabel);
                $('.joinCnt').html(joinCnt);
                $('.resignCnt').html(resignCnt);
                $('.totalCnt').html(totalCnt);

                //차트영역
                var chart1 = bb.generate({
                        bindto: "#graph_empCnt",
                        data: {
                            type: "line",
                            columns: [
                                joinCntList,
                                resignCntList,
                                totalCntList
                            ],
                            colors: {
                                입사자: "rgba(38, 201, 168, 1)",
                                퇴사자: "rgba(189, 189, 189, 1)",
                                총원: "rgba(255, 139, 16, 1)"
                            }
                        },
                        axis:{
                            x: {
                                type: "category",
                                categories: ctLabelDataList,
                                padding: {
                                    left: .2,
                                    right: .2
                                }
                            }
                        },
                        grid: {
                            x: {
                                show: true
                            },
                            y: {
                                show: true
                            }
                        },
                        point:{
                            pattern: [
                                "<g><circle cx='8' cy='8' r='8'></circle><rect x='4' y='4' width='8' height='8' style='fill:#fff'></rect></g>",
                                "<g><circle cx='8' cy='8' r='8'></circle><rect x='4' y='4' width='8' height='8' style='fill:#fff'></rect></g>",
                                "<g><circle cx='8' cy='8' r='8'></circle><rect x='4' y='4' width='8' height='8' style='fill:#fff'></rect></g>"
                            ]
                        }
                    });
                    setTimeout(function(){
                        chart1.resize();
                    }, 100);
            }

            //33.업력
            var estbYear = isNull(entInfo.estbYear) ? entInfo.estbYear : "비공개";
            //console.log("업력 : " + estbYear);

            //1102추가
            ////관심기업 영역
            if(entInfo.scrapYn == "Y"){//스크랩Y
                $("#scrapYn").addClass("on");
            }

            //채용정보
            //console.log(otherEmpmnListCnt);
            //console.log(otherEmpmnList);
            if(otherEmpmnListCnt > 0){//채용정보가 있는경우
                $("#recruitArea").show();

                var recruitStr = "";
                var closeDateStr = "";
                for(var j=0 ; j<otherEmpmnListCnt ; j++){
                    recruitStr = "";
                    closeDateStr = "";
                    if(otherEmpmnList[j].seStl == "J" || otherEmpmnList[j].seStl == "W"){//잡코리아,워크넷 채용정보
                        //영역 활성화
                        $(".otherRecruit").show();
                        recruitStr += "<tr>";
                        recruitStr += "    <td>"+otherEmpmnList[j].closeDate+" 까지</td>";
                        recruitStr += "    <td>"+otherEmpmnList[j].title;
                        if(otherEmpmnList[j].career != null && otherEmpmnList[j].career != ""){
                            recruitStr += "/"+otherEmpmnList[j].career;
                        }
                        if(otherEmpmnList[j].salary != null && otherEmpmnList[j].salary != ""){
                            recruitStr += "/"+otherEmpmnList[j].salary;
                        }
                        recruitStr += "    </td>";
                        recruitStr += "    <td>";
                        if(otherEmpmnList[j].jobType != null && otherEmpmnList[j].jobType != ""){
                            recruitStr += otherEmpmnList[j].jobType;
                        }
                        recruitStr += "        <a href=\"javascript:void(0);\" onclick=\"fn_mberActLogNew('"+otherEmpmnList[j].apiSeq+"', '"+otherEmpmnList[j].linkUrl+"');\" class=\"btn apply\">지원하기</a>";
                        recruitStr += "    </td>";
                        recruitStr += "</tr>";
                        $("#otherRecruitList").append(recruitStr);
                    }else if(otherEmpmnList[j].seStl == "H" || otherEmpmnList[j].seStl == "PJ" || otherEmpmnList[j].seStl == "PW"){//잡아바 채용정보 + 공공일자리 + 공공근로
                        recruitStr += "<div class=\"box_recruit swiper-slide\">";
                        recruitStr += "   <h4>";
                        recruitStr += "      <a href=\"javascript:;\" onclick=\"fn_mberActLogNew('"+otherEmpmnList[j].apiSeq+"', '"+otherEmpmnList[j].linkUrl+"');\">"+otherEmpmnList[j].title+"</a>";
                        closeDateStr =  otherEmpmnList[j].closeDate;
                        if(closeDateStr != null && closeDateStr != ""){
                            recruitStr += "      <span class=\"period\">";
                            recruitStr += "~"+closeDateStr+"까지";
                            recruitStr += "      </span>";
                        }
                        recruitStr += "	  </h4>";
                        recruitStr += "   <hr/>";
                        recruitStr += "    <div class=\"detail_wrap\">";
                        if(otherEmpmnList[j].career != null || otherEmpmnList[j].acdmcr != null || otherEmpmnList[j].pfCond != null){
                            recruitStr += "        <div>";
                            recruitStr += "            <h5>지원자격</h5>";
                            recruitStr += "            <dl class=\"clearfix\">";
                            if(otherEmpmnList[j].career != null && otherEmpmnList[j].career != ""){
                                recruitStr += "                <dt>경력</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].career+"</dd>";
                            }
                            if(otherEmpmnList[j].acdmcr != null && otherEmpmnList[j].acdmcr != ""){
                                recruitStr += "                <dt>학력</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].acdmcr+"</dd>";
                            }
                            if(otherEmpmnList[j].pfCond != null && otherEmpmnList[j].pfCond != ""){
                                recruitStr += "                <dt>우대</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].pfCond+"</dd>";
                            }
                            recruitStr += "            </dl>";
                            recruitStr += "        </div>";
                        }
                        if(otherEmpmnList[j].jobType != null || otherEmpmnList[j].salary != null || otherEmpmnList[j].wrkArea != null ){
                            recruitStr += "        <div>";
                            recruitStr += "            <h5>근무조건</h5>";
                            recruitStr += "            <dl class=\"clearfix\">";
                            if(otherEmpmnList[j].jobType != null && otherEmpmnList[j].jobType != ""){
                                recruitStr += "                <dt>고용형태</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].jobType+"</dd>";
                            }
                            if(otherEmpmnList[j].salary != null && otherEmpmnList[j].salary != ""){
                                recruitStr += "                <dt>급여</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].salary+"</dd>";
                            }
                            if(otherEmpmnList[j].wrkArea != null && otherEmpmnList[j].wrkArea != ""){
                                recruitStr += "                <dt>근무지역</dt>";
                                recruitStr += "                <dd>"+otherEmpmnList[j].wrkArea+"</dd>";
                            }
                            recruitStr += "            </dl>";
                            recruitStr += "        </div>";
                        }
                        recruitStr += "    </div>";
                        recruitStr += "</div>";
                        //recruitStr += "</br>";
                        $(".box_recruit_wrap .swiper-wrapper").append(recruitStr);
                    }
                }
                var boxRecSlider = new Swiper(".box_recruit_wrap",{
                    pagination: {
                        el: ".box_recruit_wrap .swiper-pagination",
                        clickable: true
                    }
                });
            }

            //카카오지도
            //지도 마커 표시
            var geocoder2 = new daum.maps.services.Geocoder();
            if(hdqtrKorAdrs != null && hdqtrKorAdrs != ""){
                // 주소로 좌표 정보를 요청합니다
                geocoder2.addressSearch(hdqtrKorAdrs, callback1);
            }
            function callback1(result, status) {
                if(status === daum.maps.services.Status.OK) {
                    var latlng = new daum.maps.LatLng(result[0].road_address.y, result[0].road_address.x);

                    var locPosition = {
                        content	: entInfo.entNm
                        ,latlng	: latlng
                    };
                    displayMarker(locPosition);
                }
            }
            onPaginationLink(1);
        }
        , error: function(xhr, status, error){
            console.log("통신에러");
        }
    });
}

////////스크랩 영역
// 관심 카운트
function onCntNew() {
    var scrapYn = $("#scrapYn").hasClass("on");
    var bizrno = bizrNoStr;
    var login = loginYn;
    if(!scrapYn) {
        if(login == "Y") {
            $("#scrapYn").addClass("on");
            $.ajax({
                url				: "/empmn/empmnIntrstAjax.do"
                ,type			: "POST"
                ,contentType	: "application/x-www-form-urlencoded; charset=UTF-8"
                ,dataType		: "json"
                ,data			: {
                    "bizrno"			: bizrno
                    ,"intrstType"	: "UP"
                }
                ,success		: (
                    function(result) {
                        if(result < 1){
                            $("#scrapYn").removeClass("on");
                        }else{
                            scrapLayerPopup("스크랩","마이페이지>관심등록 정보에서<br/>스크랩 정보를 확인할 수 있습니다.");
                        }
                    }
                )
                ,error			: (
                    function(errMsg) {
                        console.log("code=" + error.msg);
                    }
                )
            });
        }else{
            loginLayerPopup("로그인", "로그인후 이용 하여 주세요.");
            return false;
        }
    } else {
        if(login == "Y") {
            $.ajax({
                url				: "/empmn/empmnIntrstAjax.do"
                ,type			: "POST"
                ,contentType	: "application/x-www-form-urlencoded; charset=UTF-8"
                ,dataType		: "json"
                ,data			: {
                    "bizrno"			: bizrno
                    ,"intrstType"	: "DOWN"
                }
                ,success		: (
                    function(result) {
                        if(result > 0){
                            $("#scrapYn").removeClass("on");
                        }
                    }
                )
                ,error			: (
                    function(errMsg) {
                        alertLayerPopup("알림","로그인후 이용 하여 주세요.", null);
                    }
                )
            });
        }else{
            $("#scrapYn").removeClass("on");
        }
    }
}

function copyUrlNew(){
    $("#copyUrlNew").attr('data-clipboard-text',  $("#domainStr").val()+"/empmn/desEntDtl.do?bizrno="+$("#bizrnoStr").val()+"&entCd="+$("#entCdStr").val());
    // URL 복사
    var cb = new Clipboard("#copyUrlNew");
    cb.on("success", function(e) {
        alertLayerPopup("알림", "단축 URL이 생성되었습니다.", null);
    }).on("error", function(e) {
        alertLayerPopup("알림", "단축 URL 생성에 실패하였습니다.", null);
    });
}

function fn_mberActLogNew(seq , url) {
    var btnTypeCd = '02';
    var actCntntsTypeCd = "10";
    var actCntntsSeq = seq;
    var moveUrl = url;

    if (moveUrl == "") {
        return false;
    }

    $.ajax({
        url				: $("#domainStr").val()+"/actLog/mberActLog.do"
        , type		    : "POST"
        , contentType	: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType		: "json"
        , data		    : {"btnTypeCd" : btnTypeCd, "actCntntsTypeCd" : actCntntsTypeCd, "actCntntsSeq" : actCntntsSeq, "moveUrl" : moveUrl}
        , success		: (
            function(obj) {
                if(obj.RESULT == "OK") {
                    goComAppNew(url);
                }
            }
        )
        , error			: (
            function(errMsg) {
                alert("상세 활동 로그 저장을 실패 했습니다.")
            }
        )
    });
}

// 입사지원 상세보기
function goComAppNew(linkUrl){
    // mobile 여부
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    if (mobile) {	// mobile인 경우 화면이동
        location.href = linkUrl;
    }else{	// mobile이 아닌경우 새창
        window.open(linkUrl, "_blank");
    }
}

//지도 마커 표시
function drawMap(mapSrch){
    // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
    var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}),
        contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
        markers = [], // 마커를 담을 배열입니다
        currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        };
    // 지도를 생성합니다
    //var map = new kakao.maps.Map(mapContainer, mapOption);
    //mapSrch.setZoomable(false);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    mapSrch.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(mapSrch);

    // 지도에 idle 이벤트를 등록합니다
    kakao.maps.event.addListener(mapSrch, 'idle', searchPlaces);

    // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
    contentNode.className = 'placeinfo_wrap';

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
    addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
    addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

    // 커스텀 오버레이 컨텐츠를 설정합니다
    placeOverlay.setContent(contentNode);

    // 각 카테고리에 클릭 이벤트를 등록합니다
    addCategoryClickEvent();

    // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
    function addEventHandle(target, type, callback) {
        if (target.addEventListener) {
            target.addEventListener(type, callback);
        } else {
            target.attachEvent('on' + type, callback);
        }
    }

    // 카테고리 검색을 요청하는 함수입니다
    function searchPlaces() {
        if (!currCategory) {
            return;
        }
        // 커스텀 오버레이를 숨깁니다
        placeOverlay.setMap(null);
        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();
        ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true});
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
            displayPlaces(data);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
        } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
        }
    }

    // 지도에 마커를 표출하는 함수입니다
    function displayPlaces(places) {
        // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
        // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
        var order = document.getElementById(currCategory).getAttribute('data-order');

        for ( var i=0; i<places.length; i++ ) {
                // 마커를 생성하고 지도에 표시합니다
                var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);
                // 마커와 검색결과 항목을 클릭 했을 때
                // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                (function(marker, place) {
                    kakao.maps.event.addListener(marker, 'click', function() {
                        displayPlaceInfo(place);
                    });
                })(marker, places[i]);
        }
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position, order) {
        var imageSrc = 'https://ptb.kgoon.pw/images/ico_location_map.png',
        //var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(30, 30),  // 마커 이미지의 크기
            imgOptions =  {
                spriteSize : new kakao.maps.Size(72, 504), // 스프라이트 이미지의 크기
                spriteOrigin : new kakao.maps.Point(36, (order*36)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new kakao.maps.Point(15, 15) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage
            });

        marker.setMap(mapSrch); // 지도 위에 마커를 표출합니다
        markers.push(marker);  // 배열에 생성된 마커를 추가합니다

        return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
        for ( var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
    function displayPlaceInfo (place) {
        var content = '<div class="placeinfo">' +
                      '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';

        if (place.road_address_name) {
            content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                       '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
        }  else {
            content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
        }
        content += '    <span class="tel">' + place.phone + '</span>' +
                   '</div>' +
                   '<div class="after"></div>';
        contentNode.innerHTML = content;
        placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
        placeOverlay.setMap(mapSrch);
    }

    // 각 카테고리에 클릭 이벤트를 등록합니다
    function addCategoryClickEvent() {
        var category = document.getElementById('category'),
            children = category.children;
        for (var i=0; i<children.length; i++) {
            children[i].onclick = onClickCategory;
        }
    }

    // 카테고리를 클릭했을 때 호출되는 함수입니다
    function onClickCategory() {
        var id = this.id,
            className = this.className;
        placeOverlay.setMap(null);

        if (className === 'on') {
            currCategory = '';
            changeCategoryClass();
            removeMarker();
        } else {
            currCategory = id;
            changeCategoryClass(this);
            searchPlaces();
        }
    }

    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    function changeCategoryClass(el) {
        var category = document.getElementById('category'),
            children = category.children,
            i;
        for ( i=0; i<children.length; i++ ) {
            children[i].className = '';
        }
        if (el) {
            el.className = 'on';
        }
    }
}
// 지도에 마커 표시
function displayMarker(locPosition) {
    var mapContainer = document.getElementById("map"); // 지도를 표시할 div
    var mapOption = {
        center	: locPosition.latlng,
        level	: 5
    };

    var mapSrch = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 줌 막기
    mapSrch.setZoomable(false);

    // 지도 타입 변경 컨트롤
    var mapTypeControl2 = new daum.maps.MapTypeControl();
    mapSrch.addControl(mapTypeControl2, daum.maps.ControlPosition.TOPLEFT);

    // 지도 확대 축소 컨트롤 생성 및 설정
    var zoomControl2 = new daum.maps.ZoomControl();
    mapSrch.addControl(zoomControl2, daum.maps.ControlPosition.LEFT);

        var imageSrc = "https://ptb.kgoon.pw/images/ico_mark.png", // 마커이미지의 주소입니다
            imageSize = new kakao.maps.Size(34, 48), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(16, 48)};

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: mapSrch,
            position: locPosition.latlng,
            image: markerImage
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(mapSrch);

    // 커스텀오버레이 생성
    var contentDiv = '<div class="customoverlay">'+locPosition.content+'</div>';
    var customOverlay = new kakao.maps.CustomOverlay({
        map			: mapSrch
        ,position	: locPosition.latlng
        ,content	: contentDiv
        ,yAnchor	: 1
    });

    var find_road = "https://map.kakao.com/link/to/"+locPosition.content+","+locPosition.latlng.Ma+","+locPosition.latlng.La;
            //console.log(find_road);
            $(".find_road").attr("href",find_road);

        drawMap(mapSrch);
}

//페이징
// paging
function onPaginationLink(currentPageNo){
    //페이지출력갯수 설정
    var recordCountPerPageVal = 3;

    $.ajax({
        type : 'post'
        //,async : false
        ,url : '/empmn/selectNaverNewsApiList.do'
        ,contentType : "application/x-www-form-urlencoded; charset=UTF-8"
        //,data : paramStr
        ,data : {
            "srchEntNm" : $("#entNmStr").val(),
            "currentPageNo" : currentPageNo,
            "recordCountPerPage" : recordCountPerPageVal,
        }
        ,dataType : "json"
        ,success : function(data, status, xhr){
            console.log(data);
            var recordCountPerPage = recordCountPerPageVal;   // 한 페이지당 게시되는 게시물 건 수
            var pageSize = 5;	// 페이지 리스트에 게시되는 페이지 건수
            var totalRecordCount = data.COUNT;	// 전체 게시물 건 수
            var totalPageCount = (parseInt((totalRecordCount -1) / recordCountPerPage)) +1;	// 페이지 개수
            var pageNoOnPageList = (parseInt((currentPageNo - 1) / pageSize)) * pageSize; // 페이지 리스트의 번호
            var firstPageNoOnPageList = pageNoOnPageList + 1;	// 페이지 리스트의 첫 페이지 번호
            var lastPageNoOnPageList = firstPageNoOnPageList + pageSize - 1;	// 페이지 리스트의 마지막 페이지 번호
            var prevPageNoOnPageList = firstPageNoOnPageList -1;	// 이전 페이지 번호
            var nextPageNoOnPageList = lastPageNoOnPageList + 1;	// 다음 페이지 번호
            // 마지막 페이지 수 가 전체 페이지 수 보다 큰 경우
            if (lastPageNoOnPageList > totalPageCount) {
                lastPageNoOnPageList = totalPageCount;	// 마지막 페이지 수 는 전체 페이지 수 를 대입
                nextPageNoOnPageList = lastPageNoOnPageList;	// 다음 페이지 수 는 마지막 페이지 수 를 대입
            }
            // 페이지 리스트의 첫 페이지가 1인 경우
            if(firstPageNoOnPageList == 1){
                prevPageNoOnPageList = firstPageNoOnPageList;	// 이전 페이지 수 는 페이지 리스트의 첫 페이지 수 를 대입
            }

            var strHtml = "";
            var pagingHtm = "";
            var naverNewsList = isNull(data.naverNewsApiList.items) ? data.naverNewsApiList.items : "비공개";
            if(data.naverNewsApiList.items != null){
                for(var i = 0; i < naverNewsList.length; i++) {
                    var pubDate = new Date(naverNewsList[i].pubDate);
                    var year = pubDate.getFullYear();
                    var month = pubDate.getMonth() >=10 ? pubDate.getMonth(): '0'+pubDate.getMonth();
                    var date = pubDate.getDate() >=10 ? pubDate.getDate(): '0'+pubDate.getDate();

                    strHtml += "<div class=\"news_row\">";
                    strHtml += "<a href="+naverNewsList[i].link+" target=\"_blank\" class=\"tit\">"+naverNewsList[i].title+"</a>";
                    strHtml += "<div class=\"desc\">"+naverNewsList[i].description+"</div>";
                    strHtml += "<div class=\"reg_date\">"+year+'.'+month+'.'+date+"</div>";
                    strHtml += "</div>";
                }
                $("#news_wrap").html(strHtml);

                // 현재 페이지가 1 이상인 경우 이전 버튼 활성화
                if(currentPageNo > 1){
                    pagingHtm += "<a class=\"prev\" href=\"javascript:;\" onclick=\"onPaginationLink(" + (currentPageNo-1) + "); return false;\"><</a>";
                }else{
                    pagingHtm += "<a class=\"prev disable\" href=\"javascript:;\"  return false;\"><</a>";
                }

                for (var i = firstPageNoOnPageList; i <= lastPageNoOnPageList; i++) {
                    if(i == currentPageNo){
                        pagingHtm += "<a class=\"current\" href=\"javascript:;\" onclick=\"" + currentPageNo + "({" + currentPageNo + "}); return false;\">" + currentPageNo + "</a>";
                    }else{
                        pagingHtm += "<a href=\"javascript:;\" onclick=\"onPaginationLink(" + i + "); return false;\">" + i + "</a></li>";
                    }
                }

                // 현재 페이지가 전체 페이지 보다 작으면 다음 버튼 활성화
                if(currentPageNo < totalPageCount){
                    pagingHtm += "<a class=\"next disable\" href=\"javascript:;\" return false;\">></a>";
                }else{
                    pagingHtm += "<a class=\"next\" href=\"javascript:;\" onclick=\"onPaginationLink(" + (currentPageNo+1) + "); return false;\">></a>";
                }

                $("#paging_wrap").html(strHtml);
                $("#paging_wrap").empty().append(pagingHtm);

            }else{
                strHtml += "<div class=\"no_data\">등록된 정보가 존재하지 않습니다.</div>";
                $("#paging_wrap").empty();
                $("#paging_wrap").html(strHtml);

            }
        }
    });
}

$(document).ready(function() {
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

    $(".imgFill").imgLiquid();

    $('.tab > div').click(function(){
        var item = $(this).attr('data-tab');
        $('.tab > div').removeClass('on');
        $(this).addClass('on');
        $('.conts > div').hide();
        $('.conts > .' + item).show();
        
        setTimeout(function(){
            chart2.resize();
            chart3.resize();
            chart4.resize();
        }, 100);
    });
});