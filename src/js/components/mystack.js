const mystack = {
	data: function () {
		return {

		}
	},
	props: ['mystack'],
	template: `
		
		<div class="row">
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5">
					<div class="card-body p-0">
						<img src="assets/img/coding.png" class="img-fluid" alt="Responsive image" style="width:55px">
						<h5 class="card-title">Langages</h5>
						<p class="card-text">Need help with designing your website? HTML 5, CSS 3, SASS, Javascript ES6, PHP.</p>
					</div>
				</div>
			</div>
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5">
					<div class="card-body p-0">
						<img src="assets/img/frameworks.png" class="img-fluid" alt="Responsive image" style="width:55px">
						<h5 class="card-title">Frameworks & lib.</h5>
						<p class="card-text">Angular, jQuery, Bootstrap, React, Vue, Node.js, Express.js</p>
					</div>
				</div>
			</div>
			<div class="col-md mb-5">
				<div class="card bg-transparent border-0 h-100 mb-5">
					<div class="card-body p-0">
						<img src="assets/img/tools.png" class="img-fluid" alt="Responsive image" style="width:55px">
						<h5 class="card-title">Outils</h5>
						<p class="card-text">Spotify, Docker, Git, Agile (Scrum).</p>
					</div>
				</div>
			</div>
		</div>
	`
}
export default mystack;