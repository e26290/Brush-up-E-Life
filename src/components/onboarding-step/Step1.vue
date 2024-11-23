<template>
    <div class="step-container">
        <!-- 進度指示器 -->
        <div class="step-indicator">
            <span class="step-number">1/5</span>
            <div class="progress-bar">
                <div class="progress-segment active"></div>
                <div class="progress-segment"></div>
                <div class="progress-segment"></div>
                <div class="progress-segment"></div>
                <div class="progress-segment"></div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content">
            <h2 class="title">數位資產的全方位守護</h2>
            <p class="subtitle">我們提供全面的數位資產解決方案，確保您的數位世界更安全、更有序。</p>

            <!-- 三個功能卡片 -->
            <div class="features">
                <div class="feature-card">
                    <div class="icon-wrapper">
                        <img src="@/assets/onBoarding/step1-icon1.svg" alt="安全">
                    </div>
                    <h3>安全管理數位資產</h3>
                    <p>銀行級加密技術，輕鬆瀏覽管理數位資產。</p>
                </div>

                <div class="feature-card">
                    <div class="icon-wrapper">
                        <img src="@/assets/onBoarding/step1-icon2.svg" alt="處理">
                    </div>
                    <h3>簡單處理數位資產</h3>
                    <p>預先決定如何處理數位資產，給指定繼承人。</p>
                </div>

                <div class="feature-card">
                    <div class="icon-wrapper">
                        <img src="@/assets/onBoarding/step1-icon3.svg" alt="通知">
                    </div>
                    <h3>輕鬆計立意外機制</h3>
                    <p>選擇合適的檢核與提醒週期，定期偵測保護。</p>
                </div>
            </div>

            <!-- 按鈕區域 -->
            <div class="button-group">
                <button class="btn-secondary" @click="$emit('prev')">上一步</button>
                <button class="btn-primary" @click="$emit('next')">下一步</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['prev', 'next'])
</script>

<style scoped lang="scss">
.step-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2rem;
}

// 進度指示器樣式
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

// 內容區域樣式
.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        color: #333;
    }

    .subtitle {
        text-align: center;
        color: #666;
        font-size: 1rem;
        margin-bottom: 2rem;
    }
}

// 功能卡片樣式
.features {
    display: flex;
    gap: 1.5rem;
    margin: 1rem 0;
    justify-content: center;

    .feature-card {
        flex: 1;
        background-color: #F8FBFF;
        padding: 1.5rem;
        border-radius: 12px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .icon-wrapper {
            width: 64px;
            height: 64px;
            background-color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;

            img {
                width: 32px;
                height: 32px;
            }
        }

        h3 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #333;
        }

        p {
            font-size: 0.875rem;
            color: #666;
            line-height: 1.5;
        }
    }
}

// 按鈕組樣式
.button-group {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: auto;
    padding-top: 2rem;

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