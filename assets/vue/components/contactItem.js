const contactItem = {
	data: function () {
		return {

		}
	},
	props: ['contactitem'],
	template: `
		<div class="col mb-3 animated-fadeInDown">
			<div class="card p-3 mb-3 contactitem-card">
				<a :href=contactitem.url target=_blank class="stretched-link"></a>
				<div class="row">
					<div class="col-8 my-auto">
						<span class="font-15">{{contactitem.text}}</span>
						<br>
						<span class="font-08">{{contactitem.info}}</span>
						
					</div>
					<div class="col-4">
						<span v-html="contactitem.icon"></span>
					</div>
				</div>
			</div>
		</div>
	`
}
export default contactItem;