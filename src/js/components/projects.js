const projects = {
	data: function () {
		return {

		}
	},
	props: ['work'],
    template: `
        <!-- Card -->
        <div class="row py-5">
				<div class="col-12 col-md-6 card border-0 bg-transparent">
					<div class="">
                        <h4>{{work.title}}</h4>
                        <span class="card-subtitle mb-2 text-muted">{{work.stack}}</span>
						<p>{{work.description}}</p>
						<a :href="work.url" target="_blank" class="font-weight-bold font-main mr-3">Demo live<i class="las la-angle-right ml-2"></i></a>
					</div>
				</div>
				<div class="col-12 col-md-6 card border-0 bg-transparent">
					<div class="my-auto mx-sd-auto mx-md-auto animated-fadeInLeft">
						<img :src="work.coverImage" class="rounded img-fluid" title="{{work.title}}" alt="Image du site {{work.coverImage}}" style="width: 100%;">
					</div>
				</div>
		</div>

    `
}
export default projects;