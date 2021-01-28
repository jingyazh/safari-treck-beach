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