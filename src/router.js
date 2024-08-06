import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import dashboard from './components/dashboard.vue';
import digitalAssets from './components/digitalAssets.vue';
import onBoarding from './components/onBoarding.vue';


const routes = [
    { path: '/', component: index },
    { path: '/dashboard', component: dashboard },
    { path: '/digitalAssets', component: digitalAssets },
    { path: '/onBoarding', component: onBoarding },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

    // 添加 scrollBehavior
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;