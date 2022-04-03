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
    {
        path: "/test",
        name: "test",
        component: () => import("@/views/wip/TestView.vue"),
    },
];
