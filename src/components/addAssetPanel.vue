<template>
    <teleport to="body">
        <div class="side-panel-overlay" v-if="modelValue" @click="closePanel"></div>
        <div class="side-panel" :class="{ 'show': modelValue }">
            <div class="side-panel__header">
                <h3>{{ currentStep === 1 ? '新增數位資產' : '新增社交平台帳戶' }}</h3>
                <button class="close-button" @click="closePanel">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <div class="side-panel__content">
                <!-- 步驟 1: 選擇資產類型 -->
                <div v-if="currentStep === 1" class="form-section">
                    <h4>選擇資產類型</h4>
                    <div class="asset-types">
                        <div class="asset-type-grid">
                            <button v-for="type in assetTypes" :key="type.id" class="asset-type-btn"
                                :class="{ 'active': selectedType === type.id }" @click="selectedType = type.id">
                                <img :src="type.icon" :alt="type.name">
                                <span>{{ type.name }}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 步驟 2: 填寫詳細資料 -->
                <div v-else class="form-sections">
                    <!-- 帳戶資訊 -->
                    <div class="form-section">
                        <h4>帳戶資訊</h4>
                        <div class="form-group">
                            <label>平台類型<span class="required">*</span></label>
                            <div class="platform-selector">
                                <button class="platform-btn active">
                                    <img src="/dashboard/socialIcon/FB.svg" alt="Facebook" />
                                    Facebook
                                </button>
                                <button class="platform-btn">
                                    <span class="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>資產名稱<span class="required">*</span></label>
                            <input type="text" v-model="form.name" placeholder="為您的資產命名，例如：小明的私人 IG" />
                        </div>
                        <div class="form-group">
                            <label>帳號<span class="required">*</span></label>
                            <input type="text" v-model="form.account" placeholder="請輸入此資產的帳號，例如：Email、帳號名稱" />
                        </div>
                        <div class="form-group">
                            <label>密碼<span class="required">*</span></label>
                            <input type="password" v-model="form.password" placeholder="請輸入文字資訊" />
                        </div>
                    </div>

                    <!-- 告訴你信賴的人如何處理 -->
                    <div class="form-section">
                        <h4>告訴你信賴的人如何處理</h4>
                        <div class="form-group">
                            <label>從聯絡人中指定繼承人</label>
                            <div class="contact-selector">
                                <select v-model="form.heir">
                                    <option value="">請選擇指定繼承人</option>
                                </select>
                                <button class="add-contact">新增聯絡人</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>您想如何處理這筆資產</label>
                            <select v-model="form.handleMethod">
                                <option value="">請選擇處理方式</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>補充說明<span class="required">*</span></label>
                            <textarea v-model="form.description" placeholder="有甚麼要補充說明的嗎？" rows="4"></textarea>
                            <div class="word-count">{{ form.description.length }} / 100</div>
                        </div>
                    </div>

                    <!-- 檔案上傳 -->
                    <div class="form-section">
                        <h4>檔案上傳</h4>
                        <div class="upload-area">
                            <span class="material-symbols-outlined">upload</span>
                            <p>點擊或是拖動檔案到此區塊進行上傳</p>
                            <span class="upload-hint">支援單一檔案批量上傳，檔案總大小須在 2MB。</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="side-panel__footer">
                <div v-if="currentStep === 2" class="left-action">
                    <button class="btn-delete">刪除</button>
                </div>
                <div class="right-actions">
                    <button v-if="currentStep === 2" class="btn-cancel" @click="currentStep = 1">上一步</button>
                    <button class="btn-cancel" @click="closePanel">取消</button>
                    <button class="btn-next" :disabled="currentStep === 1 && !selectedType" @click="handleStep">
                        {{ currentStep === 1 ? '下一步' : '儲存' }}
                    </button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    name: 'AddAssetPanel',
    props: {
        modelValue: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            currentStep: 1,
            selectedType: null,
            form: {
                name: '',
                account: '',
                password: '',
                heir: '',
                handleMethod: '',
                description: ''
            },
            assetTypes: [
                { id: 'social', name: '社交平台', icon: '/onBoarding/step4-icon1.svg' },
                { id: 'cloud', name: '雲端空間', icon: '/onBoarding/step4-icon2.svg' },
                { id: 'bank', name: '銀行帳戶', icon: '/onBoarding/step4-icon3.svg' },
                { id: 'email', name: '電子郵件', icon: '/onBoarding/step4-icon5.svg' },
                { id: 'crypto', name: '加密貨幣', icon: '/onBoarding/step4-icon6.svg' },
                { id: 'subscription', name: '訂閱服務', icon: '/onBoarding/step4-icon4.svg' },
                { id: 'other', name: '其他資產', icon: '/onBoarding/step4-icon7.svg' },
            ]
        }
    },
    emits: ['update:modelValue'],
    methods: {
        closePanel() {
            this.$emit('update:modelValue', false)
            this.resetForm()
        },
        handleStep() {
            if (this.currentStep === 1) {
                this.currentStep = 2
            } else {
                // 處理表單提交
                console.log('Form submitted:', this.form)
                this.closePanel()
            }
        },
        resetForm() {
            this.currentStep = 1
            this.selectedType = null
            this.form = {
                name: '',
                account: '',
                password: '',
                heir: '',
                handleMethod: '',
                description: ''
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.side-panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}

.side-panel {
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 100%;
    max-width: 560px;
    background: var(--white);
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
    z-index: 100000;
    transition: right 0.3s ease;
    display: flex;
    flex-direction: column;

    &.show {
        right: 0;
    }

    &__header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--natural-85);
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-weight: var(--b);
        }

        .close-button {
            width: 2rem;
            height: 2rem;
            border-radius: 4px;
            border: none;
            background: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background-color: var(--natural-95);
            }
        }
    }

    &__content {
        flex: 1;
        overflow-y: auto;
        padding: 1.5rem;
    }

    &__footer {
        padding: 1rem 1.5rem;
        border-top: 1px solid var(--natural-85);
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;

        button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.25rem;
            font-weight: var(--m);
            cursor: pointer;
            border: none;

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }

        .btn-cancel {
            background-color: var(--natural-95);
            color: var(--natural-30);
        }

        .btn-next {
            background-color: var(--blue-48);
            color: var(--white);
        }
    }
}

