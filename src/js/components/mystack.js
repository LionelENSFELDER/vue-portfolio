const mystack = {
	data: function () {
		return {

		}
	},
	props: ['mystack'],
	template: `

    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 mb-5 mb-md-0">
          <div class="my-auto mx-sd-auto mx-md-auto">
            <img src="assets/img/more-infos.jpg" class="radius1 img-fluid" alt="Responsive image">
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="">
            <p>
	    	Je n'aime pas me définir par le travail que j'ai réalisé. Je me définis par ce que je veux accomplir dans le futur.
		Les compétences peuvent s'acquérir, mais la personnalité et l'état d'esprit font toute la différence.
 		Je suis passionné par le développement web et en particulier par l'écosystème Javascript.
		Pendant mon temps libre je passe du temps avec ma famille, je fais de l'exercice, je lis (un peu) et je contribue à des projets opens-source.
		</br></br>
		Je suis adepte de la philosophie "less is more" donc je préfère me concentrer sur un petit nombre de choses et y mettre toute mon énergie. 
            </p>
            <p>
              <i class="las la-palette mr-2 mb-3 font-main"></i>Frontend : HTML, CSS, SASS, Javascript, Typescript, jQuery, Bootstrap, React. </br>
              <i class="las la-server mr-2 mb-3 font-main"></i>Backend : Node.js, Next.js, SQL, MongoDB, PHP. </br>
              <i class="las la-hammer mr-2 mb-3 font-main"></i>Outils : Trello, Jira, Git, Docker, Scrum. </br>
            </p>
          </div>
        </div>
      </div>
    </div>
		
		<div class="row">
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5 animated-fadeInRight">
					<div class="card-body p-0">
						<img src="assets/img/coding.png" class="img-fluid" alt="Responsive image" style="width:65px">
						<h5 class="card-title mt-4">Langagessss</h5>
						<p class="card-text">
							Je reste fidèle aux classiques pour l'instant avec <span class="font-weight-bold">HTML 5 + CSS3</span> pour la base.
							Parfois <span class="font-weight-bold">Javascript</span> ou <span class="font-weight-bold">PHP</span> vanilla sont plus efficients qu'une grosse librairie et permettent de rester "indépendant".
						</p>
					</div>
				</div>
			</div>
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5 animated-fadeInDown">
					<div class="card-body p-0">
						<img src="assets/img/frameworks.png" class="img-fluid" alt="Responsive image" style="width:65px">
						<h5 class="card-title mt-4">Frameworks & libraries</h5>
						<p class="card-text">
							Pour l'UI de mes projets j'utilise principalement <span class="font-weight-bold">Bootstrap ou UI Kit</span>.
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
							Le versionning du code se fait avec <span class="font-weight-bold">Git</span> et <span class="font-weight-bold">Github</span>. J'utilise parfois les <span class="font-weight-bold">Github Actions</span> (ou Gulp) pour automatiser certaines tâches.
							J'adhère à la simplicité d'<span class="font-weight-bold">ESLint ou Standard JS</span> pour le linter.
						</p>
					</div>
				</div>
			</div>
		</div>
	`
}
export default mystack;
