function carousel(){
    $('.carousel').carousel({
        interval: 2500,
        ride: false,
        touch: true
    })
    //add class "active" to fist item
    let addActive = function(inner){
        let carouselInner = document.querySelectorAll(inner);
        console.log(carouselInner);

        carouselInner.forEach(function(item) {
            let firstCarouselItem = item.firstChild;
            firstCarouselItem.classList.add('active');
        });
    }
    addActive(".carousel-inner");
}