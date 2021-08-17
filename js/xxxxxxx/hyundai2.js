/*********************************************************************************************************************************************
                                [통합사이트, 거점사이트 공통 UI]
**********************************************************************************************************************************************/

$(document).ready(function() {

    /* ----------------------------- PC, Mobile 공통 UI ---------------------------- */
    iWsizeFn(); // [공통] window Size Fn
    quick(); // [공통] 퀵메뉴 on/off
    topBtn(); // [공통] 탑 버튼 UI
    $('.tab_list').length && tapSwap(); // [공통] 텝메뉴 리스트
    tapOnoff(); // [공통] 통합예약 시간대 선택 탭 on/off
    topNoticeUI(); // [공통] 통합메인, 거점메인 상단 공지 애니메이션
    $('#wrap').length && familyOn(); // [공통] FOOTER 패밀리 사이트 show/hide
    /* ---------------------------------------------------------------------------- */


    /* -------------------------------- PC 화면 UI -------------------------------- */
    pcUiFn(); // PC 화면 UI
    /* ---------------------------------------------------------------------------- */


    /* ------------------------------ Mobile 화면 UI ------------------------------ */
    mGnbFn(); // 모바일 햄버거 메뉴
    mHeadFixed(); // 모바일 헤더 fixed
    /* ---------------------------------------------------------------------------- */

});

$(window).on('load', function() {
    if($('#wrap').length){
        asideStop(); // [공통] 퀵메뉴, 탑버튼 Footer 위에서 멈추기
    }
});


var iW = $(window).innerWidth(),
    iH = $(window).innerHeight();

// [공통] window Size Fn
function iWsizeFn(){
    var $window = $(window)
        ,iW = $window.innerWidth()
        ,$wrap = $('#wrap');

    if(iW >= 768){
        $wrap.removeClass('mobile');
        $wrap.addClass('pc');
        scrollWrapper(); // [PC] 컨텐츠 스크롤 플러그인 영역
    }
    if(iW <= 767){
        $wrap.removeClass('pc');
        $wrap.addClass('mobile');
        mScrollDel(); // [M] 모바일에서 스크롤 플러그인 삭제
    }

    $window.resize(function() {
        var rW = $window.innerWidth();

        if(rW >= 768) {
            $wrap.removeClass('mobile');
            $wrap.addClass('pc');
            scrollWrapper(); // [PC] 컨텐츠 스크롤 플러그인 영역
            //console.log('pc');
        }

        if(rW < 767) {
            $wrap.removeClass('pc');
            $wrap.addClass('mobile');
            mScrollDel(); // [M] 모바일에서 스크롤 플러그인 삭제
            //console.log('mobile');
        }
    });
}

// [공통] 퀵메뉴, 탑버튼 Footer 위에서 멈추기
function asideStop(){
    var $window = $(window);

    $window.scroll(function() {
        var st = $(this).scrollTop();

        if(st >= $('#footer').offset().top - $window.innerHeight()){
            $('#quick_menu').addClass('stop');
            $('.go_top').addClass('stop');
        }else{
            $('#quick_menu').removeClass('stop');
            $('.go_top').removeClass('stop');
        }
    });
}

// [공통] 통합메인, 거점메인 상단 공지
function topNoticeUI(){
    var $topNotd = $('.top_noti_slide'),
        paddTop = $(".top_wrap").height() + 60;

    $(window).on('load', function() {/* Slide motion */
        var slideLength = $topNotd.find('.slide_div').length;
        //console.log($topNotd.find('.slide_div').length);
        $topNotd.addClass('no_' + slideLength);
    });

    $('.notice_head').on("click",".closed",function() {
        $('.notice_head').addClass('hide');

        if($("#wrap").hasClass("itg_main")){
            $("#container").animate({
                "padding-top" : paddTop - 40
            }, 500);
        }
    });
}

