import Vue from 'vue'
import VueRouter from 'vue-router'
import MainNavbar from "./layout/MainNavbar";
import MainFooter from "./layout/MainFooter";
import HomePage from './views/HomePage'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {default: HomePage, header: MainNavbar, footer: MainFooter }
        },
    ],
});