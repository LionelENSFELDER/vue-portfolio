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
			<!-- Add Arrows 
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			-->
		</div>
	`
}
export default swiperCarousel;