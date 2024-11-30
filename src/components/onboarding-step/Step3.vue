<template>
    <div class="step-container">
        <!-- 進度指示器 -->
        <div class="step-indicator">
            <span class="step-number">3/5</span>
            <div class="progress-bar">
                <div v-for="n in 5" :key="n" class="progress-segment" :class="{ 'active': n <= 3 }">
                </div>
            </div>
        </div>

        <!-- 內容區域 -->
        <div class="content">
            <h4 class="title">設定可信任的聯絡人</h4>
            <p class="subtitle">指定一位聯絡人，他將在您過世後有權存取您的資料，或繼承特定的數位資產。</p>

            <!-- 插圖＋表單 -->
            <div class="content-items">
                <div class="illustration">
                    <img src="@/assets/onBoarding/step3.jpg" alt="contact">
                </div>
                <!-- 表單 -->
                <div class="form-container">
                    <div class="form-group">
                        <label>
                            聯絡人姓名
                            <span class="required">*</span>
                        </label>
                        <input type="text" v-model="formData.name" placeholder="請輸入姓名">
                    </div>

                    <div class="form-group">
                        <label>
                            聯絡人 Email
                            <span class="required">*</span>
                        </label>
                        <input type="email" v-model="formData.email" placeholder="example@mail.com">
                    </div>

                    <div class="form-group">
                        <label>聯絡人手機號碼</label>
                        <input type="tel" v-model="formData.phone" placeholder="09-">
                    </div>
                </div>
            </div>

            <!-- 按鈕區域 -->
            <div class="button-group">
                <button class="btn-secondary" @click="$emit('prev')">上一步</button>
                <button class="btn-primary" @click="handleNext" :disabled="!isFormValid">
                    下一步
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['prev', 'next'])

const formData = ref({
    name: '',
    email: '',
    phone: ''
})

// 表單驗證
const isFormValid = computed(() => {
    return formData.value.name && formData.value.email
})

const handleNext = () => {
    if (isFormValid.value) {
        emit('next', formData.value)
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
    gap: 1.25rem;

    .title {
        // font-size: 1.5rem;
        font-weight: bold;
        // color: #333;
        text-align: center;
    }

    .subtitle {
        text-align: center;
        color: var(--natural-50);
        margin-top: -0.75rem;
        padding: 0;
    }

    .content-items {
        @include flex;
        width: 100%;
        height: 100%;
    }

    .illustration {
        max-width: 220px;

        img {
            width: 100%;
            height: auto;
        }
    }
}

.form-container {
    width: 100%;
    max-width: 480px;
    // margin: 0 auto;

    .form-group {
        margin-bottom: 0.75rem;

        label {
            display: block;
            margin-bottom: 0.2rem;
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
            color: #333;
            transition: border-color 0.2s;

            &::placeholder {
                color: #999;
            }

            &:focus {
                outline: none;
                border-color: #2196F3;
            }

            &:hover {
                border-color: #BDBDBD;
            }
        }
    }
}

.button-group {
    display: flex;
    justify-content: center;
    gap: 1.25rem;

    button {
        &.btn-primary {
            @include button(var(--white), var(--blue-48));

            &:hover:not(:disabled) {
                background-color: darken(#2196F3, 5%);
            }

            &:disabled {
                background-color: #E0E0E0;
                cursor: not-allowed;
            }
        }

        &.btn-secondary {
            @include button(var(--natural-50), var(--white));
            border: solid 1px var(--natural-50);
        }
    }
}
</style>