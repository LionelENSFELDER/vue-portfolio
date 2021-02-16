const projects = {
	data: function () {
		return {

		}
	},
	props: ['work'],
    template: `
        <!-- Card -->
        <div class="row py-5 mb-5">
				<div class="col-12 col-md-6 card border-0 bg-transparent animated-fadeInUp">
					<div class="mb-3 mb-md-0">
                        <h4 class="mb-0">{{work.title}}</h4>
                        <span class="card-subtitle text-muted">{{work.stack}}</span>
						<p class="mt-3">{{work.moreInfos}}</p>
            <a :href="work.url" target="_blank" class="btn btn-lg btn-main font-main mr-3">Voir le projet<i class="las la-eye ml-2"></i></a>
						<a :href="work.github" target="_blank" class="btn btn-lg btn-main-light">Voir le code<i class="lab la-github ml-2"></i></a>
					</div>
				</div>
				<div class="col-12 col-md-6 card border-0 bg-transparent animated-fadeInLeft">
					<div class="my-auto mx-sd-auto mx-md-auto">
						<img :src="work.coverImage" class="rounded img-fluid" :title="work.title" :alt="work.alt" style="width: 100%;">
					</div>
				</div>
		</div>

    `
}
export default projects;