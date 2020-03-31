const work = {
	data: function () {
		return {

		}
	},
	props: ['work'],
	template: `
		<div class="swiper-slide">
			<div class="containerHovered">
				<div class="card border-0">
					<div class="toHide">
						<img :src="work.coverImage" class="card-img" :title="work.coverTitle" :alt="work.coverAlt">
					</div>
					<div class="toDisplay text-center font-white position-absolute">
						<div>
							<a :href="work.url" target="_blank" class=""><i class="font-20 p-2 mb-3 border border-light rounded-circle text-white fas fa-link"></i></a>
						</div>
						<h5 class="font-weight-bold">{{work.title}}</h5>
						<span class="custom-tags">{{work.tags}}</span>
					</div>
				</div>
			</div>
		</div>
	`
}
export default work;