 <template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <router-view />
      </div>
      <router-view name="footer" />
      <router-view name="end" />
    </div>
  </div>
</template>

 <script>
export default {
};
</script>