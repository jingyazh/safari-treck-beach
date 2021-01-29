<template>
  <div id="about">
    <div class="section-header">
      <h3>Popular tours</h3>
    </div>
    <div class="popular-tours">
      <div class="container">
        <div class="row">
          <home-tour-card></home-tour-card>
          <home-tour-card></home-tour-card>
          <home-tour-card></home-tour-card>
          <home-tour-card></home-tour-card>
          <home-tour-card></home-tour-card>
          <home-tour-card></home-tour-card>
        </div>
      </div>
    </div>
    <div class="row col-md-12" style="padding-top: 30px">
      <div class="pb-5">
        <center>
          <a href="#">
            <button class="btn trek-btn">
              View All Packages <i class="fa fa-angle-right"></i>
            </button>
          </a>
        </center>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import HomeTourCard from '../components/HomeTourCard'
export default {
  components: { HomeTourCard },
    name: 'tour-intro'
}
</script>