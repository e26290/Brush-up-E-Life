<template>
  <div id="app">
    <Transition name="fade">
      <loading v-if="isLoading" :class="{ 'disappear': isDisappearing }" />
    </Transition>
    <router-view v-if="!isLoading" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import loading from './components/loading.vue';

const isLoading = ref(false);
const isDisappearing = ref(false);

onMounted(() => {
  // 檢查是否是第一次訪問
  const hasVisited = localStorage.getItem('hasVisited');

  if (!hasVisited) {
    // 第一次訪問
    isLoading.value = true;

    // 模擬加載過程
    setTimeout(() => {
      isDisappearing.value = true;
      setTimeout(() => {
        isLoading.value = false;
        // 設置訪問標記
        localStorage.setItem('hasVisited', 'true');
      }, 500);
    }, 3000);
  }
});
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
