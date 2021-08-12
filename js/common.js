$(function(){
    $('footer').load('inc.html footer > div',site);

    function site(){
        const siteBtn = document.querySelector('.family_site')
        const siteUl = document.querySelector('.family_site ul')

        siteBtn.addEventListener('click',function(){
            siteUl.classList.toggle('active')
        })
    }
});

