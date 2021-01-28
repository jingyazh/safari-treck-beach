 <template>
  <div id="material-kit" :style="homeBackground">
    <div>
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

 <script>
import NavbarStore from "vue";
export default {
  props: {
    image: {
      type: String,
      default: '/assets/img/TRY-1.jpg'
    }
  },
  computed: {
    homeBackground() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    }
  }
};
</script>