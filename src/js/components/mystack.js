const mystack = {
	data: function () {
		return {

		}
	},
	props: ['mystack'],
	template: `
		
		<div class="row">
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5 animated-fadeInRight">
					<div class="card-body p-0">
						<img src="assets/img/coding.png" class="img-fluid" alt="Responsive image" style="width:65px">
						<h5 class="card-title mt-4">Langages</h5>
						<p class="card-text">
							Je reste fidèle aux classiques pour l'instant avec <span class="font-weight-bold">HTML 5 + CSS3</span> pour la base.
							Parfois <span class="font-weight-bold">Javascript</span> ou <span class="font-weight-bold">PHP</span> vanilla sont plus efficients qu'une grosse librairie et permettent de rester "libre".
						</p>
					</div>
				</div>
			</div>
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5 animated-fadeInDown">
					<div class="card-body p-0">
						<img src="assets/img/frameworks.png" class="img-fluid" alt="Responsive image" style="width:65px">
						<h5 class="card-title mt-4">Frameworks & lib.</h5>
						<p class="card-text">
							Pour l'UI de mes projets j'utilise principalement <span class="font-weight-bold">Bootstrap</span>.
							Le reste se fait avec <span class="font-weight-bold">Angular</span>, <span class="font-weight-bold">React</span> ou encore <span class="font-weight-bold">Wordpress</span> selon le besoin et la complexité.
							Pour la partie serveur et tests, le couple <span class="font-weight-bold">Node.js</span> et <span class="font-weight-bold">Jest</span>.
						</p>
					</div>
				</div>
			</div>
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5 animated-fadeInLeft">
					<div class="card-body p-0">
						<img src="assets/img/tools.png" class="img-fluid" alt="Responsive image" style="width:65px">
						<h5 class="card-title mt-4">Outils</h5>
						<p class="card-text">
							J'utilise la méthodologie Agile <span class="font-weight-bold">Scrum</span> pour suivre mes projets. 
							Le versionning du code se fait avec <span class="font-weight-bold">Git</span> et <span class="font-weight-bold">Github</span>. J'utilise parfois <span class="font-weight-bold">Actions</span> (ou Gulp) pour automatiser certaines tâches.
							J'adhère à la simplicité de <span class="font-weight-bold">Standard JS</span> pour le linter.
						</p>
					</div>
				</div>
			</div>
		</div>
	`
}
export default mystack;