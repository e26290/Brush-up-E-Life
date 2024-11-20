import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import login from './components/login.vue';
import profile from './components/profile.vue';
import dashboard from './components/dashboard.vue';
import digitalAssets from './components/digitalAssets.vue';
import onBoarding from './components/onBoarding.vue';


const routes = [
    { path: '/', component: index },
    { path: '/login', component: login },
    { path: '/onBoarding', component: onBoarding },
    {
        path: '/profile', component: profile,
        children: [
            {
                path: '',
                name: 'dashboard',  // 默認預設顯示
                component: dashboard
            },{
                path: 'digitalAssets',
                name: 'digitalAssets',
                component: digitalAssets
            },
            // 需要再新增
        ]
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,

    // 添加 scrollBehavior，每次更新都會回到最上面
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;