var btnToTop = document.getElementById('toTopBtn');

function checkDistance() {
    if (document.documentElement.scrollTop > 210 || document.body.scrollTop > 210) {
        btnToTop.style.display = 'block';
    } else {
        btnToTop.style.display = 'none';
    }
}

window.onscroll = checkDistance;

btnToTop.onclick = function () {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


var modal = document.querySelector('.modal');
var btnShowModal = document.querySelector('#btn');
var btnClose = document.getElementById('closeModal');

btnShowModal.addEventListener('click', function(){
    modal.style.display = 'block';
    document.body.style.background  = 'rgba(0, 0, 0, 0.4)';
})

btnClose.addEventListener('click', function(){
    modal.style.display = 'none';
    document.body.style.background = '#fff';
});


$(document).ready(function(){
    $('.mainSlyder').slick({
        arrows: true,
        infinite: true,
        dots: true,
    });
  });






















