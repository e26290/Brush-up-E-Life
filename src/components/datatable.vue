<template>
    <div class="w-full tableBg">
        <table class="w-full">
            <thead>
                <tr class="border-b">
                    <th class="px-4 py-3 text-left">資產名稱</th>
                    <th class="px-4 py-3 text-left">類別</th>
                    <th class="px-4 py-3 text-left">繼承人</th>
                    <th class="px-4 py-3 text-left">資產處理</th>
                    <th class="px-4 py-3 text-left">附件</th>
                    <th class="px-4 py-3 text-left">狀態</th>
                    <th class="px-4 py-3 text-left">上傳時間</th>
                    <th class="px-4 py-3"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.id" class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                                :class="getIconClass(item.icon)">
                                <span class="text-lg">{{ item.icon.charAt(0).toUpperCase() }}</span>
                            </div>
                            <span>{{ item.name }}</span>
                        </div>
                    </td>
                    <td class="px-4 py-3">
                        <div class="flex items-center">
                            <div class="w-2 h-2 rounded-full mr-2" :style="{ backgroundColor: item.type.color }"></div>
                            {{ item.type.label }}
                        </div>
                    </td>
                    <td class="px-4 py-3">{{ item.owner || '-' }}</td>
                    <td class="px-4 py-3">
                        <file-edit v-if="item.hasDoc" class="w-5 h-5 text-gray-500" />
                        <span v-else>-</span>
                    </td>
                    <td class="px-4 py-3">
                        <paperclip v-if="item.hasAttachment" class="w-5 h-5 text-gray-500" />
                        <span v-else>-</span>
                    </td>
                    <td class="px-4 py-3">
                        <span class="px-3 py-1 rounded-full text-sm"
                            :class="item.status === '已完成' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'">
                            {{ item.status }}
                        </span>
                    </td>
                    <td class="px-4 py-3">{{ item.date }}</td>
                    <td class="px-4 py-3 relative">
                        <button @click="toggleMenu(item.id)" class="p-1 hover:bg-gray-100 rounded">
                            <more-vertical class="w-5 h-5 text-gray-500" />
                        </button>

                        <!-- 下拉選單 -->
                        <div v-if="activeMenu === item.id"
                            class="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg z-50">
                            <div class="py-1">
                                <button @click="handleAction('view', item)"
                                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                                    <eye class="w-4 h-4 mr-2" />
                                    查看
                                </button>
                                <button @click="handleAction('edit', item)"
                                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center">
                                    <edit class="w-4 h-4 mr-2" />
                                    編輯
                                </button>
                                <button @click="handleAction('delete', item)"
                                    class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center text-red-600">
                                    <trash class="w-4 h-4 mr-2" />
                                    刪除
                                </button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    MoreVertical,
    FileEdit,
    Paperclip,
    Eye,
    Edit,
    Trash
} from 'lucide-vue-next'

// 定義表格數據
const tableData = ref([
    {
        id: 1,
        icon: 'facebook',
        name: '個人帳號',
        type: { label: '社交平台', color: '#FFB7B7' },
        owner: 'Rabby Xiao',
        hasDoc: true,
        hasAttachment: true,
        status: '已完成',
        date: '2024.01.15'
    },
    {
        id: 2,
        icon: 'line',
        name: '工作用帳號',
        type: { label: '社交平台', color: '#FFB7B7' },
        owner: 'Rabby Xiao',
        hasDoc: true,
        hasAttachment: true,
        status: '已完成',
        date: '2024.01.14'
    },
    // ... 其他數據項目
])

// 當前打開的選單 ID
const activeMenu = ref(null)

// 處理選單開關
const toggleMenu = (id) => {
    activeMenu.value = activeMenu.value === id ? null : id
}

// 處理選單操作
const handleAction = (action, item) => {
    console.log(`${action} item:`, item)
    activeMenu.value = null
}

// 取得圖標 class
const getIconClass = (icon) => {
    const iconMap = {
        'facebook': 'bg-blue-600',
        'line': 'bg-green-500',
        'instagram': 'bg-purple-500',
        'netflix': 'bg-red-600',
        'dropbox': 'bg-blue-400',
        'messenger': 'bg-blue-500',
        'bank': 'bg-blue-700',
        'yahoo': 'bg-purple-600',
        'document': 'bg-gray-500'
    }
    return `${iconMap[icon] || 'bg-gray-400'} text-white`
}
</script>



<style scoped>
.tableBg {
    background-color: var(--blue-98);
}
table {
    width: 100%;
}
</style>