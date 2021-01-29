<template>
  <div class="col-lg-4 col-md-6 col-sm-12 popular_tours_2">
    <b-card tag="article" class="mb-2 tour-card">
      <div style="position: relative">
        <a href="#">
          <b-img
            src="/assets/img/NGORONGORO_CRATER_3.jpg"
            fluid
            alt="ngorongoro crater 3"
          ></b-img>
        </a>
        <div class="tourTitle">
          <h2>
            <a href="#">3-Day Ngorongoro &amp; Serengeti Budget Tour</a>
          </h2>
        </div>
      </div>
      <div class="card-detail">
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
          Arusha (Start), Ngorongoro crater, Serengeti National Pa..., Arusha
          (End)
        </div>
      </div>
      <div class="col-md-12 tour-card-review">
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
    </b-card>
  </div>
</template>
<script>
export default {
  name: "tour-card",
  props: {
    direction: {
      type: String,
      default: "down",
    },
    multiLevel: {
      type: Boolean,
      default: false,
    },
    title: String,
    icon: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropDown() {
      if (this.multiLevel) {
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    closeDropDown() {
      this.isOpen = false;
    },
  },
};
</script>
