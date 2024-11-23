<template>
    <div class="welcome-container">
        <div class="welcome-content">
            <!-- 歡迎圖片 -->
            <img :src="welcomeImage" alt="Welcome" class="welcome-image">

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
.welcome-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 480px;
    margin: 0 auto;
    text-align: center;
}

.welcome-image {
    width: 100%;
    max-width: 320px;
    height: auto;
    margin-bottom: 1rem;
}

.title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.main-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}

.subtitle-wrapper {
    display: flex;
    gap: 0.5rem;
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
    padding: 0.75rem 3rem;
    background-color: #2196F3;
    color: white;
    border-radius: 8px;
    font-size: 1.125rem;
    font-weight: 500;
    transition: background-color 0.2s;

    &:hover {
        background-color: darken(#2196F3, 5%);
    }

    &:active {
        transform: translateY(1px);
    }
}
</style>