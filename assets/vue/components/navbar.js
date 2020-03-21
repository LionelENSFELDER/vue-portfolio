const navbar = {
	data: function () {
		return {

		}
	},
	template: `
		<header class="fixed-top">
			<nav class="navbar navbar-dark navbar-expand-lg">
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
}
export default navbar;