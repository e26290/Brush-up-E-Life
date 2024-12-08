<template>
    <div class="recent">
        <h4>數位資產一覽</h4>

        <!-- tab 切換表單 -->
        <div class="recent__content">
            <div class="tab-controls">
                <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: currentTab === tab.id }"
                    @click="currentTab = tab.id">
                    {{ tab.name }}
                </button>
            </div>
            <!-- 全部一覽 -->
            <div v-show="currentTab === 'alldata'" class="tab-content">
                <datatable />
            </div>
            <!-- 社交平台 -->
            <div v-show="currentTab === 'contacts'" class="tab-content">
            </div>
        </div>
    </div>
</template>

<script>
import datatable from './datatable.vue';

export default {
    name: 'DashboardRecent',
    components: {
        datatable,
    },
    data() {
        return {
            currentTab: 'alldata',
            activeMenu: null,
            tabs: [
                { id: 'alldata', name: '全部一覽' },
                { id: 'contacts', name: '社交平台' },
            ],
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        },
        toggleMenu(id) {
            // 如果點擊的是同一個選單，則關閉；否則打開新的選單
            if (this.activeMenu === id) {
                this.activeMenu = null;
            } else {
                this.activeMenu = id;
            }
        },
        closeMenu() {
            this.activeMenu = null;
        },
        handleAction(action, item) {
            if (action === 'view') {
                // 處理查看邏輯
            } else if (action === 'edit') {
                // 處理編輯邏輯
            }
            this.closeMenu();
        }
    },
    directives: {
        clickOutside: {
            mounted(el, binding) {
                el._clickOutside = (event) => {
                    // 確保點擊事件不是來自選單按鈕
                    if (!(el === event.target || el.contains(event.target)) &&
                        !event.target.closest('.menu-btn')) {
                        binding.value(event);
                    }
                };
                document.body.addEventListener('click', el._clickOutside);
            },
            unmounted(el) {
                document.body.removeEventListener('click', el._clickOutside);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.recent {
    padding-top: 1rem;
    width: 100%;

    // border-top: 1px solid var(--natural-85);
    h4 {
        margin-bottom: 1rem;
    }
}

.recent__content {
    background-color: var(--white);
    // overflow: hidden;
}

.tab-controls {
    @include flex($g: 0rem, $j: flex-start);
    // padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: solid 1px var(--natural-85);

    .tab-btn {
        padding: 0.5rem 1rem;
        border: none;
        background: none;
        color: var(--natural-30);
        cursor: pointer;
        // border-radius: 1000px;
        // font-size: var(--sm);
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--natural-95);
        }

        &.active {
            background-color: var(--blue-95);
            color: var(--blue-48);
            border-bottom: 2px solid var(--blue-48);
            font-weight: var(--b);
        }
    }
}

.tab-content {
    @include flex($d: column, $g: 0.75rem, $a: stretch);
}

.list-item {
    @include flex($j: space-between, $g: 1rem);
    padding: 0.5rem 0;
    background-color: var(--white);
    border-radius: 0.75rem;
    // border: solid ;

    .item-icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        @include flex($j: center);

        &.fb {
            background-color: #E7F5FF;

            img {
                color: #1877F2;
            }
        }

        &.line {
            background-color: #F0FFE9;

            img {
                color: #00B900;
            }
        }

        &.ig {
            background-color: #FFF1F5;

            img {
                color: #E4405F;
            }
        }

        &.contact {
            background-color: var(--blue-95);
            color: var(--blue-48);
        }

        img {
            width: 1.25rem;
            height: 1.25rem;
        }
    }

    .item-content {
        flex: 1;

        h6 {
            margin: 0 0 0.25rem;
            font-weight: var(--b);
        }

        p {
            margin: 0;
            color: var(--natural-30);
            font-size: var(--sm);
        }
    }

    .item-info {
        @include flex($g: 1rem);
        align-items: start;

        .date {
            color: var(--natural-50);
            font-size: var(--xs);
        }
    }
}

.menu-dropdown {
    position: relative;

    .menu-btn {
        width: 2rem;
        height: 2rem;
        border: none;
        background: none;
        border-radius: 0.5rem;
        cursor: pointer;
        color: var(--natural-30);
        position: relative; // 添加相對定位
        z-index: 11; // 確保按鈕在選單之上

        &:hover {
            background-color: var(--natural-95);
        }
    }

    .menu-list {
        position: absolute;
        top: calc(100% + 4px); // 稍微調整位置
        right: 0;
        background-color: var(--white);
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        min-width: 120px;
        z-index: 999;

        button {
            @include flex($g: 0.5rem);
            width: 100%;
            padding: 0.5rem;
            border: none;
            background: none;
            color: var(--natural-30);
            cursor: pointer;
            border-radius: 0.25rem;

            &:hover {
                background-color: var(--natural-95);
                color: var(--blue-48);
            }

            span {
                font-size: 1.25rem;
            }
        }
    }
}

.view-more {
    padding: 0.5rem 1rem;
    color: var(--natural-50);
    @include flex($g: 0.5rem, $j: flex-start);

    span {
        color: var(--natural-50);
    }

    &:hover {
        color: var(--blue-48);

        span {
            color: var(--blue-48);
        }
    }
}
</style>