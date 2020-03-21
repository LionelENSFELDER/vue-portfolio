const experience = {
	data: function () {
		return {

		}
	},
	props: ['experience'],
	template: `
		<div class="card bg-raisin col-12 mb-4" style="min-height: 150px">
			<div class="card-body">
				<h5 class="card-title">{{experience.job}}</h5>
				<span href="#" class="badge badge-light mb-3">{{experience.date}} | {{experience.company}}</span>
				<p class="font-spanish">{{experience.description}}</p>
				<a :href="experience.url" target="_blank" class="custom-url"><i class="las la-external-link-alt"></i>{{experience.urlText}}</a>
			</div>
		</div>
	`
}
export default experience;