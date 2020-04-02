const formation = {
	data: function () {
		return {

		}
	},
	props: ['formation'],
	template: `
		<div class="card bg-raisin col-12 mb-4" style="min-height: 130px">
			<div class="card-body">
				<h5 class="card-title">{{formation.job}}</h5>
				<span href="#" class="badge badge-light mb-3">{{formation.date}} | {{formation.company}}</span>
			</div>
		</div>
	`
}
export default formation;