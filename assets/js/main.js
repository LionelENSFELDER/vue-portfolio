//SECTION ---------------------
Vue.component('component-section', {
	data: function () {
		return {

		}
	},
	props: ['title'],
	template: `
		<section id="" class="">
			<div class="container py-5">
				<h1 class="text-center mb-5">{{ title }}</h1>
				<slot></slot>
			</div>
		</section>
	`
})

Vue.component('component-section-without-title', {
	data: function () {
		return {

		}
	},
	props: ['title', 'id'],
	template: `
		<section id="" class="">
			<div class="container">
				<slot></slot>
			</div>
		</section>
	`
})

//CONTAINER ---------------------
Vue.component('component-container', {
	data: function () {
		return {

		}
	},
	template: `
		<div class="container">
			<slot></slot>
		</div>
	`
})

//NAVBAR ---------------------
Vue.component('component-navbar', {
	data: function () {
		return {

		}
	},
	template: `
		<header class="fixed-top">
			<nav class="navbar navbar-expand-lg navbar-dark">
			<div class="container">
				<a class="navbar-brand" href="#"><i class="lab la-connectdevelop display-4"></i></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse justify-content-end" id="navbarColor02">
					<ul class="navbar-nav">
						<slot></slot>
					</ul>
				</div>
			</div>
			</nav>
		</header>
	`
})

//NAVBAR ITEMS ---------------------
Vue.component('component-navbar-item', {
	data: function () {
		return {

		}
	},
	props: ['navitem'],
	template: `
	<li class="nav-item">
		<a class="nav-link" v-bind:href="navitem.url">{{navitem.text}}
			<span class="sr-only">{{navitem.text}}</span>
		</a>
	</li>
	`
})

//FEATURE ---------------------
Vue.component('component-feature', {
	data: function () {
		return {

		}
	},
	props: ['feature'],
	template: `
		
			<div class="card-deck">
				<div class="card border-0 bg-transparent">
					<div>
						<span class="text-white-50 d-block mb-2">Salut, je m'appelle</span>
						<h1>LIONEL ENSFELDER</h1>
						<p class="text-white-50">
							Après plusieurs années dans la Marine Nationale en tant que technicien réseau et télécoms, 
							je réoriente ma carrière professionnelle vers le métier de développeur web et web mobile.
							<br><br>
							Mon but ultime est de créer des interfaces web uniques et remarquables tout en restant 
							accessibles pour l'utilisateur et maintenables pour l'équipe de développeurs.
						</p>
						<a href="./assets/docs/cv-ensfelder-lionel.pdf" target="_blank" type="button" class="btn btn-outline-light my-4">MON CV</a href="./">
					</div>
				</div>
				<div class="card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded img-fluid" alt="lionel-ensfelder-portrait" style="width: 250px;">
					</div>
				</div>
			</div>
	`
})

//STACK ---------------------
Vue.component('component-stack', {
	data: function () {
		return {

		}
	},
	props: ['stack'],
	template: `
		<div class="">
			<div class="row">

				<div class="col-sm">
					<div class="mx-auto">
						<slot></slot>
					</div>
				</div>

				<div class="col-sm">
					<div class="">
						<p class="text-white-50">
							Une interface jolie et agréable ne fait pas tout ! 
							La partie backend est aussi essentielle et je me forme en parallèle pour en maîtriser les outils déterminants.
							<br>
							Une application réussie repose aussi sur un code respectant les bonnes pratiques, facilement testable et bien documenté.
						</p>
						<!-- <a href="" type="button" class="btn btn-outline-light my-4" data-toggle="modal" data-target="#exampleModal">Roadmap</a> -->
						<a href="https://github.com/LionelENSFELDER" target="_blank" type="button" class="btn btn-outline-light my-4">Github</a>

						<!-- Modal -->
						<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									...
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
									<button type="button" class="btn btn-primary">Save changes</button>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	`
})

//CAROUSEL TECH---------------------
Vue.component('component-carousel-tech', {
	data: function () {
		return {

		}
	},
	props: ['carouseltech'],
	template: `
		<div id="carousel-tech" class="carousel slide h-100" data-ride="carousel" data-interval="500">
			<div id="carousel-tech-inner" class="carousel-inner">
				<slot></slot>
			</div>
			<!-- <a class="carousel-control-prev" href="#carousel-tech" role="button" data-slide="prev">
				<span class="las la-chevron-circle-left display-4" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carousel-tech" role="button" data-slide="next">
				<span class="las la-chevron-circle-right display-4" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a> -->
		</div>
	`
})

