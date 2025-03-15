import * as LucideIcons from 'lucide-vue-next';

export default {
    install: (app) => {
        // 註冊所有Lucide圖標
        for (const [name, component] of Object.entries(LucideIcons)) {
            if (name !== 'createLucideIcon') {
                app.component(name, component);
            }
        }
    }
};