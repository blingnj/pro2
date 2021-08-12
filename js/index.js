//---------- 공지사항 엑스버튼 -------- 누르면 사라짐----------------------------
        const headClose = document.querySelector('.notice'),
              closeBtn = document.querySelector('.close_btn');

        closeBtn.addEventListener('click',function(){
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
// ---------- 네비에 마우스오버 ---------- 하단메뉴 --------------------------
        const depth= document.querySelectorAll('.depth1');
        const navli= document.querySelector('.mainnav');
        const navBack = document.querySelector('header');
        const navhead = document.querySelector('.header')

        for(let k=0; k<depth.length; k++){ 
            navli.addEventListener('mouseenter',function(){
                depth[k].classList.add('active');
                navBack.classList.add('active');
            })
            navhead.addEventListener('mouseleave',function(){
                depth[k].classList.remove('active');
                navBack.classList.remove('active');
            })

        }
        
//************************예약버튼*************************//
        const reserveFix = document.querySelector('.reserve_fix')
        const reserveSub = document.querySelectorAll('.sub-reserve')


        reserveFix.addEventListener('click',function(){
            for(let i=0; i<reserveSub.length; i++)
            reserveSub[i].classList.toggle('active')
        })

//-------------- 스크롤 탑버튼 -------------------------------------------------
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
        infinite: false,
        slidesToShow: 3, // 몇장을 한번에 보여주는지.
        slidesToScroll: 1, // 1= 1장씩 움진인다 2= 2장씩 움직인다. 
        autoplay:false
    });
}

const footHead = document.querySelector('footer').offsetTop;
const sideStop = document.querySelector('.aside');
const mainlength = document.querySelector('main').offsetHeight;

console.log(mainlength)
window.addEventListener('scroll',function(){

    if(mainlength < window.scrollY){
        sideStop.classList.add('stop');
    }else{
        sideStop.classList.remove('stop');
    };
});




//////////////////화면사이즈 줄면 aside 자동으로 접히게: active 들어가게 하기 ///////////////////

const toggleBtn = document.querySelector('.btn-toggle');
const navToggle = document.querySelector('.navigation')

toggleBtn.addEventListener('click',function(){
    toggleBtn.classList.toggle('active');
    navToggle.classList.toggle('navtoggle')
})