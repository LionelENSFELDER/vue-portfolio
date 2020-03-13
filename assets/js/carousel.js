//add class "active" to fist item
let addActive = function(inner){
    let carouselInner = document.getElementById(inner);
    let firstCarouselItem = carouselInner.firstChild;
    firstCarouselItem.classList.add('active');
}
//addActive("carousel-tech-inner");
addActive("carousel-testimonial-inner");
