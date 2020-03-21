const carouselTechItem = {
	data: function () {
		return {

		}
	},
	props: ['tech'],
	template: `
		<div class="carousel-item">
			<div class="card border-0 text-center bg-transparent rounded mx-auto">
				<div class="card-body">
					<div class="mb-4">
						<div v-html="tech.icon"></div>
					</div>
					<div class="">
						<h5>{{tech.title}}</h5>
					</div>
				</div>
			</div>
		</div>

	`
}
export default carouselTechItem;