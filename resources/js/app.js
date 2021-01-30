import Vue from 'vue'

import App from './views/App'
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import MaterialKit from "./plugins/material-kit";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('./bootstrap');
Vue.use(MaterialKit)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
const NavbarStore = {
    showNavbar: false
};

Vue.mixin({
    data() {
        return {
            NavbarStore
        };
    }
});
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});