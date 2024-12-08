<template>
    <teleport to="body">
        <div class="side-panel-overlay" v-if="modelValue" @click="closePanel"></div>
        <div class="side-panel" :class="{ 'show': modelValue }">
            <div class="side-panel__header">
                <h3>新增數位資產</h3>
                <button class="close-button" @click="closePanel">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <div class="side-panel__content">
                <div class="form-section">
                    <h4>選擇資產類型</h4>
                    <div class="asset-types">
                        <div class="asset-type-grid">
                            <button 
                                v-for="type in assetTypes" 
                                :key="type.id"
                                class="asset-type-btn"
                                :class="{ 'active': selectedType === type.id }"
                                @click="selectedType = type.id"
                            >
                                <img :src="type.icon" :alt="type.name">
                                <span>{{ type.name }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="side-panel__footer">
                <button class="btn-cancel" @click="closePanel">取消</button>
                <button class="btn-next" :disabled="!selectedType" @click="nextStep">下一步</button>
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
            selectedType: null,
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
            this.selectedType = null
        },
        nextStep() {
            if (this.selectedType) {
                // 處理下一步邏輯
                console.log('Selected type:', this.selectedType)
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
</style>
