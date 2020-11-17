// IMPORTS ---------------------
import navbar from './components/navbar.js'
import navitem from './components/navitem.js'
import section from './components/section.js'
import container from './components/container.js'
import feature from './components/feature.js'
import mystack from './components/mystack.js'
import tech from './components/tech.js' //---------------------------------
// import CarouselTestimonial from './components/CarouselTestimonial.js'
// import CarouselTestimonialItem from './components/CarouselTestimonialItem.js'
import contact from './components/contact.js'
import contactItem from './components/contactItem.js'
import projects from './components/projects.js'
import footer from './components/footer.js'
//COMPONENTS ---------------------
Vue.component('vue-navbar', navbar);
Vue.component('vue-navbar-item', navitem);
Vue.component('vue-section', section);
Vue.component('vue-container', container);
Vue.component('vue-feature', feature);
Vue.component('vue-mystack', mystack);
Vue.component('vue-tech', tech); //-----------------------------------
// Vue.component('vue-carousel-testimonial', CarouselTestimonial);
// Vue.component('vue-carousel-testimonial-item', CarouselTestimonialItem);
Vue.component('vue-contact', contact);
Vue.component('vue-contact-item', contactItem);
Vue.component('vue-footer', footer);
Vue.component('vue-projects', projects);
//VUE ---------------------
new Vue({
	el: '#app',
	data: {
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
			// {
			// 	id: 3,
			// 	text: 'PARCOURS',
			// 	url: '#parcours'
			// },
			{
				id: 4,
				text: 'REALISATIONS',
				url: '#realisations'
			},
			// {
			// 	id: 5,
			// 	text: 'TEMOIGNAGES',
			// 	url: '#temoignages'
			// },
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
				job: 'Développeur Web et Web Mobile (RNCP niv. 5, anciennement niv. III)',
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
				job: 'Certification en maintenance informatique.',
				description: 'Certification en maintenance informatique.',
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
		works: [
			{
				id: 1,
				target: 'aid83',
				targetId: '#aid83',
				title: 'AID83',
				coverImage: './assets/img/aid83/preview.png',
				coverTitle: 'Image du site Aid 83',
				coverAlt:'AID83',
				client: 'AID83',
				date: '2018',
				description: 'Le site vitrine de l\'assiciation d\'aide à domicile AID83 utilisant HTML5, CSS3, UI Kit, et PHP.',
				moreInfos: 'La création de se site vitrine à débuter en 2009 en partant du cahier des charges de l\'association. Il y a eu plusieurs versions au fil du temps notamment sous Joomla puis Wordpress pour finir par une version "light" plus rapide et complètement responsive. Le site dispose d\'un formulaire de demande de devis et de candidature en ligne.',
				stack: 'HTML5, CSS3, UI Kit, PHP',
				tags: "PHP" ,
				url: 'https://www.aid83.org/',
				github:'https://github.com/LionelENSFELDER/aid83-v2',
				carouselID:'carousel-aid83',
				carouselControlLink:'#carousel-aid83',
				captures: [
					{
						id: 1,
						capture: './assets/img/aid83/full.png'
					},
					// {
					// 	id: 1,
					// 	capture: './assets/img/aid83/aid831.jpg'
					// },
					// {
					// 	id: 2,
					// 	capture: './assets/img/aid83/aid832.jpg'
					// },
					// {
					// 	id: 2,
					// 	capture: './assets/img/aid83/aid833.jpg'
					// }
				]
			},
			{
				id: 2,
				target: 'sophromassage',
				targetId: '#sophromassage',
				title: 'Sophromassage',
				coverImage: './assets/img/sophromassage/preview2.png',
				coverTitle: 'Image du site Sophromassage',
				coverAlt:'Sophromassage',
				client: 'Eléonore Hottou',
				date: '2019',
				description: 'Site générique de présentation de l\'activité de sophrologie et de massages sportifs utilisant le combo Wordpress + Bootstrap.',
				moreInfos: 'Site vitrine Wordpress fait à partir d\'un thème enfant lui même basé sur un thème Bootstrap v4 (WP Bootstrap Starter). Ce site à été réaliser en mode "nomade" en utilisant Docker, Apache et MySQL pour créer un environement de développement sur clé usb. Le maquettage à été réaliser avec Figma. Ce site est entièrement responsive.',
				stack: 'HTML5, CSS3, Bootstrap, Wordpress, Apache, SQL',
				tags: "Wordpress" ,
				url: './assets/img/sophromassage/sophromassage.jpg',
				github:'https://github.com/LionelENSFELDER/sophromassage',
				carouselID:'carousel-sophromassage',
				carouselControlLink:'#carousel-sophromassage',
				captures: [
					{
						id: 1,
						capture: './assets/img/sophromassage/sophromassage1.jpg'
					},
					{
						id: 2,
						capture: './assets/img/sophromassage/sophromassage2.jpg'
					},
					{
						id: 3,
						capture: './assets/img/sophromassage/sophromassage3.jpg'
					},
				]
			},
			{
				id: 3,
				target: 'movies-manager',
				targetId: '#movies-manager',
				title: 'Movies Manager',
				coverImage: './assets/img/moviesmanager/preview.png',
				coverTitle: 'Image du projet Movies Manager',
				coverAlt:'',
				alt:'Movies Manager',
				client: 'Lionel Ensfelder',
				date: '2019',
				description: 'App de gestion d\'une bibliothèque de films stoquée localement dans une base de données SQL.',
				moreInfos: 'Ce projet a été développé dans le cadre du passage de la certification développeur web et web mobile. Il utilise un serveur Apache et une base de donnée SQL pour stoquer des informations sur des films. La partie front est basée sur Bootstrap et est entièrement adaptable aux terminaux mobiles.' ,
				stack: 'HTML5, CSS3, Bootstrap, PHP, Apache, SQL',
				tags: "PHP",
				url: './assets/img/moviesmanager/moviesmanager1.jpg',
				github:'https://github.com/LionelENSFELDER/movies-manager',
				carouselID:'carousel-movies-manager',
				carouselControlLink:'#carousel-movies-manager',
				captures: [
					{
						id: 1,
						capture: './assets/img/moviesmanager/moviesmanager1.jpg'
					},
					{
						id: 2,
						capture: './assets/img/moviesmanager/moviesmanager2.jpg'
					},
					{
						id: 3,
						capture: './assets/img/moviesmanager/moviesmanager3.jpg'
					},
					{
						id: 4,
						capture: './assets/img/moviesmanager/moviesmanager4.jpg'
					},
					{
						id: 5,
						capture: './assets/img/moviesmanager/moviesmanager5.jpg'
					}
				]
			},
			{
				id: 4,
				target: 'miiniimaal-weather',
				targetId: '#miiniimaal-weather',
				title: 'Miiniimaal Weather',
				coverImage: './assets/img/miiniimaal-weather/preview.png',
				coverTitle: 'Image du projet Miiniimaal Weather',
				coverAlt:'',
				alt:'Miiniimaal Weather',
				client: 'Lionel Ensfelder',
				date: '2020',
				description: 'Site permettant d\'avoir des informations météo via l\'API openweathermap.org. Il est en Javascript "vanilla" pour rester rapide, simple et maintenable.',
				moreInfos: 'App météo Javascript utilisant l\API openweathermap.org via des fonctions asynchrones. L\'app dispose d\'un systeme basique de notifications en cas d\'erreur réseau ou d\'identification de la localisation.' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript, Gulp',
				tags: "Javascript",
				url: './assets/img/miiniimaal-weather/miiniimaalweather1.jpg',
				github:'https://github.com/LionelENSFELDER/miiniimaal-weather',
				carouselID:'carousel-miiniimaal-weather',
				carouselControlLink:'#carousel-miiniimaal-weather',
				captures: [
					{
						id: 1,
						capture: './assets/img/miiniimaal-weather/miiniimaalweather1.jpg'
					},
					{
						id: 2,
						capture: './assets/img/miiniimaal-weather/miiniimaalweather2.jpg'
					}
				]
			},
			{
				id: 5,
				target: 'vue-todolist',
				targetId: '#vue-todolist',
				title: 'Vue Todolist',
				coverImage: './assets/img/vuetodolist/preview.png',
				coverTitle: 'Image du projet Vue todolist',
				coverAlt:'',
				alt:'Vue todolist',
				client: 'Lionel Ensfelder',
				date: '2020',
				description: 'Une liste de tâches en Vue.js (v2) permetant de trier les tâches. Elle permet également de trier les tâches...',
				moreInfos: 'Une liste de tâche éphémère en Vue.js (v2) "full web" permettant de trier les tâches par "tout", "fait", "à faire".' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript, Vue, Gulp',
				tags: "Vue",
				url: 'https://vue-todolist-pi.vercel.app/',
				github:'https://github.com/LionelENSFELDER/vue-todo',
				carouselID:'carousel-vue-todo',
				carouselControlLink:'#carousel-vue-todo',
				captures: [
					{
						id: 1,
						capture: './assets/img/vuetodolist/vuetodolist1.jpg'
					},
					{
						id: 2,
						capture: './assets/img/vuetodolist/vuetodolist2.jpg'
					},
					{
						id: 3,
						capture: './assets/img/vuetodolist/vuetodolist3.jpg'
					}
				]
			},
			{
				id: 7,
				target: 'react-movies-seeker',
				targetId: '#react-movies-seeker',
				title: 'React movies seeker',
				coverImage: './assets/img/react-movies-seeker/preview.png',
				coverTitle: 'Image du projet React movies seeker',
				coverAlt:'',
				alt:'React movies seeker',
				client: 'Lionel Ensfelder',
				date: '2020',
				description: 'Une interface simple permettant de rechercher des films et de visualiser les informations associées.',
				moreInfos: 'Une interface web simple et adaptable permettant de rechercher des films, de visualiser les informations associées et de les trier par catégogie. Elle utilise la v3 de l\'API themoviedb.org. ' ,
				stack: 'HTML5, CSS3, Bootstrap, Javascript, React, API',
				tags: "React",
				url: 'https://react-movies-seeker.vercel.app/',
				github:'https://github.com/LionelENSFELDER/react-movies-seeker',
				carouselID:'carousel-react-movies-seeker',
				carouselControlLink:'#carousel-react-movies-seeker',
				captures: [
					{
						id: 1,
						capture: './assets/img/react-movies-seeker/1.jpg'
					},
					{
						id: 2,
						capture: './assets/img/react-movies-seeker/2.jpg'
					},
					{
						id: 3,
						capture: './assets/img/react-movies-seeker/3.jpg'
					}
				]
			}
		],
		testimonials: [
			{
				id: 1,
				name: 'Céline Tréhin',
				photo: './assets/img/testimonials/celine-trehin.jpg',
				photoTitle:"Céline Tréhin",
				photoAlt:"Céline Tréhin",
				client: 'AID83',
				testimonial: 'Très à l\'écoute, Lionel a su moderniser notre site.',
				url: 'https://www.aid83.org/',
			},
			{
				id: 2,
				name: 'Eléonore Hottou',
				photo: './assets/img/testimonials/eleonore-hottou.jpg',
				photoTitle:"Eléonore Hottou",
				photoAlt:"Eléonore Hottou",
				client: 'Sophromassage',
				testimonial: 'Lionel fait preuve d\'une bonne capacité à cerner les besoins et à les respecter.',
				url: '#testimonials',
			}
		],
		contactitems: [
			{
				id: 1,
				text: 'Mail',
				info: 'ensfelder.lionel@gmail.com',
				icon: '<i class="align-middle border-0 font-onyx font-30 las la-at"></i>',
				url: 'mailto://ensfelder.lionel@gmail.com'
			},
			{
				id: 2,
				text: 'Github',
				info: 'LionelENSFELDER',
				icon: '<i class="align-middle border-0 font-onyx font-30 lab la-github"></i>',
				url: 'https://github.com/LionelENSFELDER'
			},
			{
				id: 3,
				text: 'LinkedIn',
				info: 'lionel-ensfelder',
				icon: '<i class="align-middle border-0 font-onyx font-30 lab la-linkedin-in"></i>',
				url: 'https://www.linkedin.com/in/lionel-ensfelder/'
			}
		],
		tech:[
			{
				id: 1,
				icon: '<i class="devicon-sass-original colored font-20"></i>',
				title: 'Sass'

			},
			{
				id: 2,
				icon: '<i class="devicon-bootstrap-plain colored font-20"></i>',
				title: 'Bootstrap'

			},
			{
				id: 3,
				icon: '<i class="devicon-javascript-plain colored font-20"></i>',
				title: 'Javascript'

			},
			{
				id: 4,
				icon: '<i class="devicon-angularjs-plain colored font-20"></i>',
				title: 'Angular'

			},
			{
				id: 5,
				icon: '<i class="devicon-react-original colored font-20"></i>',
				title: 'React'

			},
			{
				id: 6,
				icon: '<i class="devicon-nodejs-plain colored font-20"></i>',
				title: 'Node'

			},
			{
				id: 7,
				icon: '<i class="devicon-git-plain colored font-20"></i>',
				title: 'Git'

			}
		]
	}
})