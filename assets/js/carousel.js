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
    loop: false,
    centeredSlides: true,
    slidesPerView: 3,
    initialSlide: 3,
    keyboardControl: true,
    mousewheelControl: true,
    lazyLoading: true,
    preventClicks: false,
    preventClicksPropagation: false,
    lazyLoadingInPrevNext: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    coverflow: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows : false,
    }
});