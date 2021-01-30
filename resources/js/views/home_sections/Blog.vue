<template>
  <div id="about">
    <div class="section-header">
      <h3>From Our Blog</h3>
    </div>
    <div class="">
      <div class="container dest-section">
        <div class="row">
          <blog-card
            v-for="blog in blogs"
            :blog="blog"
            :key="blog.id"
          ></blog-card>
        </div>
      </div>
    </div>
    <div class="row col-md-12" style="padding-top: 30px">
      <div class="pb-5">
        <center>
          <a href="#">
            <button class="btn trek-btn">
              View All <i class="fas fa-angle-right"></i>
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
import axios from "axios";
import blog from "./fake_api/blog";
export default {
  components: { BlogCard },
  name: "blog",
  data() {
    return {
      blogs: [],
    };
  },
  props: ["blog"], /// This variable is used in HomeTourCard.vue component.
  created() {},
  mounted() {
    // Getting data
    this.getData();
  },
  methods: {
    getData: function () {
      /////// Get data here in order to use data in this component.
      // axios.get("/api/getting").then((response) => {
      // this.tours = response.data.blog;
      // });

      this.blogs = blog; /// For now we are using static schema.
    },
  },
};
</script>