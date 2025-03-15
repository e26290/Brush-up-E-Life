<template>
    <div class="table-container">
        <!-- 表格 -->
        <table>
            <thead>
                <tr class="border-bottom">
                    <th class="column-name">資產名稱</th>
                    <th class="column-type">類別</th>
                    <th class="column-owner">繼承人</th>
                    <th class="column-process">資產處理</th>
                    <th class="column-attachment">附件</th>
                    <th class="column-status">狀態</th>
                    <th class="column-date">上傳時間</th>
                    <th class="column-action"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tableData" :key="item.id" class="border-bottom">
                    <td>
                        <div class="data-name" @click="openEditPanel(item)">
                            <div class="icon-container">
                                <img :src="item.icon" :alt="item.name">
                            </div>
                            <span>{{ item.name }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="type-label">
                            <div class="type-dot" :style="{ backgroundColor: item.type.color }"></div>
                            {{ item.type.label }}
                        </div>
                    </td>
                    <td>{{ item.owner || '-' }}</td>
                    <td>
                        <FileText v-if="item.hasDoc" class="lucide-icon" />
                        <span v-else>-</span>
                    </td>
                    <td>
                        <Paperclip v-if="item.hasAttachment" class="lucide-icon attach-icon" />
                        <span v-else>-</span>
                    </td>
                    <td>
                        <span class="status-tag" :class="item.status === '已完成' ? 'complete' : 'incomplete'">
                            {{ item.status }}
                        </span>
                    </td>
                    <td>{{ item.date }}</td>
                    <td class="action-column">
                        <button @click="toggleMenu(item.id)" class="action-button">
                            <more-vertical class="action-icon" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- 編輯頁面 -->
        <EditSidePanel v-model="showEditPanel" :current-item="selectedItem" />
    </div>
</template>

<script>
import { ref } from 'vue'
import {
    MoreVertical,
    FileEdit,
    Paperclip,
    Eye,
    Edit,
    Trash,
    FileText
} from 'lucide-vue-next'
import EditSidePanel from './EditSidePanel.vue'

export default {
    name: 'DataTable',
    components: {
        MoreVertical,
        FileEdit,
        Paperclip,
        Eye,
        Edit,
        Trash,
        EditSidePanel
    },
    data() {
        return {
            showEditPanel: false,
            selectedItem: null, // 添加選中項目
            activeMenu: null,
            tableData: [
                {
                    id: 1,
                    icon: '/dashboard/socialIcon/FB.svg',
                    platform: 'facebook',  // 添加 platform 字段
                    name: '個人帳號',
                    type: { id: 'facebook', label: '社交平台', color: '#FFB7B7' }, // 添加 id
                    owner: 'Rabby Xiao',
                    hasDoc: true,
                    hasAttachment: true,
                    status: '已完成',
                    date: '2024.01.15',
                    account: 'example@facebook.com',  // 添加帳號
                    password: '********',  // 添加密碼
                    description: '這是我的個人 Facebook 帳號'  // 添加描述
                },
                {
                    id: 2,
                    icon: '/dashboard/socialIcon/Line.svg',
                    platform: 'facebook',  // 添加 platform 字段
                    name: '工作用帳號',
                    type: { id: 'line', label: '社交平台', color: '#FFB7B7' }, // 添加 id
                    owner: 'Rabby Xiao',
                    hasDoc: true,
                    hasAttachment: true,
                    status: '未完成',
                    date: '2024.01.14',
                    account: 'example@facebook.com',  // 添加帳號
                    password: '********',  // 添加密碼
                    description: '這是我的個人 Facebook 帳號'  // 添加描述
                },
            ]
        }
    },
    methods: {
        toggleMenu(id) {
            this.activeMenu = this.activeMenu === id ? null : id;
        },
        handleAction(action, item) {
            if (action === 'edit') {
                this.selectedItem = item;
                this.showEditPanel = true;
            }
            this.activeMenu = null;
        },
        openEditPanel(item) {
            this.selectedItem = item;
            this.showEditPanel = true;
        }
    }
}
</script>

<style scoped>
.table-container {
    background-color: var(--blue-98);
    border-radius: 1.5rem;
    width: 100%;
    padding: 0 0.5rem;
    overflow-x: scroll;
}

table {
    width: 100%;
    border-collapse: collapse;
}

/* Column widths */
.column-name {
    width: 30%;
    text-align: left;
}

.column-type {
    width: 96px;
    text-align: center;
}

.column-owner {
    width: 128px;
    text-align: center;
}

.column-process {
    width: 96px;
    text-align: center;
    white-space: nowrap;
}

.column-attachment {
    width: 96px;
    text-align: center;
}

.column-status {
    width: 96px;
    text-align: center;
}

.column-date {
    width: 128px;
    text-align: center;
}

.column-action {
    width: 64px;
    text-align: center;
}

/* Headers */
th {
    padding: 12px 16px;
    color: var(--natural-30);
    font-weight: var(--m);
    white-space: nowrap;
}

/* Table cells */
td {
    padding: 12px 16px;
    text-align: center;
    white-space: nowrap;

    span {
        white-space: nowrap;
    }
}

/* Borders */
.border-bottom {
    border-bottom: 1px solid #E5E7EB;
}

/* Row hover effect */
tbody tr:hover {
    background-color: #F9FAFB;
}

/* Asset name column */
.data-name {
    display: flex;
    align-items: center;
    gap: 12px;
}

.icon-container {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Type column */
.type-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
}

.type-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

/* Status tags */
.status-tag {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 14px;
    display: inline-block;
}

.status-tag.complete {
    background-color: #E6F4FF;
    color: #0958D9;
}

.status-tag.incomplete {
    background-color: #F5F5F5;
    color: #666666;
}

/* Action column */
.action-button {
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: transparent;
    cursor: pointer;
}

.action-button:hover {
    background-color: #F3F4F6;
}

.action-icon {
    width: 20px;
    height: 20px;
    color: #6B7280;
}

.lucide-icon {
    width: var(--ism);
    stroke: var(--natural-30);
    vertical-align: middle;
}

/* 旋轉迴紋針 */
.attach-icon {
    /* transform: rotate(45deg); */
}


.data-name {
    cursor: pointer;
}
</style>