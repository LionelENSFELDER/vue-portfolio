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
				<h1>{{ title }}</h1>
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
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
						<span>Salut, je m'appelle </span>
						<h1>Lionel Ensfelder</h1>
						<p class="">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Nunc convallis dolor vel massa maximus, 
							et varius magna sodales.
						</p>
						<button type="button" class="btn btn-light btn-lg my-4">Mes réalisations</button>
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

//ABOUT ME ---------------------
Vue.component('component-about', {
	data: function () {
		return {

		}
	},
	props: ['about'],
	template: `
	<div class="">
		<div class="row">
			<div class="row">
				<slot></slot>
			</div>	
		</div>
	</div>
	`
})

//TECH ---------------------
Vue.component('component-tech', {
	data: function () {
		return {

		}
	},
	props: ['tech'],
	template: `
	<div class="card border-0 text-center col-6 col-sm-3 col-md-4 col-lg-3 bg-transparent">
		<div class="card-body pt-0">
			<div class="">
				<div v-html="tech.icon"></div>
			</div>
			<div class="">
				<h5>{{tech.title}}</h5>
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
	<div class="">
		<div class="">
			<div class="card bg-transparent">
				<div class="card-body">
					<div class="row">
						<div class="col-2">
						<div v-html="experience.icon"></div>
						</div>
						<div class="col-10">
							<h5 class="card-title">{{experience.company}}</h5>
							<h6 class="card-subtitle mb-2">{{experience.date}}</h6>
							<h6 class="card-title">{{experience.job}}</h6>
							<p class="card-text">{{experience.description}}</p>
							<a href="#" class="card-link">{{experience.url}}</a>
						</div>
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
		<div class="mb-3">
			<div class="card">
				<img v-bind:src="work.image" class="card-img" alt="...">
				<div class="card-img-overlay">

					<!-- Button trigger modal -->
					<a href="#" class="stretched-link" data-toggle="modal" v-bind:data-target="\'#\'+ work.target"></a>
				</div>

				<!-- Modal -->
				<div class="modal fade" v-bind:id="work.target" data-backdrop="static" tabindex="-1" role="dialog" v-bind:aria-labelledby="work.target + \'Label\'" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content bg-warning">
						<div class="modal-header">
							<h5 class="modal-title" v-bind:id="work.target + \'Label\'">{{work.title}}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body">
							{{work.description}}
							<br>
							<div class="">
								<span class="badge badge-light">Light</span>
								<span class="badge badge-light">Light</span>
								<span class="badge badge-light">Light</span>
							</div>
							<div class="">
								<a href=""><span class="badge badge-dark"><i class="lab la-github"></i>Github</span></a>
								<a href=""><span class="badge badge-dark"><i class="las la-external-link-alt"></i>Voir</span></a>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
						</div>
					</div>
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

//CAROUSEL ITEM ---------------------
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
		sectionDark: 'py-5 text-white bg-dark',
		sectionGrey: 'py-5 text-white bg-warning',
		sectionNav: 'py-0 m-0 bg-dark',
		navitems: [{
				id: 1,
				text: 'Qui suis-je ?',
				url: '#about'
			},
			{
				id: 2,
				text: 'Mon expérience',
				url: '#experiences'
			},
			{
				id: 3,
				text: 'Mes réalisations',
				url: '#works'
			},
			{
				id: 4,
				text: 'Témoignages',
				url: '#testimonials'
			},
			{
				id: 5,
				text: 'Contactez moi',
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
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				company: 'Marine Nationale',
				date: '2000 - 2003',
				job: 'Opérateur télécommunications',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 2,
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				company: 'Hkjfg jdkgj',
				date: '2000 - 2003',
				job: 'Yfgdsfg dgdfg ',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 3,
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				company: 'Psjkhf sfd ',
				date: '2000 - 2003',
				job: 'Ihgfdssf',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
			{
				id: 4,
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				company: 'Edfsdf IU',
				date: '2000 - 2003',
				job: 'Mojfgh',
				description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.',
				url: 'wwww.google.com'
			},
		],
		works: [{
				id: 1,
				target: 'a',
				title: 'Work TITLE',
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
				icon: '<i class="lab la-vuejs display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:2,
				title: 'Bootstrap',
				icon: '<i class="lab la-bootstrap display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:3,
				title: 'Tech Title',
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:4,
				title: 'Tech Title',
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:5,
				title: 'Tech Title',
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:6,
				title: 'Tech Title',
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				url: 'wwww.google.com'
			},
			{
				id:7,
				title: 'Tech Title',
				icon: '<i class="las la-exclamation-circle display-4"></i>',
				url: 'wwww.google.com'
			}
		]
	}
})