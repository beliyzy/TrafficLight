import Vue from "vue";
import Router from "vue-router";
import Lamp from "../components/Lamp";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/red",
            component: Lamp,
        },
        {
            path: "/yellow",
            component: Lamp,
        },
        {
            path: "/green",
            component: Lamp
        },
        {
            path: "*",
            redirect: '/red'
        }
    ],
});
