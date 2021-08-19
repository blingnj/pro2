//---------- 공지사항 엑스버튼 -------- 누르면 사라짐----------------------------
        const headClose = document.querySelector('.notice'),
              xBtn = document.querySelector('.close_btn');

        xBtn.addEventListener('click',function(){
            headClose.classList.add('active')
        })

//---------- 헤더 LANGUAGE ---------- 언어변환 --------------------------
        const btnLanguage = document.querySelector('.btn_lang')
        const language = document.querySelector('.language')
        const langIcon = document.querySelector('.btn_lang img')

        btnLanguage.addEventListener('click',function(){
            language.classList.toggle('active')

            if(language.classList[1] == 'active'){
            langIcon.style = `transform:rotate(180deg);`
            }else{
            langIcon.style = `transform:rotate(0deg);`
            }
        })
// ---------- 네비에 마우스오버 ---------- 하단메뉴나오게 --------------------------
        const depth= document.querySelectorAll('.depth1');
        const navul= document.querySelector('.mainnav');
        const navli= document.querySelectorAll('.mainnav >li');
        const navBack = document.querySelector('header');
        const navhead = document.querySelector('.header')
        const navheadaft = document.querySelector('header::after')
        const direction = document.querySelectorAll('.direction')


        let idx=0;
        for(let i=0; i<navli.length; i++){
            navli[i].addEventListener('click',function(){
                if(depth[i].classList.contains('open')){
                    depth[i].classList.remove('open')
                    direction[i].classList.remove('open')
                }else{
                    depth[idx].classList.remove('open')
                    direction[idx].classList.remove('open')
                    depth[i].classList.add('open')
                    direction[i].classList.add('open')
                }
                idx=i;
            })
        }

        // if(window.matchMedia("(min-width:1120px)").matches){
            
        // }

        function mouseon(){
            for(let k=0; k<depth.length; k++){ 
                navul.addEventListener('mouseenter',function(){
                    depth[k].classList.add('active');
                    navBack.classList.add('active');
                })
                navhead.addEventListener('mouseleave',function(){
                    depth[k].classList.remove('active');
                    navBack.classList.remove('active');
                })
            }
        }mouseon();
        

//******************** 슬라이더 이미지 가져오기 *************************//

fetch("./js/data.json")
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    let tagList ='';

    data.photo.forEach(function(v,k){
        // console.log(v.src);
        // console.log( Object.keys(v));
        tagList += `<div><img src="${v.src}">
            <h3>${v.title}</h3>
            <P>${v.exp}</p>
            </div>`
    });
    $(".regular").html(tagList);

    slickFun();
}

function slickFun(){
    $(".regular").slick({
    arrows:true,//false 좌우버튼이 없어짐
    dots: false,//인디게이터가 있음 false없음 
    infinite: true,
    slidesToShow: 3, // 몇장을 한번에 보여주는지.
    slidesToScroll: 1, // 1= 1장씩 움진인다 2= 2장씩 움직인다. 
    autoplay:false,
    
    responsive: [
        {
          breakpoint: 1119,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        }
    ]
    });
}
//------------------------------ 스와이퍼 -----------------------------------------------------
const swiper = new Swiper('.swiper-container', {

    // Optional parameters
    direction:'horizontal', //'horizontal' | 'vertical'
    loop: true,
    effect: 'slide', //	'slide' | 'fade' | 'cube' | 'coverflow' | 'flip

    // 닷
    pagination: {el: '.swiper-pagination',},
    // 좌우버튼
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    // 스크롤바
    //scrollbar: {el: '.swiper-scrollbar',draggable: true,},
    //autoplay: {delay: 5000,   },
  });
//------------------ 사이즈 변경시 예약버튼 active -------------------------------
        const reserveFix = document.querySelector('.reserve_fix')
        const reserveSub = document.querySelectorAll('.sub-reserve')

        for(let i=0; i<reserveSub.length; i++){

            window.addEventListener('resize', function(e){
                sizeChange();
            });

            reserveFix.addEventListener('click',function(){
                reserveSub[i].classList.toggle('active')
            })
        }
//---------------- 스크롤 탑버튼 -------------------------------------------------
        const elTop = document.querySelector('.topbtn');
                
        window.addEventListener('scroll',function(){
            if(window.innerHeight < window.scrollY){
                elTop.classList.add('active');
            }else{
                elTop.classList.remove('active');
            };
        });
        const elCon = document.querySelectorAll('main');
        const elHeader = document.querySelector('header').offsetHeight;

        elTop.addEventListener('click',function(e){
            e.preventDefault();

            window.scrollTo({
                top:elCon.offsetTop-elHeader,
                behavior:"smooth"
            });
        })
//*************************** 헤더 토글버튼 ******************************//
const openBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');
const navToggle = document.querySelector('.navigation');
const actBody = document.querySelector('body')

openBtn.addEventListener('click',function(){
    navToggle.classList.add('active')
    actBody.classList.add('active')
})
closeBtn.addEventListener('click',function(){
    navToggle.classList.remove('active')
    actBody.classList.remove('active')
})
//******************** function *******************************************//
function sizeChange(){
    for(let i=0; i<reserveSub.length; i++){

        if(window.innerWidth < 1120 ) {
            navul.classList.add('open')
            if( !reserveSub[i].classList.contains('active')){
                reserveSub[i].classList.add('active');
            }
        }else{
            navul.classList.remove('open')
            if( reserveSub[i].classList.contains('active')){
                reserveSub[i].classList.remove('active');
            }
        }
    }
}
sizeChange();