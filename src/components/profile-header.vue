<template>
    <header>
        <div class="header-left">
            <button class="collapse-btn">
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>

        <div class="header-right">
            <!-- 訊息按鈕 -->
            <div class="message-dropdown">
                <button class="icon-btn">
                    <span class="material-symbols-outlined">notifications</span>
                    <div class="dot"></div>
                </button>

                <!-- 下拉選單 -->
                <div class="dropdown-menu message-menu">
                    <div class="dropdown-header">
                        <h6>訊息通知</h6>
                        <button class="text-btn">全部已讀</button>
                    </div>
                    <div class="message-list">
                        <div class="message-item">
                            <div class="message-icon">
                                <span class="material-symbols-outlined">公告</span>
                            </div>
                            <div class="message-content">
                                <div class="message-title">例行維修</div>
                                <div class="message-text">預計2024/12/1-10 夜間 12:00-3:00 進行系統維修，如有不便之處，敬請見諒！</div>
                                <div class="message-date">2024/11/15</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 使用者按鈕 -->
            <div class="user-dropdown">
                <button class="user-btn">
                    <img src="/src/assets/dashboard/user.png" alt="user avatar" />
                </button>

                <!-- 下拉選單 -->
                <div class="dropdown-menu user-menu">
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
                            登出
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'profile',
    setup() {

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
    position: absolute;
    top: 100%;
    right: 1rem;
    display: block;
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