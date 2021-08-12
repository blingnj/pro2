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

//---------- 탭 ------------------------------------
const tapBtn = document.querySelectorAll('.tapbtn')
const tapImg = document.querySelectorAll('.tapimg')
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


//************************예약버튼*************************//
const reserveFix = document.querySelector('.reserve_fix')
const reserveSub = document.querySelectorAll('.reserve_sub')


reserveFix.addEventListener('click',function(){
    for(let i=0; i<reserveSub.length; i++)
    reserveSub[i].classList.toggle('active')
})

//-------------- 스크롤 탑버튼 -------------------------------------------------
const elTop = document.querySelector('.topbtn');
        
window.addEventListener('scroll',function(){
    if(window.innerHeight < window.scrollY + 700){
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