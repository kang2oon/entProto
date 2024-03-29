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
            var entInfo 		= data.ENT_INFO;				//기초자료
            var empmnVO 		= data.usrEmpmnCmnVO;			//인증현황
            var coreValue 		= data.DTAIL_MAP.fieldListAt0; 	//핵심가치 목록
            var strtgTask 		= data.DTAIL_MAP.fieldListAt1; 	//전략과제 목록
            var historyList 	= data.historyList; 			//기업 연혁목록

            var mainBiz 		= data.DTAIL_MAP.fieldListAt2; 		//주요사업영역 목록
            var mainBizImgMap 	= data.mainBizImgMap;				//주요사업영역 이미지 목록
            var bizCnt			=  data.mainBizImgMapCnt;
            var korMainPrdt 		= data.DTAIL_MAP.fieldListAt3; 		//주요상품 목록
            var korMainPrdtImgMap 	= data.korMainPrdtImgMap;	//주요상품 이미지 목록
            var prdtCnt				=  data.korMainPrdtImgMapCnt;

            var orgnz 			= data.DTAIL_MAP.fieldListAt4; 	//조직문화 목록
            var welfareInput	= data.DTAIL_MAP.fieldListAt5; 	//복리후생 입력형 목록
            var welfareChoice	= data.WELFARE_MAP; 			//복리후생 선택형 map
            var deduct 		= welfareChoice.WELFARE_01; 	//공제
            var insurance	= welfareChoice.WELFARE_02;		//연금/보험
            var education	= welfareChoice.WELFARE_03; 	//교육/연수
            var convenience	= welfareChoice.WELFARE_04; 	//생활편의
            var leisure		= welfareChoice.WELFARE_05; 	//여가/행사
            var reward		= welfareChoice.WELFARE_06; 	//보상/수당
            var facilities	= welfareChoice.WELFARE_07; 	//사내시설
            var holiday		= welfareChoice.WELFARE_08; 	//휴가/휴무
            var handicap	= welfareChoice.WELFARE_09; 	//장애인지원

            var ceoIntvw  		= data.DTAIL_MAP.fieldListAt6; 	//대표이사인터뷰 목록
            var entCeoImg 			= data.entCeoImg;				//대표이사인터뷰 이미지
            var entCeoImgAlt 			= data.entCeoImgAlt;				//대표이사인터뷰 이미지Alt

            var prsnlMngIntvw  	= data.DTAIL_MAP.fieldListAt7; 	//인사담당자 인터뷰 목록
            var prsnlMngImg 		= data.prsnlMngImg;				//인사담당자인터뷰 이미지
            var prsnlMngImgAlt 		= data.prsnlMngImgAlt;				//인사담당자인터뷰 이미지Alt

            var incmbIntvw 		= data.DTAIL_MAP.fieldListAt8; 	//현직자 인터뷰 목록
            var entIncmbImg 	    = data.entIncmbImg;				//인사담당자인터뷰 이미지
            var entIncmbImgAlt 	    = data.entIncmbImgAlt;				//인사담당자인터뷰 이미지Alt

            var inOutSideImgMap = data.inOutSideImgMap;//기업 내/외부 사진 이미지 목록
            var comMovUrl 		 = entInfo.prmtnMvUrl;// 기업홍보영상
            var interviewMvUrl 	 = entInfo.interviewMvUrl;// 인터뷰영상

            var emplProcess 	= data.DTAIL_MAP.fieldListAt9; 	//채용절차목록
            var cvrltQstGuide 	= data.DTAIL_MAP.fieldListAt10; //자소서 문항별 가이드 목록
            var rcnIntQst 		= data.DTAIL_MAP.fieldListAt11; //최근 면접질문 목록
            var intvwTip 		= data.DTAIL_MAP.fieldListAt12; //면접꿀팁 목록
            var extraPointFactor= data.DTAIL_MAP.fieldListAt13; //가산점요인 목록
            var rcnEntrnPsSpec 	= data.DTAIL_MAP.fieldListAt14; //최근 입사자 합격스팩 목록

            var finncstmtList	= data.ENT_FINNCSTMT_LIST; 	//기업 재무 목록(동종업계순위, 매출, 당기순이익)

            var niceInfo; 		//= data.ENT_INFO; 				//NICE 기타정보

            const addDtailList = 11; // 공통 (기업컨텐츠 추가상세 목록 사이즈)

