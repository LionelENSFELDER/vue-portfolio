const navitem = {
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
}
export default navitem;