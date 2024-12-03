<template>
    <div class="step-container">
        <!-- 進度指示器 -->
        <div class="step-indicator">
            <span class="step-number">4/5</span>
            <div class="progress-bar">
                <div v-for="n in 5" :key="n" class="progress-segment" :class="{ 'active': n <= 4 }">
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content">
            <h4 class="title">建立第一筆數位資產</h4>
            <p class="subtitle">快速地建立您的第一筆資產</p>

            <!-- 步驟指示器 -->
            <div class="asset-steps">
                <div class="step-number-indicator">{{ currentAssetStep }}</div>
                <div class="step-label">{{ currentAssetStep === 1 ? '選擇資產類型' : '選擇平台類型與帳戶資訊' }}</div>
            </div>

            <!-- 步驟一：選擇資產類型 -->
            <div v-if="currentAssetStep === 1" class="asset-type-grid">
                <button v-for="type in assetTypes" :key="type.id" class="asset-type-btn"
                    :class="{ 'selected': selectedAssetType === type.id }" @click="selectAssetType(type.id)">
                    <img :src="type.icon" :alt="type.name">
                    <span>{{ type.name }}</span>
                </button>
            </div>

            <!-- 步驟二：選擇平台和帳戶資訊 -->
            <div v-else class="platform-info-container">
                <!-- 平台選擇 -->
                <div class="platform-selection">
                    <!-- <h3>選擇平台類型</h3> -->
                    <div class="platform-grid">
                        <button v-for="platform in platforms" :key="platform.id" class="platform-btn"
                            :class="{ 'selected': selectedPlatform === platform.id }"
                            @click="selectPlatform(platform.id)">
                            <img :src="platform.icon" :alt="platform.name">
                            <span>{{ platform.name }}</span>
                        </button>
                    </div>
                </div>

                <!-- 帳戶資訊 -->
                <div class="account-info">
                    <!-- <h3>帳戶資訊</h3> -->
                    <div class="form-group">
                        <label>資產名稱<span class="required">*</span></label>
                        <input type="text" v-model="assetName" placeholder="為您的資產命名，例如：小明的私人 IG">
                    </div>
                </div>
            </div>

            <!-- 按鈕區域 -->
            <div class="button-group">
                <template v-if="currentAssetStep === 1">
                    <button class="btn-secondary" @click="$emit('prev')">上一步</button>
                    <button class="btn-primary" @click="nextAssetStep" :disabled="!selectedAssetType">
                        下一步
                    </button>
                </template>
                <template v-else>
                    <button class="btn-secondary" @click="prevAssetStep">上一步</button>
                    <button class="btn-primary" @click="completeAssetSetup" :disabled="!isFormValid">
                        下一步
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['prev', 'next'])

// 資產設定步驟
const currentAssetStep = ref(1)
const selectedAssetType = ref(null)
const selectedPlatform = ref(null)
const assetName = ref('')

// 資產類型數據
const assetTypes = [
    { id: 'social', name: '社交平台', icon: '/onBoarding/step4-icon1.svg' },
    { id: 'cloud', name: '雲端空間', icon: '/onBoarding/step4-icon2.svg' },
    { id: 'bank', name: '銀行帳戶', icon: '/onBoarding/step4-icon3.svg' },
    { id: 'subscription', name: '訂閱服務', icon: '/onBoarding/step4-icon4.svg' },
    { id: 'email', name: '電子郵件', icon: '/onBoarding/step4-icon5.svg' },
    { id: 'crypto', name: '虛擬貨幣', icon: '/onBoarding/step4-icon6.svg' }
]

// 平台選項（這裡以社交平台為例）
const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '/onBoarding/step4-fb.svg' },
    { id: 'instagram', name: 'Instagram', icon: '/onBoarding/step4-ig.svg' },
    { id: 'youtube', name: 'YouTube', icon: '/onBoarding/step4-yt.svg' },
    { id: 'line', name: 'Line', icon: '/onBoarding/step4-line.svg' }
]

// 表單驗證
const isFormValid = computed(() => {
    return selectedPlatform.value && assetName.value.trim() !== ''
})

// 選擇資產類型
const selectAssetType = (typeId) => {
    selectedAssetType.value = typeId
}

// 選擇平台
const selectPlatform = (platformId) => {
    selectedPlatform.value = platformId
}

// 下一步
const nextAssetStep = () => {
    currentAssetStep.value = 2
}

// 上一步
const prevAssetStep = () => {
    currentAssetStep.value = 1
}

// 完成資產設置
const completeAssetSetup = () => {
    if (isFormValid.value) {
        emit('next', {
            type: selectedAssetType.value,
            platform: selectedPlatform.value,
            name: assetName.value
        })
    }
}
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
    gap: 1.25rem;

    .title {
        // font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        // color: #333;
    }

    .subtitle {
        text-align: center;
        color: var(--natural-50);
        margin-top: -0.75rem;
        padding: 0;
    }

    .asset-steps {
        @include flex($j: flex-start, $g: 0.5rem);

        .step-number-indicator {
            background-color: var(--natural-50);
            color: var(--white);
            font-weight: var(--b);
            width: 1.5rem;
            height: 1.5rem;
            display: grid;
            place-items: center;
            border-radius: 50%;
        }

        .step-label {
            color: var(--natural-50);
            font-weight: var(--b);
            font-size: var(--lg);
        }
    }
}

// 按鈕組樣式
.button-group {
    display: flex;
    justify-content: center;
    gap: 1.25rem;

    button {

        &.btn-primary {
            @include button(var(--white), var(--blue-48));

            &:disabled {
                background-color: #E0E0E0;
                cursor: not-allowed;
                opacity: 0.5;
            }
        }

        &.btn-secondary {
            border: solid 1px var(--natural-50);
            @include button(var(--natural-50), var(--white));
        }
    }
}

.platform-info-container {
    width: 100%;
    height: 100%;
    // max-width: 600px;
    // margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    h3 {
        font-size: 1.125rem;
        font-weight: 500;
        color: #333;
        margin-bottom: 1rem;
    }
}

.platform-selection {
    .platform-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;

        .platform-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.75rem;
            border: 1px solid #E0E0E0;
            border-radius: 8px;
            background: white;
            transition: all 0.2s;

            img {
                width: 24px;
                height: 24px;
            }

            span {
                color: #333;
                font-size: 0.875rem;
            }

            &:hover {
                border-color: #2196F3;
            }

            &.selected {
                border-color: #2196F3;
                background-color: #F5F9FF;
            }
        }
    }
}

.account-info {
    .form-group {
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;

            .required {
                color: #FF5252;
                margin-left: 0.25rem;
            }
        }

        input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #E0E0E0;
            border-radius: 8px;
            font-size: 1rem;

            &:focus {
                outline: none;
                border-color: #2196F3;
            }
        }
    }
}

.asset-type-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
    height: 100%;
    // max-width: 600px;
    // margin: 2rem 0;

    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // gap: 0.5rem;
        // padding: 1rem;
        border: 1px solid #E0E0E0;
        border-radius: 12px;
        background: white;
        transition: all 0.2s;

        img {
            width: 56px;
            height: 56px;
        }

        span {
            color: #333;
            font-size: 0.875rem;
        }

        &:hover {
            border-color: #2196F3;
        }

        &.selected {
            border-color: #2196F3;
            background-color: #F5F9FF;
        }
    }
}
</style>