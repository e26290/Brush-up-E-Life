<template>
    <div class="card guide">
        <div class="guide-header">
            <h5>使用指南 ({{ completedCount }}/{{ guideSlides.length }})</h5>
            <div class="guide-controls">
                <button class="guide-btn" @click="prevSlide" :disabled="currentIndex === 0">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <button class="guide-btn" @click="nextSlide" :disabled="currentIndex === guideSlides.length - 1">
                    <span class="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>

        <div class="guide-carousel">
            <div class="guide-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(slide, index) in guideSlides" :key="index" class="guide-slide"
                    :class="{ 'completed': slide.isCompleted }">
                    <div class="guide-content">
                        <div class="guide-icon">
                            <span class="material-symbols-outlined">{{ slide.icon }}</span>
                        </div>
                        <div class="guide-text">
                            <h6>{{ slide.title }}</h6>
                            <p>{{ slide.description }}</p>
                        </div>
                        <button class="guide-action" :class="{ 'completed': slide.isCompleted }"
                            @click="handleAction(index)">
                            {{ slide.isCompleted ? '已完成' : '去指定' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GuideCarousel',
    data() {
        return {
            currentIndex: 0,
            guideSlides: [
                {
                    icon: 'person',
                    title: '建立個人檔案',
                    description: '完善您的基本資料，讓我們更了解您。',
                    isCompleted: true
                },
                {
                    icon: 'group',
                    title: '新增聯絡人',
                    description: '添加您信任的聯絡人，作為數位資產的繼承人。',
                    isCompleted: true
                },
                {
                    icon: 'account_balance',
                    title: '數位資產盤點',
                    description: '盤點您的數位資產，確保重要資產都被妥善處理。',
                    isCompleted: false
                },
                {
                    icon: 'support_agent',
                    title: '指定數位遺囑執行人',
                    description: '選擇一位值得信任的人作為您的數位遺囑執行人。',
                    isCompleted: false
                },
                {
                    icon: 'description',
                    title: '建立數位遺囑',
                    description: '撰寫您的數位遺囑，讓資產規劃更有保障。',
                    isCompleted: false
                },
                {
                    icon: 'history_edu',
                    title: '記錄生活故事',
                    description: '分享您的生活點滴，留下珍貴的回憶。',
                    isCompleted: false
                },
                {
                    icon: 'favorite',
                    title: '製作時間囊',
                    description: '為摯愛準備專屬的時間囊，傳遞您的心意。',
                    isCompleted: false
                },
                {
                    icon: 'verified',
                    title: '完成設定',
                    description: '檢查並確認所有設定都已完成。',
                    isCompleted: false
                }
            ]
        }
    },
    computed: {
        // 計算已完成的項目數量
        completedCount() {
            return this.guideSlides.filter(slide => slide.isCompleted).length;
        }
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.guideSlides.length - 1) {
                this.currentIndex++;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        // 處理按鈕點擊事件
        handleAction(index) {
            if (!this.guideSlides[index].isCompleted) {
                // 這裡可以添加導航邏輯，根據不同項目跳轉到相應的頁面
                this.$router.push({
                    name: this.getRouteName(index)
                });
            }
        },
        // 根據索引獲取對應的路由名稱
        getRouteName(index) {
            const routeMap = {
                0: 'profile',
                1: 'contacts',
                2: 'digitalAssets',
                3: 'executor',
                4: 'will',
                5: 'story',
                6: 'timeCapture',
                7: 'settings'
            };
            return routeMap[index] || 'dashboard';
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.guide {
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow: hidden;
    position: relative; // 添加相對定位
    min-height: 360px;
}

.guide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h5 {
        margin: 0;
        font-weight: var(--b);
    }
}

.guide-carousel {
    flex: 1;
    // overflow: hidden;
    width: 100%;
    position: relative;
}

.guide-btn {
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--natural-95);
    color: var(--natural-30);
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--natural-90);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

.guide-container {
    display: flex;
    position: absolute; // 改為絕對定位
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
}

.guide-slide {
    flex: 0 0 50%; // 使用 flex-shrink: 0 防止壓縮
    padding: 1.5rem;
    background-color: var(--blue-90);
    border-radius: 1rem;
    margin-right: 0.75rem;
    
    &:last-child {
        margin-right: 0; // 最後一個元素不需要右邊距
    }

    &.completed {
        background-color: var(--natural-95);

        .guide-icon {
            background-color: var(--blue-90);
            color: var(--blue-48);
        }
    }

    @include breakpoint(1440px){
        flex: 0 0 90%;
    }
    @include breakpoint(1200px){
        flex: 0 0 40%;
    }
    @include breakpoint(576px){
        flex: 0 0 90%;
    }
}

.guide-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}

.guide-icon {
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background-color: var(--natural-90);
    color: var(--natural-30);
    display: grid;
    place-items: center;

    span {
        font-size: 1.5rem;
    }
}

.guide-text {
    flex: 1;

    h6 {
        font-weight: var(--b);
        margin: 0 0 0.5rem 0;
    }

    p {
        color: var(--natural-30);
        font-size: var(--sm);
        margin: 0;
        line-height: 1.5;
    }
}

.guide-action {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: var(--blue-48);
    color: var(--white);
    cursor: pointer;
    font-weight: var(--m);
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.9;
    }

    &.completed {
        background-color: var(--natural-90);
        color: var(--natural-30);
        cursor: default;

        &:hover {
            opacity: 1;
        }
    }
}

.guide-controls {
    @include flex($g:0.5rem);
}
</style>