const stackCategory = {
	data: function () {
		return {

		}
	},
	props: ['stack'],
	template: `
		<div class="card p-2 stack-card animated-fadeInUp">
			<div class="card-body text-center">
				<div v-html="stack.icon"></div>
				<span class="font-15">{{stack.title}}</span>
			</div>
		</div>
	`
}
export default stackCategory;