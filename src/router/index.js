//router
import { createWebHistory, createRouter } from "vue-router";

import Main from '../pages/Main.vue';
import Activity from '../pages/Activity.vue';
import Apply from '../pages/Apply.vue';
import Login from '../pages/Login.vue';

const routes = [{
        path: '/', 
        redirect: '/main' 
    }, {
        path: '/main',
        name: "Main",
        component: Main,
    }, {
        path: '/activity',
        component: Activity
    }, {
        path: '/apply',
        component: Apply
    }, {
        path: '/login',
        name: "Login",
        component: Login
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;