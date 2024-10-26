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

const isLoading = ref(true);
const isDisappearing = ref(false);

onMounted(() => {
  // 模擬加載過程
  setTimeout(() => {
    isDisappearing.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 500); // 這裡的 500ms 應該與 CSS 過渡時間一致
  }, 3000); // 秒後開始消失動畫
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
