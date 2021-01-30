<template>
  <div id="about">
    <div class="section-header">
      <h3>Popular tours</h3>
    </div>
    <div class="popular-tours">
      <div class="container">
        <div class="row">
          <!-- Display popular tours -->
          <home-tour-card
            v-for="tour in tours"
            :tour="tour"
            :key="tour.id"
          ></home-tour-card>
        </div>
      </div>
    </div>
    <div class="row col-md-12" style="padding-top: 30px">
      <div class="pb-5">
        <center>
          <a href="#">
            <button class="btn trek-btn">
              View All Packages <i class="fas fa-angle-right"></i>
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
import HomeTourCard from "../components/HomeTourCard";
import axios from "axios";
import popular_tours from "./fake_api/popular_tour";

export default {
  components: { HomeTourCard },
  name: "tour-intro",
  data() {
    return {
      tours: [],
    };
  },
  props: ["tour"], /// This variable is used in HomeTourCard.vue component.
  created() {},
  mounted() {
    // Getting Popular Tours data
    this.getData();
  },
  methods: {
    getData: function () {
      /////// Get popular tours here in order to use data in this component.
      // axios.get("/api/getting").then((response) => {
      // this.tours = response.data.popular_tours;
      // });

      this.tours = popular_tours; /// For now we are using static schema.
    },
  },
};
</script>