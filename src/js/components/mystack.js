const mystack = {
	data: function () {
		return {

		}
	},
	props: ['mystack'],
	template: `
		
            <div class="row row-cols-1 row-cols-lg-2 py-5">
                <div class="card border-0 bg-transparent">
                    <div class="mx-sd-auto mx-md-auto animated-fadeInLeft">
                        <img src="assets/img/stack.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 100%;">
                    </div>
                </div>
				<div class="card border-0 bg-transparent">
					<div class="px-4">
						<p class="mb-2 animated-fadeInRight">
							Grâce à mon expérience personnel et professionnel, 
							j'ai acquis une solide compréhension de l'informatique 
							et des concepts du développement Web. 
							J'ai consacré une grande partie de mon temps libre à 
							appliquer ces concepts à des scénarios et des applications du monde réel.
						</p>
						<a href="https://github.com/LionelENSFELDER" target="_blank" class="btn btn-main my-4"> GITHUB <i class="lab la-github"></i></a>
					</div>
				</div>
			</div>
	`
}
export default mystack;