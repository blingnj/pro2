function slickFun(){
    $(".regular").slick({
        arrows:true,//false 좌우버튼이 없어짐
        // vertical:true, true면세로형, 없거나 false는 가로형 슬라이드
        dots: true,//인디게이터가 있음 false없음 
        infinite: true,
        slidesToShow: 1, // 몇장을 한번에 보여주는지.
        slidesToScroll: 1, // 1= 1장씩 움진인다 2= 2장씩 움직인다. 
        autoplay:true,
        autoplaySpeed:1000,
    });
}


fetch("data.json")
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    let tagList ='';

    data.photo.forEach(function(v,k){
        // console.log(v.src);
        // console.log( Object.keys(v));
        tagList += `<div><img src="${v.src}"></div>`
    });
    $(".regular").html(tagList);

    slickFun();
}

