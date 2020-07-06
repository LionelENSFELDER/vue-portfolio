const projects = {
	data: function () {
		return {

		}
	},
	props: ['work'],
    template: `
        <!-- Card -->
        <div class="col mb-4 workCard" :data-tags="work.tags">
            <div class="card bg-transparent border-0 h-100">
                <div class="card-header bg-transparent border-0">
                    <img :src="work.coverImage" class="card-img-top img-fluid" alt="...">
                </div>
                <div class="card-body">
                    <h1 class="card-title font-weight-bold">{{work.title}}</h1>
                    <p class="card-text">{{work.description}}</p>

                    <!-- Button trigger modal -->
                    <a class="btn btn-main my-2" data-toggle="modal" :data-target="work.targetId">Voir le projet</a>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" :id="work.target" tabindex="-1" role="dialog" :aria-labelledby="work.target" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content bg-dark">
                        <div class="modal-header border-0">
                            <h2 class="modal-title font-weight-bold" :id="work.target">{{work.title}}</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p class="card-text">Présentation du projet: {{work.moreInfos}}</p>
                            <p class="card-text">Technologies utilisées: {{work.stack}}</p>
                            <a :href="work.github" target="_blank" class="badge badge-light">Code</a>
                            <a :href="work.url" target="_blank" class="badge badge-light mb-2">Démo</a>
                            <img :src="work.coverImage" class="img-fluid" alt="Responsive image">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    `
}
export default projects;