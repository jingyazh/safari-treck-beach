<template>
  <div id="about">
    <div class="section-header">
      <h3>From Our Blog</h3>
    </div>
    <div class="">
      <div class="container dest-section">
        <div class="row">
          <blog-card></blog-card>
          <blog-card></blog-card>
          <blog-card></blog-card>
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
import BlogCard from "../components/BlogCard.vue";
export default {
  components: { BlogCard },
  name: "blog",
};
</script>