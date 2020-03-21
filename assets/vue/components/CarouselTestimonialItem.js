const CarouselTestimonialItem = {
	data: function () {
		return {

		}
	},
	props: ['testimonial'],
	template: `
		<div class="carousel-item">
			<div class="card border-0 text-center bg-raisin rounded">
				<div class="card-body">
					<div><img class="img-fluid rounded-circle mb-4" :src="testimonial.photo" :title="testimonial.photoTitle" :alt="testimonial.photoAlt" width="100px"></div>
					<p class="card-text">{{testimonial.testimonial}}</p>
					<span class="card-text">- {{testimonial.name}}, </span>
					<span class="card-text font-main">{{testimonial.client}}</span>
					<br>
					<a :href="testimonial.url" target="_blank" class="badge font-15" v-html="testimonial.urlIcon"></a>
					<a :href="testimonial.link" target="_blank" class="badge font-15" v-html="testimonial.linkIcon"></a>
				</div>
			</div>
		</div>

	`
}
export default CarouselTestimonialItem;