// [공통] 탑 버튼 UI
function topBtn(){
    $(window).scroll(function() {
        //TOP 버튼 show-hide
        if($(this).scrollTop() > 250){
            $('.go_top').fadeIn();
        }else{
            $('.go_top').fadeOut();
        }
    });

    // Scroll Top
    $('.go_top').on('click', '.bt_top', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 650);
        return false;
    });
}

// [공통] 텝메뉴 리스트
function tapSwap(){
    var $tabBtn = $('.tab_list'),
        tapSwiper = new Swiper(".tab_list .swiper-container", {
            slidesPerView:'auto',
            spaceBetween:0,
            freeMode:true,
            initialSlide:0
        });
    tapSwiper.slideTo($tabBtn.find('li.active').index(), 0);
}

// [공통] 퀵메뉴 on/off
function quick(){
    var $window = $(window);

    if($('#wrap').hasClass('itg_main')){// PC 통합사이트 메인:퀵메뉴에 class="on"자동 추가
        // quickOn();

        if($('#wrap').hasClass('mobile')){ //모바일 화면에선 퀵메뉴 숨김
            //console.log('모발');
            // $('#quick_menu .reserve').removeClass('on');
            $('#quick_menu').css('z-index', 890);
        }

        if($window.innerWidth() < 1119){ // 타블렛, 모바일 화면에서 퀵메뉴 숨김
            // $('#quick_menu .reserve').removeClass('on');
            $('#quick_menu').css('z-index', 890);
        }
    }

    $('#quick_menu').on('click', '.bt_trigger', function(e) { //퀵메뉴 누를 때 on/off
        e.preventDefault();
        var $this = $(this)
            , quickMenu = $this.closest('#quick_menu').find('.reserve')
            , mQuick = $('.mobile #quick_menu').find('.bt_trigger');

        if(!$(quickMenu).hasClass('on')){
            quickOff();
            quickOn();
            mQuick.addClass('m_on');
            $this.addClass('active');
        }else{
            quickMenu.removeClass('on');
            quickMenu.addClass('off');
            $('#quick_menu').css('z-index', 890);

            setTimeout(function() {
                mQuick.removeClass('m_on');
            }, 400);
            $this.removeClass('active');
        }
    });

    $window.resize(function() {
        var iW = $window.innerWidth();

        if(iW <= 1119){ // 타블렛 사이즈, 모바일 사이즈로 바꿨을 때 remove on
            $('#quick_menu .reserve').removeClass('on');
        }
    });

    if($window.innerWidth() < 767){
        $('#quick_menu .reserve').on('click', 'a', function() {
            var $this = $(this);

            if($this.closest('.reserve').hasClass('on')){
                $('.bt_trigger').removeClass('m_on');
                $('.reserve').removeClass('on');
            }
        });
    }

    function quickOff(){
        $('#quick_menu').css('z-index', 890);
        $('#quick_menu .reserve').removeClass('off');
    }
    function quickOn(){
        $('#quick_menu').css('z-index', 930);
        $('#quick_menu .reserve').addClass('on');
    }
}

// [공통] 유의사항 더 보기
function moreView(){
    $('.btn_notice').click( function() {
        if( $(this).html() == '펼치기' ) {
            $(this).html('접기');
            $(this).parent().addClass('active');
        }
        else {
            $(this).html('펼치기');
            $(this).parent().removeClass('active');
        }
    });
}

// [공통] 통합예약 시간대 선택 탭 on/off
function tapOnoff(){
    $('.reserve .hour_wrap .tab_li').on('click', 'a', function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.tab_li').removeClass('active');
        $this.closest('li').addClass('active');
    });
}

// [공통] FOOTER 패밀리 사이트 show/hide
function familyOn(){
    var $btnOpen = $('#footer .family_site .btn_open');

    $btnOpen.on("click", function(e) {
        e.preventDefault();
        var familySelect = $(this).closest('.family_site');

        if(!$(familySelect).hasClass('on')){
            familySelect.addClass('on');
        }else{
            familySelect.removeClass('on');
        }
    });

    $(window).scroll(function() {
        var sT = $(window).scrollTop()
            , offTop = $('#footer').offset().top;

        if(sT < offTop){
            $('.family_site').removeClass('on');
        }
    });
}

