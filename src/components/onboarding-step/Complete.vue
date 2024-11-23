<template>
    <div class="step-container">
        <!-- 進度指示器 -->
        <div class="step-indicator">
            <span class="step-number">5/5</span>
            <div class="progress-bar">
                <div v-for="n in 5" :key="n" class="progress-segment active">
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content">
            <div class="complete-content">
                <h2 class="title">完成</h2>
                <p class="subtitle">萬事起頭難，恭喜你已經完成第一位聯絡人與數位資產歸屬！</p>

                <!-- 完成插圖 -->
                <div class="illustration">
                    <img src="@/assets/onBoarding/complete.jpg" alt="complete">
                </div>

                <!-- 完成按鈕 -->
                <button class="btn-primary" @click="$emit('complete')">
                    探索數位人生
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['complete'])
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
    align-items: center;
    justify-content: center;
}

.complete-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 480px;

    .title {
        font-size: 1.75rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 1rem;
    }

    .subtitle {
        color: #666;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 2rem;
    }

    .illustration {
        width: 240px;
        margin-bottom: 3rem;

        img {
            width: 100%;
            height: auto;
        }
    }

    .btn-primary {
        padding: 0.875rem 2.5rem;
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
}
</style>