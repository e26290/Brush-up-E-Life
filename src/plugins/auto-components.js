// 這段代碼會自動註冊所有 src/components/global/ 目錄下的組件
export default {
    install: (app) => {
        const components = import.meta.glob('../components/global/*.vue', { eager: true })

        Object.entries(components).forEach(([path, component]) => {
            const componentName = path.split('/').pop().replace(/\.\w+$/, '')
            app.component(componentName, component.default || component)
        })

        // 如果是手動註冊特定組件
        import AppIcon from '@/components/AppIcon.vue'
        app.component('AppIcon', AppIcon)
    }
}

/*
使用方法：
1. 創建 src/components/global/ 目錄
2. 將通用組件放入該目錄 (如 AppIcon.vue)
3. 在 main.js 中引入此插件
4. 組件會自動全局可用
*/