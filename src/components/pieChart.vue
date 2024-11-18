<template>
    <div class="chart-container">
        <div class="chart-wrapper">
            <canvas ref="chartCanvas"></canvas>
            <div class="center-text">
                <div class="total-number">{{ total }}</div>
                <div class="total-label">資產總數</div>
            </div>
        </div>
        <div class="legend">
            <div v-for="(item, index) in data" :key="index" class="legend-item">
                <div class="color-box" :style="{ backgroundColor: item.color }"></div>
                <span class="label">{{ item.label }}</span>
                <span class="value">{{ item.value }} 筆</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
    data: {
        type: Array,
        default: () => [
            { label: '社交平台', value: 999, color: '#FFB7B7' },
            { label: '銀行帳戶', value: 999, color: '#FFE4B5' },
            { label: '電子郵件', value: 999, color: '#98FB98' },
            { label: '訂閱平台', value: 999, color: '#87CEEB' },
            { label: '雲端空間', value: 999, color: '#90EE90' },
            { label: '加密貨幣', value: 999, color: '#DDA0DD' },
            { label: '其他類別', value: 999, color: '#D3D3D3' }
        ]
    }
})

const chartCanvas = ref(null)
const total = ref(0)

onMounted(() => {
    total.value = props.data.reduce((sum, item) => sum + item.value, 0)

    const ctx = chartCanvas.value.getContext('2d')
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: props.data.map(item => item.label),
            datasets: [{
                data: props.data.map(item => item.value),
                backgroundColor: props.data.map(item => item.color),
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            cutout: '90%',
            layout: {
                padding: 20
            },
            // 關閉所有動畫
            animation: {
                duration: 0
            },
            // 關閉 hover 時的動畫
            hover: {
                animationDuration: 0
            },
            // 關閉數據更新時的動畫
            responsiveAnimationDuration: 0
        }
    })
})
</script>

<style scoped>
.chart-container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.chart-wrapper {
    position: relative;
    height: 200px;
}

.center-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.total-number {
    font-size: 2em;
    font-weight: bold;
}

.total-label {
    font-size: 1em;
    color: #666;
}

.legend {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* 固定兩欄 */
    gap: 0 24px;
    /* 增加間距 */
    padding: 0 24px;
    max-width: 600px;
    /* 確保寬度與圖表一致 */
    margin: 0 auto;
}

.legend-item {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    /* 增加內邊距 */
}

.color-box {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 8px;
    flex-shrink: 0;
    /* 防止顏色方塊被壓縮 */
}

.label {
    flex: 1;
    white-space: nowrap;
    /* 防止文字換行 */
    overflow: hidden;
    text-overflow: ellipsis;
    /* 文字過長時顯示省略號 */
}

.value {
    margin-left: 8px;
    color: #666;
    flex-shrink: 0;
    /* 防止數值被壓縮 */
}
</style>