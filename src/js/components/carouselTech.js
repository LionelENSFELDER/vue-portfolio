const carouselTech = {
	data: function () {
		return {

		}
	},
	props: ['carouseltech'],
	template: `
		<div id="carousel-tech" class="carousel slide w-100" data-ride="carousel" data-interval="500">
			<div id="carousel-tech-inner" class="carousel-inner">
				<slot></slot>
			</div>
			<!-- <a class="carousel-control-prev" href="#carousel-tech" role="button" data-slide="prev">
				<span class="las la-chevron-circle-left display-4" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carousel-tech" role="button" data-slide="next">
				<span class="las la-chevron-circle-right display-4" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a> -->
		</div>
	`
}
export default carouselTech;