// [공통] 메인 공지 팝업 슬라이드
function popupNotice(){
    var notiSlider = new Swiper('.pop_notice_cotns .swiper-container', {
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '.btn_slide_wrap .swiper-button-next',
            prevEl: '.btn_slide_wrap .swiper-button-prev',
        },
    });

    if($('.pop_notice_cotns .set_cotn').length == 3){ // 공지 1개일 경우 (loop 상태여서 기본 갯수는 3개임)
        //console.log('1');
        notiSlider.destroy();
        $('.btn_slide_wrap').hide();
    }
}

//[공통] i-Lab이란 박스 애니메이션
function ilabBosUi(){
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        delay: 200
    });
}

// 썸네일 슬라이드 Swiper
function expSwiper(){
    $('.display_list .display_item').each(function(idx) {
        var $photo = $(this)
            , $thumnail = $photo.find('.gallery-thumbs');

        //console.log($photo, $thumnail);

        var photoView = $photo.addClass('photo_' + idx)
            , thum = $thumnail.addClass('thumnail_' + idx);

        // 썸네일
        var galleryThumbs = new Swiper(thum, {
            slidesPerView: 4,
            spaceBetween: 10,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            watchOverflow: true,
            scrollbar: {
                el: $thumnail.find('.swiper-scrollbar'),
                hide: false,
                draggable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                }
            },
        });

        // 사진
        var galleryTop = new Swiper(photoView.find('.gallery-top'), {
            spaceBetween: 10,
            speed: 900,
            watchOverflow: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });
    });
}


// PC 화면 UI
function pcUiFn() {
    if($('#wrap').hasClass('pc')){// 1024px 이상
        subMenu();// [PC] 통합GNB > 서브메뉴 show/hide
        showLang();// [PC] 유틸메뉴 > 언어 선택
        fixedHead(); // [PC] 헤더 fixed class 추가
    }
}

// [PC] 헤더 fixed class 추가
function fixedHead(){
    var didScroll;
    var lastScrollTop = 0;
    var delta = 150;
    var navHeight = $('#header').outerHeight();

    $(window).scroll(function (){
        didScroll = true;
    });

    setInterval(function() {
        if(didScroll){
            hasScroll();
            didScroll = false;
        }
    }, 70);

    function hasScroll(){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta)// 설정한 delta 값보다 더 스크롤 됐는지 확인
        return;

        //console.log(st > lastScrollTop && st > navHeight);

        if(st > delta){
            $('.pc').addClass('fixed');
        }else{
            $('.pc').removeClass('fixed');
        }
        lastScrollTop = st;
    }
}

// [PC] 통합사이트, 거점사이트 전체메뉴 show/hide
function subMenu(){
    //통합사이트/거점사이트:통합GNB
    $('.pc .gnb_itg .depth1').on('mouseover', function() {
        if(!$('.header_itg').hasClass('active')){
            $('.header_itg').addClass('active');
            $('#quick_menu').css('z-index', '890');
            $('.utill_menu').removeClass('active');
            $('.language').css('border', '1px solid transparent');
        }
    });
    $('.pc .header_itg').on('mouseleave', function() {
        if($('.header_itg').hasClass('active')){
            $('.header_itg').removeClass('active');
            $('#quick_menu').css('z-index', '903');
        }
    });

    //거점사이트:거점GNB
    $('.pc .head_strg #gnb .depth1').on('mouseover', function() {
        if(!$('.head_strg').hasClass('active')){
            $('.head_strg').addClass('active');
            $('#quick_menu').css('z-index', '890');
            $('.utill_menu').removeClass('active');
            $('.language').css('border', '1px solid transparent');
        }
    });

    $('.pc .head_strg').on('mouseleave', function() {
        if($('.head_strg').hasClass('active')){
            $('.head_strg').removeClass('active');
            $('#quick_menu').css('z-index', '903');
        }
    });
}

