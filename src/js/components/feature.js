const feature = {
	data: function () {
		return {

		}
	},
	props: ['feature'],
	template: `
		
			<div class="row row-cols-1 row-cols-lg-2 py-5">
				<div class="card border-0 bg-transparent">
					<div class="p-4">
						<span class="d-block mb-2 font-main">Salut, je suis</span>
						<h1 class="font-30" data-text="LIONEL ENSFELDER">LIONEL ENSFELDER,</h1>
						<h2 class="mb-5 font-20" data-text="Développeur web frontend">Développeur web frontend</h2>
						<p class="mb-2 animated-fadeInRight">
							Après des années enrichissantes dans la Marine Nationale en tant que technicien informatique et télécoms, j'ai décidé de devenir <span class="font-weight-bold">développeur web frontend</span>. 
							Je me spécialise dans le développement web frontend utilisant des technologies Javascript telles que React, Vue ou encore Node.js.
						</p>
						<a href="https://drive.google.com/file/d/1mWW-3lnAoUBYQ6O5nQoydXutG3lPMloJ/view?usp=sharing" target="_blank" class="btn btn-main my-4">VOIR MON CV <i class="las la-file"></i></a>
						<a href="https://github.com/LionelENSFELDER" target="_blank" class="btn btn-main-light my-4"> GITHUB <i class="lab la-github"></i></a>
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