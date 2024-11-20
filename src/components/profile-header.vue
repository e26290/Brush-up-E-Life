<template>
    <header>
        <div class="header-left">
            <button class="collapse-btn" @click="toggleSideMenu">
                <span class="material-symbols-outlined">{{ isCollapsed ? 'menu' : 'menu_open' }}</span>
            </button>
        </div>

        <div class="header-right">
            <!-- 訊息按鈕 -->
            <div class="message-dropdown">
                <button class="icon-btn" @click.stop="toggleMessageMenu">
                    <span class="material-symbols-outlined">notifications</span>
                    <div class="dot" v-if="hasUnreadMessages"></div>
                </button>

                <!-- 下拉選單 -->
                <div v-if="isMessageMenuOpen" class="dropdown-menu message-menu">
                    <div class="dropdown-header">
                        <h6>訊息通知</h6>
                        <button class="text-btn" @click="markAllAsRead">全部已讀</button>
                    </div>
                    <div class="message-list">
                        <div v-for="message in messages" :key="message.id" class="message-item"
                            :class="{ 'unread': !message.isRead }" @click="markAsRead(message.id)">
                            <div class="message-icon" :class="message.type">
                                <span class="material-symbols-outlined">{{ message.icon }}</span>
                            </div>
                            <div class="message-content">
                                <div class="message-title">{{ message.title }}</div>
                                <div class="message-text">{{ message.text }}</div>
                                <div class="message-date">{{ message.date }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用者按鈕 -->
            <div class="user-dropdown">
                <button class="user-btn" @click.stop="toggleUserMenu">
                    <img src="/src/assets/dashboard/user.png" alt="user avatar" />
                </button>

                <div v-if="isUserMenuOpen" class="dropdown-menu user-menu">
                    <div class="user-info">
                        <div class="info">
                            <div class="email">brushup-elife@mail.com</div>
                        </div>
                    </div>
                    <div class="menu-list">
                        <a href="#" class="menu-item">
                            <span class="material-symbols-outlined">person</span>
                            個人檔案
                        </a>
                        <a href="#" class="menu-item">
                            <span class="material-symbols-outlined">workspace_premium</span>
                            PRO方案
                        </a>
                        <a href="#" class="menu-item">
                            <span class="material-symbols-outlined">settings</span>
                            會員設定
                        </a>
                        <button class="menu-item">
                            <span class="material-symbols-outlined">logout</span>
                            會員登出
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    name: 'ProfileHeader',
    props: {
        // 接收父組件傳入的狀態
        isCollapsed: {
            type: Boolean,
            required: true
        }
    },
    emits: ['update:isCollapsed'], // 定義要發出的事件
    setup(props, { emit }) {
        const isMessageMenuOpen = ref(false);
        const isUserMenuOpen = ref(false);

        // 訊息資料
        const messages = ref([
            {
                id: 1,
                type: 'announcement',
                icon: 'campaign',
                title: '例行維修',
                text: '預計2024/12/1-10 夜間 12:00-3:00 進行系統維修，如有不便之處，敬請見諒！',
                date: '2024/11/15',
                isRead: false
            },
            {
                id: 2,
                type: 'notification',
                icon: 'notifications',
                title: '新功能上線',
                text: '全新的資料分析功能已經上線，歡迎立即體驗！',
                date: '2024/11/14',
                isRead: false
            },
            {
                id: 3,
                type: 'notification',
                icon: 'notifications',
                title: '邀請制活動',
                text: '分享邀請碼，集滿 5 位可抽東京來回雙人遊～',
                date: '2024/10/12',
                isRead: true
            },
            {
                id: 4,
                type: 'announcement',
                icon: 'campaign',
                title: '系統維護',
                text: '更換老舊伺服器，如有不便之處，敬請見諒！',
                date: '2024/09/01',
                isRead: true
            }
        ]);

        // 計算是否有未讀訊息
        const hasUnreadMessages = computed(() => {
            return messages.value.some(message => !message.isRead);
        });

        // 標記單一訊息為已讀
        const markAsRead = (messageId) => {
            const message = messages.value.find(m => m.id === messageId);
            if (message) {
                message.isRead = true;
            }
        };

        // 標記所有訊息為已讀
        const markAllAsRead = () => {
            messages.value.forEach(message => {
                message.isRead = true;
            });
        };

        // 切換側邊欄
        const toggleSideMenu = () => {
            emit('update:isCollapsed', !props.isCollapsed);
        };

        // 切換訊息選單
        const toggleMessageMenu = () => {
            isMessageMenuOpen.value = !isMessageMenuOpen.value;
            if (isMessageMenuOpen.value) {
                isUserMenuOpen.value = false;
            }
        };

        // 切換使用者選單
        const toggleUserMenu = () => {
            isUserMenuOpen.value = !isUserMenuOpen.value;
            if (isUserMenuOpen.value) {
                isMessageMenuOpen.value = false;
            }
        };

        return {
            isMessageMenuOpen,
            isUserMenuOpen,
            messages,
            hasUnreadMessages,
            toggleMessageMenu,
            toggleUserMenu,
            markAsRead,
            markAllAsRead,
            toggleSideMenu
        };
    }
};
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

