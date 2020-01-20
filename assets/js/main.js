//SECTION ---------------------
Vue.component('component-section', {
	data: function () {
	  return {
		
	  }
	},
	props: ['section', 'title', 'id'],
	template: `
		<section id="" class="">
			<div class="container">
				<h1>{{ title }}</h1>
				<slot></slot>
			</div>
		</section>
	`
})

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
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#"><i class="las la-meteor display-4"></i></a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarColor02">
			<ul class="navbar-nav mr-auto">
				<slot></slot>
			</ul>
			<form class="form-inline my-2 my-lg-0">
			<input class="form-control mr-sm-2" type="text" placeholder="Search">
			<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
			</form>
		</div>
	</nav>
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

//FOOTER ---------------------
Vue.component('component-footer', {
	data: function () {
	  return {
		
	  }
	},
	template: `
	<footer class="navbar navbar-light bg-light">
		<a class="navbar-brand">Footer</a>
		<form class="form-inline">
			<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
			<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	</footer>
	`
})

//CARD ---------------------
Vue.component('component-card', {
	data: function () {
		return {
			
		}
	},
	props: ['card'],
	template: `
	<div class="card bg-primary">
		<img :src="card.img" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">{{ card.title }}</h5>
			<p class="card-text">{{ card.content }}</p>
			<a :href="card.url" class="btn btn-primary">{{ card.link }}</a>
		</div>
	</div>
	`
})

//HEADER ---------------------
Vue.component('component-header', {
	data: function () {
		return {
			
		}
	},
	props: ['header'],
	template: `
		<header class="">
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
						<button type="button" class="btn btn-primary btn-lg my-4">Mes réalisations</button>
					</div>
				</div>
				<div class="col-sm">
					<div class="mx-auto">
						<img src="assets/img/lionel-ensfelder.jpg" class="rounded mx-auto d-block" alt="lionel-ensfelder-portrait" style="width: 70%;">
					</div>
				</div>
			</div>
		</header>
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

			<div class="col-sm">
				<div class="">
					<p class="">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nunc convallis dolor vel massa maximus, 
						et varius magna sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Nunc convallis dolor vel massa maximus, 
						et varius magna sodales.
					</p>
					<button type="button" class="btn btn-primary btn-lg my-4">Mon CV</button>
				</div>
			</div>

			<div class="col-sm">
				<div class="mb-4">
					<span>HTML5 + CSS3</span>
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
					</div>
				</div>

				<div class="mb-4">
					<span>HTML5 + CSS3</span>
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
					</div>
				</div>

				<div class="">
					<span>HTML5 + CSS3</span>
					<div class="progress">
						<div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
					</div>
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



//VUE ---------------------
new Vue({
	el: '#app',
	data: {
		sectionDark : 'py-5 text-white bg-dark',
		sectionGrey : 'py-5 text-white bg-warning',
		sectionNav:'p-0 bg-dark',
		cards: [
			{id: 1, title: 'Card 1', content: 'erffgs gfdgdfgghf dghfghhgf', link:'Link 1', url: 'wwww.g1.fr', img: './assets/img/1.jpg'},
			{id: 2, title: 'Card 2', content: 'erffgs gfdgdfgghf dghfghhgf', link:'Link 2', url: 'wwww.g2.fr', img: './assets/img/2.jpg'},
			{id: 3, title: 'Card 3', content: 'erffgs gfdgdfgghf dghfghhgf', link:'Link 3', url: 'wwww.g3.fr', img: './assets/img/3.jpg'},
			{id: 4, title: 'Card 4', content: 'erffgs gfdgdfgghf dghfghhgf', link:'Link 4', url: 'wwww.g3.fr', img: './assets/img/1.jpg'}
		],
		navitems: [
			{id: 1, text: 'A propos', url:'wwww.google.com'},
			{id: 2, text: 'Mon expérience', url:'wwww.google.com'},
			{id: 3, text: 'Mes réalisations', url:'wwww.google.com'},
			{id: 4, text: 'Témoignages', url:'wwww.google.com'},
			{id: 5, text: 'Contactez moi', url:'wwww.google.com'}
		],
		experiences: [
			{id: 1, icon: '<i class="las la-exclamation-circle display-4"></i>', company: 'Marine Nationale', date:'2000 - 2003', job: 'Opérateur télécommunications', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
			{id: 2, icon: '<i class="las la-exclamation-circle display-4"></i>', company: 'Hkjfg jdkgj', date:'2000 - 2003', job: 'Yfgdsfg dgdfg ', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
			{id: 3, icon: '<i class="las la-exclamation-circle display-4"></i>', company: 'Psjkhf sfd ', date:'2000 - 2003', job: 'Ihgfdssf', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
			{id: 4, icon: '<i class="las la-exclamation-circle display-4"></i>', company: 'Edfsdf IU', date:'2000 - 2003', job: 'Mojfgh', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
		],
		works: [
			{id: 1, target:'a', title: 'Work TITLE', image: './assets/img/1.jpg', client: 'Marine Nationale', date:'2000 - 2003', job: 'Opérateur télécommunications', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
			{id: 2, target:'b', title: 'Work TITLE 2', image: './assets/img/2.jpg', client: 'Madfdfdf', date:'2000 - 2008', job: 'Opdfdfur tédfdfdfications', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'},
			{id: 3, target:'c', title: 'Work TITLE 3', image: './assets/img/3.jpg', client: 'fgfdhghgjhkj', date:'2000 - 2008', job: 'Opdfdbnvbnbtions', description: 'Lorem ipsum lodum casum faluh rethem fathum rictum, zephir ecofn, gdhf.', url:'wwww.google.com'}
		]
	}
})