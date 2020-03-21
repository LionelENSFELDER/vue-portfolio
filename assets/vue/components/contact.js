const contact = {
	data: function () {
		return {

		}
	},
	template: `
		<div class="card-deck">

			<div class="card border-0 bg-transparent">
				<div class="mx-auto">
					<img src="assets/img/contact.png" class="rounded d-block mx-auto" title="Illustration partie contact" alt="Illustration partie contact" style="width: 300px;">
				</div>
			</div>

			<div class="card border-0 bg-transparent my-auto">
				<p class="text-white-50">
				Je suis actuellement en recherche d'opportunités professionnelles.<br>
				Je vis dans la ville de Toulon (83000).<br>
				Mon numéro de téléphone est le <span class="font-white">06 52 40 10 21</span> ou envoyez-moi un mail à <a href="mailto:ensfelder.lionel@gmail.com" class="font-white">ensfelder.lionel@gmail.com</a> &#128521;
				</p>
				<div>
					<slot></slot>
				</div>
			</div>
			
		</div>
	`
}
export default contact;