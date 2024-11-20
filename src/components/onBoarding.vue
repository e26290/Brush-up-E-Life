<template>
  <profile />
  <!-- 蓋版步驟 -->
  <div class="warp">
    <div class="modal-view">

    </div>
  </div>
</template>

<script>
import profile from './profile.vue';

export default {
  name: 'onBoarding',
  components: {
    profile,
  },
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
}
</style>
