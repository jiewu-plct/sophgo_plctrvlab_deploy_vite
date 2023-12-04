import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/sophon_plctrvlab_deploy_vite",
        component: () => import("@/components/Home.vue"),
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/documentation",
        component: () => import("@/components/Documentation.vue"),
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/documentation/access",
        component: () => import("@/views/documentation/ApplyForAccess.vue")
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/documentation/getting_started",
        component: () => import("@/views/documentation/GettingStarted.vue")
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/documentation/running_riscv",
        component: () => import("@/views/documentation/RunningOnRISCV.vue")
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/documentation/hardware",
        component: () => import("@/views/documentation/TestedHardware.vue")
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/community",
        component: () => import("@/components/Community.vue"),
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/community/toolchainsdebugging",
        component: () => import("@/views/community/ToolchainsDebugging.vue"),
    },
    {
        path: "/sophon_plctrvlab_deploy_vite/community/compilingvector",
        component: () => import("@/views/community/CompilingVector.vue"),
    },
]

const router = createRouter({
    history: createWebHistory('/sophon_plctrvlab_deploy_vite'),
    routes,
})

export default router