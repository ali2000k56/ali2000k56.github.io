let navbar = document.querySelector('.scroll-item')
navbar.addEventListener('click',function (evet) {
    let dataWhere = evet.target.dataset.where
    document.querySelector(`#${dataWhere}`).scrollIntoView({behavior:"smooth"})
})