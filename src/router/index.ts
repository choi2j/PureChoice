import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import FlowPage from "@/views/FlowPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import UserInfoPage from "@/views/UserInfoPage.vue";
import PostPage from "@/views/PostPage.vue";
import ScanPage from "@/views/ScanPage.vue";
import SearchPage from "@/views/SearchPage.vue";

const routes: Array<RouteRecordRaw> = [
    // if auth == true
    {
        path: "/",
        redirect: "/flow",
    },
    // User Auth
    {
        path: "/flow",
        name: "Flow",
        component: FlowPage,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
    // Home
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    // Post
    {
        path: "/post",
        name: "Post",
        component: PostPage,
    },
    // Scan
    {
        path: "/scan",
        name: "Scan",
        component: ScanPage,
    },
    // Search
    {
        path: "/search",
        name: "Search",
        component: SearchPage,
    },
    // User
    {
        path: "/userInfo",
        name: "UserInfo",
        component: UserInfoPage,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
