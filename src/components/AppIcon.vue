<template>
    <component :is="iconComponent" :size="size" :color="color" :stroke-width="strokeWidth" :class="customClass" />
</template>

<script>
export default {
    name: 'AppIcon',
    props: {
        name: {
            type: String,
            required: true
        },
        size: {
            type: [Number, String],
            default: 24
        },
        color: {
            type: String,
            default: 'currentColor' // 使用繼承的顏色
        },
        strokeWidth: {
            type: [Number, String],
            default: 2
        },
        customClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconComponent() {
            // 將圖標名稱轉換為 Pascal Case（首字母大寫）並添加後綴
            const componentName = this.name
                .split('-')
                .map(part => part.charAt(0).toUpperCase() + part.slice(1))
                .join('');

            return componentName;
        }
    }
}
</script>