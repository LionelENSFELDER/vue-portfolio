const mystack = {
	data: function () {
		return {

		}
	},
	props: ['mystack'],
	template: `
		
            <div class="row row-cols-1 row-cols-lg-2 py-5">
                <div class="card border-0 bg-transparent">
                    <div class="my-auto mx-sd-auto mx-md-auto animated-fadeInLeft">
                        <img src="assets/img-compressed/stack.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 100%;">
                    </div>
                </div>
				<div class="card border-0 bg-transparent">
					<div class="p-4">
						<p class="mb-3 animated-fadeInRight">
                        Durant mon parcours personnel et professionnel, j'ai acquis une solide compréhension des concepts de l'informatique et du développement Web. 
                        Je consacre une grande partie de mon temps libre à appliquer ces concepts à des scénarios et applications fictifs ou du monde réel.
                        <ul class="list-unstyled mt-5">
                            <li><i class="las la-caret-right font-main"></i>Langages: HTML 5, CSS 3, SASS, Javascript ES6, PHP</li>
                            <li><i class="las la-caret-right font-main"></i>Frameworks & librairies: jQuery, Bootstrap, React, Symfony</li>
                            <li><i class="las la-caret-right font-main"></i>Serveur: Node.js (Express)</li>
                        </ul>

                        
						</p>
					</div>
				</div>
			</div>
	`
}
export default mystack;