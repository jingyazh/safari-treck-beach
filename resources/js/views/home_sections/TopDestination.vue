<template>
  <div id="about">
    <div class="section-header">
      <h3>Our Top Destinations</h3>
    </div>
    <div class="container dest-section">
      <div class="row">
        <!-- Display popular tours -->
        <dest-card
          v-for="dest in dests"
          :dest="dest"
          :key="dest.id"
        ></dest-card>
      </div>
    </div>
    <div class="row col-md-12" style="padding-top: 30px">
      <div class="pb-5">
        <center>
          <a href="#">
            <button class="btn trek-btn">
              View All Destinations <i class="fas fa-angle-right"></i>
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
import axios from "axios";
import top_destinations from "./fake_api/top_destinations";
export default {
  components: { DestCard },
  name: "top-destination",
  data() {
    return {
      dests: [],
    };
  },
  props: ["dest"], /// This variable is used in HomeTourCard.vue component.
  created() {},
  mounted() {
    // Getting data
    this.getData();
  },
  methods: {
    getData: function () {
      /////// Get data here in order to use data in this component.
      // axios.get("/api/getting").then((response) => {
      // this.tours = response.data.top_destinations;
      // });

      this.dests = top_destinations; /// For now we are using static schema.
    },
  },
};
</script>