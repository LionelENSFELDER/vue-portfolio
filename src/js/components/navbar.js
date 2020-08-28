const navbar = {
	data: function () {
		return {

		}
	},
	template: `
		<header class="fixed-top bg-dark">
			<div class="container">
				<nav class="navbar navbar-dark navbar-expand-lg">
					<i class="lab la-js-square font-30 font-white"></i>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse justify-content-end" id="navbarMenu">
						<ul class="navbar-nav">
							<slot></slot>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	`
}
export default navbar;