const navbar = {
	data: function () {
		return {

		}
	},
	template: `
		<header class="fixed-top py-3">
			<div class="container">
				<nav class="navbar navbar-dark navbar-expand-lg">
					<img src="assets/img/logo.png" class="img-fluid" title="" alt="lionel Ensfelder" style="width: 55px;">
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse justify-content-end" id="navbarMenu">
						<ul class="navbar-nav font-12">
							<li class="nav-item mr-4">
								<a class="nav-link" href="#quisuisje">Qui suis-je ?
									<span class="sr-only">Qui suis-je ?</span>
								</a>
							</li>
							<li class="nav-item mr-4">
								<a class="nav-link" href="#competences">Compétences
									<span class="sr-only">Compétences</span>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#realisations">Réalisations
									<span class="sr-only">Réalisations</span>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	`
}
export default navbar;