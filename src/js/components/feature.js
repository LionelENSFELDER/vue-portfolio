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
						<span class="d-block mb-2">Salut, je suis</span>
						<h1 class="glitch" data-text="LIONEL ENSFELDER">LIONEL ENSFELDER</h1>
						<p class="animated-fadeInRight">
							
							Après des années enrichissantes dans la Marine Nationale en tant que technicien réseau et télécoms, j'ai décidé de devenir développeur web.
							<br>
							Je souhaite résoudre des problèmes de façon simple, esthétique et ergonomique.
							J'aime employer des stratégies pour améliorer l'organisation, la productivité et automatiser les processus redondants.
							<br>
							Je suis spécialisé dans la création d'interfaces et de solutions utilisant principalement Vue.js, React et Node.js.
						</p>
						<a href="./assets/docs/cv-ensfelder-lionel.pdf" target="_blank" class="btn btn-main my-4">MON CV</a>
						<a href="https://github.com/LionelENSFELDER" target="_blank" class="btn btn-main-light my-4">GITHUB</a>
					</div>
				</div>
				<div class="card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto animated-fadeInLeft">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 250px;">
					</div>
				</div>
			</div>
	`
}
export default feature;