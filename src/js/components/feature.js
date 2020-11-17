const feature = {
	data: function () {
		return {

		}
	},
	props: ['feature'],
	template: `
		
			<div class="row row-cols-1 row-cols-lg-2 py-5">
				<div class="card border-0 bg-transparent">
					<div class="px-4">
						<span class="d-block mb-2 font-main">Salut, je suis</span>
						<h1 class="font-30" data-text="LIONEL ENSFELDER">LIONEL ENSFELDER,</h1>
						<p class="mb-2 animated-fadeInRight">
							Après des années enrichissantes dans la Marine Nationale en tant que technicien informatique et télécoms, j'ai dentrepris une réorientation vers le métier de <span class="font-weight-bold">développeur web frontend</span>. 
							Je me spécialise dans le développement web frontend utilisant les Frameworks Javascript Angular et React ainsi que Node.js pour la partie backend.
						</p>
						<a href="https://drive.google.com/file/d/1JC9cDNEvC2gAZDfeMiSQ3WQFFVYTDNvv/view?usp=sharing" class="btn btn-main my-4">MON CV<i class="las la-file-alt ml-2"></i></a>
					</div>
				</div>
				<div class="card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto animated-fadeInLeft">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 80%;">
					</div>
				</div>
			</div>
	`
}
export default feature;