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
                <div class="card-img-overlay">
                    <div class="">
                        <h1 class="card-title">{{work.title}}</h1>
                        <a :href="work.url" target="_blank" class="btn btn-link stretched-link"></a>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default projects;