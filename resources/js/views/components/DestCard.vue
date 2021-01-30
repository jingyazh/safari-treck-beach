<template>
  <div class="col-lg-3 col-md-4 col-sm-6">
    <b-card tag="article" class="mb-2 tour-card dest-card">
      <div style="position: relative">
        <a href="#">
          <b-img :src="dest.image" fluid></b-img>
        </a>
        <div class="destTitle">
          <h2>
            <a href="#">{{dest.destination}}</a>
          </h2>
        </div>
      </div>
    </b-card>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  name: "dest-card",
  props: ['dest'],
  created() {
  },
  methods: {
  },
};
</script>