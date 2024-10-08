import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import dashboard from './components/dashboard.vue';
import digitalAssets from './components/digitalAssets.vue';
import onBoarding from './components/onBoarding.vue';


const routes = [
    { path: '/', component: index },
    {
        path: '/dashboard', component: dashboard,
        children: [
            {
                path: '',
                name: 'digitalAssets',  // 默認預設顯示
                component: digitalAssets
            },{
                path: 'onBoarding',
                name: 'onBoarding',
                component: onBoarding
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