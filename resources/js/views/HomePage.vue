 <template>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <div class="home-filter"></div>
      <div class="m-b-md">
        <div class="section-header">
          <h3>Popular tours</h3>
        </div>
        <div class="container">
          <div class="col-md-4 popular_tours_2">
            <a href="tour_package?id=186"> </a>
            <div class="about-col popular_package_2 fadeIn" data-wow-delay="1s">
              <a href="tour_package?id=186"> </a>
              <div class="img">
                <a href="tour_package?id=186">
                  <img
                    src="http://operators.safari-trek-beach.com/images/gallery/tanzania/tour/NGORONGORO_CRATER_3.jpg"
                    alt=""
                    class="img-fluid-2"
                  />
                  <div class="blogo2"></div>
                </a>
                <div class="tourTitle">
                  <a href="tour_package?id=186"> </a>
                  <h2 class="title">
                    <a href="tour_package?id=186"></a
                    ><a href="tour_package?id=186"
                      >3-Day Ngorongoro &amp; Serengeti Budget Tour</a
                    >
                  </h2>
                </div>
              </div>

              <div>
                <div class="float-right tag_div">
                  <img
                    src="assets/images/toprated2.png"
                    srcset=""
                    class="tag_icon_toprated"
                  />
                </div>
                <div class="packtext">
                  <div class="pb-2">
                    <strong> Acomodation: </strong>
                    Budget, Camping
                  </div>

                  <div class="pb-2">
                    <strong> Tour Type: </strong>
                    Group
                  </div>

                  <div class="pb-2">
                    <strong> Trip Route: </strong>
                    Arusha (Start), Ngorongoro crater, Serengeti National Pa...,
                    Arusha (End)
                  </div>
                </div>

                <div class="row col-md-12">
                  <div class="pack-name-rate">
                    <div>Meru Slopes Tours and Safaris</div>
                    <span class="star-rating">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                    </span>
                    <small>(Reviews: 49)</small>
                  </div>
                  <div class="money_right">
                    <i class="fa fa-dollar money_color"></i
                    ><strong class="money_color">599</strong>
                    <small class="money_color">pp</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "/assets/img/TRY-1.jpg",
    },
  },
  computed: {
    homeBackground() {
      return {
        backgroundImage: `url(${this.image})`,
        width: "100%",
      };
    },
  },
};
</script>