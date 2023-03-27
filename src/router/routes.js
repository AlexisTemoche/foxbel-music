const routes = [
  {
    path: "/",
    name: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/recientes",
        name: "recientes",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/artistas",
        name: "artistas",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/albums",
        name: "albums",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/canciones",
        name: "canciones",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/estaciones",
        name: "estaciones",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/metal",
        name: "metal",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/para-bailar",
        name: "para-bailar",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/rock-90s",
        name: "rocks-90s",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
      {
        path: "/baladas",
        name: "baladas",
        component: () => import("src/pages/inicio/IndexPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/error/ErrorNotFound.vue"),
  },
];

export default routes;
