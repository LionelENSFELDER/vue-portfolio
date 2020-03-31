$('.carousel').carousel({
    interval: 2500,
    ride: false,
    touch: true
})

//add class "active" to fist item
let addActive = function(inner){
    let carouselInner = document.getElementById(inner);
    let firstCarouselItem = carouselInner.firstChild;
    firstCarouselItem.classList.add('active');
}

//addActive("carousel-tech-inner");
addActive("carousel-testimonial-inner");


var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 2,
    spaceBetween: 20,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows : false,
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
        },
        480:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        680:{
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
});