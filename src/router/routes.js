export default [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/wip",
        name: "wip",
        component: () => import("@/views/wip/HomeView.vue"),
    },
];