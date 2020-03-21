const feature = {
	data: function () {
		return {

		}
	},
	props: ['feature'],
	template: `
		
			<div class="card-deck">
				<div class="card border-0 bg-transparent">
					<div>
						<span class="text-white-50 d-block mb-2">Salut, je suis</span>
						<h1><span class="">L</span>IONEL <span class="">E</span>NSFELDER</h1>
						<p id="featurePragraph" class="text-white-50">
							
							Après des années enrichissantes dans la Marine Nationale en tant que technicien réseau et télécoms, j'ai décidé de devenir développeur web.
							<br>
							Je souhaite résoudre des problèmes de façon simple, esthétique et ergonomique.
							J'aime employer des stratégies pour améliorer l'organisation, la productivité et automatiser les processus redondants.
							<br>
							Je suis spécialisé dans la création d'interfaces et de solutions utilisant principalement Vue.js, React et Node.js.
						</p>
						<a href="./assets/docs/cv-ensfelder-lionel.pdf" target="_blank" type="button" class="btn btn-outline-light my-4 animated bounce delay-3s">MON CV</a>
						<a id="github" href="#" target="_blank" type="button" class="btn btn-outline-light my-4">GITHUB</a>
						<!-- <a href="https://www.linkedin.com/in/lionel-ensfelder/" target="_blank" type="button" class="btn btn-outline-light my-4">LINKEDIN</a> -->
					</div>
				</div>
				<div class="card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto">
						<img id="featureImage" src="assets/img/lionel-ensfelder.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 250px;">
					</div>
				</div>
			</div>
	`
}
export default feature;