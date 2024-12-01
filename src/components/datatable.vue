<template>
    <div class="w-full tableBg">
        <table class="w-full">
            <thead>
                <tr class="border-b ">
                    <!-- 設置固定寬度 -->
                    <th class="px-4 py-3 text-left w-1/2">資產名稱</th>
                    <th class="px-4 py-3 text-center w-24">類別</th>
                    <th class="px-4 py-3 text-center w-32">繼承人</th>
                    <th class="px-4 py-3 text-center w-24">資產處理</th>
                    <th class="px-4 py-3 text-center w-24">附件</th>
                    <th class="px-4 py-3 text-center w-24">狀態</th>
                    <th class="px-4 py-3 text-center w-32">上傳時間</th>
                    <th class="px-4 py-3 w-16"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.id" class="border-b hover:bg-gray-50">
                    <!-- 對應的 td 也要設置相同的寬度 -->
                    <td class="px-4 py-3 w-1/2">
                        <div class="dataName">
                            <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                                <img :src="item.icon" :alt="item.name" class="w-full h-full object-cover">
                            </div>
                            <span>{{ item.name }}</span>
                        </div>
                    </td>
                    <!-- 其他列保持不變 -->
                    <td class="px-4 py-3 text-center">
                        <div class="flex items-center">
                            <div class="w-2 h-2 rounded-full mr-2" :style="{ backgroundColor: item.type.color }"></div>
                            {{ item.type.label }}
                        </div>
                    </td>
                    <td class="px-4 py-3 text-center">{{ item.owner || '-' }}</td>
                    <td class="px-4 py-3 text-center">
                        <span class="material-symbols-outlined" v-if="item.hasDoc">sticky_note_2</span>
                        <span v-else>-</span>
                    </td>
                    <td class="px-4 py-3 text-center">
                        <span class="material-symbols-outlined attach" v-if="item.hasAttachment">attach_file</span>
                        <span v-else>-</span>
                    </td>
                    <td class="px-4 py-3 text-center">
                        <span class="px-3 py-1 rounded-full text-sm"
                            :class="item.status === '已完成' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'">
                            {{ item.status }}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-center">{{ item.date }}</td>
                    <td class="px-4 py-3 relative">
                        <button @click="toggleMenu(item.id)" class="p-1 hover:bg-gray-100 rounded">
                            <more-vertical class="w-5 h-5 text-gray-500" />
                        </button>

                        <!-- 下拉選單 -->
                        <div v-if="activeMenu === item.id"
                            class="dropdown mt-2 w-36 bg-white rounded-md shadow-lg z-50">
                            <div class="py-1 items">
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
        icon: '/dashboard/socialIcon/FB.svg',
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
        icon: '/dashboard/socialIcon/Line.svg',
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
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.tableBg {
    background-color: var(--blue-98);
    border-radius: 1.5rem;
}

table {
    width: 100%;
    .dataName {
        @include flex($j:flex-start, $g:0);
    }
}
thead th {
    color: var(--natural-30);
    font-weight: var(--m);
}
.dropdown {
    position: absolute;
    right: 120px;
    bottom: 0;
    .items {
        @include flex($d: column, $g:0);
    }
}
.attach {
    rotate: 45deg;
}
</style>