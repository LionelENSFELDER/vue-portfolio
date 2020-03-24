const section = {
	data: function () {
		return {

		}
	},
	props: ['title'],
	template: `
		<section id="" class="py-5 text-white">
			<div class="container py-5">
				<h1 class="text-center mb-5 glitch" :data-text="title">{{ title }}</h1>
				<slot></slot>
			</div>
		</section>
	`
}
export default section;