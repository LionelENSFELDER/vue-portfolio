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
						<span class="text-white-50 d-block mb-2">Salut, je suis</span>
						<h1><span class="">L</span>IONEL <span class="">E</span>NSFELDER</h1>
						<p class="text-white-50">
							👋
							Après des années passionnantes dans la Marine Nationale en tant que technicien réseau et télécoms, 
							je réoriente ma carrière professionnelle vers le métier de développeur web.
							<br><br>
							N'hésitez pas à jetter un coup d'oeil à mon profil <a href="https://www.linkedin.com/in/lionel-ensfelder/" target="_blank" class="font-candy">Github</a> 
							et 
							<a href="https://www.linkedin.com/in/lionel-ensfelder/" target="_blank" class="font-candy">LinkedIn</a>. 
							Pour télécharger mon CV c'est 
							<a href="./assets/docs/cv-ensfelder-lionel.pdf" target="_blank" class="font-candy">ici !</a>
						</p>
						<!-- <a href="./assets/docs/cv-ensfelder-lionel.pdf" target="_blank" type="button" class="btn btn-outline-light my-4">MON CV</a>
						<a href="https://github.com/LionelENSFELDER?tab=repositories" target="_blank" type="button" class="btn btn-outline-light my-4">GITHUB</a>
						<a href="https://www.linkedin.com/in/lionel-ensfelder/" target="_blank" type="button" class="btn btn-outline-light my-4">LINKEDIN</a> -->
					</div>
				</div>
				<div class="card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded img-fluid" title="Lionel Ensfelder" alt="lionel Ensfelder" style="width: 250px;">
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
					<div class="d-flex flex-column justify-content-center align-items-center h-100">
						<slot></slot>
					</div>
				</div>
				<div class="col-sm">
					<div class="">
						<p class="text-white-50">
							Conscient que le métier de développeur est en constante évolution, 
							je me forme constamment sur les dernières technologies. 
							La philosophie "learning by doing" et la loi de Pareto sont mes 
							mantras pour rester à jour et monter en compétences.
							<br><br>
							Ma feuille de route
							<br>
							<!-- bar -->
							<div class="mb-3">
								<span class="">Algorithms and Data Structures Certification (FreeCodeCamp)</span>
								<div class="progress" style="height: 5px;">
									<div class="progress-bar progress-bar-striped progress-bar-animated candy" role="progressbar" style="width: 35%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- bar -->
							<div class="mb-3">
								<span class="">Symfony</span>
								<div class="progress" style="height: 5px;">
									<div class="progress-bar progress-bar-striped progress-bar-animated candy" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- bar -->
							<div class="mb-3">
								<span class="">Vue.js</span>
								<div class="progress" style="height: 5px;">
									<div class="progress-bar progress-bar-striped progress-bar-animated candy" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- bar -->
							<div class="mb-3">
								<span class="">React</span>
								<div class="progress" style="height: 5px;">
									<div class="progress-bar progress-bar-striped progress-bar-animated candy" role="progressbar" style="width: 5%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>

							<!-- bar -->
							<div class="mb-3">
								<span class="">Google Analytics Academy</span>
								<div class="progress" style="height: 3px;">
									<div class="progress-bar progress-bar-striped progress-bar-animated candy" role="progressbar" style="width: 1%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</p>
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
		<div id="carousel-tech" class="carousel slide w-100" data-ride="carousel" data-interval="500">
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
					<img :src="work.coverImage" class="card-img h-100" :title="work.coverTitle" :alt="work.coverAlt">
				</div>

				<div class="toDisplay text-center font-white position-absolute">
					<div>
					<a :href="work.url" target="_blank" class=""><i class="font-20 p-2 mb-3 border border-light rounded-circle text-white las la-link"></i></a>
					</div>
					<h5 class="font-weight-bold">{{work.title}}</h5>
					<span class="custom-tags">{{work.tags}}</span>
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