header {
    height: 64px;
    padding: 0rem 1.5rem;
    @include flex($j: space-between);
    border-bottom: 1px solid var(--natural-85);

    .header-right {
        @include flex($g: 1rem);
    }

    button {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        display: grid;
        place-items: center;
        // position: relative;

        &:hover {
            background-color: var(--natural-85);
        }
    }

    .icon-btn {
        .dot {
            position: absolute;
            top: 12px;
            right: 10px;
            width: 0.5rem;
            height: 0.5rem;
            background-color: var(--orange-50);
            // border: solid 1px var(--natural-95);
            border-radius: 50%;
        }
    }

    .user-btn {
        border-radius: 50%;

        img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }
}

// 下拉選單樣式
.dropdown-menu {
    border: none;
    position: absolute;
    top: 100%;
    right: -1rem;
    display: block;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 280px;
    z-index: 1000;
}

.message-menu {
    min-width: 360px;
    .dropdown-header {
        @include flex($j: space-between);
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--natural-90);

        .text-btn {
            color: var(--blue-48);
            background: none;
            width: auto;
            height: auto;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .message-list {
        max-height: 400px;
        overflow-y: auto;
    }

    .message-item {
        @include flex($g: 1rem);
        padding: 0.5rem 1rem;
        border-bottom: 1px solid var(--natural-95);
        cursor: pointer;

        &:hover {
            background-color: var(--natural-98);
        }

        &.unread {
            background-color: var(--blue-98);
        }

        .message-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            @include flex($j: center);

            &.announcement {
                background-color: var(--white);
            }

            &.notification {
                background-color: var(--white);
            }
        }

        .message-content {
            flex: 1;

            .message-title {
                font-weight: var(--m);
                margin-bottom: 0.25rem;
            }

            .message-text {
                color: var(--natural-30);
                font-size: var(--sm);
                margin-bottom: 0.25rem;
            }

            .message-date {
                color: var(--natural-50);
                font-size: var(--xs);
            }
        }
    }

    .message-icon {
        &.announcement {
            background-color: red;
        }

        &.notification {
            background-color: green;
        }
    }

    .message-item {
        transition: background-color 0.2s ease;

        &.unread {
            background-color: var(--blue-90);
        }

        &:hover {
            filter: brightness(95%);
        }
    }
}

.user-menu {
    .user-info {
        @include flex($g: 1rem);
        padding: 1rem;
        border-bottom: 1px solid var(--natural-90);

        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
        }

        .info {
            .name {
                font-weight: var(--m);
                margin-bottom: 0.25rem;
            }

            .email {
                color: var(--natural-30);
                font-size: var(--sm);
            }
        }
    }

    .menu-list {
        padding: 0.5rem;

        .menu-item {
            @include flex($g: 0.5rem);
            padding: 0.75rem;
            color: var(--natural-30);
            text-decoration: none;
            width: 100%;
            border-radius: 0.25rem;
            cursor: pointer;

            &:hover {
                background-color: var(--natural-95);
                color: var(--blue-48);
            }
        }
    }
}

.message-dropdown,
.user-dropdown {
    position: relative;
}
</style>