<template>
    <div class="card guide">
        <div class="guide-header">
            <h4>資產處理指南</h4>
            <div class="guide-controls">
                <button class="guide-btn" @click="prevSlide" :disabled="currentIndex === 0">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                <button class="guide-btn" @click="nextSlide" :disabled="currentIndex === guideSlides.length - 1">
                    <span class="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
        <h6>你知道各大平台可以怎麼處理帳戶嗎?</h6>

        <div class="guide-carousel">
            <div class="guide-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(slide, index) in guideSlides" :key="index" class="guide-slide"
                    :class="{ 'completed': slide.isCompleted }">
                    <div class="guide-content">
                        <div class="guide-icon">
                            <img :src="slide.img" :alt="slide.title">
                        </div>
                        <div class="guide-text">
                            <h6>{{ slide.title }}</h6>
                            <p>{{ slide.description }}</p>
                        </div>
                        <button class="guide-action" @click="handleAction(index)">
                            了解更多
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
                    img: '/dashboard/watermark-icon/facebook.svg',
                    title: '轉為紀念帳戶頁面',
                    description: 'Facebook 可以在妳離開後，將帳戶轉為紀念帳戶，或由指定的家人或執行人刪除帳戶。'
                },
                {
                    img: '/dashboard/watermark-icon/instagram.svg',
                    title: '轉為紀念帳戶頁面',
                    description: 'Instagram 對於過世帳號處理，官方在收到要求時，帳號將轉成紀念帳號，不提供登入資訊。'
                },
                {
                    img: '/dashboard/watermark-icon/line.svg',
                    title: 'LINE 保留帳號方式',
                    description: 'LINE 帳號綁定臉書或信箱，之後再解除手機綁定，未來即使註銷手機門號，帳號也還保留。將手機門號轉成預付卡，在定期小額儲值，保留門號的同時也能留存親人 LINE 帳號'
                },
                {
                    img: '/dashboard/watermark-icon/x.svg',
                    title: '停用帳號',
                    description: 'X 在收到亡者執行人或直系親屬的申請和死亡證明後，會停用帳戶。'
                },
                {
                    img: '/dashboard/watermark-icon/YouTube.svg',
                    title: '可以轉為紀念帳戶頁面',
                    description: 'Youtube 可以在妳離開後，將帳戶轉為紀念帳戶，或由指定的家人或執行人刪除帳戶。'
                },
                {
                    img: '/dashboard/watermark-icon/linkedin.svg',
                    title: '公司幫你設為緬懷狀態',
                    description: 'linkedin 可以在妳離開後，將帳戶轉為紀念帳戶，或由指定的家人或執行人刪除帳戶。'
                }
            ]
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
    gap: 1rem;
    overflow: hidden;
    position: relative; // 添加相對定位
    min-height: 400px;
}

.guide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h5 {
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
    flex: 0 0 35%; // 使用 flex-shrink: 0 防止壓縮
    padding: 1.5rem;
    background-color: var(--natural-95);
    border-radius: 1rem;
    margin-right: 0.75rem;
    min-width: 240px;
    position: relative;
    overflow: hidden;
    
    &:last-child {
        margin-right: 0; // 最後一個元素不需要右邊距
    }
}

.guide-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}

.guide-icon {
    position: absolute;
    right: -32px;
    bottom: -32px;
    // display: grid;
    // place-items: center;

    span {
        font-size: 1.5rem;
    }
}

.guide-text {
    flex: 1;
    z-index: 9;

    h6 {
        font-weight: var(--b);
        margin: 0 0 0.5rem 0;
    }

    p {
        color: var(--natural-30);
        font-size: var(--sm);
        margin: 0;
        line-height: 1.5;
        @include textOver;
    }
}

.guide-action {
    z-index: 9;
    align-self: flex-start;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    border: none;
    // background-color: var(--blue-48);
    border: solid 1px var(--blue-48);
    color: var(--blue-48);
    // cursor: pointer;
    font-weight: var(--m);
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--blue-48);
        color: var(--white);
    }
}

.guide-controls {
    @include flex($g:0.5rem);
}
</style>