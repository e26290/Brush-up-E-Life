<template>
  <div id="profile">
    <div class="side-menu">
      <router-link to="/profile" class="logo">
        <img src="/src/assets/logo.svg" alt="數位人生" />
      </router-link>
      <nav>
        <span class="subtitle">產品服務</span>
        <router-link class="nav-item" :to="{ name: 'dashboard' }">
          <span class="material-symbols-outlined">dashboard</span>儀表板
        </router-link>
        <router-link class="nav-item" :to="{ name: 'digitalAssets' }">
          <span class="material-symbols-outlined">account_balance</span>數位資產庫
        </router-link>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">group</span>我的聯絡人
        </router-link>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">sticky_note_2</span>遺囑與遺產計畫
        </router-link>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">import_contacts</span>生活故事
        </router-link>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">pending_actions</span>生前計劃指南
        </router-link>
        
      </nav>
      <nav>
        <span class="subtitle">會員服務</span>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">person</span>個人檔案
        </router-link>
        <router-link class="nav-item">
          <span class="material-symbols-outlined">settings</span>相關設定
        </router-link>
        <!-- TODO 點擊後先跳出視窗，確認才登出 -->
        <router-link class="nav-item" to="/login">
          <span class="material-symbols-outlined">logout</span>登出頁面
        </router-link>
      </nav>
    </div>
    <div class="warp">
      <header></header>
      <router-view />
    </div>
  </div>


</template>

<script>
export default {
  name: 'profile',
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page }).catch((err) => {
        console.error('Navigation error:', err);
      });
    }
  }
};
</script>
<style scoped lang="scss">
@import "src/css/_mixins.scss";

#profile {
  width: 100%;
  height: 100dvh;
  @include flex($a: stretch, $g: 0);
}

.side-menu {
  width: 240px;
  background-color: var(--white);
  @include flex($d: column, $j: start, $a: stretch, $g: 0);

  .logo {
    padding: 1rem 1rem;

    img {
      width: 120px;
    }
  }

  nav {
    @include flex($d: column, $j: start, $a: stretch, $g: 0);
    padding: 1rem;
    &:nth-last-child(1) {
      padding-top: 0;
    }

    .subtitle {
      font-size: var(--sm);
      color: var(--natural-30);
      margin-bottom: 0.75rem;
    }

    .nav-item {
      padding: 0.5rem 0.75rem;
      @include flex($j: start, $g: 0.5rem);
      font-weight: var(--m);
    }
  }
}

.warp {
  width: 100%;
  background-color: var(--natural-95);
}
</style>
