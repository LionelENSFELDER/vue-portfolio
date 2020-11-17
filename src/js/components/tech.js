const stackCategory = {
	data: function () {
		return {

		}
	},
	props: ['i'],
	template: `
		<div class="col mb-4">
			<div class="card p-0 stack-card animated-fadeInUp">
				<div class="card-body text-center">
					<div v-html="i.icon"></div>
				</div>
			</div>
		</div>
	`
}
export default stackCategory;