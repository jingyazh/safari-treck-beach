<template>
  <div id="about">
    <div class="section-header">
      <h3>Our Top Destinations</h3>
    </div>
    <div class="">
      <div class="container dest-section">
        <div class="row">
          <dest-card></dest-card>
          <dest-card></dest-card>
          <dest-card></dest-card>
          <dest-card></dest-card>
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
import DestCard from "../components/DestCard.vue";
export default {
  components: { DestCard },
  name: "top-destination",
};
</script>