import './scss/about.scss';
import './scss/style.scss';
import './scss/work.scss';
import './scss/workers.scss';
import './scss/reset.scss';
import './scss/download.scss';
import './scss/footer.scss';
import './scss/header.scss';
import './scss/media.scss';
import "./scss/slide.scss";

$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.menu__list').toggleClass('active');
    });
});


const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});