//데이터 변수
//**기업정보 탭
            //1.기업명
             var comName = isNull(entInfo.entNm) ? entInfo.entNm : "비공개";
            console.log("기업명 : " + comName);
            $(".comName").html(comName);
            //2.사업자등록번호

            //3.기업형태
            var comForm = isNull(entInfo.entsclNm) ? entInfo.entsclNm : "비공개";
            console.log("기업형태 : " + comForm);
            $(".comForm").html(comForm);
            //4.업종(표준산업분류)
            var comKsicNm = entInfo.ksicNm;
            console.log("업종 : " + comKsicNm);
            $(".incCate").html(comKsicNm);
            //5.대표자명
            var ceo = isNull(entInfo.korCeoNm) ? entInfo.korCeoNm : "비공개";
            console.log("대표자명 : " + ceo);
            $(".ceo").html(ceo);
            //6.전화번호
            var tel = isNull(entInfo.hdqtrTelno) ? entInfo.hdqtrTelno : "비공개";
            console.log("전화번호 : " + tel);
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
            console.log("우편번호 : " + zipcode);
            console.log("주소 : " + address);
            var fullAdd = "("+zipcode+") "+address;
            $(".address").html(fullAdd);
            $(".comAddress").html(address);

            //8.홈페이지
            if(isNull(entInfo.homeUrlNew)){
                var site = entInfo.homeUrlNew;
                console.log("홈페이지 : " + site);
                var siteLink = "<a href='"+site+"' target='_blank'>"+site+"</a>";
                var siteLink2 = "<a href='"+site+"' target='_blank'>홈페이지 바로가기</a>";
                $(".site").html(siteLink);
                $(".siteGo").html(siteLink2);
            }

            //9.담당자
            if(isNull(entInfo.mngNm)){
                var mngNm = entInfo.mngNm;
                console.log("담당자 : " + mngNm);
            }

            //10.담당자 연락처
            if(isNull(entInfo.mngTelno)){
                var mngTelno = entInfo.mngTelno;
                console.log("담당자 연락처 : " + mngTelno);
            }

            //11.담당자 이메일
            if(isNull(entInfo.mngEmail)){
                var mngEmail = entInfo.mngEmail;
                console.log("담당자 이메일 : " + mngEmail);
            }

            //12.등록회원

            //13.등록일자
            var regData = isNull(entInfo.regDt) ? entInfo.regDt : "비공개";
            console.log("등록일자 : " + regData);
            //14.최종 수정일자
             var modData = isNull(entInfo.updDt) ? entInfo.updDt : "비공개";
             console.log("최종 수정일자 : " + modData);
            //15.지역(X 폐지)

            //16.기업 CI(BI)
            var entNewLogoImg 		= data.entNewLogoImg;
            var entNewLogoImgAlt    = data.entNewLogoImgAlt;
            console.log("기업 CI(BI) : " + entNewLogoImg);
            console.log("기업 CI(BI) alt : " + entNewLogoImgAlt);
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
                    console.log("연혁 년도"+i+" : " + historyYear);
                    history += "<div><span>"+historyYear+"</span><ul>";
                    historyMonth = historyList[i].stdMm;
                    console.log("연혁 월"+i+" : " + historyMonth);
                    history += "<li><div class='month'>"+historyMonth+"</div><div class='event'>";

                    historyCntnt = historyList[i].cnts;
                    historyCntntSplit = historyCntnt.split("::");
                    for(var j=0 ; j<historyCntntSplit.length ; j++){
                        console.log("연혁 내용"+i+"_"+j+" : " + historyCntntSplit[j]);
                        history += "<span>"+historyCntntSplit[j]+"</span>";
                    }

                    history += "</div></li></ul></div>";
                }

            }

            $(".history").html(history);

