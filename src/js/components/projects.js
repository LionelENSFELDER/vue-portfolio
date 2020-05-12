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
                <div class="card-img-overlay p-0">
                    <div class="work-info text-center d-flex flex-column justify-content-center h-100">
                        <h1 class="card-title">{{work.title}}</h1>
                        <p>{{work.tags}}</p>
                        <div class="bottom-triangle">
                        </div>
                        <a :href="work.url" target="_blank" class=""><i class="las la-binoculars"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default projects;