const projects = {
	data: function () {
		return {

		}
	},
	props: ['work'],
    template: `
        <div class="col mb-4 workCard" :data-tags="work.tags">
            <div class="card bg-dark h-100">
                <img :src="work.coverImage" class="card-img h-100" alt="...">
                <div class="card-img-overlay p-0">
                    <div class="work-info text-center d-flex flex-column justify-content-center h-100">
                        <a :href="work.url" target="_blank" class=""><h1 class="card-title">{{work.title}}</h1></a>
                        <p>{{work.tags}}</p>
                        <div class="bottom-triangle">
                        </div>
                        <a :href="work.github" target="_blank" class=""><i class="lab la-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default projects;