const searchToggler = document.querySelector('.search-toggle');

searchToggler.addEventListener('click', toggleAction);

function toggleAction() {
    if (!searchToggler.classList.contains('on')) searchToggler.classList.toggle('on');
    searchToggler.removeEventListener('click', toggleAction);
}

const navObject = [

];

// ----- GSAP 애니메이션 사용 예시



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
const btnToggleSlide = document.getElementById('btnToggleSlide');
const slidePagination = document.getElementById('slidePagination');
const slider = new Swiper(sliderContainer, {
    direction: 'horizontal',
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    loop: true,
    slidesPerView: 2.5,
    navigation: {
        prevEl: btnPrev,
        nextEl: btnNext
    },
    pagination: {
        el: slidePagination
    },
    centeredSlides: true
});

btnToggleSlide.addEventListener('click', (e) => {
    if (e.currentTarget.classList.contains('paused')) {
        slider.autoplay.resume();
        e.currentTarget.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        slider.autoplay.pause();
        e.currentTarget.innerHTML = `<i class="fa-solid fa-play"></i>`;
        e.currentTarget.classList.add('paused');
    }
});