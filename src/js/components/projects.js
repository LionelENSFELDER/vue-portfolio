const projects = {
	data: function () {
		return {

		}
	},
	props: ['work'],
    template: `
        <div class="col mb-4">
            <div class="card workCard bg-dark h-100">
                <img :src="work.coverImage" class="card-img h-100" alt="...">
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <div class="work-info text-center d-flex flex-column justify-content-center h-100">
                        <i class="font-30 mb-3 las la-rocket"></i>
                        <h1 class="card-title">{{work.title}}</h1>
                        <a :href="work.url" target="_blank" class="btn btn-link stretched-link"></a>
                        <p>{{work.tags}}</p>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default projects;