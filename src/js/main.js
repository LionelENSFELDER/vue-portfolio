// IMPORTS ---------------------
import navbar from './components/navbar.js'
import section from './components/section.js'
import container from './components/container.js'
import feature from './components/feature.js'
import mystack from './components/mystack.js'
import projects from './components/projects.js'
import footer from './components/footer.js'
//COMPONENTS ---------------------
Vue.component('vue-navbar', navbar);
Vue.component('vue-section', section);
Vue.component('vue-container', container);
Vue.component('vue-feature', feature);
Vue.component('vue-mystack', mystack);
Vue.component('vue-footer', footer);
Vue.component('vue-projects', projects);
//VUE ---------------------
new Vue({
	el: '#app',
	data: {
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
				description: 'Le site vitrine de l\'association d\'aide à domicile AID83 utilisant HTML5, CSS3, UI Kit, et PHP.',
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
		]
	}
})