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
                <h4 class="title">完成</h4>
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
@import "src/css/_mixins.scss";

.step-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 1.25rem;
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
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.complete-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    // max-width: 480px;
    width: 100%;
    gap: 1.25rem;

    .title {
        font-weight: bold;
        text-align: center;
    }

    .subtitle {
        text-align: center;
        color: var(--natural-50);
        margin-top: -0.75rem;
        padding: 0;
    }

    .illustration {
        // margin-bottom: 3rem;
        width: 120%;

        img {
            width: 100%;
            height: auto;
        }
    }

    .btn-primary {
        @include button(var(--white), var(--blue-48));
    }
}
</style>