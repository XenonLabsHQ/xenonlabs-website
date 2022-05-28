export default [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/old",
        name: "old",
        component: () => import("@/views/old/HomeView.vue"),
    },
];
