const feature = {
	data: function () {
		return {

		}
	},
	props: ['feature'],
	template: `
		
			<div class="row py-5">
				<div class="col-12 col-md-8 card border-0 bg-transparent animated-fadeInRight">
					<div class="py-5">
						<span class="d-block mb-4 font-main font-15">Salut, je suis Lionel Ensfelder</span>
            <h1 class="feature-title"></h1>
            <blockquote class="blockquote">
              <p class="mb-0">La simplicité est la sophistication suprême.</p>
              <footer class="blockquote-footer bg-transparent">Léonard de Vinci</footer>
            </blockquote> 
						<a href="assets/documents/CV-LIONEL-ENSFELDER.pdf" target="_blank" class="btn btn-lg btn-main font-main mr-3">CV<i class="las la-file-pdf ml-2"></i></a>
						<a href="https://github.com/LionelENSFELDER?tab=repositories" target="_blank" class="btn btn-lg btn-main-light my-4 mr-3">Github<i class="lab la-github ml-2"></i></a>
            <a href="https://www.linkedin.com/in/lionel-ensfelder/" target="_blank" class="btn btn-lg btn-main-light">Linkedin<i class="lab la-linkedin ml-2"></i></a>
					</div>
				</div>
				<div class="col-12 col-md-4 card border-0 bg-transparent animated-fadeInLeft">
					<div class="my-auto mx-sd-auto mx-md-auto">
						<img src="assets/img/lionel-ensfelder-alt.jpg" class="radius2 img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 90%;">
					</div>
				</div>
			</div>
	`
}
export default feature;