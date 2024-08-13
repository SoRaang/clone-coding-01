const searchToggler = document.querySelector('.search-toggle');

searchToggler.addEventListener('click', toggleAction);

function toggleAction() {
    if (!searchToggler.classList.contains('on')) searchToggler.classList.toggle('on');
    searchToggler.removeEventListener('click', toggleAction);
}

const navObject = [

];

// ----- 뉴스티커

const newsScroller = document.getElementById('newsScroller');

const newsTicker = setInterval(() => {
    const newsItem = newsScroller.querySelector('li:first-child');

    newsScroller.appendChild(newsItem);
}, 3000)

// ----- 프로모션 슬라이더

const promoOpener = document.querySelector('.promotion-opener');
const promoSlider = document.getElementById('promoSlider');

promoOpener.addEventListener('click', () => promoSlider.classList.toggle('on'));

const sliderContainer = document.querySelector('.slider-container');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const slidePagination = document.getElementById('slidePagination');
const slider = new Swiper(sliderContainer, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
    },
    pagination: {
        el: slidePagination
    },
    centeredSlides: true
});