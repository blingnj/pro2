const btnLanguage = document.querySelector('.btn_lang')
const language = document.querySelector('.language')
const langIcon = document.querySelector('.btn_lang img')
const tapBtn = document.querySelectorAll('.tapbtn')
const tapImg = document.querySelectorAll('.tapimg')
const reserveFix = document.querySelector('.reserve_fix')
const reserveSub = document.querySelectorAll('.sub-reserve')
const elTop = document.querySelector('.topbtn');
const elmain = document.querySelector('main');
const elHeader = document.querySelector('header').offsetHeight;
const navul= document.querySelector('.sec_nav');

//---------- 헤더 LANGUAGE ---------- 언어변환 --------------------------

btnLanguage.addEventListener('click',function(){
  language.classList.toggle('active')

  if(language.classList[1] == 'active'){
    langIcon.style = `transform:rotate(180deg);`
  }else{
    langIcon.style = `transform:rotate(0deg);`
  }
})

//---------- 탭 ------------------------------------

let num=0;
for(let i=0; i<tapBtn.length; i++){
 tapBtn[i].addEventListener('click',function(){
   tapImg[num].classList.remove('active')
   tapBtn[num].classList.remove('active')

   tapImg[i].classList.add('active')
   tapBtn[i].classList.add('active')
   num=i;
 })
}
//---------- 탭별 슬라이더 ------------------------------------
$(".slider").slick({
    arrows:true,//false 좌우버튼이 없어짐
    // vertical:true, true면세로형, 없거나 false는 가로형 슬라이드
    dots: false,//인디게이터가 있음 false없음 
    autoplay : true,	
    pauseOnHover : false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
//------------------ 사이즈 변경시 예약버튼 active -------------------------------

for(let i=0; i<reserveSub.length; i++){

    window.addEventListener('resize', function(e){
        sizeChange();
    });

    reserveFix.addEventListener('click',function(){
        reserveSub[i].classList.toggle('active')
    })
}
//---------------- 스크롤 탑버튼 -------------------------------------------------
        
window.addEventListener('scroll',function(){
    if(window.innerHeight < window.scrollY +700){
        elTop.classList.add('active');
    }else{
        elTop.classList.remove('active');
    };
});


elTop.addEventListener('click',function(e){
    e.preventDefault();

    window.scrollTo({
        top:elmain.offsetTop-elHeader,
        behavior:"smooth"
    });
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