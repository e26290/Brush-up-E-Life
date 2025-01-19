<template>
  <div class="container-fluid">
    <!-- 內容上半部 -->
    <div class="content-top">
      <!-- 儀表板左 -->
      <div class="content-top-l">
        <div class="card dash">
          <h4>
            <div class="icon">
              <span class="material-symbols-outlined">account_balance</span>
            </div>
            數位資產庫
          </h4>
          <span>讓數位人生協助您，管理您的數位資產，無須煩惱，<br>只要照著我們的預設清單逐步填寫，既簡單又免費！</span>
          <button class="create" @click="showAddPanel = true">新增資產</button>
        </div>
        <guideMedia />
      </div>
      <!-- 儀表板右 -->
      <div class="content-top-r">
        <div class="card overView">
          <h4>數位資產概覽</h4>
          <!-- 圖表 -->
          <pieChart />
          <!-- 數據資料 -->
          <div class="dataSummary">
            <div class="dataSummary__item">
              <div class="dataSummary__title">進行中資產</div>
              <h3 class="dataSummary__num">1</h3>
            </div>
            <div class="dataSummary__item">
              <div class="dataSummary__title">未指定繼承人</div>
              <h3 class="dataSummary__num">1</h3>
            </div>
            <div class="dataSummary__item">
              <div class="dataSummary__title">未設定處理方式</div>
              <h3 class="dataSummary__num">1</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 內容下半部 -->
    <div class="content-bottom">
      <div class="card">
        <recentMedia />
      </div>
    </div>

    <!-- 新增資產面板 -->
    <addAssetPanel v-model="showAddPanel" />

  </div>

</template>

<script>
import guideMedia from "./guide-media.vue";
import recentMedia from "./recent-media.vue";
import pieChart from "./pieChart.vue";
import addAssetPanel from './addAssetPanel.vue';

export default {
  name: 'digitalAssets',
  components: {
    guideMedia,
    recentMedia,
    pieChart,
    addAssetPanel,
  },
  data() {
        return {
            showAddPanel: false,
        }
    }
}
</script>
<style scoped lang="scss">
@import "src/css/_mixins.scss";

.container-fluid {
  @include flex($j: flex-start, $a: stretch, $d: column);
  width: 100%;
  height: 100%;
  max-height: 1000px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @include breakpoint(1023px) {
    flex-direction: column;
  }
}

.content-top {
  @include flex($j: space-between, $a: stretch);
  width: 100%;

  .content-top-l {
    justify-content: space-between;
    width: 65%;
  }

  .content-top-r {
    width: 35%;
    min-width: 400px
  }

  .content-top-l,
  .content-top-r {
    @include flex($d: column, $a: stretch, $j: start);
    flex-wrap: nowrap;

    @include breakpoint(1023px) {
      width: 100%;
    }
  }
}

.card {
  @include dashboard_card;
  justify-content: start;
  width: 100%;

  h3,
  h5 {
    font-weight: var(--b);
  }
}

.dash {
  background-image: url(/src/assets/dashboard/digitalAssetBg.png);
  background-size: cover;
  color: var(--white);

  h4 {
    @include flex($g: 0.75rem);
    font-weight: var(--b);
  }

  .icon {
    background-color: var(--white);
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;

    span {
      color: var(--blue-30);
    }
  }

  span {
    color: var(--white);
  }
}

.create {
  @include button(var(--blue-30), var(--white));
}

.overView {
  @include flex($d: column, $a: stretch, $j: start);
  height: 100%;

  .dataSummary {
    @include flex($g: 0.75rem);
    flex-wrap: wrap;
    background-color: var(--natural-95);
    border-radius: 1.5rem;

    &__item {
      padding: 1rem;
      width: 90%;
      @include flex($d: column, $g: 0);
      flex-direction: column-reverse;
    }

    &__item:nth-child(-n+1) {
      border-bottom: 1px solid var(--natural-85);
    }

    &__item:nth-child(n+2) {
      width: 40%;
    }

    &__title {
      font-size: var(--sm);
    }
  }
}
</style>