//CAROUSEL ITEM TECH---------------------
Vue.component('component-carousel-tech-item', {
	data: function () {
		return {

		}
	},
	props: ['tech'],
	template: `
		<div class="carousel-item">
			<div class="card border-0 text-center bg-transparent rounded mx-auto">
				<div class="card-body">
					<div class="mb-4">
						<div v-html="tech.icon"></div>
					</div>
					<div class="">
						<h5>{{tech.title}}</h5>
					</div>
				</div>
			</div>
		</div>

	`
})

//FORMATION ---------------------
Vue.component('component-formation', {
	data: function () {
		return {

		}
	},
	props: ['formation'],
	template: `
		<div class="card charleston col-12 mb-4" style="min-height: 130px">
			<div class="card-body">
				<h5 class="card-title">{{formation.job}}</h5>
				<span href="#" class="badge badge-light mb-3">{{formation.date}} | {{formation.company}}</span>
				<p class="font-spanish">{{formation.description}}</p>
			</div>
		</div>
	`
})

//EXPERIENCES ---------------------
Vue.component('component-experience', {
	data: function () {
		return {

		}
	},
	props: ['experience'],
	template: `
		<div class="card charleston col-12 mb-4" style="min-height: 150px">
			<div class="card-body">
				<h5 class="card-title">{{experience.job}}</h5>
				<span href="#" class="badge badge-light mb-3">{{experience.date}} | {{experience.company}}</span>
				<p class="font-spanish">{{experience.description}}</p>
				<a :href="experience.url" target="_blank" class="custom-url"><i class="las la-external-link-alt"></i>{{experience.urlText}}</a>
			</div>
		</div>
	`
})

//WORK ---------------------
Vue.component('component-work', {
	data: function () {
		return {

		}
	},
	props: ['work'],
	template: `
		<div class="col mb-4 containerHovered">

			<div class="card border-0 h-100">

				<div class="h-100 toHide">
					<img :src="work.image" class="card-img h-100" alt="...">
				</div>

				<div class="toDisplay text-center font-white position-absolute">
					<div>
					<a :href="work.url" target="_blank" class=""><i class="font-20 p-2 mb-3 border border-light rounded-circle text-white las la-link"></i></a>
					</div>
					<h5 class="font-weight-bold">{{work.title}}</h5>
				</div>

			</div>

		</div>
	`
})



//CAROUSEL ---------------------
Vue.component('component-carousel-testimonial', {
	data: function () {
		return {

		}
	},
	props: ['carousel-testimonial'],
	template: `
		<div id="carousel-testimonial" class="carousel slide row" data-ride="carousel" data-touch="true">
			<div id="carousel-testimonial-inner" class="carousel-inner mx-auto col col-md-10 col-lg-10">
				<slot></slot>
			</div>
			<a class="carousel-control-prev" href="#carousel-testimonial" role="button" data-slide="prev">
				<span class="las la-chevron-circle-left display-4" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carousel-testimonial" role="button" data-slide="next">
				<span class="las la-chevron-circle-right display-4" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	`
})

//CAROUSEL ITEM TESTIMONIAL---------------------
Vue.component('component-carousel-testimonial-item', {
	data: function () {
		return {

		}
	},
	props: ['testimonial'],
	template: `
		<div class="carousel-item">
			<div class="card border-0 text-center bg-transparent">
				<div class="card-body">
					<div><img class="img-fluid rounded-circle mb-4" :src="testimonial.photo" alt="card image" width="100px"></div>
					<h5 class="card-title">{{testimonial.name}}</h5>
					<h6 class="card-title">{{testimonial.client}}</h6>
					<p class="card-text">{{testimonial.testimonial}}</p>
					<a :href="testimonial.url" class="badge font-15">
						<i class="p-2 border border-dark white font-raisin rounded-circle lab la-black-tie"></i>	
					</a>
					<a :href="testimonial.linkedin" class="badge font-15">
						<i class="p-2 border border-dark white font-raisin rounded-circle lab la-linkedin-in"></i>
					</a>
				</div>
			</div>
		</div>

	`
})

