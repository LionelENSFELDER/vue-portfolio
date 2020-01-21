//add class "active" to fist item
let carousel = document.getElementById('carousel-testimonial');
let carouselInner = document.getElementById('carousel-testimonial-inner');
let firstCarouselItem = carouselInner.firstChild;

firstCarouselItem.classList.add('active');