.side-panel__footer {
    .left-action {
        flex: 1;
    }

    .right-actions {
        display: flex;
        gap: 0.5rem;
    }
}

.form-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.asset-types {
    margin-top: 1rem;
}

.asset-type-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.asset-type-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    border: 1px solid var(--natural-85);
    border-radius: 0.5rem;
    background: none;
    cursor: pointer;
    transition: all 0.3s ease;

    img {
        width: 3rem;
        height: 3rem;
        margin-bottom: 0.5rem;
    }

    span {
        color: var(--natural-30);
    }

    &:hover {
        background-color: var(--blue-95);
        border-color: var(--blue-48);
    }

    &.active {
        background-color: var(--blue-95);
        border-color: var(--blue-48);

        span {
            color: var(--blue-48);
            font-weight: var(--b);
        }
    }
}

.form-section {
    h4 {
        margin-bottom: 1rem;
        font-weight: var(--b);
    }
}

/* 表單相關樣式 */
.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--natural-30);
        font-size: var(--sm);

        .required {
            color: var(--red-50);
            margin-left: 0.25rem;
        }
    }

    input,
    select,
    textarea {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--natural-85);
        border-radius: 0.5rem;
        font-size: var(--sm);
        color: var(--natural-30);
        background-color: var(--white);

        &::placeholder {
            color: var(--natural-50);
        }

        &:focus {
            outline: none;
            border-color: var(--blue-48);
        }
    }

    textarea {
        resize: vertical;
        min-height: 100px;
    }
}

/* 平台選擇器 */
.platform-selector {
    display: flex;
    gap: 0.5rem;

    .platform-btn {
        padding: 0.5rem 1rem;
        border: 1px solid var(--natural-85);
        border-radius: 0.5rem;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.3s ease;

        img {
            width: 1.25rem;
            height: 1.25rem;
        }

        &.active {
            border-color: var(--blue-48);
            background-color: var(--blue-95);
            color: var(--blue-48);
        }

        &:hover:not(.active) {
            background-color: var(--natural-95);
        }
    }
}

/* 聯絡人選擇器 */
.contact-selector {
    display: flex;
    gap: 0.5rem;

    select {
        flex: 1;
    }

    .add-contact {
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 0.5rem;
        background-color: var(--blue-95);
        color: var(--blue-48);
        cursor: pointer;
        white-space: nowrap;
        font-size: var(--sm);
        transition: all 0.3s ease;

        &:hover {
            background-color: var(--blue-90);
        }
    }
}

/* 檔案上傳區域 */
.upload-area {
    padding: 2rem;
    border: 2px dashed var(--natural-85);
    border-radius: 0.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: var(--blue-48);
        background-color: var(--blue-98);
    }

    .material-symbols-outlined {
        font-size: 2rem;
        color: var(--natural-50);
    }

    p {
        margin: 0.5rem 0;
        color: var(--natural-30);
    }

    .upload-hint {
        display: block;
        font-size: var(--xs);
        color: var(--natural-50);
    }
}

/* 字數計數器 */
.word-count {
    text-align: right;
    font-size: var(--xs);
    color: var(--natural-50);
    margin-top: 0.25rem;
}

/* 段落標題 */
.form-section {
    &:not(:last-child) {
        margin-bottom: 2rem;
    }

    h4 {
        font-size: var(--md);
        font-weight: var(--b);
        margin-bottom: 1rem;
        color: var(--natural-15);
    }
}

/* 底部按鈕樣式 */
.side-panel__footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--natural-85);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-action {
        .btn-delete {
            padding: 0.5rem 1rem;
            background: none;
            border: none;
            color: var(--red-50);
            cursor: pointer;
            font-size: var(--sm);

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .right-actions {
        display: flex;
        gap: 0.5rem;

        button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.25rem;
            font-weight: var(--m);
            cursor: pointer;
            border: none;
            font-size: var(--sm);
            transition: all 0.3s ease;

            &:hover {
                opacity: 0.9;
            }

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }

        .btn-cancel {
            background-color: var(--natural-95);
            color: var(--natural-30);
        }

        .btn-next {
            background-color: var(--blue-48);
            color: var(--white);
        }
    }
}
</style>
