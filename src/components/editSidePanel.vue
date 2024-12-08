<template>
    <!-- 使用 teleport 將遮罩層和側邊面板移到 body 元素下 -->
    <teleport to="body">
        <div class="side-panel-overlay" v-if="modelValue" @click="closePanel"></div>
        <div class="side-panel" :class="{ 'show': modelValue }">
            <div class="side-panel__header">
                <h3>編輯社交平台帳戶</h3>
                <button class="close-button" @click="closePanel">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <div class="side-panel__content">
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
                        <input type="text" v-model="form.name" placeholder="個人帳號" />
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

                <div class="form-section">
                    <h4>檔案上傳</h4>
                    <div class="upload-area">
                        <span class="material-symbols-outlined">upload</span>
                        <p>點擊或是拖動檔案到此區塊進行上傳</p>
                        <span class="upload-hint">支援單一檔案批量上傳，檔案總大小須在 2MB。</span>
                    </div>
                </div>
            </div>

            <div class="side-panel__footer">
                <button class="btn-delete">刪除</button>
                <div class="action-buttons">
                    <button class="btn-cancel" @click="closePanel">取消</button>
                    <button class="btn-save">儲存</button>
                </div>
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
            form: {
                name: '',
                account: '',
                password: '',
                heir: '',
                handleMethod: '',
                description: ''
            }
        }
    },
    watch: {
        currentItem: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    // 當有新的項目時，更新表單數據
                    this.form.name = newVal.name || '';
                    // 添加其他需要的字段
                }
            }
        }
    },
    methods: {
        closePanel() {
            this.$emit('update:modelValue', false)
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
    margin-bottom: 1rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--natural-30);

        .required {
            color: var(--red-40);
        }
    }

    input,
    select,
    textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--natural-85);
        border-radius: 0.5rem;
        font-size: var(--sm);

        &:focus {
            outline: none;
            border-color: var(--blue-48);
        }
    }
}

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

        img {
            width: 1.25rem;
            height: 1.25rem;
        }

        &.active {
            border-color: var(--blue-48);
            background-color: var(--blue-95);
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

    span {
        color: var(--natural-50);
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
}
</style>