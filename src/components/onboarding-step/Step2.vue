<template>
    <div class="step-container">
        <!-- 進度指示器 -->
        <div class="step-indicator">
            <span class="step-number">2/5</span>
            <div class="progress-bar">
                <div v-for="n in 5" :key="n" class="progress-segment" :class="{ 'active': n <= 2 }">
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content">
            <h2 class="title">設定電子郵件檢查間隔</h2>
            <p class="subtitle">設定重複發送電子郵件的時間間隔，以確定一切正常。</p>

            <!-- 插圖 -->
            <div class="illustration">
                <img src="@/assets/onBoarding/step2.jpg" alt="time setting">
            </div>

            <!-- 間隔選項 -->
            <div class="interval-options">
                <button v-for="days in [30, 45, 60, 90]" :key="days" class="interval-option"
                    :class="{ 'selected': selectedInterval === days }" @click="selectedInterval = days">
                    {{ days }} 天
                </button>
            </div>

            <!-- 提示文字 -->
            <p class="hint">
                <span class="hint-icon">✎</span>
                您可以在進到平台後，隨時進行修改
            </p>

            <!-- 按鈕區域 -->
            <div class="button-group">
                <button class="btn-secondary" @click="$emit('prev')">上一步</button>
                <button class="btn-primary" @click="$emit('next')">下一步</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedInterval = ref(30)
defineEmits(['prev', 'next'])
</script>

<style scoped lang="scss">
.step-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;
}

.step-indicator {
    .step-number {
        color: #2196F3;
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: block;
    }

    .progress-bar {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;

        .progress-segment {
            flex: 1;
            height: 4px;
            background-color: #E0E0E0;
            border-radius: 2px;

            &.active {
                background-color: #2196F3;
            }
        }
    }
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
    }

    .subtitle {
        color: #666;
        max-width: 480px;
    }

    .illustration {
        max-width: 200px;
        margin: 2rem 0;

        img {
            width: 100%;
            height: auto;
        }
    }
}

.interval-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    width: 100%;
    max-width: 480px;

    .interval-option {
        padding: 1rem;
        border: 2px solid #E0E0E0;
        border-radius: 12px;
        font-size: 1.25rem;
        color: #333;
        background: white;
        transition: all 0.2s;

        &:hover {
            border-color: #2196F3;
        }

        &.selected {
            border-color: #2196F3;
            color: #2196F3;
        }
    }
}

.hint {
    color: #666;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .hint-icon {
        color: #999;
    }
}

.button-group {
    display: flex;
    gap: 1rem;
    margin-top: auto;

    button {
        padding: 0.75rem 2rem;
        border-radius: 8px;
        font-weight: 500;
        transition: all 0.2s;

        &.btn-primary {
            background-color: #2196F3;
            color: white;

            &:hover {
                background-color: darken(#2196F3, 5%);
            }
        }

        &.btn-secondary {
            background-color: white;
            color: #666;
            border: 1px solid #E0E0E0;

            &:hover {
                background-color: #f5f5f5;
            }
        }
    }
}
</style>