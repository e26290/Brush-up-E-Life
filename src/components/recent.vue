<template>
    <div class="recent">
        <h5>最近新增</h5>

        <!-- tab 切換表單 -->
        <div class="recent__content">
            <div class="tab-controls">
                <button v-for="tab in tabs" :key="tab.id" class="tab-btn" :class="{ active: currentTab === tab.id }"
                    @click="currentTab = tab.id">
                    {{ tab.name }}
                </button>
            </div>
            <!-- 數位資產 -->
            <div v-show="currentTab === 'assets'" class="tab-content">
                <div v-for="item in assetsList" :key="item.id" class="list-item">
                    <div class="item-icon" :class="item.type">
                        <img :src="`/src/assets/dashboard/icons/${item.type}.svg`" :alt="item.type">
                    </div>
                    <div class="item-content">
                        <h6>{{ item.title }}</h6>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="item-info">
                        <span class="date">
                            {{ formatDate(item.date) }}
                        </span>
                        <div class="menu-dropdown" v-click-outside="closeMenu">
                            <button class="menu-btn" @click="toggleMenu(item.id)">
                                <span class="material-symbols-outlined">more_vert</span>
                            </button>
                            <div class="menu-list" v-if="activeMenu === item.id">
                                <button @click="handleAction('view', item)">
                                    <span class="material-symbols-outlined">visibility</span>
                                    查看
                                </button>
                                <button @click="handleAction('edit', item)">
                                    <span class="material-symbols-outlined">edit</span>
                                    編輯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="view-more">
                    查看更多
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
            </div>
            <!-- 聯絡人 -->
            <div v-show="currentTab === 'contacts'" class="tab-content">
                <div v-for="item in contactsList" :key="item.id" class="list-item">
                    <div class="item-icon contact">
                        <span class="material-symbols-outlined">person</span>
                    </div>
                    <div class="item-content">
                        <h6>{{ item.name }}</h6>
                        <p>{{ item.relation }}</p>
                    </div>
                    <div class="item-info">
                        <span class="date">{{ formatDate(item.date) }}</span>
                        <div class="menu-dropdown" v-click-outside="closeMenu">
                            <button class="menu-btn" @click="toggleMenu(item.id)">
                                <span class="material-symbols-outlined">more_vert</span>
                            </button>
                            <div class="menu-list" v-if="activeMenu === item.id">
                                <button @click="handleAction('view', item)">
                                    <span class="material-symbols-outlined">visibility</span>
                                    查看
                                </button>
                                <button @click="handleAction('edit', item)">
                                    <span class="material-symbols-outlined">edit</span>
                                    編輯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="view-more">
                    查看更多
                    <span class="material-symbols-outlined">arrow_right_alt</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardRecent',
    data() {
        return {
            currentTab: 'assets',
            activeMenu: null,
            tabs: [
                { id: 'assets', name: '數位資產' },
                { id: 'contacts', name: '聯絡人' }
            ],
            assetsList: [
                {
                    id: 1,
                    type: 'fb',
                    title: 'Facebook 帳號',
                    description: '個人帳號',
                    date: '2024-01-15'
                },
                {
                    id: 2,
                    type: 'line',
                    title: 'LINE 帳號',
                    description: '工作用帳號',
                    date: '2024-01-14'
                },
                {
                    id: 3,
                    type: 'ig',
                    title: 'Instagram 帳號',
                    description: '攝影作品帳號',
                    date: '2024-01-13'
                }
            ],
            contactsList: [
                {
                    id: 1,
                    name: '王小明',
                    relation: '摯友',
                    date: '2024-01-15'
                },
                {
                    id: 2,
                    name: '李小華',
                    relation: '家人',
                    date: '2024-01-14'
                },
                {
                    id: 3,
                    name: '張小美',
                    relation: '親戚',
                    date: '2024-01-13'
                }
            ]
        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
        },
        toggleMenu(id) {
            this.activeMenu = this.activeMenu === id ? null : id;
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
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value(event);
                    }
                };
                document.addEventListener('click', el._clickOutside);
            },
            unmounted(el) {
                document.removeEventListener('click', el._clickOutside);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.recent {
    padding-top: 1rem;
    // border-top: 1px solid var(--natural-85);

    &__header {
        @include flex($j: space-between, $a: center);
        margin-bottom: 1rem;

        h5 {
            margin: 0;
        }
    }
}

.recent__content {
    background-color: var(--white);
    border-radius: 1.5rem;
    padding: 1rem;
}

.tab-controls {
    @include flex($g: 0.5rem, $j: flex-start);
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: solid 1px var(--natural-85);

    .tab-btn {
        padding: 0.5rem 1rem;
        border: none;
        background: none;
        color: var(--natural-30);
        cursor: pointer;
        border-radius: 1000px;
        font-size: var(--sm);
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--natural-95);
        }

        &.active {
            background-color: var(--blue-95);
            color: var(--blue-48);
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

        &:hover {
            background-color: var(--natural-95);
        }
    }

    .menu-list {
        position: absolute;
        top: 100%;
        right: 0;
        background-color: var(--white);
        border-radius: 0.5rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        min-width: 120px;
        z-index: 10;

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

    // align-self: center;

    // border: none;
    // background-color: var(--natural-95);
    // color: var(--natural-30);
    // border-radius: 0.5rem;
    // cursor: pointer;
    // margin-top: 0.5rem;

    &:hover {
        color: var(--blue-48);

        span {
            color: var(--blue-48);
        }
    }
}
</style>