//**기업인증정보 탭 -> Y값인경우 인증
            //18.일자리우수기업
            var cert1 = empmnVO.jobExclncYn;
            console.log("일자리우수기업 : " + cert1);

            //19.여성고용우수기업
            var cert2 = empmnVO.wmExclncYn;
            console.log("여성고용우수기업 : " + cert2);

            //20.청년친화강소기업
            var cert3 = empmnVO.ythSmlGntYn;
            console.log("청년친화강소기업 : " + cert3);

            //21.경기유망중소기업
            var cert4 = empmnVO.bhrcYn;
            console.log("경기유망중소기업 : " + cert4);

            //22.기타기업(X)

            //23.면접수당 지급인증기업
            var cert5 = empmnVO.itvPayYn;
            console.log("면접수당 지급인증기업 : " + cert5);

//**기업복지정보 탭
            //24.복리후생-선택형
            if ( isNullList(deduct) ){//공제
                var deductStr = "";
                for(var i=0; i<deduct.length; i++){
                    deductStr = deduct[i].cmnNm;
                    console.log("복리후생 공제"+i+" : " + deductStr);
                }
            }
            if ( isNullList(insurance) ){//연금/보험
                var insuranceStr = "";
                for(var i=0; i<insurance.length; i++){
                    insuranceStr = insurance[i].cmnNm;
                    console.log("복리후생 연금/보험"+i+" : " + insuranceStr);
                }
            }
            if ( isNullList(education)){//교육/연수
                var educationStr = "";
                for(var i=0; i<education.length; i++){
                    var nullcheck = education[i];
                    if (nullcheck !=""){
                        educationStr = education[i].cmnNm;
                         console.log("복리후생 교육/연수"+i+" : " + educationStr);
                    }
                }

            }
            if ( isNullList(convenience) ){//생활편의
                var convenienceStr = "";
                for(var i=0; i<convenience.length; i++){
                    convenienceStr = convenience[i].cmnNm;
                    console.log("복리후생 생활편의"+i+" : " + convenienceStr);
                }

            }
            if ( isNullList(leisure) ){//여가/행사
                var leisureStr = "";
                for(var i=0; i<leisure.length; i++){
                    leisureStr = leisure[i].cmnNm;
                     console.log("복리후생 여가/행사"+i+" : " + leisureStr);
                }

            }
            if ( isNullList(reward) ){//보상/수당
                var rewardStr = "";
                for(var i=0; i<reward.length; i++){
                    rewardStr = reward[i].cmnNm;
                    console.log("복리후생 보상/수당"+i+" : " + rewardStr);
                }
            }
            if ( isNullList(facilities) ){//사내시설
                var facilitiesStr = "";
                for(var i=0; i<facilities.length; i++){
                    facilitiesStr = facilities[i].cmnNm;
                    console.log("복리후생 사내시설"+i+" : " + facilitiesStr);
                }
            }
            if ( isNullList(holiday) ){//휴가/휴무
                var holidayStr = "";
                for(var i=0; i<holiday.length; i++){
                    holidayStr = holiday[i].cmnNm;
                    console.log("복리후생 휴가/휴무"+i+" : " + holidayStr);
                }
            }
            if ( isNullList(handicap) ){//장애인지원
                var handicapStr = "";
                for(var i=0; i<handicap.length; i++){
                    handicapStr = handicap[i].cmnNm;
                    console.log("복리후생 장애인지원"+i+" : " + handicapStr);
                }
            }
            if ( isNull(entInfo.etc1)){
                var etcStr = "";
                for(var i=0; i<10; i++){ //기타항목 총 10개 고정
                    var etcValue = "etcStr = entInfo.etc"+i;
                    eval(etcValue);
                    if (isNull(etcStr)){
                        console.log("복리후생 기타항목 총 10개 고정"+i+" : " + etcStr);
                    }
                }
            }
            //복리후생 - 입력형
            if(isNull(welfareInput)){
                var welfareInputTitle = "";//복리후생 입력형 제목
                var welfareInputCntnt = "";//복리후생 입력형 내용
                for(var i=1; i<addDtailList; i++){
                    welfareInputTitle = "welfareInputTitle = welfareInput.addTitle"+i;
                    eval(welfareInputTitle);
                    if (isNull(welfareInputTitle)){
                        console.log("복리후생 입력형 제목"+i+" : " + welfareInputTitle);
                    }
                    welfareInputCntnt = "welfareInputCntnt = welfareInput.addCntnt"+i;
                    eval(welfareInputCntnt);
                    if (isNull(welfareInputCntnt)){
                        console.log("복리후생 입력형 내용"+i+" : " + welfareInputCntnt);
                    }
                }
            }


            //25.조직문화
            if(isNull(orgnz)){
                var orgnzTitle = "";//조직문화
                var orgnzCntnt = "";//조직문화 내용
                for(var i=1; i<addDtailList; i++){
                    orgnzTitle = "orgnzTitle = orgnz.addTitle"+i;
                    eval(orgnzTitle);
                    if (isNull(orgnzTitle)){
                        console.log("조직문화"+i+" : " + orgnzTitle);
                    }
                    orgnzCntnt = "orgnzCntnt = orgnz.addCntnt"+i;
                    eval(orgnzCntnt);
                    if (isNull(orgnzCntnt)){
                        console.log("조직문화 내용"+i+" : " + orgnzCntnt);
                    }
                }
            }

