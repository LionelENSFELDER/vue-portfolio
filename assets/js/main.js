//SECTION ---------------------
Vue.component('component-section', {
	data: function () {
		return {

		}
	},
	props: ['title'],
	template: `
		<section id="" class="">
			<div class="container">
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
		<header>
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
		<div class="">
			<div class="row">
				<div class="col-sm">
					<div class="">
						<span class="text-white-50 d-block mb-2">Salut, je m'appelle</span>
						<h1>LIONEL ENSFELDER</h1>
						<p class="text-white-50">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nunc convallis dolor vel massa maximus, 
							et varius magna sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nunc convallis dolor vel massa maximus, et varius magna sodales.
						</p>
						<button type="button" class="btn btn-outline-light my-4">MES REALISATIONS</button>
					</div>
				</div>
				<div class="col-sm">
					<div class="mx-auto mx-lg-auto">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded d-block" alt="lionel-ensfelder-portrait" style="width: 70%;">
					</div>
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
					<div class="mx-auto mx-auto">
						<slot></slot>
					</div>
				</div>

				<div class="col-sm">
					<div class="">
						<p class="text-white-50">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nunc convallis dolor vel massa maximus, 
							et varius magna sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nunc convallis dolor vel massa maximus, et varius magna sodales.
						</p>
						<button type="button" class="btn btn-outline-light my-4">ROADMAP</button>
						<button type="button" class="btn btn-outline-light my-4">Github</button>
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

//EXPERIENCES ---------------------
Vue.component('component-experience', {
	data: function () {
		return {

		}
	},
	props: ['experience'],
	template: `
		<div class="col-12 col-md-6 mb-4">
			<div class="card h-100 charleston">
				<div class="card-body p-2">
					<div class="row">
						<div class="col-2 my-auto">
							<div v-html="experience.icon"></div>
						</div>
						<div class="col-10">
							<h5 class="card-title">{{experience.company}}</h5>
							<p class="custom-date mb-0 font-spanish">{{experience.date}}</p>
							<p class="font-spanish">{{experience.description}}</p>
							<a href="#" class="custom-url">
								<i class="las la-external-link-alt"></i>
								{{experience.urlText}}
							</a>
						</div>
					</div>
				</div>
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
		<div class="mb-4 col">
			<div class="card border-0 containerHovered h-100">
				<div class="h-100 toHide">
					<img :src="work.image" class="card-img h-100" alt="...">
				</div>
				<div class="toDisplay text-left position-absolute">
					<a href="#" class="display-4"><i class="rounded-circle arsenic-transparent text-white las la-link"></i></a>
					<a href="#" class="display-4"><i class="rounded-circle arsenic-transparent text-white lab la-git"></i></a>
					<h5 class="text-dark">{{work.title}}</h5>
					<span class="text-dark font-weight-lighter">{{work.description}}</span>
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
		<div id="carousel-testimonial" class="carousel slide" data-ride="carousel">
			<div id="carousel-testimonial-inner" class="carousel-inner">
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
			<div class="card border-0">
				<div class="card-body text-center border-0 bg-dark">
					<div><img class="img-fluid" :src="testimonial.photo" alt="card image" width="100px"></div>
					<h5 class="card-title">{{testimonial.name}}</h5>
					<h6 class="card-title">{{testimonial.client}}</h6>
					<p class="card-text">{{testimonial.testimonial}}</p>
					<a href="#" class="badge badge-light">
						<i class="las la-link"></i>
						Link
					</a>
						<a href="#" class="badge badge-light">
						<i class="lab la-linkedin-in"></i>
						LinkedIn
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
		<div class="row">
			<slot></slot>
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
	<div class="col-12 col-lg-6">
		<button type="button" class="btn bg-transparent btn-lg btn-block text-white">
		<i v-html="contactitem.icon"></i>
		{{contactitem.text}}
		</button>
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
	<footer class="navbar navbar-light bg-light">
		<div class="text-center">
			<a href="" class="">Copyrights</a>
			<a href="" class="">Mentions</a>
			<a href="" class="">View on github</a>
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
				text: 'EXPERIENCES',
				url: '#experiences'
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
				job: 'Yfgdsfg dgdfg ',
				description: 'Montage, configuration et maintenance de bornes tactiles. Administration et support de niveau 2',
				urlText: 'monnaie-services.com',
				url: 'https://www.monnaie-services.com/'
			},
			{
				id: 3,
				icon: '<i class="las la-network-wired font-spanish display-4 rounded-lg"></i>',
				company: 'Free Infrastructures',
				date: '4 mois',
				job: 'Ihgfdssf',
				description: 'Installation de réseaux fibres optique. Gestion des incidents niveaux 2.',
				urlText: 'free.fr',
				url: 'https://www.free.fr/freebox/fibre-optique'
			},
			{
				id: 4,
				icon: '<i class="las la-anchor font-spanish display-4 rounded-lg"></i>',
				company: 'Marine Nationale',
				date: '9ans',
				job: 'Mojfgh',
				description: 'Administration et maintenance des réseaux fibre et satellite. Administrations de serveurs et support niveau 2. Rédaction de documentations technique.',
				urlText: 'defense.gouv.fr',
				url: 'https://www.defense.gouv.fr/marine'
			},
		],
		works: [{
				id: 1,
				target: 'a',
				title: 'AID83',
				image: './assets/img/1.jpg',
				client: 'Marine Nationale',
				date: '2000 - 2003',
				job: 'Opérateur télécommunications',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				target: 'b',
				title: 'Work TITLE 2',
				image: './assets/img/2.jpg',
				client: 'Madfdfdf',
				date: '2000 - 2008',
				job: 'Opdfdfur tédfdfdfications',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 3,
				target: 'c',
				title: 'Work TITLE 3',
				image: './assets/img/3.jpg',
				client: 'fgfdhghgjhkj',
				date: '2000 - 2008',
				job: 'Opdfdbnvbnbtions',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 4,
				target: 'c',
				title: 'Work TITLE 3',
				image: './assets/img/4.jpg',
				client: 'fgfdhghgjhkj',
				date: '2000 - 2008',
				job: 'Opdfdbnvbnbtions',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 5,
				target: 'c',
				title: 'Work TITLE 3',
				image: './assets/img/5.jpg',
				client: 'fgfdhghgjhkj',
				date: '2000 - 2008',
				job: 'Opdfdbnvbnbtions',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			}
		],
		testimonials: [
			{
				id: 1,
				name: 'Marc Dotri',
				job: 'CEO at vanillajs.com',
				photo: './assets/img/testimonials/1.jpg',
				client: 'Marine Nationale',
				testimonial: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				name: 'Marc Dotri',
				job: 'CEO at vanillajs.com',
				photo: './assets/img/testimonials/2.jpg',
				client: 'Marine Nationale',
				testimonial: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			}
		],
		contactitems: [
			{
				id: 1,
				text: 'Marc Dotri',
				icon: '<i class="las la-car"></i>',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				text: 'Marc Dotri',
				icon: '<i class="las la-sms"></i>',
				url: 'wwww.google.com'
			},
			{
				id: 3,
				text: 'Marc Dotri',
				icon: '<i class="las la-exclamation-circle"></i>',
				url: 'wwww.google.com'
			},
			{
				id: 4,
				text: 'Marc Dotri',
				icon: '<i class="las la-exclamation-circle"></i>',
				url: 'wwww.google.com'
			},
			{
				id: 5,
				text: 'Marc Dotri',
				icon: '<i class="las la-exclamation-circle"></i>',
				url: 'wwww.google.com'
			},
			{
				id: 6,
				text: 'Marc Dotri',
				icon: '<i class="las la-exclamation-circle"></i>',
				url: 'wwww.google.com'
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