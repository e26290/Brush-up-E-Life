<template>
    <!-- 使用 teleport 將遮罩層和側邊面板移到 body 元素下 -->
    <teleport to="body">
        <div class="side-panel-overlay" v-if="modelValue" @click="closePanel"></div>
        <div class="side-panel" :class="{ 'show': modelValue }">
            <div class="side-panel__header">
                <h3>編輯社交平台帳戶</h3>
                <button class="close-button" @click="closePanel">
                    <X class="lucide-icon" />
                </button>
            </div>
            <div class="side-panel__content">
                <div class="form-section">
                    <h4>帳戶資訊</h4>
                    <!-- 平台類型 -->
                    <div class="form-group">
                        <label>平台類型<span class="required">*</span></label>
                        <div class="platform-selector">
                            <!-- 未選擇平台時顯示 -->
                            <button v-if="!form.platform" class="platform-select-btn" @click="showPlatformMenu = true">
                                選擇平台
                            </button>

                            <!-- 已選擇平台時顯示 -->
                            <div v-else class="selected-platform">
                                <div class="platform-info">
                                    <img :src="getSelectedPlatform.icon" :alt="getSelectedPlatform.name" />
                                    <span>{{ getSelectedPlatform.name }}</span>
                                </div>
                                <button class="reselect-btn" @click="showPlatformMenu = true">
                                    <Edit2 class="lucide-icon" />
                                </button>
                            </div>

                            <!-- 平台選單 -->
                            <div v-if="showPlatformMenu" class="platform-menu">
                                <div class="platform-menu__header">
                                    <h5>選擇平台</h5>
                                    <button class="close-btn" @click="showPlatformMenu = false">
                                        <X class="lucide-icon" />
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

                <div class="form-section">
                    <h4>檔案上傳</h4>
                    <div class="upload-area">
                        <Upload class="lucide-icon" />
                        <p>點擊或是拖動檔案到此區塊進行上傳</p>
                        <span class="upload-hint">支援單一檔案批量上傳，檔案總大小須在 2MB。</span>
                    </div>
                </div>
            </div>

            <div class="side-panel__footer">
                <button class="btn-delete">刪除</button>
                <div class="action-buttons">
                    <button class="btn-cancel" @click="closePanel">取消</button>
                    <button class="btn-save" @click="handleSave">儲存</button>
                </div>
            </div>
        </div>

        <!-- 完成提示視窗 -->
        <div class="dialog-overlay" v-if="showSuccessDialog" @click="handleSuccess">
            <div class="dialog-content" @click.stop>
                <CheckCircle class="lucide-icon success-icon" />
                <h4>編輯成功！</h4>
                <p>您已成功編輯數位資產</p>
                <button class="btn-confirm" @click="handleSuccess">確定</button>
            </div>
        </div>
    </teleport>

</template>

<script>
export default {
    name: 'EditSidePanel',
    props: {
        modelValue: {
            type: Boolean,
            required: true
        },
        currentItem: {
            type: Object,
            default: null
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            showPlatformMenu: false,
            showErrors: false,
            showSuccessDialog: false,

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
            }
        }
    },
    computed: {
        isFormValid() {
            return (
                this.form.platform &&
                this.form.name &&
                this.form.account &&
                this.form.password &&
                this.form.description &&
                this.form.description.length <= 100
            )
        },
        getSelectedPlatform() {
            return this.platforms.find(p => p.id === this.form.platform) || {}
        }
    },
    watch: {
        currentItem: {
            immediate: true,
            deep: true,  // 添加 deep 監聽
            handler(newVal) {
                if (newVal) {
                    // 確定平台類型
                    const platformId = newVal.platform || newVal.type?.id || '';

                    // 更新表單數據
                    this.form = {
                        platform: platformId,  // 使用確定的平台 ID
                        name: newVal.name || '',
                        account: newVal.account || '',
                        password: newVal.password || '',
                        heir: newVal.owner || '',
                        handleMethod: newVal.handleMethod || '',
                        description: newVal.description || ''
                    };

                    console.log('當前編輯項目：', newVal);  // 用於調試
                    console.log('更新後的表單：', this.form);  // 用於調試
                }
            }
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
        // 修改儲存按鈕的處理方法
        handleSave() {
            if (this.isFormValid) {
                this.showSuccessDialog = true
            } else {
                this.showErrors = true
            }
        },

        // 添加成功提示的處理方法
        handleSuccess() {
            this.showSuccessDialog = false
            this.closePanel()
        },

        resetForm() {
            this.showPlatformMenu = false
            this.showErrors = false
            this.showSuccessDialog = false  // 重置成功提示狀態
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

            .lucide-icon {
                width: var(--ism);
                stroke: var(--natural-30);
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
        justify-content: space-between;
        align-items: center;

        .action-buttons {
            display: flex;
            gap: 0.5rem;
        }

        button {
            padding: 0.5rem 1.5rem;
            border-radius: 0.25rem;
            font-weight: var(--m);
            cursor: pointer;
            border: none;
        }

        .btn-delete {
            background: none;
            color: var(--red-40);
        }

        .btn-cancel {
            background-color: var(--natural-95);
            color: var(--natural-30);
        }

        .btn-save {
            background-color: var(--blue-48);
            color: var(--white);
        }
    }
}

.form-section {
    margin-bottom: 2rem;

    h4 {
        margin-bottom: 1rem;
        font-weight: var(--b);
    }
}

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

        img {
            width: 1.25rem;
            height: 1.25rem;
        }

        &.active {
            border-color: var(--blue-48);
            background-color: var(--blue-95);
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

            .lucide-icon {
                width: var(--ism);
                stroke: var(--natural-30);
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

                .lucide-icon {
                    width: var(--ism);
                    stroke: var(--natural-30);
                }

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
    }
}

.upload-area {
    padding: 2rem;
    border: 2px dashed var(--natural-85);
    border-radius: 0.5rem;
    text-align: center;
    cursor: pointer;

    .lucide-icon {
        width: var(--imd);
        stroke: var(--natural-50);
    }

    p {
        margin: 0.5rem 0;
        color: var(--natural-30);
    }

    .upload-hint {
        font-size: var(--xs);
    }
}

.word-count {
    text-align: right;
    font-size: var(--xs);
    color: var(--natural-50);
    margin-top: 0.25rem;

    &.error {
        color: var(--red-40);
    }
}

/* 錯誤提示樣式 */
.error-message {
    color: var(--red-40);
    font-size: var(--xs);
    margin-top: 0.25rem;
}

/* 成功提示視窗樣式 */
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
/* 全域 Lucide 圖標樣式 */
.lucide-icon {
    width: var(--ism);
    stroke-width: 2;
    vertical-align: middle;
}
</style>