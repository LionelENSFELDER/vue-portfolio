const section = {
	data: function () {
		return {

		}
	},
	props: ['title'],
	template: `
		<section id="" class="">
			<div class="container py-5">
				<h1 class="text-center mb-5">{{ title }}</h1>
				<slot></slot>
			</div>
		</section>
	`
}
export default section;