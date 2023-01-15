//router
import { createWebHistory, createRouter } from "vue-router";

import Main from '../pages/Main.vue';
import Activity from '../pages/Activity.vue';
import ActivityDetial from '../pages/ActivityDetial.vue';
import Apply from '../pages/Apply.vue';
import Login from '../pages/Login.vue';
import LoginSuccess from '../pages/LoginSuccess.vue';

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
    }, {
        path: '/activitydetail',
        name: "ActivityDetail",
        component: ActivityDetial
    }, {
        path: '/loginsuccess',
        name: "LoginSuccess",
        component: LoginSuccess
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;