//CAROUSEL TESTIMONIAL ITEM---------------------
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
					<div><img class="img-fluid rounded-circle mb-4" :src="testimonial.photo" :title="testimonial.photoTitle" :alt="testimonial.photoAlt" width="100px"></div>
					<h5 class="card-title">{{testimonial.name}}</h5>
					<h6 class="card-title">{{testimonial.client}}</h6>
					<p class="card-text">{{testimonial.testimonial}}</p>
					<a :href="testimonial.url" target="_blank" class="badge font-15">
						<i class="p-2 border border-dark white font-raisin rounded-circle lab la-black-tie"></i>	
					</a>
					<a :href="testimonial.link" target="_blank" class="badge font-15" v-html="testimonial.linkIcon"></a>
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
					<img src="assets/img/contact.png" class="rounded d-block mx-auto" title="Illustration partie contact" alt="Illustration partie contact" style="width: 300px;">
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
		<div class="col mb-3">
			<div class="card p-3 mb-3 contactitem-card">
				<a :href=contactitem.url target=_blank class="stretched-link"></a>
				<div class="row">
					<div class="col-8 my-auto">
						<span class="font-15">{{contactitem.text}}</span>
						<br>
						<span class="font-08">{{contactitem.info}}</span>
						
					</div>
					<div class="col-4">
						<span v-html="contactitem.icon"></span>
					</div>
				</div>
			</div>
		</div>
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
				url: '#quisuisje'
			},
			{
				id: 2,
				text: 'TECHNOLOGIES',
				url: '#technologies'
			},
			{
				id: 3,
				text: 'PARCOURS',
				url: '#parcours'
			},
			{
				id: 4,
				text: 'REALISATIONS',
				url: '#realisations'
			},
			{
				id: 5,
				text: 'TEMOIGNAGES',
				url: '#temoignages'
			},
			{
				id: 6,
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
				company: 'Lycée Frantz Fanon',
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
				job: 'Développeur web',
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
				coverImage: 'assets/img/works/placeholder.jpg',
				coverTitle: 'Image du site Aid 83',
				coverAlt:'Aid 83',
				client: 'AID83',
				date: '2018',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				tags: "UI Kit | PHPMailer" ,
				url: 'https://www.aid83.org/',
				github:'https://github.com/LionelENSFELDER/aid83-v2'
			},
			// {
			// 	id: 2,
			// 	title: 'Sophromassage',
			// 	image: './assets/img/works/placeholder.jpg',
			// 	client: 'Eléonore Hottou',
			// 	date: '2019',
			// 	job: '',
			// 	description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
			// 	url: '#',
			// 	github:'https://github.com/LionelENSFELDER/sophromassage'
			// },
			{
				id: 3,
				title: 'Portfolio',
				coverImage: 'assets/img/works/placeholder.jpg',
				coverTitle: 'Image du portfolio',
				coverAlt:'Portfilio de Lionel Ensfelder',
				alt:'aid83',
				client: 'Lionel Ensfelder',
				date: '2020',
				job: '',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				tags: "Bootstrap | Vue.js | Gulp" ,
				url: '#',
				github:'https://github.com/LionelENSFELDER/about-me'
			},
			// {
			// 	id: 4,
			// 	title: 'Do It On Time',
			// 	image: './assets/img/works/placeholder.jpg',
			// 	client: 'Lionel Ensfelder',
			// 	date: '2010',
			// 	job: '',
			// 	description: 'Bientôt disponible...',
			// 	url: '#',
			// 	github:'#'
			// }
		],
		testimonials: [
			{
				id: 1,
				name: 'Céline Tréhin',
				job: 'Présidente AID83',
				photo: './assets/img/testimonials/1.jpg',
				photoTitle:"Céline Tréhin",
				photoAlt:"Céline Tréhin",
				client: 'AID83',
				testimonial: 'Très à l\'écoute, Lionel a su moderniser notre site.',
				url: 'https://www.aid83.org/',
				linkIcon:'<i class="p-2 border border-dark white font-raisin rounded-circle lab la-facebook-f"></i>',
				link: 'https://bit.ly/2U6u6FO'
			},
			{
				id: 2,
				name: 'Eléonore Hottou',
				job: 'Sophrologue et masseuse',
				photo: './assets/img/testimonials/Eleonore-Hottou.jpg',
				photoTitle:"Eléonore Hottou",
				photoAlt:"Eléonore Hottou",
				client: 'Sophromassage',
				testimonial: 'Lionel fait preuve d\'une bonne capacité à cerner les besoins et à les respecter.',
				url: '#testimonials',
				linkIcon:'<i class="p-2 border border-dark white font-raisin rounded-circle lab la-facebook-f"></i>',
				link: 'https://bit.ly/2REGhbc'
			}
		],
		contactitems: [
			{
				id: 1,
				text: 'Adresse',
				info: '612 Avenue Maréchal Foch',
				icon: '<i class="align-middle border-0 font-raisin font-40 las la-globe"></i>',
				url: '#'

			},
			{
				id: 2,
				text: 'Téléphone',
				info: '06 52 40 10 21',
				icon: '<i class="align-middle border-0 font-raisin font-40 las la-mobile"></i>',
				url: 'https://github.com/LionelENSFELDER'
			},
			{
				id: 3,
				text: 'Mail',
				info: 'ensfelder.lionel@gmail.com',
				icon: '<i class="align-middle border-0 font-raisin font-40 las la-at"></i>',
				url: 'mailto://ensfelder.lionel@gmail.com'
			},
			{
				id: 4,
				text: 'Github',
				info: 'LionelENSFELDER',
				icon: '<i class="align-middle border-0 font-raisin font-40 lab la-github"></i>',
				url: 'https://github.com/LionelENSFELDER'
			},
			{
				id: 5,
				text: 'LinkedIn',
				info: 'lionel-ensfelder',
				icon: '<i class="align-middle border-0 font-raisin font-40 lab la-linkedin-in"></i>',
				url: 'https://www.linkedin.com/in/lionel-ensfelder/'
			},
			{
				id: 6,
				text: 'Medium',
				info: '@ensfelder.lionel',
				icon: '<i class="align-middle border-0 font-raisin font-40 lab la-medium"></i>',
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