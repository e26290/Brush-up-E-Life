<template>
  <div class="loading-overlay" v-show="isLoading" :class="{ 'disappear': isDisappearing }">
    <div class="loading-content">
      <div class="loader"></div>
    </div>
  </div>
  <div id="profile" v-show="!isLoading">
    <!-- 遮罩層 -->
    <div v-show="!isCollapsed && isMobileView" class="menu-overlay" @click="closeMenu"></div>
    <div class="side-menu" :class="{ 'collapsed': isCollapsed }">
      <router-link to="/profile" class="logo">
        <img :src="`/logo${isCollapsed ? '-collapsed' : ''}.svg`" alt="數位人生" />
      </router-link>
      <nav>
        <span class="subtitle" v-show="!isCollapsed">產品服務</span><router-link v-for="item in menuItems.products"
          :key="item.name" :to="{ name: item.route }" class="nav-item" :class="{ 'active': $route.name === item.route }"
          :title="isCollapsed ? item.text : ''" @click="handleMenuItemClick">
          <span class="material-symbols-outlined">{{ item.icon }}</span>
          <span class="nav-text" v-show="!isCollapsed">{{ item.text }}</span>
        </router-link>
      </nav>
      <nav>
        <span class="subtitle" v-show="!isCollapsed">會員服務</span>
        <router-link v-for="item in menuItems.member" :key="item.name" :to="item.route ? { name: item.route } : ''"
          class="nav-item" :class="{ 'active': $route.name === item.route }" :title="isCollapsed ? item.text : ''"
          @click="item.action ? item.action() : null">
          <span class="material-symbols-outlined">{{ item.icon }}</span>
          <span class="nav-text" v-show="!isCollapsed">{{ item.text }}</span>
        </router-link>
      </nav>
      <div class="detectAccident" v-show="!isCollapsed">
        <h5>
          <div class="completeness">75<b>%</b></div>
          意外確認機制
        </h5>
        <span>目前尚缺 1 步驟</span>
        <!--  -->
        <router-link to="">
          <div class="text-link">
            <span>查看設定</span>
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </div>
        </router-link>
      </div>
    </div>
    <div class="wrap">
      <profileHeader v-model:isCollapsed="isCollapsed" />
      <div class="wrap__main">
        <router-view />
      </div>
      <div class="helpbtn">
        <span class="material-symbols-outlined">question_mark</span>
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
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import profileHeader from './profile-header.vue';

export default {
  name: 'profile',
  components: {
    profileHeader
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const showLogoutDialog = ref(false);
    const isLoading = ref(true);
    const isDisappearing = ref(false);
    const isCollapsed = ref(false);

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
        { name: 'settings', route: '', icon: 'settings', text: '會員設定' },
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

    const showOverlay = ref(false);
    const isMobileView = ref(false);
    // 監聽視窗寬度變化
    const checkWindowWidth = () => {
      isMobileView.value = window.innerWidth <= 1200;
      if (!isMobileView.value) {
        showOverlay.value = false;
        isCollapsed.value = false;
      } else {
        isCollapsed.value = true;
        showOverlay.value = false;
      }
    };
    // 修改關閉選單邏輯
    const closeMenu = () => {
      if (isMobileView.value) {
        isCollapsed.value = true;
        showOverlay.value = false;
      }
    };
    // 修改選單切換邏輯
    const toggleMenu = () => {
      if (isMobileView.value) {
        isCollapsed.value = !isCollapsed.value;
        showOverlay.value = !isCollapsed.value;
      } else {
        isCollapsed.value = !isCollapsed.value;
      }
    };
    // 處理選單項目點擊
    const handleMenuItemClick = () => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    };

    // 監聽路由變化
    watch(() => route.fullPath, () => {
      if (window.innerWidth <= 1200) {
        closeMenu();
      }
    });

    // 載入動畫控制
    onMounted(() => {
      // 設定最小載入時間（例如 1.5 秒）
      setTimeout(() => {
        // 先添加消失動畫
        isDisappearing.value = true;

        // 等待動畫完成後隱藏 loading
        setTimeout(() => {
          isLoading.value = false;
        }, 500); // 與 CSS 動畫時間相匹配
      }, 2000);

      checkWindowWidth();
      window.addEventListener('resize', checkWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', checkWindowWidth);
    });

    return {
      menuItems,
      showLogoutDialog,
      closeLogoutDialog,
      confirmLogout,
      isLoading,
      isDisappearing,
      isCollapsed,
      handleMenuItemClick,
      isMobileView,
      toggleMenu,
      closeMenu,
      showOverlay,
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
  position: relative;
  z-index: 100;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    transform: translateX(0);

    &.collapsed {
      transform: translateX(-100%);
    }

    &:not(.collapsed) {
      min-width: 240px;
      max-width: 280px;
      width: 80%;
      transform: translateX(0);
      box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
    }
  }

  .logo {
    padding: 1rem 1rem;

    img {
      width: 120px;
    }
  }

  nav {
    @include flex($d: column, $j: start, $a: stretch, $g: 0.5rem);
    padding: 1rem;
    padding-bottom: 0;

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

  .detectAccident {
    margin: 5.5rem 1rem 1rem 1rem;
    padding: 3rem 1.5rem 1rem 1.5rem;
    background-color: var(--orange-95);
    border-radius: 1.5rem;
    @include flex($d: column, $g: 0);

    h5 {
      position: relative;
      text-align: center;
      font-weight: var(--b);
    }

    .completeness {
      position: absolute;
      padding-bottom: 1rem;
      bottom: 1.25rem;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 120px;
      background-image: url(/src/assets/dashboard/numBg.svg);
      background-size: contain;
      background-position: center;
      font-size: var(--md);
      font-weight: var(--b);
      color: var(--white);
      @include flex($g: 0.1rem);

      b {
        display: block;
        color: var(--white);
        font-size: var(--xs);
      }
    }

    span {
      color: var(--natural-50);
    }

    .text-link {
      margin-top: 0.5rem;
      @include flex($g: 0.25rem);
      color: var(--natural-50);

      &:hover span {
        color: var(--orange-50);

      }
    }
  }
}

.side-menu {
  &.collapsed {
    min-width: 72px;
    max-width: 72px;
    width: 72px;

    .logo {
      padding: 1rem;
      display: flex;
      justify-content: center;

      img {
        width: 32px;
        height: 32px;
      }
    }

    .nav-item {
      justify-content: center;
      padding: 0.5rem;
      width: 40px;
      margin: 0 auto;
      border-radius: 8px;
    }
  }
}

.wrap {
  width: 100%;
  background-color: var(--natural-95);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }

  &__main {
    padding: 1.5rem 0.75rem;
    height: calc(100% - 64px);
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


.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--blue-48);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: all 0.5s ease-in-out; // 修改為 all 以同時處理 opacity

  &.disappear {
    opacity: 0;
    transform: translateY(-20px); // 添加一個上移效果
  }
}

.loading-overlay.disappear {
  transform: translateY(-100%);
}

.loading-content {
  text-align: center;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 24px;
  color: #0000;
  background: linear-gradient(90deg, var(--white) calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: l7 2s infinite steps(11);
}

.loader:before {
  content: "loading"
}

@keyframes l7 {
  to {
    background-position: left
  }
}

.helpbtn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  margin: 1rem;
  border-radius: 50%;
  background-color: var(--orange-50);
  @include flex;

  span {
    color: var(--white);
  }
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 95;
  animation: fadeIn 0.3s forwards;
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