//CONTACT ---------------------
Vue.component('component-contact', {
	data: function () {
		return {

		}
	},
	template: `
		<div class="card-deck">

			<div class="card border-0 bg-transparent">
				<div class="mx-auto">
					<img src="assets/img/contact.png" class="rounded d-block mx-auto" alt="contact image" style="width: 300px;">
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
})

//CONTACT ITEM---------------------
Vue.component('component-contact-item', {
	data: function () {
		return {

		}
	},
	props: ['contactitem'],
	template: `
		<a type="" :href="contactitem.url" target="_blank" class="font-12 mr-3 bg-transparent text-white" data-toggle="tooltip" data-placement="bottom" :title="contactitem.text">
			<i v-html="contactitem.icon"></i>
		</a>
	`
})

//FOOTER ---------------------
Vue.component('component-footer', {
	data: function () {
		return {

		}
	},
	template: `
	<footer class="py-4 raisin">
		<div class="text-center">
			<span class="d-block">© Lionel ENSFELDER. All Right Reserved.</span>
			Launched by 
			<a href="https://getbootstrap.com/" target="_blank" class="d-inline"><i class="lab la-bootstrap"></i></a>
			and 
			<a href="https://vuejs.org/" target="_blank" class="d-inline"><i class="lab la-vuejs"></i></a>
		</div>
	</footer>
	`
})

//VUE ---------------------
new Vue({
	el: '#app',
	data: {
		sectionDark: 'py-5 text-white raisin',
		sectionGrey: 'py-5 text-white onyx',
		navitems: [{
				id: 1,
				text: 'QUI SUIS-JE ?',
				url: '#about'
			},
			{
				id: 2,
				text: 'PARCOURS',
				url: '#parcours'
			},
			{
				id: 3,
				text: 'REALISATIONS',
				url: '#works'
			},
			{
				id: 4,
				text: 'TEMOIGNAGES',
				url: '#testimonials'
			},
			{
				id: 5,
				text: 'CONTACT',
				url: '#contact'
			}
		],
		footeritems: [{
				id: 1,
				text: 'dfsfdgdfg',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				text: 'dfgfdg gfdg ',
				url: 'wwww.google.com'
			},
			{
				id: 3,
				text: 'fdgdfggfdfg dfgdfg',
				url: 'wwww.google.com'
			}
		],
		formations:[
			{
				id: 1,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'AFPA',
				date: '2019',
				job: 'Développeur Web et Web Mobile',
				description: 'Développeur Web et Web Mobile (RNCP niv. 5, anciennement niv. III).',
				urlText: '',
				url: ''
			},
			{
				id: 2,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2014',
				job: 'Mise en oeuvre - Routeurs Cisco.',
				description: 'Mise en oeuvre - Routeurs Cisco.',
				urlText: '',
				url: ''
			},
			{
				id: 3,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2009',
				job: 'Réseaux locaux / TCP / IP.',
				description: 'Réseaux locaux / TCP / IP.',
				urlText: '',
				url: ''
			},
			{
				id: 4,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '2008',
				job: 'Technicien informatique et télécoms (SITEL).',
				description: 'Technicien informatique et télécoms (SITEL).',
				urlText: '',
				url: ''
			},
			{
				id: 5,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'GRETA',
				date: '2007',
				job: 'Professionnalisation en maintenance informatique.',
				description: 'Professionnalisation en maintenance informatique.',
				urlText: '',
				url: ''
			},
			{
				id: 6,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Lycée Frantz Fanon,',
				date: '2006',
				job: 'B.E.P électrotechnique.',
				description: 'B.E.P électrotechnique.',
				urlText: '',
				url: ''
			}
		],
		experiences: [{
				id: 1,
				icon: '<i class="las la-laptop-code font-spanish display-4 rounded-lg"></i>',
				company: 'Uziit',
				date: '2 mois',
				job: 'Opérateur télécommunications',
				description: 'Amélioration de l\'interface utilisateur. Récupération des données sur l\’API Rest de la Blockchain. Stockage des avis mis en avant dans la base MySQL.',
				urlText: 'uziit.biz',
				url: 'https://www.uziit.biz/'
			},
			{
				id: 2,
				icon: '<i class="las la-wrench font-spanish display-4 rounded-lg"></i>',
				company: 'Monnaie Services',
				date: '1 an',
				job: 'Technicien informatique',
				description: 'Montage, configuration et maintenance de bornes tactiles. Administration et support de niveau 2',
				urlText: 'monnaie-services.com',
				url: 'https://www.monnaie-services.com/'
			},
			{
				id: 3,
				icon: '<i class="las la-network-wired font-spanish display-4 rounded-lg"></i>',
				company: 'Free Infrastructures',
				date: '4 mois',
				job: 'Technicien fibre',
				description: 'Installation de réseaux fibres optique. Gestion des incidents niveaux 2.',
				urlText: 'free.fr',
				url: 'https://www.free.fr/freebox/fibre-optique'
			},
			{
				id: 4,
				icon: '<i class="las la-anchor font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '9 ans',
				job: 'Technicien réseaux et télécoms',
				description: 'Administration et maintenance des réseaux fibre et satellite. Administrations de serveurs et support niveau 2. Rédaction de documentations technique.',
				urlText: 'defense.gouv.fr',
				url: 'https://www.defense.gouv.fr/marine'
			}
		],
		works: [{
				id: 1,
				title: 'AID83',
				image: './assets/img/works/placeholder.jpg',
				client: 'AID83',
				date: '',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'https://www.aid83.org/',
				github:'https://github.com/LionelENSFELDER/aid83-v2'
			},
			{
				id: 2,
				title: 'Sophromassage',
				image: './assets/img/works/placeholder.jpg',
				client: 'Eléonore Hottou',
				date: '',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: '#',
				github:'https://github.com/LionelENSFELDER/sophromassage'
			},
			{
				id: 3,
				title: 'Portfolio',
				image: './assets/img/works/placeholder.jpg',
				client: 'Lionel Ensfelder',
				date: '',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: '#',
				github:'https://github.com/LionelENSFELDER/about-me'
			},
			{
				id: 4,
				title: 'Do It On Time',
				image: './assets/img/works/placeholder.jpg',
				client: 'Lionel Ensfelder',
				date: '',
				job: '',
				description: 'Bientôt disponible...',
				url: '#',
				github:'#'
			}
		],
		testimonials: [
			{
				id: 1,
				name: 'Marc Dotri',
				job: 'CEO at vanillajs.com',
				photo: './assets/img/testimonials/1.jpg',
				client: 'Marine Nationale',
				testimonial: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com',
				linkedin: ''
			},
			{
				id: 2,
				name: 'Marc Dotri',
				job: 'CEO at vanillajs.com',
				photo: './assets/img/testimonials/2.jpg',
				client: 'Marine Nationale',
				testimonial: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com',
				linkedin: ''
			}
		],
		contactitems: [
			{
				id: 1,
				text: 'lionel-ensfelder',
				icon: '<i class="font-20 lab la-linkedin-in"></i>',
				url: 'https://www.linkedin.com/in/lionel-ensfelder/'
			},
			{
				id: 2,
				text: 'LionelENSFELDER',
				icon: '<i class="font-20 lab la-github"></i>',
				url: 'https://github.com/LionelENSFELDER'
			},
			{
				id: 3,
				text: '@ensfelder.lionel',
				icon: '<i class="font-20 lab la-medium"></i>',
				url: 'https://medium.com/@ensfelder.lionel'
			}
		],
		techs:[
			{
				id:1,
				title: 'Vue.js',
				icon: '<i class="lab la-vuejs display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:2,
				title: 'Bootstrap',
				icon: '<i class="lab la-bootstrap display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:3,
				title: 'Git',
				icon: '<i class="lab la-git display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:4,
				title: 'UI Kit',
				icon: '<i class="lab la-uikit display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:5,
				title: 'Scrum',
				icon: '<i class="lab la-buffer display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:6,
				title: 'Wordpress',
				icon: '<i class="lab la-wordpress display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:7,
				title: 'SASS',
				icon: '<i class="lab la-sass display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:8,
				title: 'Symfony',
				icon: '<i class="lab la-symfony display-2"></i>',
				url: 'wwww.google.com'
			},
			{
				id:9,
				title: 'Apache, SQL',
				icon: '<i class="las la-server display-2"></i>',
				url: 'https://apache.org/'
			},
			{
				id:10,
				title: 'Figma',
				icon: '<i class="lab la-figma display-2"></i>',
				url: 'https://www.figma.com/'
			},
			{
				id:11,
				title: 'Windows Server',
				icon: '<i class="lab la-windows display-2"></i>',
				url: 'https://www.microsoft.com/fr-fr/cloud-platform/windows-server'
			},
			{
				id:12,
				title: 'Hyperledger Fabric',
				icon: '<i class="lab la-connectdevelop display-2"></i>',
				url: 'https://www.hyperledger.org/projects/fabric'
			},
			{
				id:13,
				title: 'PHP Unit',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://phpunit.de/'
			},
			{
				id:14,
				title: 'Jest',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://jestjs.io/'
			},
			{
				id:15,
				title: 'Foundation',
				icon: '<i class="las la-file-code display-2"></i>',
				url: 'https://foundation.zurb.com/'
			},
			{
				id:16,
				title: 'Ubuntu',
				icon: '<i class="lab la-ubuntu display-2"></i>',
				url: 'https://www.ubuntu-fr.org/'
			}
		]
	}
})