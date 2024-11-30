<template>
    <!-- 歡迎圖片 -->
    <img :src="welcomeImage" alt="Welcome" class="welcome-image">
    <div class="welcome-container">
        <div class="welcome-content">
            <!-- 標題區 -->
            <div class="title-section">
                <h1 class="main-title">規劃數位人生</h1>
                <div class="subtitle-wrapper">
                    <p class="subtitle">組織今天並為</p>
                    <p class="subtitle emphasis">明天</p>
                    <p class="subtitle">做好準備</p>
                </div>
            </div>

            <!-- 開始按鈕 -->
            <button class="start-button" @click="$emit('start')">
                開始使用
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import welcomeImage from '@/assets/onBoarding/welcome.jpg'

defineEmits(['start'])
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.welcome-container {
    // height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
}

.welcome-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    // max-width: 480px;
    // margin: 0 auto;
    text-align: center;
    
}

.welcome-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    // max-width: 320px;
    height: auto;
    max-height: 350px;
    object-fit: cover;
    // margin-bottom: 1rem;
}

.title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.main-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}

.subtitle-wrapper {
    display: flex;
    // gap: 0.5rem;
    align-items: center;
}

.subtitle {
    font-size: 1.25rem;
    color: #666;

    &.emphasis {
        color: #FF6B00;
        font-weight: bold;
    }
}

.start-button {
    @include button(var(--white), var(--blue-48));
}
</style>