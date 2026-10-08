import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import LegalLayout from "@/views/LegalLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },

    // Old pages of the previous site now live as sections of the home page.
    { path: "/events", redirect: { path: "/", hash: "#trailers" } },
    { path: "/about", redirect: { path: "/", hash: "#studio" } },
    { path: "/contact", redirect: { path: "/", hash: "#contact" } },
    { path: "/games", redirect: { path: "/", hash: "#games" } },

    {
      path: "/",
      component: LegalLayout,
      children: [
        { path: "privacy-policy", component: () => import("@/views/PrivacyPolicyView.vue"), meta: { title: "Privacy Policy" } },
        { path: "terms-of-service", component: () => import("@/views/TermsOfServiceView.vue"), meta: { title: "Terms of Service" } },
        { path: "spire-horizon-eula", component: () => import("@/views/EULA/SpireHorizonEula.vue"), meta: { title: "Spire Horizon EULA" } },
        { path: "spire-horizon-online-eula", component: () => import("@/views/EULA/SpireHorizonOnlineEula.vue"), meta: { title: "Spire Horizon Online EULA" } },
      ],
    },

    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, top: 72, behavior: from.path === to.path ? "smooth" : "auto" };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · Mendoka` : "Mendoka — From pixels to wonders";
});

export default router;
