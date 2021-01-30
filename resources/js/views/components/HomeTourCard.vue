<template>
  <div class="col-lg-4 col-md-6 col-sm-12 popular_tours_2">
    <b-card tag="article" class="mb-2 tour-card">
      <div style="position: relative">
        <a href="#">
          <b-img
            :src="tour.image"
            fluid
            alt="ngorongoro crater 3"
          ></b-img>
        </a>
        <div class="tourTitle">
          <h2>
            <a href="#">{{tour.title}}</a>
          </h2>
        </div>
      </div>
      <div class="card-detail">
        <div class="float-right tag_div">
          <img :src="tour.badge" srcset="" class="tag_icon" />
        </div>
        <div class="pb-2">
          <strong> Acomodation: </strong>
          {{tour.accomodation}}
        </div>
        <div class="pb-2">
          <strong> Tour Type: </strong>
          {{tour.tour_type}}
        </div>
        <div class="pb-2">
          <strong> Trip Route: </strong>
          {{tour.trip_route}}
        </div>
      </div>
      <div class="col-md-12 tour-card-review">
        <div class="pack-name-rate">
          <div>{{tour.review.title}}</div>
          <span class="star-rating">
            <span v-for="x in [1, 2, 3, 4, 5]" :key="x" class="fas fa-star" :class="rate(x)"></span>
          </span>
          <small>(Reviews: {{tour.review.review_amount}})</small>
        </div>
        <div class="money_right">
          <i class="fas fa-dollar-sign money_color"></i
          ><strong class="money_color">{{tour.review.cost}}</strong>
          <small class="money_color">pp</small>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "tour-card",
  props: ['tour'],
  created() {
  },
  methods: {
    rate(x) {
      if (x <= this.tour.review.rate){
        return "checked"
      } else {
        return ''
      }
    }
  },
};
</script>
