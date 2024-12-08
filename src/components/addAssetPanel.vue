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
                                <!-- 未選擇平台時顯示 -->
                                <button v-if="!form.platform" class="platform-select-btn"
                                    @click="showPlatformMenu = true">
                                    選擇平台
                                </button>

                                <!-- 已選擇平台時顯示 -->
                                <div v-else class="selected-platform">
                                    <div class="platform-info">
                                        <img :src="getSelectedPlatform.icon" :alt="getSelectedPlatform.name" />
                                        <span>{{ getSelectedPlatform.name }}</span>
                                    </div>
                                    <button class="reselect-btn" @click="showPlatformMenu = true">
                                        <span class="material-symbols-outlined">edit</span>
                                    </button>
                                </div>

                                <!-- 平台選單 -->
                                <div v-if="showPlatformMenu" class="platform-menu">
                                    <div class="platform-menu__header">
                                        <h5>選擇平台</h5>
                                        <button class="close-btn" @click="showPlatformMenu = false">
                                            <span class="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <div class="platform-menu__content">
                                        <button v-for="platform in platforms" :key="platform.id" class="platform-option"
                                            @click="selectPlatform(platform)">
                                            <img :src="platform.icon" :alt="platform.name" />
                                            <span>{{ platform.name }}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="error-message" v-if="showErrors && !form.platform">
                                請選擇平台類型
                            </div>
                        </div>

                        <div class="form-group">
                            <label>資產名稱<span class="required">*</span></label>
                            <input type="text" v-model="form.name" :class="{ 'error': showErrors && !form.name }"
                                placeholder="為您的資產命名，例如：小明的私人 IG" />
                            <div class="error-message" v-if="showErrors && !form.name">
                                請輸入資產名稱
                            </div>
                        </div>
                        <div class="form-group">
                            <label>帳號<span class="required">*</span></label>
                            <input type="text" v-model="form.account" :class="{ 'error': showErrors && !form.account }"
                                placeholder="請輸入此資產的帳號，例如：Email、帳號名稱" />
                            <div class="error-message" v-if="showErrors && !form.account">
                                請輸入帳號
                            </div>
                        </div>
                        <div class="form-group">
                            <label>密碼<span class="required">*</span></label>
                            <input type="password" v-model="form.password"
                                :class="{ 'error': showErrors && !form.password }" placeholder="請輸入文字資訊" />
                            <div class="error-message" v-if="showErrors && !form.password">
                                請輸入密碼
                            </div>
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
                            <textarea v-model="form.description" :class="{ 'error': showErrors && !form.description }"
                                placeholder="有甚麼要補充說明的嗎？" rows="4" maxlength="100"></textarea>
                            <div class="word-count" :class="{ 'error': form.description.length > 100 }">
                                {{ form.description.length }} / 100
                            </div>
                            <div class="error-message" v-if="showErrors && !form.description">
                                請輸入補充說明
                            </div>
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
                    <!-- TODO 目前還不確定刪除得用意先隱藏 -->
                    <!-- <button class="btn-delete">刪除</button> -->
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

        <!-- 添加完成提示彈窗 -->
        <div class="dialog-overlay" v-if="showSuccessDialog" @click="handleSuccess">
            <div class="dialog-content" @click.stop>
                <span class="material-symbols-outlined success-icon">check_circle</span>
                <h4>新增成功！</h4>
                <p>您已成功新增數位資產</p>
                <button class="btn-confirm" @click="handleSuccess">確定</button>
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
            showErrors: false,
            showSuccessDialog: false,
            showPlatformMenu: false,
            platforms: [
                {
                    id: 'facebook',
                    name: 'Facebook',
                    icon: '/dashboard/socialIcon/FB.svg'
                },
                {
                    id: 'instagram',
                    name: 'Instagram',
                    icon: '/dashboard/socialIcon/IG.svg'
                },
                {
                    id: 'line',
                    name: 'Line',
                    icon: '/dashboard/socialIcon/Line.svg'
                },
                {
                    id: 'twitter',
                    name: 'X',
                    icon: '/dashboard/socialIcon/X.svg'
                }
            ],
            form: {
                platform: '',
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
    computed: {
        getSelectedPlatform() {
            return this.platforms.find(p => p.id === this.form.platform) || {}
        },
        isFormValid() {
            return (
                this.form.platform &&
                this.form.name &&
                this.form.account &&
                this.form.password &&
                this.form.description &&
                this.form.description.length <= 100
            )
        }
    },
    methods: {
        selectPlatform(platform) {
            this.form.platform = platform.id
            this.showPlatformMenu = false
        },
        closePanel() {
            this.$emit('update:modelValue', false)
            this.resetForm()
        },
        handleStep() {
            if (this.currentStep === 1) {
                this.currentStep = 2
            } else {
                if (this.isFormValid) {
                    this.showSuccessDialog = true
                } else {
                    this.showErrors = true
                }
            }
        },

        handleSuccess() {
            this.showSuccessDialog = false
            this.closePanel()
        },

        resetForm() {
            this.currentStep = 1
            this.selectedType = null
            this.showErrors = false
            this.showPlatformMenu = false
            this.form = {
                platform: '',
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

.error-message {
    color: var(--red-40);
    font-size: var(--xs);
    margin-top: 0.25rem;
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
            color: var(--red-40);
            margin-left: 0.25rem;
        }
    }

    .word-count {
        &.error {
            color: var(--red-40);
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

        &.error {
            border-color: var(--red-40);
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
    position: relative;

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

    .platform-select-btn {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid var(--natural-85);
        border-radius: 0.5rem;
        background: var(--white);
        color: var(--natural-50);
        text-align: left;
        cursor: pointer;
        font-size: var(--sm);

        &:hover {
            background-color: var(--natural-95);
        }
    }

    .selected-platform {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        border: 1px solid var(--blue-48);
        border-radius: 0.5rem;
        background-color: var(--blue-95);

        .platform-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            img {
                width: 1.25rem;
                height: 1.25rem;
            }

            span {
                color: var(--blue-48);
                font-weight: var(--m);
            }
        }

        .reselect-btn {
            padding: 0.25rem;
            border: none;
            background: none;
            border-radius: 0.25rem;
            cursor: pointer;
            color: var(--natural-30);

            &:hover {
                background-color: var(--natural-90);
                color: var(--blue-48);
            }

            .material-symbols-outlined {
                font-size: 1.25rem;
            }
        }
    }

    .platform-menu {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        right: 0;
        background: var(--white);
        border-radius: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 10;

        &__header {
            padding: 1rem;
            border-bottom: 1px solid var(--natural-85);
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                font-weight: var(--b);
                color: var(--natural-15);
            }

            .close-btn {
                padding: 0.25rem;
                border: none;
                background: none;
                border-radius: 0.25rem;
                cursor: pointer;
                color: var(--natural-30);

                &:hover {
                    background-color: var(--natural-95);
                }
            }
        }

        &__content {
            padding: 0.5rem;
            max-height: 280px;
            overflow-y: auto;

            .platform-option {
                width: 100%;
                padding: 0.75rem 1rem;
                border: none;
                border-radius: 0.5rem;
                background: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 0.75rem;
                transition: all 0.3s ease;

                img {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                span {
                    color: var(--natural-30);
                }

                &:hover {
                    background-color: var(--blue-95);

                    span {
                        color: var(--blue-48);
                    }
                }
            }
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
            color: var(--red-40);
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

/* 成功提示彈窗樣式 */
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100001;
}

.dialog-content {
    background: var(--white);
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
    min-width: 320px;

    .success-icon {
        font-size: 3rem;
        color: var(--green-48);
        margin-bottom: 1rem;
    }

    h4 {
        font-weight: var(--b);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--natural-30);
        margin-bottom: 1.5rem;
    }

    .btn-confirm {
        padding: 0.5rem 2rem;
        background-color: var(--blue-48);
        color: var(--white);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: var(--m);
        transition: all 0.3s ease;

        &:hover {
            opacity: 0.9;
        }
    }
}
</style>
