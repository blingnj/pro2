$(function(){
    $('footer').load('inc.html footer > div',site);

    function site(){
        const siteBtn = document.querySelector('.family_site')
        const siteUl = document.querySelector('.family_site ul')
        const btnIcon = document.querySelector('.family_site a img')

        siteBtn.addEventListener('click',function(){
            siteUl.classList.toggle('active')

            if(siteUl.classList == 'active'){
                btnIcon.style = `transform:rotate(180deg);`
            }else{
                btnIcon.style = `transform:rotate(0deg);`
            }
        })
    }
});

