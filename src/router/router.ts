import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/components/Home.vue"),
    },
    {
        path: "/documentation",
        component: () => import("@/components/Documentation.vue"),
    },
    {
        path: "/documentation/access",
        component: () => import("@/views/documentation/ApplyForAccess.vue")
    },
    {
        path: "/documentation/getting_started",
        component: () => import("@/views/documentation/GettingStarted.vue")
    },
    {
        path: "/documentation/running_riscv",
        component: () => import("@/views/documentation/RunningOnRISCV.vue")
    },
    {
        path: "/documentation/hardware",
        component: () => import("@/views/documentation/TestedHardware.vue")
    },
    {
        path: "/community",
        component: () => import("@/components/Community.vue"),
    },
    {
        path: "/community/toolchainsdebugging",
        component: () => import("@/views/community/ToolchainsDebugging.vue"),
    },
    {
        path: "/community/compilingvector",
        component: () => import("@/views/community/CompilingVector.vue"),
    },
]

const router = createRouter({
    history: createWebHistory('/sophgo_plctrvlab_deploy_vite'),
    routes,
})

export default router