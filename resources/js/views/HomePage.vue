 <template>
  <div class="flex-center position-ref full-height">
    <div class="content">
      <div class="home-filter"></div>
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
import Testimonial from "./home_sections/Testimonial.vue";
import TopDestination from "./home_sections/TopDestination.vue";
import TourIntro from "./home_sections/TourIntro.vue";
import WhyUs from "./home_sections/WhyUs.vue";
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
  components: {
    WhyUs,
    TourIntro,
    TopDestination,
    Testimonial,
    AboutUs,
    Blog,
  },
};
</script>