// [PC] 유틸메뉴 > 언어 선택
function showLang(){
    $(".utill_menu .btn_lang").on('click', function(e) {
        e.preventDefault();
        if(!$(".utill_menu").hasClass("active")){
            $(".utill_menu").addClass("active");
            setTimeout(function() {
                $(".language").css({
                    border: '1px solid #000000'
                });
            }, 200);
            $('.pc #header, .header_itg').removeClass('active');
        }else {
            $(".utill_menu").removeClass("active");
            $(".language").css({
                border: '1px solid transparent'
            });
        }
    });
}

// [PC] 컨텐츠 스크롤 영역
function scrollWrapper(){
    $('.scroll_wrap').mCustomScrollbar({
        theme: "my-theme",
        scrollInertia: 1000,
    });

    if($(window).innerWidth() < 767){
        mScrollDel(); // 모바일에서 스크롤 플러그인 삭제
    }
}

// [PC] 이벤트 목록 상단 슬라이드
function evtSlider() {
    var swiper = new Swiper('.big_slider .swiper-container', {
        slidesPerView : 1,
        speed: 1500,
        // autoplay: {
        //  delay: 3000,
        //  disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

/**************************************************************************************************************************************************************************************************
****************************************************************    《《《   Mobile UI   》》》   ***************************************************************************************************
***************************************************************************************************************************************************************************************************/

// [M] 모바일 헤더 fixed
function mHeadFixed(){
    var didScroll;

    $(window).scroll(function(event) { // 스크롤
        didScroll = true;
    });

    setInterval(function() { // hasScroll() 실행하고 didScroll 상태 재설정
        if(didScroll){
            hasScroll();
            didScroll = false;
        }
    });

    hasScroll();

    function hasScroll() { // 헤더 영역 fixed 클래스 추가/삭제
        var sT = $(document).scrollTop();
        $('.mobile').addClass('fixed');

        if(sT < 20){
            $('.mobile').removeClass('fixed');
        }
    }
}

// [M] 모바일 햄버거 메뉴
function mGnbFn(){
    //햄버거 열기
    $('.m_header .gnb_ctrl .open').on('click', function(e) {
        e.preventDefault();
        $('.top_wrap').addClass('active');
        setTimeout(function() {
            $('.m_header .gnb_ctrl .closed').css('display', 'block');
        }, 450);

        $('body').addClass('s_hidden').bind('touchmove', function(e) {
            e.preventDefault();
        });

    });

    //햄버거 > 서브메뉴 열기
    $('.m_nav_menu .txt_depth01').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            depthOne = $this.closest('.depth_01');

        if(!$(depthOne).hasClass('open')){
            depthOne.addClass('open').siblings('li').removeClass('open');
        }else{
            depthOne.removeClass('open');
        }
    });

    //햄버거 닫기
    $('.m_header .gnb_ctrl .closed').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('s_hidden').unbind('touchmove');
        $('.top_wrap').removeClass('active');
        $('.depth_01').removeClass('open');
        $('.m_header .gnb_ctrl .closed').css('display', 'none');
    });
}

// [M] 모바일에서 스크롤 플러그인 삭제
function mScrollDel() {
    $('.mobile scroll_wrap').mCustomScrollbar('destroy');
}

//[모바일] 예약안내 컨텐츠 영역 접고 펼치기
function foldCotent(){
    $('.list_program .fold_trigger').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            guideCotent =$this.closest('.list_set');

        if(!$(guideCotent).hasClass('on')){
            guideCotent.addClass('on');
            $this.find('span').text('접기');
        }else{
            guideCotent.removeClass('on');
            $this.find('span').text('펼치기');
        }

    });
}
