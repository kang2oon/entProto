const xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
    const myObj = JSON.parse(this.responseText);
    //var baseUrl = "https://cdn.jsdelivr.net/gh/kang2oon/entProto/";
    // 등록일
    var regData = myObj.regData;
    $(".regData").html(regData);
    // 최종수정일
    var modData = myObj.modData;
    $(".modData").html(modData);
    // 기업명
    var comName = myObj.comName;
    $(".comName").html(comName);
    // 사업자등록번호
    var comNum = myObj.comNum;
    $(".comNum").html(comNum);
    // 기업형태
    var comForm = myObj.comForm;
    $(".comForm").html(comForm);
    // 업종
    var incCate = myObj.incCate;
    $(".incCate").html(incCate);
    // 대표자
    var ceo = myObj.ceo;
    $(".ceo").html(ceo);
    // 전화번호
    var tel = myObj.tel;
    var telLink = "<a href='tel:"+tel+"'>"+tel+"</a>";
    $(".tel").html(telLink);
    // 주소
    var zipcode = myObj.zipcode;
    var address = myObj.address;
    var fullAdd = "("+zipcode+") "+address;
    $(".address").html(fullAdd);
    // 홈페이지
    var site = myObj.site;
    var siteLink = "<a href='"+site+"' target='_blank'>"+site+"</a>";
    $(".site").html(siteLink);
    // 담당자
    var manager = myObj.manager;
    var mngTel = myObj.mngTel;
    var mngEmail = myObj.mngEmail;
    var mngEmailLink = "<a href='mailto:"+mngEmail+"' target='_blank'>"+mngEmail+"</a>";
    $(".manager").html(manager);
    $(".mngTel").html(mngTel);
    $(".mngEmail").html(mngEmailLink);
    // 기업 CI
    var imgCiUrl = myObj.imgCi;
    var imgCi = "<img src='"+imgCiUrl+"' alt='"+comName+"'/>";
    $(".imgCi").html(imgCi);
    // 연혁
    var historyCnt = myObj.history.length;
    var histroyWrap = myObj.history;
    var history = "";
    for(var i=0; i<historyCnt; i++){
        var remarks = histroyWrap[i].remark;
        var remarkCnt = remarks.length;
        var remark = "";
        for(var j=0; j<remarkCnt; j++){
            remark += "<li>"+remarks[j].month;
            remark += " <span>"+remarks[j].event+"</span>";	
            remark += "</li>";
        }
        history += "<div>"+histroyWrap[i].year;
        history += "<ul>"+remark+"</ul>";	
        history += "</div>"
    }
    $(".history").html(history);
    // 인증현황
    var certWrap = myObj.certified[0];
    var cert1 = certWrap.cert1;
    var cert2 = certWrap.cert2;
    var cert3 = certWrap.cert3;
    var cert4 = certWrap.cert4;
    var cert5 = certWrap.cert5;
    var certified = "";
    if ( cert1 ) {
        certified += "<span>일자리우수기업</span>";
    }
    if ( cert2 ) {
        certified += "<span>여성고용우수기업</span>";
    }
    if ( cert3 ) {
        certified += "<span>청년친화강소기업</span>";
    }
    if ( cert4 ) {
        certified += "<span>경기유망중소기업</span>";
    }
    if ( cert5 ) {
        certified += "<span>면접수당지급인증기업</span>";
    }
    $(".certified").html(certified);
    // 복지정보
    var welfareWrap = myObj.welfare[0];
    var deduct = welfareWrap.deduct;
    var insurance = welfareWrap.insurance;
    var education = welfareWrap.education;
    var convenience = welfareWrap.convenience;
    var leisure = welfareWrap.leisure;
    var reward = welfareWrap.reward;
    var facilities = welfareWrap.facilities;
    var holiday = welfareWrap.holiday;
    var handicap = welfareWrap.handicap;
    var etc = welfareWrap.etc;
    var welfare = "";
    if ( deduct.length > 0 ){
        welfare += "<dl><dt>공제</dt>";
        for(var i=0; i<deduct.length; i++){
            welfare += "<dd>"+deduct[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( insurance.length > 0 ){
        welfare += "<dl><dt>연금/보험</dt>";
        for(var i=0; i<insurance.length; i++){
            welfare += "<dd>"+insurance[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( education.length > 0 ){
        welfare += "<dl><dt>교육/연수</dt>";
        for(var i=0; i<education.length; i++){
            welfare += "<dd>"+education[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( convenience.length > 0 ){
        welfare += "<dl><dt>생활편의</dt>";
        for(var i=0; i<convenience.length; i++){
            welfare += "<dd>"+convenience[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( leisure.length > 0 ){
        welfare += "<dl><dt>여가/행사</dt>";
        for(var i=0; i<leisure.length; i++){
            welfare += "<dd>"+leisure[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( reward.length > 0 ){
        welfare += "<dl><dt>보상/수당</dt>";
        for(var i=0; i<reward.length; i++){
            welfare += "<dd>"+reward[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( facilities.length > 0 ){
        welfare += "<dl><dt>사내시설</dt>";
        for(var i=0; i<facilities.length; i++){
            welfare += "<dd>"+facilities[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( holiday.length > 0 ){
        welfare += "<dl><dt>휴무/휴가</dt>";
        for(var i=0; i<holiday.length; i++){
            welfare += "<dd>"+holiday[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( handicap.length > 0 ){
        welfare += "<dl><dt>장애인지원</dt>";
        for(var i=0; i<handicap.length; i++){
            welfare += "<dd>"+handicap[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    if ( etc.length > 0 ){
        welfare += "<dl><dt>기타</dt>";
        for(var i=0; i<etc.length; i++){
            welfare += "<dd>"+etc[i]+"</dd>";
        }
        welfare += "</dl>";
    }
    $(".welfare").html(welfare);
    // 조직문화
    var dvCultureCnt = myObj.dvCulture.length;
    var dvCultureWrap = myObj.dvCulture;
    var dvCulture = "<div class='swiper-wrapper'>";
    for(var i=0; i<dvCultureCnt; i++){
        var title = dvCultureWrap[i].title;
        var desc = dvCultureWrap[i].desc;
        dvCulture += "<div class='swiper-slide'>";
        dvCulture += "<div>"+title+"</div>";
        dvCulture += "<div>"+desc+"</div>";
        dvCulture += "</div>";
    }
    dvCulture += "</div>";
    $(".dvCulture").html(dvCulture);
    // 인재상
    var talentCnt = myObj.talent.length;
    var talentWrap = myObj.talent;
    var talent = "<ul>";
    for(var i=0; i<talentCnt; i++){
        talent += "<li>"+talentWrap[i]+"</li>";
    }
    talent += "</ul>";
    $(".talent").html(talent);
    // 슬로건
    var slogan = myObj.slogan;
    $(".slogan").html(slogan);
    // 비전
    var vision = myObj.vision;
    $(".vision").html(vision);
    // 미션
    var mission = myObj.mission;
    $(".mission").html(mission);
    // 핵심가치
    var kvCnt = myObj.keyValue.length;
    var kvWrap = myObj.keyValue;
    var keyValue = "<ul>";
    for(var i=0; i<kvCnt; i++){
        keyValue += "<li>"+kvWrap[i]+"</li>";
    }
    keyValue += "</ul>";
    $(".keyValue").html(keyValue);
    // SWOT
    var swotWrap = myObj.swot[0];
    var s = swotWrap.s;
    var w = swotWrap.w;
    var o = swotWrap.o;
    var t = swotWrap.t;
    var swot = "";
        swot += "<strong>S</strong> : "+s+"</br/>";
        swot += "<strong>W</strong> : "+w+"</br/>";
        swot += "<strong>O</strong> : "+o+"</br/>";
        swot += "<strong>T</strong> : "+t+"</br/>";
    $(".swot").html(swot);
    // 주요사업영역
    var bizDivCnt = myObj.bizDiv.length;
    var bizDivWrap = myObj.bizDiv;
    var bizDiv = "";
    for(var i=0; i<bizDivCnt; i++){
        var title = bizDivWrap[i].title;
        var desc = bizDivWrap[i].desc;
        var img = bizDivWrap[i].img;
        bizDiv += "<div><img src='"+img+"' alt='"+title+"'>";
        bizDiv += "<h3>"+title+"</h3>";
        bizDiv += "<p>"+desc+"</p>"
        bizDiv += "</div>";
    }
    $(".bizDiv").html(bizDiv);
    // 주요상품
    var productCnt = myObj.product.length;
    var productWrap = myObj.product;
    var product = "";
    for(var i=0; i<productCnt; i++){
        var title = productWrap[i].title;
        var desc = productWrap[i].desc;
        var img = productWrap[i].img;
        product += "<div><img src='"+img+"' alt='"+title+"'>";
        product += "<h3>"+title+"</h3>";
        product += "<p>"+desc+"</p>"
        product += "</div>";
    }
    $(".product").html(product);
    // 핵심과제
    var keyTaskCnt = myObj.keyTask.length;
    var keyTaskWrap = myObj.keyTask;
    var keyTask = "<dl>";
    for(var i=0; i<keyTaskCnt; i++){
        keyTask += "<dt>"+keyTaskWrap[i].title+"</dt>";
        keyTask += "<dd>"+keyTaskWrap[i].desc+"</dd>";
    }
    keyTask += "</dl>";
    $(".keyTask").html(keyTask);
    // CEO 인터뷰
    var imgCeo = myObj.imgCeo;
    var ivCeoCnt = myObj.ivCeo.length;
    var ivCeoWrap = myObj.ivCeo;
    var ivCeo = "";
        ivCeo += "<div><img src='"+imgCeo+"' alt='대표이사'></div>";
    for(var i=0; i<ivCeoCnt; i++){
        ivCeo += "<dl><dt>Q. "+ivCeoWrap[i].q+"</dt>";
        ivCeo += "<dd>A. "+ivCeoWrap[i].a+"</dd></dl>";
    }
    $(".ivCeo").html(ivCeo);
    // 인사담당자 인터뷰
    var imgMng = myObj.imgMng;
    var ivMngCnt = myObj.ivMng.length;
    var ivMngWrap = myObj.ivMng;
    var ivMng = "";
        ivMng += "<div><img src='"+imgMng+"' alt='인사담당자'></div>";
    for(var i=0; i<ivMngCnt; i++){
        ivMng += "<dl><dt>Q. "+ivMngWrap[i].q+"</dt>";
        ivMng += "<dd>A. "+ivMngWrap[i].a+"</dd></dl>";
    }
    $(".ivMng").html(ivMng);
    // 재직자 인터뷰
    var imgEmp = myObj.imgEmp;
    var ivEmpCnt = myObj.ivEmp.length;
    var ivEmpWrap = myObj.ivEmp;
    var ivEmp = "";
        ivEmp += "<div><img src='"+imgEmp+"' alt='재직자'></div>";
    for(var i=0; i<ivEmpCnt; i++){
        ivEmp += "<dl><dt>Q. "+ivEmpWrap[i].q+"</dt>";
        ivEmp += "<dd>A. "+ivEmpWrap[i].a+"</dd></dl>";
    }
    $(".ivEmp").html(ivEmp);
    // 직원정보
    var empWrap = myObj.employee[0];
    var empNew = empWrap.new;
    var empCareer = empWrap.career;
    var empAge = empWrap.age;
    var empYears = empWrap.years;
    var empMale = empWrap.male;
    var empFemale = empWrap.female;
    var employee = "";
        employee += "<dl>";
        employee += "<dt>신입</dt><dd>"+empNew+"</dd>";
        employee += "<dt>경력</dt><dd>"+empCareer+"</dd>";
        employee += "<dt>평균나이</dt><dd>"+empAge+"</dd>";
        employee += "<dt>근속년수</dt><dd>"+empYears+"</dd>";
        employee += "<dt>남</dt><dd>"+empMale+"</dd>";
        employee += "<dt>여</dt><dd>"+empFemale+"</dd>";
        employee += "</dl>";
    $(".employee").html(employee);
    // 채용절차
    var rpCnt = myObj.recruitProcess.length;
    var rpWrap = myObj.recruitProcess;
    var recruitProcess = "<dl>";
    for(var i=0; i<rpCnt; i++){
        recruitProcess += "<dt>"+rpWrap[i].step+"</dt>";
        recruitProcess += "<dd>"+rpWrap[i].desc+"</dd>";
    }
    recruitProcess += "</dl>";
    $(".recruitProcess").html(recruitProcess);
    // 기업홍보영상
    var comMovUrl = myObj.comMov;
    var comMov = "<iframe src='"+comMovUrl+"' title='YouTube video player' frameborder='0' allow='accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture' allowfullscreen></iframe>";
    $(".comMov").html(comMov);
    // 기업 내/외부 사진
    var comPicCnt = myObj.comPic.length;
    var comPicWrap = myObj.comPic;
    var comPic = "<ul>";
    for(var i=0; i<comPicCnt; i++){
        var url = comPicWrap[i].url;
        var desc = comPicWrap[i].desc;
        comPic = "<li><img src='"+url+"' alt='"+desc+"'></li>";
    }
    comPic += "</ul>";
    $(".comPic").html(comPic);
    // 설립일
    var comBuildDate = myObj.comBuildDate;
    $(".comBuildDate").html(comBuildDate);
    // 종업원 현황
    var empstatCnt = myObj.employeeState.length;
    var empstatWrap = myObj.employeeState;
    var employeeState = "<ul>";
    for(var i=0; i<empstatCnt; i++){
        var yearCnt = empstatWrap[i].cnt;
        var joinCnt = yearCnt[0].join;
        var resignCnt = yearCnt[0].resign;
        var totalCnt = yearCnt[0].total;
            employeeState += "<li>"+empstatWrap[i].year;
            employeeState += "<br/>입사자 : "+joinCnt;
            employeeState += " / 퇴사자 : "+resignCnt;
            employeeState += " / 전체 : "+totalCnt;
            employeeState += "</li>";
    }
    employeeState += "</ul>";
    $(".employeeState").html(employeeState);
    var ctLabel = "";
    for(var i=0; i<empstatCnt; i++){
        ctLabel += "<span>"+empstatWrap[i].year+"</span>";
        joinCnt += "<span>"+empstatWrap[i].cnt[0].join+"</span>";
        resignCnt += "<span>"+empstatWrap[i].cnt[0].resign+"</span>";
        totalCnt += "<span>"+empstatWrap[i].cnt[0].total+"</span>";
    }
    $(".ctLabel").html(ctLabel);
    $(".joinCnt").html(joinCnt);
    $(".resignCnt").html(resignCnt);
    $(".totalCnt").html(totalCnt);
    var lastTotal = empstatWrap[0].cnt[0].total;
    var lastJoin = empstatWrap[0].cnt[0].join;
    var lastResign = empstatWrap[0].cnt[0].resign;
    $(".lastEmployeeState .lastTotal").html(lastTotal);
    $(".lastEmployeeState .lastJoin").html(lastJoin);
    $(".lastEmployeeState .lastResign").html(lastResign);
    // 재무정보
    var financeInfoWrap = myObj.financeInfo[0];
    var fiPosition = financeInfoWrap.position;
    var fiSales = financeInfoWrap.sales;
    var fiProfit = financeInfoWrap.profit;
    var fiCapital = financeInfoWrap.capital;
    var financeInfo = "<h3>재무정보(최근 3년)</h3><ul>";
        financeInfo += "<li>동종업계 내 순위 : "+fiPosition[0]+", "+fiPosition[1]+", "+fiPosition[2]+"</li>";
        financeInfo += "<li>매출액(백만원) : "+fiSales[0]+", "+fiSales[1]+", "+fiSales[2]+"</li>";
        financeInfo += "<li>당기순이익(백만원) : "+fiProfit[0]+", "+fiProfit[1]+", "+fiProfit[2]+"</li>";
        financeInfo += "<li>자본금(백만원) : "+fiCapital[0]+", "+fiCapital[1]+", "+fiCapital[2]+"</li>";
        financeInfo += "</ul>";
    $(".financeInfo").html(financeInfo);
    if(fiPosition[0] != null){
        $(".fiPosition").html(fiPosition[0]+"위");
    }else{
        $(".fiPosition").html("순위없음");
    }
    $(".fiSales").html(fiSales[0]);
    $(".fiProfit").html(fiProfit[0]);
    $(".fiCapital").html(fiCapital[0]);
    // 기업평가 등급
    var bizGrade = myObj.bizGrade;
    $(".bizGrade").html(bizGrade);
    // 산업 내 위치
    var bizPositionWrap = myObj.bizPosition[0];
    var bpActivity = bizPositionWrap.activity;
    var bpProfitability = bizPositionWrap.profitability;
    var bpStability = bizPositionWrap.stability;
    var bpGrowthability = bizPositionWrap.growthability;
    var bpScale = bizPositionWrap.scale;
    var bizPosition = "<h3>산업 내 위치</h3><ul>";
        bizPosition += "<li>활동성 : "+bpActivity+"</li>";
        bizPosition += "<li>수익성 : "+bpProfitability+"</li>";
        bizPosition += "<li>안정성 : "+bpStability+"</li>";
        bizPosition += "<li>성장성 : "+bpGrowthability+"</li>";
        bizPosition += "<li>규모 : "+bpScale+"</li>";
        bizPosition += "</ul>";
    $(".bizPosition").html(bizPosition);
    if(bpActivity != null){
        $(".bpActivity").html(bpActivity);
    }else{
        $(".bpActivity").html("정보없음");
    }
    if(bpProfitability != null){
        $(".bpProfitability").html(bpProfitability);
    }else{
        $(".bpProfitability").html("정보없음");
    }
    if(bpStability != null){
        $(".bpStability").html(bpStability);
    }else{
        $(".bpStability").html("정보없음");
    }
    if(bpGrowthability != null){
        $(".bpGrowthability").html(bpGrowthability);
    }else{
        $(".bpGrowthability").html("정보없음");
    }
    if(bpScale != null){
        $(".bpScale").html(bpScale);
    }else{
        $(".bpScale").html("정보없음");
    }    
}