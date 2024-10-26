<template>
    <header>
        <div class="header-left">
            <button class="collapse-btn" @click="$emit('toggle-menu')">
                <span class="material-symbols-outlined">{{ isMenuCollapsed ? 'menu' : 'menu_open' }}</span>
            </button>
        </div>

        <div class="header-right">
            <!-- 訊息按鈕 -->
            <div class="message-dropdown" ref="messageDropdownRef">
                <button class="icon-btn" @click.stop.prevent="toggleMessageMenu">
                    <span class="material-symbols-outlined">notifications</span>
                    <span class="badge" v-if="unreadMessages">{{ unreadMessages }}</span>
                </button>

                <!-- 訊息下拉選單 -->
                <div class="dropdown-menu message-menu" v-show="isMessageMenuOpen">
                    <div class="dropdown-header">
                        <h3>訊息通知</h3>
                        <button class="text-btn">全部已讀</button>
                    </div>
                    <div class="message-list">
                        <div v-for="message in messages" :key="message.id" class="message-item"
                            :class="{ 'unread': !message.read }">
                            <div class="message-icon" :class="message.type">
                                <span class="material-symbols-outlined">
                                    {{ getMessageIcon(message.type) }}
                                </span>
                            </div>
                            <div class="message-content">
                                <div class="message-title">{{ message.title }}</div>
                                <div class="message-text">{{ message.content }}</div>
                                <div class="message-date">{{ message.date }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用者按鈕 -->
            <div class="user-dropdown" ref="userDropdownRef">
                <button class="user-btn" @click.stop="toggleUserMenu">
                    <img src="/src/assets/dashboard/user.png" alt="user avatar" />
                </button>

                <!-- 使用者下拉選單 -->
                <div class="dropdown-menu user-menu" v-show="isUserMenuOpen">
                    <div class="user-info">
                        <img :src="userAvatar" alt="user avatar" />
                        <div class="info">
                            <div class="name">{{ userName }}</div>
                            <div class="email">{{ userEmail }}</div>
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
                        <button class="menu-item" @click="logout">
                            <span class="material-symbols-outlined">logout</span>
                            登出
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

header {
    height: 64px;
    padding: 0 1.5rem;
    @include flex($j: space-between);
    border-bottom: 1px solid var(--natural-85);

    .header-left {
        @include flex;
    }

    .header-right {
        @include flex($g: 1rem);
    }
}

.icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    @include flex($j: center);
    background: transparent;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: var(--natural-95);
    }

    .badge {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--red-50);
        color: var(--white);
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 10px;
        border: 2px solid var(--white);
    }
}

.user-btn {
    @extend .icon-btn;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
    }
}

// 下拉選單樣式
.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 1rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 280px;
    z-index: 1000;
}

.message-menu {
    .dropdown-header {
        @include flex($j: space-between);
        padding: 1rem;
        border-bottom: 1px solid var(--natural-90);

        h3 {
            font-weight: var(--m);
        }

        .text-btn {
            color: var(--blue-48);
            background: none;
            cursor: pointer;

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
        padding: 1rem;
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
                background-color: var(--orange-95);
                color: var(--orange-50);
            }

            &.notification {
                background-color: var(--blue-95);
                color: var(--blue-48);
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