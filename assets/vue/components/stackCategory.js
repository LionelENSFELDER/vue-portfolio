const stackCategory = {
	data: function () {
		return {

		}
	},
	props: ['stack'],
	template: `
		<div class="card p-3 stack-card animated-fadeInUp">
			<div>
				<div v-html="stack.icon"></div>
			</div>
			<div class="card-body text-center">
				<span class="font-15">{{stack.title}}</span>
				<p class="mt-4">{{stack.content}}</p>
			</div>
		</div>
	`
}
export default stackCategory;