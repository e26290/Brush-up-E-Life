<template>
  <profile />
  <!-- 蓋版步驟 -->
  <div class="warp">
    <div class="modal-view">
      <WelcomeView v-if="currentPage === 'welcome'" @start="startOnboarding" />
      <template v-else>
        <Step1 v-if="currentStep === 1" @prev="backToWelcome" @next="nextStep" />
        <Step2 v-else-if="currentStep === 2" @prev="prevStep" @next="nextStep" v-model="formData.interval" />
        <Step3 v-else-if="currentStep === 3" @prev="prevStep" @next="handleStep3Next" v-model="formData.contact" />
        <Step4 v-else-if="currentStep === 4" @prev="prevStep" @next="handleStep4Next" />
        <Complete v-else @complete="handleComplete" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // 添加這行
import profile from './profile.vue'
import WelcomeView from './onboarding-step/WelcomeView.vue'
import Step1 from './onboarding-step/Step1.vue'
import Step2 from './onboarding-step/Step2.vue'
import Step3 from './onboarding-step/Step3.vue'
import Step4 from './onboarding-step/Step4.vue'
import Complete from './onboarding-step/Complete.vue'

const router = useRouter()
const currentPage = ref('welcome')
const currentStep = ref(1)
const totalSteps = 5

const formData = ref({
  interval: 30,
  contact: {
    name: '',
    email: '',
    phone: ''
  },
  asset: null
})

const startOnboarding = () => {
  currentPage.value = 'steps'
  currentStep.value = 1
}

const backToWelcome = () => {
  currentPage.value = 'welcome'
  currentStep.value = 1
}

const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  } else {
    backToWelcome()
  }
}

const handleStep3Next = (contactData) => {
  formData.value.contact = contactData
  nextStep()
}

const handleStep4Next = (assetData) => {
  formData.value.asset = assetData
  nextStep()
}

const handleComplete = async () => {
  try {
    // 這裡可以添加數據保存的邏輯
    // await saveData(formData.value)

    // 導航到 profile 頁面
    await router.push('/profile')
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>


<style scoped lang="scss">
@import "src/css/_mixins.scss";

.warp {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(#000, 0.5);
  z-index: 999;
  display: grid;
  place-items: center;
}

.modal-view {
  width: 50%;
  max-width: 700px;
  height: 60%;
  max-height: 600px;
  @include dashboard_card;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
