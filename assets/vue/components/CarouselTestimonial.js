const CarouselTestimonial = {
	data: function () {
		return {

		}
	},
	props: ['carousel-testimonial'],
	template: `
		<div id="carousel-testimonial" class="carousel carousel-fade slide row" data-ride="carousel" data-touch="true">
			<div id="carousel-testimonial-inner" class="carousel-inner mx-auto col col-md-10 col-lg-10">
				<slot></slot>
			</div>
			<a class="carousel-control-prev" href="#carousel-testimonial" role="button" data-slide="prev">
				<span class="las la-chevron-left display-4 font-white mr-5" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carousel-testimonial" role="button" data-slide="next">
				<span class="las la-chevron-right display-4 font-white ml-5" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	`
}
export default CarouselTestimonial;