//**기업콘텐츠 탭
            //26.기업 썸네일 목록 이미지
            var entListImg 		= data.entListImgUrl;
            var entListImgAlt 		= data.entListImgUrlAlt;
            console.log("기업 썸네일 목록 이미지 : " + entListImg);
            console.log("기업 썸네일 목록 이미지Alt : " + entListImg);

            //27.기업 썸네일 오버 이미지
            var entMouseImg 		= data.entMouseImgUrl;
            var entMouseImgAlt 		= data.entMouseImgUrlAlt;
            console.log("기업 썸네일 오버 이미지 : " + entMouseImg);
            console.log("기업 썸네일 오버 이미지Alt : " + entMouseImgAlt);

            //28.기업 대표 이미지
            var entRepresentImg 		= data.entRepresentImgUrl;
            var entRepresentImgAlt 		= data.entRepresentImgUrlAlt;
            console.log("기업 대표 이미지 : " + entRepresentImg);
            console.log("기업 대표 이미지Alt : " + entRepresentImgAlt);

            //29.슬로건
            var slogan = entInfo.slogan;
            console.log("슬로건 : " + slogan);
            $(".slogan").html(slogan);

            //30.기업비전
            var vision = entInfo.entVision;
            console.log("기업비전 : " + vision);
            $(".vision").html(vision);

            //31.기업미션
            var mission = entInfo.entMission;
            console.log("기업미션 : " + mission);
            $(".mission").html(mission);

            //32.핵심가치
            if(isNull(coreValue)){
                var coreValueTitle = "";//핵심가치 제목
                var coreValueCntnt = "";//핵심가치 내용
                for(var i=1; i<addDtailList; i++){
                    coreValueTitle = "coreValueTitle = coreValue.addTitle"+i;
                    eval(coreValueTitle);
                    if (isNull(coreValueTitle)){
                        console.log("핵심가치 제목"+i+" : " + coreValueTitle);
                    }
                    coreValueCntnt = "coreValueCntnt = coreValue.addCntnt"+i;
                    eval(coreValueCntnt);
                    if (isNull(coreValueCntnt)){
                        console.log("핵심가치 내용"+i+" : " + coreValueCntnt);
                    }
                }

            }


            //33.SWOT 분석
            if(isNull(entInfo.swotS)){
                var s = entInfo.swotS;
                var w = entInfo.swotW;
                var o = entInfo.swotO;
                var t = entInfo.swotT;

                console.log("SWOT 분석 S : " + s);
                console.log("SWOT 분석 W : " + w);
                console.log("SWOT 분석 O : " + o);
                console.log("SWOT 분석 T : " + t);
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
                            console.log("주요사업영역 이미지"+i+" : " + mainBizImg);
                            bizDiv += "<div><img src='"+mainBizImg+"' alt='"+mainBizImg+"' />";
                        }
                        mainBizImgAlt = "mainBizImgAlt = mainBizImgMap.mainBizImgAlt"+i;
                        eval(mainBizImgAlt);
                        if (isNull(mainBizImgAlt)){
                            console.log("주요사업영역 이미지Alt"+i+" : " + mainBizImgAlt);
                        }

                    }else{
                        break;
                    }
                    
                    
                    if (isNull(mainBizTitle)){
                        console.log("주요사업영역 제목"+i+" : " + mainBizTitle);
                        bizDiv += "<h4>"+mainBizTitle+"</h4>";
                    }

                    
                    if (isNull(mainBizCntnt)){
                        console.log("주요사업영역 내용"+i+" : " + mainBizCntnt);
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
                            console.log("주요상품 이미지"+i+" : " + productImg);
                            product += "<div><img src='"+productImg+"' alt='"+productTitle+"' />";
                        }
                        if (isNull(productImgAlt)){
                            console.log("주요상품 이미지Alt"+i+" : " + productImgAlt);
                        }
                    }else{
                        break;
                    }

                    if (isNull(productTitle)){
                        console.log("주요상품 제목"+i+" : " + productTitle);
                        product += "<h4>"+productTitle+"</h4>";
                    }

                    productCntnt = "productCntnt = korMainPrdt.addCntnt"+i;
                    eval(productCntnt);
                    if (isNull(productCntnt)){
                        console.log("주요상품 내용"+i+" : " + productCntnt);
                        product += "<p>"+productCntnt+"</p></div>";
                    }

                }

            }

            $(".product").html(product);

            //36.기업 전략과제
            if(isNull(strtgTask)){
                var strtgTaskTitle = "";//전략과제 제목
                var strtgTaskCntnt = "";//전략과제 내용
                for(var i=1; i<addDtailList; i++){
                    strtgTaskTitle = "strtgTaskTitle = strtgTask.addTitle"+i;
                    eval(strtgTaskTitle);
                    if (isNull(strtgTaskTitle)){
                        console.log("전략과제 제목"+i+" : " + strtgTaskTitle);
                    }

                    strtgTaskCntnt = "strtgTaskCntnt = strtgTask.addCntnt"+i;
                    eval(strtgTaskCntnt);
                    if (isNull(strtgTaskCntnt)){
                        console.log("전략과제 내용"+i+" : " + strtgTaskCntnt);
                    }

                }
            }

            //37.CEO 인터뷰
            var ivCeoPhoto = '';//CEO 이미지
            var ivCeoPhotoAlt = '';//CEO 이미지Alt
            if(isNull(entCeoImg)){
                ivCeoPhoto = entCeoImg;
                console.log("CEO 이미지 : " + ivCeoPhoto);
                ivCeoPhotoAlt = entCeoImgAlt;
                console.log("CEO 이미지Alt : " + ivCeoPhotoAlt);
            }
            if(isNull(ceoIntvw)){//CEO 인터뷰
                var ivCeoTitle = "";//CEO 인터뷰 질문
                var ivCeoCntnt = "";//CEO 인터뷰 답변
                for(var i=1; i<addDtailList; i++){
                    ivCeoTitle = "ivCeoTitle = ceoIntvw.addTitle"+i;
                    eval(ivCeoTitle);
                    if (isNull(ivCeoTitle)){
                        console.log("CEO 인터뷰 질문"+i+" : " + ivCeoTitle);
                    }

                    ivCeoCntnt = "ivCeoCntnt = ceoIntvw.addCntnt"+i;
                    eval(ivCeoCntnt);
                    if (isNull(ivCeoCntnt)){
                        console.log("CEO 인터뷰 답변"+i+" : " + ivCeoCntnt);
                    }

                }
            }

            //38.채용담당자 인터뷰
            var ivMngPhoto = '';
            var ivMngPhotoAlt = '';
            if(isNull(prsnlMngImg)){//채용담당자 이미지
                   ivMngPhoto = prsnlMngImg;
                   console.log("채용담당자 이미지 : " + ivMngPhoto);
                   ivMngPhotoAlt = prsnlMngImgAlt;
                   console.log("채용담당자 이미지Alt : " + ivMngPhotoAlt);
            }
            if(isNull(prsnlMngIntvw)){//채용담당자 인터뷰
                var ivMngTitle = "";//채용담당자 인터뷰 질문
                var ivMngCntnt = "";//채용담당자 인터뷰 답변
                for(var i=1; i<addDtailList; i++){
                    ivMngTitle = "ivMngTitle = prsnlMngIntvw.addTitle"+i;
                    eval(ivMngTitle);
                    if (isNull(ivMngTitle)){
                        console.log("채용담당자 인터뷰 질문"+i+" : " + ivMngTitle);
                    }

                    ivMngCntnt= "ivMngCntnt = prsnlMngIntvw.addCntnt"+i;
                    eval(ivMngCntnt);
                    if (isNull(ivMngCntnt)){
                        console.log("채용담당자 인터뷰 답변"+i+" : " + ivMngCntnt);
                    }

                }
            }

            //39.신입사원 인터뷰
            var ivEmpPhoto = '';
            var ivEmpPhotoAlt = '';
            if(isNull(entIncmbImg)){//신입사원 이미지
                ivEmpPhoto = entIncmbImg;
                console.log("신입사원 이미지 : " + ivEmpPhoto);
                ivEmpPhotoAlt = entIncmbImgAlt;
                console.log("신입사원 이미지Alt : " + ivEmpPhotoAlt);
            }
            if(isNull(incmbIntvw)){
                var ivEmpTitle = "";//신입사원 인터뷰 질문
                var ivEmpCntnt = "";//신입사원 인터뷰 답변
                for(var i=1; i<addDtailList; i++){
                    ivEmpTitle = "ivEmpTitle = incmbIntvw.addTitle"+i;
                    eval(ivEmpTitle);
                    if (isNull(ivEmpTitle)){
                        console.log("신입사원 인터뷰 질문"+i+" : " + ivEmpTitle);
                    }

                    ivEmpCntnt = "ivEmpCntnt = incmbIntvw.addCntnt"+i;
                    eval(ivEmpCntnt);
                    if (isNull(ivEmpCntnt)){
                        console.log("신입사원 인터뷰 답변"+i+" : " + ivEmpCntnt);
                    }

                }
            }

            //40.채용절차
            if(isNull(emplProcess)){
                var recruitProcessTitle = "";//채용단계
                var recruitProcessCntnt = "";//채용내용
                for(var i=1; i<addDtailList; i++){
                    recruitProcessTitle = "recruitProcessTitle = emplProcess.addTitle"+i;
                    eval(recruitProcessTitle);
                    if (isNull(recruitProcessTitle)){
                        console.log("채용단계"+i+" : " + recruitProcessTitle);
                    }

                    recruitProcessCntnt = "recruitProcessCntnt = emplProcess.addCntnt"+i;
                    eval(recruitProcessCntnt);
                    if (isNull(recruitProcessCntnt)){
                        console.log("채용내용"+i+" : " + recruitProcessCntnt);
                    }

                }
            }

            //41.현직자 복지 사용후기
            var incmbDept = isNull(entInfo.incmbDept) ? entInfo.incmbDept : "비공개"; //소속부서(현직자복지후기)
            var incmbNm = isNull(entInfo.incmbNm) ? entInfo.incmbNm : "비공개"; //이름(현직자복지후기)
            var incmbReview = isNull(entInfo.incmbReview) ? entInfo.incmbReview : "비공개"; //후기(현직자복지후기)

            console.log("소속부서(현직자복지후기) : " + incmbDept);
            console.log("이름(현직자복지후기) : " + incmbNm);
            console.log("후기(현직자복지후기) : " + incmbReview);

            //42.자소서 문항별 가이드
            if(isNull(cvrltQstGuide)){
                var cvrltQstGuideTitle = "";//자소서 문항
                var cvrltQstGuideCntnt = "";//자소서 답변
                for(var i=1; i<addDtailList; i++){
                    cvrltQstGuideTitle = "cvrltQstGuideTitle = cvrltQstGuide.addTitle"+i;
                    eval(cvrltQstGuideTitle);
                    if (isNull(cvrltQstGuideTitle)){
                        console.log("자소서 문항"+i+" : " + cvrltQstGuideTitle);
                    }

                    cvrltQstGuideCntnt = "cvrltQstGuideCntnt = cvrltQstGuide.addCntnt"+i;
                    eval(cvrltQstGuideCntnt);
                    if (isNull(cvrltQstGuideCntnt)){
                        console.log("자소서 답변"+i+" : " + cvrltQstGuideCntnt);
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
                        console.log("최근 면접질문"+i+" : " + rcnIntQstTitle);
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
                        console.log("가산점 요인"+i+" : " + extraPointFactorTitle);
                    }

                    extraPointFactorCntnt = "extraPointFactorCntnt = extraPointFactor.addCntnt"+i;
                    eval(extraPointFactorCntnt);
                    if (isNull(extraPointFactorCntnt)){
                        console.log("가산점 내용"+i+" : " + extraPointFactorCntnt);
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
                        console.log("입사자 스펙"+i+" : " + rcnEntrnPsSpecTitle);
                    }

                    rcnEntrnPsSpecCntnt = "rcnEntrnPsSpecCntnt = rcnEntrnPsSpec.addCntnt"+i;
                    eval(rcnEntrnPsSpecCntnt);
                    if (isNull(rcnEntrnPsSpecCntnt)){
                        console.log("입사자 내용"+i+" : " + rcnEntrnPsSpecCntnt);
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
                        console.log("꿀팁 항목"+i+" : " + intvwTipTitle);
                    }

                    intvwTipCntnt = "intvwTipCntnt = intvwTip.addCntnt"+i;
                    eval(intvwTipCntnt);
                    if (isNull(intvwTipCntnt)){
                        console.log("꿀팁 내용"+i+" : " + intvwTipCntnt);
                    }

                }
            }

            //47.기업 홍보영상
            var comMovUrl = entInfo.prmtnMvUrl;
            console.log("기업 홍보영상 : " + comMovUrl);

            //48.기업 내/외부 사진
            if(isNull(inOutSideImgMap)){
                var inOutSideImg = "";//기업 내/외부 사진
                var inOutSideImgAlt = "";//기업 내/외부 사진Alt
                for(var i=1; i<inOutSideImgMap.length; i++){
                    inOutSideImg = inOutSideImgMap[i].inOutSideImg;
                    inOutSideImgAlt = inOutSideImgMap[i].inOutSideImgAlt;
                    if (isNull(inOutSideImg)){
                        console.log("기업 내/외부 사진"+i+" : " + inOutSideImg);
                    }
                    if (isNull(inOutSideImgAlt)){
                        console.log("기업 내/외부 사진Alt"+i+" : " + inOutSideImgAlt);
                    }


                }

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
            console.log("기업명 : " + korEntNm);

            //2.대표자명
            var korCeoNm = entInfo.korCeoNm;
            console.log("대표자명 : " + korCeoNm);

            //3.설립일자/상장일자
            var estbDe = entInfo.estbDe;//설립일자
            var pubcDe = entInfo.pubcDe;//상장일자
            console.log("설립일자 : " + estbDe);
            console.log("상장일자 : " + pubcDe);

            //4.사업자번호
            var bizrno = entInfo.bizrno;
            console.log("사업자번호 : " + bizrno);

            //5.기업형태
            var entsclNm = entInfo.entsclNm;
            console.log("기업형태 : " + entsclNm);

            //6.표준사업분류 10차
            var ksicNm = entInfo.ksicNm;
            console.log("표준사업분류 10차 : " + ksicNm);

            //7.종업원
            var empleCnt = entInfo.empleCnt;
            console.log("종업원 : " + empleCnt);

            //8.주요상품
            var korMainPrdt = entInfo.korMainPrdt;
            console.log("주요상품 : " + korMainPrdt);

            //9.전화번호
            var hdqtrTelno = entInfo.hdqtrTelno;
            console.log("전화번호 : " + hdqtrTelno);

            //10.주소
            var hdqtrKorAdrs = entInfo.hdqtrKorAdrs;
            console.log("주소 : " + hdqtrKorAdrs);

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

                    console.log("동종업계 내 순위 최근 1년 : " + indstRank);
                    $(".fiPosition").html(indstRank+"위");
                    console.log("수익 - 매출액(백만원) 최근 1년 : " + salamt);
                    $(".fiSales").html(salamt);
                    console.log("영업이익(백만원) 최근 1년: " + oprtprft);
                    console.log("당기순이익(백만원) 최근 1년 : " + netincm);
                    $(".fiProfit").html(netincm);
                    console.log("자본금 (백만원) 최근 1년 : " + capital);
                    $(".fiCapital").html(capital);


                    //최근 3년 재무정보
                    financeCnt = 3;
                    for(var i=0; i<financeCnt; i++){ //최근 3년간의 재무정보를 보여줘야할경우 주석 해제
                        indstRank = finncstmtList[i].indstRank;
                        salamt = Math.floor(finncstmtList[i].salamt / 1000);
                        oprtprft = Math.floor(finncstmtList[i].oprtprft / 1000);
                        netincm = Math.floor(finncstmtList[i].netincm / 1000);
                        capital = Math.floor(finncstmtList[i].capital / 1000);

                        console.log("동종업계 내 순위 최근 3년"+i+" : " + indstRank);
                        console.log("동종업계 내 순위 최근 3년"+i+" : " + salamt);
                        console.log("동종업계 내 순위 최근 3년"+i+" : " + oprtprft);
                        console.log("동종업계 내 순위 최근 3년"+i+" : " + netincm);
                        console.log("동종업계 내 순위 최근 3년"+i+" : " + capital);
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
            console.log("기업평가등급 : " + bizGrade);

            //산업현황
            //16.산업명
            var bizNm = entInfo.ksicNm;;
            console.log("산업명 : " + bizNm);

            //17.평가기준일 TB_ENT_INDSTGRD_EVAHST - 키값이없음

            //18.산업평가 종합등급 TB_ENT_INDSTGRD_EVAHST - 키값이없음


            //19.산업 내 위치 - 활동성(수기 등록)
            var bpActivity = entInfo.bpActivity;
            console.log("활동성 : " + bpActivity);

            //20.산업 내 위치 - 수익성(수기 등록)
            var bpProfitability = entInfo.bpProfitability;
            console.log("수익성 : " + bpProfitability);
            $(".bpProfitability").html(bpProfitability);

            //21.산업 내 위치 - 안정성(수기 등록)
            var bpStability = entInfo.bpStability;
            console.log("안정성 : " + bpStability);
            $(".bpStability").html(bpStability);

            //22.산업 내 위치 - 성장성(수기 등록)
            var bpGrowthability = entInfo.bpGrowthability;
            console.log("성장성 : " + bpGrowthability);
            $(".bpGrowthability").html(bpGrowthability);

            //23.산업 내 위치 - 규모(수기 등록)
            var bpScale = entInfo.bpScale;
            console.log("규모 : " + bpScale);
            $(".bpScale").html(bpScale);

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
            console.log("예상평균연봉 : " + avgAnslry);

            //29.올 해 입사자 연봉 - 신입사원 평균연봉 - 옛날정보 - 연동안됨
            var nwEmplyrAvgAnslry = isNull(entInfo.nwEmplyrAvgAnslry) ? Math.floor(entInfo.nwEmplyrAvgAnslry / 1000).toLocaleString() : "비공개";
            console.log("올 해 입사자 연봉 : " + nwEmplyrAvgAnslry);

            //30.종업원 수(국민연금공단) tb_ent_untact_empmn_adit
            var empleAditCnt = entInfo.empleCnt;
            console.log("종업원 수 : " + empleAditCnt);
            $(".lastEmployeeState .lastTotal").html(empleAditCnt);

            //31.입사율(입사자)(국민연금공단) tb_ent_untact_empmn_adit
            var annlEpmtrt = isNull(entInfo.annlEpmtrt) ? entInfo.annlEpmtrt : "비공개";
            console.log("입사율 : " + annlEpmtrt);
            var annlEpmtNmpr = isNull(entInfo.annlEpmtNmpr) ? entInfo.annlEpmtNmpr : "비공개";
            console.log("입사자 : " + annlEpmtNmpr);
            $(".lastEmployeeState .lastJoin").html(annlEpmtNmpr);

            //32.퇴사율(퇴사자)(국민연금공단) tb_ent_untact_empmn_adit
            var annlRetirt = isNull(entInfo.annlRetirt) ? entInfo.annlRetirt : "비공개";
            console.log("퇴사율 : " + annlRetirt);
            var annlRetireNmpr = isNull(entInfo.annlRetireNmpr) ? entInfo.annlRetireNmpr : "비공개";
            console.log("퇴사자 : " + annlRetireNmpr);
            $(".lastEmployeeState .lastResign").html(annlRetireNmpr);

            //33.업력
            var estbYear = isNull(entInfo.estbYear) ? entInfo.estbYear : "비공개";
            console.log("업력 : " + estbYear);

        }
        , error: function(xhr, status, error){

            console.log("통신에러");
        }

    });


}