<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <b-card
      :title="blog.title"
      :img-src="blog.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 blog-card"
    >
      <hr />
      <b-card-text class="blog-card-text">
        {{blog.detail}}
      </b-card-text>

      <a href="#" variant="primary">Read more <i class="fas fa-angle-double-right ml-2"></i></a>
    </b-card>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  name: "blog-card",
  props: ['blog']
};
</script>