<template>
  <div id="profile">
    <div class="side-menu">
      <router-link to="/profile" class="logo">
        <img src="/src/assets/logo.svg" alt="數位人生" />
      </router-link>
      <nav>
        <span class="subtitle">產品服務</span>
        <router-link v-for="item in menuItems.products" :key="item.name" :to="{ name: item.route }" class="nav-item"
          :class="{ 'active': $route.name === item.route }">
          <span class="material-symbols-outlined">{{ item.icon }}</span>
          {{ item.text }}
        </router-link>
      </nav>
      <nav>
        <span class="subtitle">會員服務</span>
        <router-link v-for="item in menuItems.member" :key="item.name" :to="item.route ? { name: item.route } : ''"
          class="nav-item" :class="{ 'active': $route.name === item.route }"
          @click="item.action ? item.action() : null">
          <span class="material-symbols-outlined">{{ item.icon }}</span>
          {{ item.text }}
        </router-link>
      </nav>
    </div>
    <div class="wrap">
      <profileHeader />
      <div class="wrap__main">
        <router-view />
      </div>
      
    </div>

    <!-- 登出確認對話框 -->
    <div v-if="showLogoutDialog" class="dialog-overlay" @click="closeLogoutDialog">
      <div class="dialog-content" @click.stop>
        <h3>確定要登出嗎？</h3>
        <div class="dialog-buttons">
          <button class="cancel" @click="closeLogoutDialog">取消</button>
          <button class="confirm" @click="confirmLogout">確定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import profileHeader from './profile-header.vue';

export default {
  name: 'profile',
  components: {
    profileHeader
  },
  setup() {
    const router = useRouter();
    const showLogoutDialog = ref(false);

    const menuItems = {
      products: [
        { name: 'dashboard', route: 'dashboard', icon: 'dashboard', text: '儀表板' },
        { name: 'digitalAssets', route: 'digitalAssets', icon: 'account_balance', text: '數位資產庫' },
        { name: 'contacts', route: '', icon: 'group', text: '我的聯絡人' },
        { name: 'will', route: '', icon: 'sticky_note_2', text: '遺囑與遺產計畫' },
        { name: 'story', route: '', icon: 'import_contacts', text: '生活故事' },
        { name: 'guide', route: '', icon: 'pending_actions', text: '生前計劃指南' },
      ],
      member: [
        { name: 'profile', route: '', icon: 'person', text: '個人檔案' },
        { name: 'settings', route: '', icon: 'settings', text: '相關設定' },
        {
          name: 'logout',
          icon: 'logout',
          text: '登出頁面',
          action: () => showLogoutDialog.value = true
        },
      ]
    };

    const closeLogoutDialog = () => {
      showLogoutDialog.value = false;
    };

    const confirmLogout = () => {
      // 處理登出邏輯
      router.push('/login');
      closeLogoutDialog();
    };

    return {
      menuItems,
      showLogoutDialog,
      closeLogoutDialog,
      confirmLogout
    };
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
  min-width: 240px;
  max-width: 280px;
  width: 20%;
  background-color: var(--white);
  @include flex($d: column, $j: start, $a: stretch, $g: 0);
  border-right: solid 1px var(--natural-85);

  .logo {
    padding: 1rem 1rem;

    img {
      width: 120px;
    }
  }

  nav {
    @include flex($d: column, $j: start, $a: stretch, $g: 0.5rem);
    padding: 1rem;

    &:nth-last-child(1) {
      padding-top: 0;
    }

    .subtitle {
      font-size: var(--sm);
      color: var(--natural-30);
    }

    .nav-item {
      padding: 0.5rem 1rem;
      @include flex($j: start, $g: 0.5rem);
      font-weight: var(--m);
      color: var(--natural-30);
      text-decoration: none;
      transition: all 0.3s ease;
      border-radius: 1000px;

      &:hover,
      &.active {
        background-color: var(--blue-90);
      }
    }
  }
}

.wrap {
  width: 100%;
  background-color: var(--natural-95);
  &__main {
    padding: 1.5rem;
  }
}

// 添加對話框相關樣式
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
  z-index: 1000;
}

.dialog-content {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  min-width: 300px;
  text-align: center;

  h3 {
    margin-bottom: 1.5rem;
  }

  .dialog-buttons {
    @include flex($g: 1rem);

    button {
      padding: 0.5rem 1.5rem;
      border-radius: 0.25rem;
      font-weight: var(--m);
      cursor: pointer;
      transition: all 0.3s ease;

      &.cancel {
        color: var(--natural-30);
        background-color: var(--natural-95);
      }

      &.confirm {
        color: var(--white);
        background-color: var(--blue-48);
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
