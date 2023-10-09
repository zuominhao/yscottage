import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegView from "@/views/RegView.vue";
import Test007 from "@/views/Test007.vue";
import CookView from "@/views/CookView.vue";
import Dinner from "@/components/cook/Dinner.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }, {
            path: '/login',
            name: 'login',
            component: LoginView
        },{
            path: '/reg',
            name: 'reg',
            component: RegView
        },
        {
            path: '/007',
            name: '007',
            component: Test007
        }, {
            path: '/cook',
            name: 'cook',
            component: CookView
        },{
            path: '/dinner',
            name: 'dinner',
            component: Dinner
        },
    ]
})

export default router
