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
                <div class="card-body py-2">
                    <h5 class="font-weight-bold">{{work.title}}</h5>

                    <!-- Button trigger modal -->
                    <a class="stretched-link" data-toggle="modal" :data-target="work.targetId"></a>
                </div>
            </div>

            <!-- Modal -->
            <div class="modal fade" :id="work.target" tabindex="-1" role="dialog" :aria-labelledby="work.target" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content p-3 bg-dark">
                        <div class="modal-header p-0 border-0">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="las la-times  font-20 font-white"></i></span>
                            </button>
                        </div>
                        <div class="modal-body">

                            <div class="row row-cols-1">

                                <div class="col col-lg-3">
                                    <div class="card border-0 bg-transparent">
                                        <h2 class="modal-title mb-3 font-weight-bold" :id="work.target">{{work.title}}</h2>
                                        <hr class="mt-0 border-white w-25"/>

                                        <p>
                                            <span class="mb-2 d-block">Date: {{work.date}}</span>
                                            
                                            <span class="mb-2 d-block">Client: {{work.client}}</span>
                                            
                                            <span class="mb-2 d-block">Catégorie: {{work.tags}}</span>
                                            
                                            <span class="mb-2 d-block">Technos: {{work.stack}}</span>
                                        </p>
                                        
                                        <div>
                                            <a :href="work.github" target="_blank" class="btn btn-main btn-block mb-4">VOIR LE CODE <i class="lab la-github"></i></a>
                                            <a :href="work.url" target="_blank" class="btn btn-main btn-block">VOIR LE PROJET <i class="las la-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col col-lg-9">
                                    <div class="card bg-transparent border-0 h-100">
                                        
                                        <p class="mt-2 mb-5">{{work.moreInfos}}</p>


                                        <div :id="work.carouselID" class="carousel slide mb-5" data-ride="carousel">
                                            <div class="carousel-inner">
                                                <div class="carousel-item" v-for="item in work.captures" :key="item.capture">
                                                    <img class="d-block w-100" :src=item.capture>
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" :href="work.carouselControlLink" role="button" data-slide="prev">
                                                <i class="las la-chevron-left font-30 font-main" aria-hidden="true"></i>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" :href="work.carouselControlLink" role="button" data-slide="next">
                                                <i class="las la-chevron-right font-30 font-main" aria-hidden="true"></i>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>

                                        
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    `
}
export default projects;