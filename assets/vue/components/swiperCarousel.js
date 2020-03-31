const swiperCarousel = {
	data: function () {
		return {

		}
	},
	props: ['swiper-carousel'],
	template: `
		<!-- Swiper -->
		<div class="row swiper-container">
			<div class="swiper-wrapper">
				<slot></slot>
			</div>
			<!-- If we need pagination -->
			<div class="swiper-pagination"></div>

			<!-- If we need navigation buttons -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	`
}
export default swiperCarousel;