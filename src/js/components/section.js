const section = {
	data: function () {
		return {

		}
	},
	props: ['title'],
	template: `
		<section id="" class="py-5">
			<div class="container py-5">
			<h2 class="text-left mb-5" :data-text="title">{{ title }}</h2>
				<slot></slot>
			</div>
		</section>
	`
}
export default section;