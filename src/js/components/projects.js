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
                    <div class="modal-content p-5 bg-dark">
                        <div class="modal-header p-0 border-0">
                            <h2 class="modal-title mb-3 font-weight-bold" :id="work.target">{{work.title}}</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i class="las la-times  font-20 font-white"></i></span>
                            </button>
                        </div>
                        <div class="modal-body"
                            <p class="card-text mb-5">{{work.moreInfos}}</p>
                            

                            <div :id="work.carouselID" class="carousel slide mb-5" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" :src="work.capture1" alt="First slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" :src="work.capture2" alt="Second slide">
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" :src="work.capture3" alt="Third slide">
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


                            <div>
                                <a :href="work.github" target="_blank" class="btn btn-main-light mb-2">VOIR LE CODE <i class="lab la-github"></i></a>
                                <a :href="work.url" target="_blank" class="btn btn-main-light mb-2">VOIR LE PROJET <i class="las la-external-link-alt"></i></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    `
}
export default projects;