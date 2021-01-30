 <template>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <!-- Search -->
      <home-search></home-search>

      <!-- Popular Tour -->
      <tour-intro></tour-intro>

      <!-- Why Choose US -->
      <why-us></why-us>

      <!-- Our Top Descriptions -->
      <top-destination></top-destination>

      <!-- Reviews & Testimonials -->
      <testimonial></testimonial>

      <!-- About Us -->
      <about-us></about-us>

      <!-- From Our Blog -->
      <blog></blog>
    </div>
  </div>
</template>
<style scoped>
</style>

<script>
import AboutUs from "./home_sections/AboutUs.vue";
import Blog from "./home_sections/Blog.vue";
import HomeSearch from './home_sections/HomeSearch.vue';
import Testimonial from "./home_sections/Testimonial.vue";
import TopDestination from "./home_sections/TopDestination.vue";
import TourIntro from "./home_sections/TourIntro.vue";
import WhyUs from "./home_sections/WhyUs.vue";
export default {
  props: {
  },
  computed: {
  },
  components: {
    WhyUs,
    TourIntro,
    TopDestination,
    Testimonial,
    AboutUs,
    Blog,
    HomeSearch,
  },
};
</script>