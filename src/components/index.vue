<template>
  <header>
    <div class="container navbar">
      <router-link @click="closeMenu" to="/">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="數位人生" />
        </div>
      </router-link>
      <ul class="nav_item">
        <li><a class="item" href="#">關於我們</a></li>
        <li><a class="item" href="#">產品介紹</a></li>
        <li><a class="item" href="#">定價方案</a></li>
        <li><a class="item" href="#">常見問題</a></li>
        <li><a class="item" href="#">生前規劃指南</a></li>
      </ul>
      <div class="login-group">
        <div class="item login">登入</div>
        <button class="signup" @click="openProductPage">
          開始使用
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
    </div>
  </header>

  <section id="hero">
    <img src="@/assets/index/hero/bg_line.svg" class="bg_line">
    <div class="container">
      <div class="_text">
        <div class="gradient1"></div>
        <div class="gradient2"></div>
        <div class="solgan">
          <h1>輕鬆管理數位資產</h1>
          <h1>讓重要的數位足跡<b class="highlight">不再遺失</b></h1>
        </div>
        <span>
          從數位資產管理到專屬遺囑與生活日誌，我們確保您的數位足跡不會消失，讓您的數位人生交付給所愛之人。
        </span>
        <button class="signup">
          開始使用
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
      <div class="_cover">
        <div class="row">
          <div class="col-md-10">
            <div class="phones">
              <img src="@/assets/index/hero/flower1.png" alt="flower-1" class="flower-1">
              <img src="@/assets/index/hero/flower2.png" alt="flower-2" class="flower-2">
              <img src="@/assets/index/hero/phone1.png" alt="phone-1" class="phone-1">
              <img src="@/assets/index/hero/phone2.png" alt="phone-2" class="phone-2">
            </div>
          </div>
          <div class="col-md-2">
            <div class="special">
              <div class="col-4 list">
                <img src="@/assets/index/hero/ic_safe.svg" alt="安全加密">
                <span>安全加密</span>
              </div>
              <div class="col-4 list">
                <img src="@/assets/index/hero/ic_list.svg" alt="妥善處理">
                <span>妥善處理</span>
              </div>
              <div class="col-4 list">
                <img src="@/assets/index/hero/ic_mail.svg" alt="即時通知">
                <span>即時通知</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="advantage">
    <div class="container">
      <div class="card_adv">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="_content">
              <div class="title">
                <h6 class="tag">視覺化數據</h6>
                <h1>清楚直觀的介面設計<br>快速掌握數位資訊的狀態</h1>
              </div>
              <p>
                管理平台以簡潔、直觀的介面設計為核心，讓使用者能輕鬆快速地掌握自己的數位資產狀況。針對各類數位資產（如社群帳號、網路訂閱、雲端儲存檔案等）進行整合與分類，讓您一目了然地了解所有數位資訊的狀態。無需繁瑣的操作，即可即時查閱資產總覽，確保每一筆資產都處於掌控之中。通過統計圖表，您可以直觀地看到資產分佈和狀態，並輕鬆追蹤變動情況，讓您在任何時刻都能清楚掌控數位人生。
              </p>
            </div>
            <ul class="items">
              <li class="item">
                <h5>7</h5>
                <span>資產類別</span>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-12">
            <img src="" alt="" />
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <section id="support">
    <div class="support_bg"></div>
    <div class="_text">
      <!-- TODO:確定一下直接寫在背景會不會出事？ -->
      <div class="maskbg"></div>
      <h6>該怎麼妥善管理數位資產，讓我們幫助您</h6>
      <h1>組織生活與數位的<br />管理平台</h1>
      <div class="ani"></div>
    </div>
  </section>

  <section id="serve">
    <div class="serve_bg"></div>
    <div class="container">
      <div class="title">
        <h1>數位資產的全方位守護</h1>
        <span
          >從管理到處理，我們提供全面的數位資產解決方案，確保您的數位世界更安全、更有序。</span
        >
      </div>

      <div class="row">
        <div class="card_prodHighlight" v-for="data in highlight">
          <img :src="data.src" :alt="data.title" />
          <h4>{{ data.title }}</h4>
          <p v-html="data.content"></p>
        </div>
      </div>
    </div>
  </section>

  <section id="steps">
    <div class="container">
      <div class="title">
        <h1>簡易上手的操作流程</h1>
        <span>我們平台操作簡單，即使您不熟悉科技也能輕鬆上手。</span>
      </div>

      <!-- TODO:輪播圖 -->
    </div>
  </section>

  <section id="cta">
    <div class="container">
      <h2>組織今天並為明天做好準備</h2>
      <h6>開使規劃您的數位人生</h6>
      <button class="md">
        註冊會員
        <span class="material-symbols-outlined">arrow_right_alt</span>
      </button>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="f_nav">
        <div class="f_logo"></div>
        <ul class="nav_items">
          <li class="item"><a href="#">關於我們</a></li>
          <li class="item"><a href="#">產品介紹</a></li>
          <li class="item"><a href="#">常見問題</a></li>
          <li class="item"><a href="#">生前規劃指南</a></li>
        </ul>
      </div>

      <div class="contact">
        <div class="links">
          <a href="#">隱私權政策</a>
          <a href="#">使用者條款</a>
          <span>© BRUSH UP E-LIFE® 2024 </span>
          <span>僅作 AAPD 第二屆 UI 實戰營畢業專題使用</span>
        </div>

        <div class="mail">
          <span class="material-symbols-outlined">mail</span>
          brushup_elife@mail.com
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      highlight: [
        {
          src: "",
          title: "安全有效管理您的數位資產",
          content:
            "安全且高效地管理您的數位資產——您的資料已使用銀行級安全加密技術。您可以一覽所有數位資產，包括社交平台帳號、銀行賬戶、電子郵件、訂閱服務等，方便更有效地管理和決策。",
        },
        {
          src: "",
          title: "選擇數位資產的處理",
          content:
            "您可以預先決定如何處理數位資產，例如：刪除、保留或轉讓給指定的繼承人。<br>以靈活的方式，處理不同類型的數位資產。",
        },
        {
          src: "",
          title: "訂立意外確認機制",
          content:
            "根據您的需求選擇檢核方式和提醒週期，確保當前無需開啟繼承機制。一旦需要啟動，您的數位遺產將完整且安全地交付給指定繼承人。",
        },
      ],
    };
  },
  methods: {
    openProductPage() {
      window.open("/dashboard", "_blank"); // dashboard 另開新視窗
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

// all
.signup {
  @include button(var(--white), var(--blue-48));
}

header {
  .navbar {
    padding: 0.75rem;
  }
  .nav_item {
    @include flex;
  }
  .item {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: var(--natural-95);
    }
  }
  .login-group {
    @include flex;
  }
}

section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

#hero {
  position: relative;
  height: calc( 100dvh - 70px );
  min-height: 820px;
  max-height: 1100px;
  padding-bottom: 0;
  overflow: hidden;
  .container {
    height: 100%;
    @include flex($j: space-between,$a: stretch,$d: column);
  }
  ._text {
    text-align: center;
    @include flex($d: column);
    position: relative;
    margin-bottom: 1.5rem;
    .solgan, span, .signup {
      z-index: 1;
    }
    .solgan {
      @include flex($d: column, $g: 0);
    }
    h1 {
      font-size: var(--display);
      font-weight: var(--bold);
    }
    b {
      color: var(--orange-50);
      position: relative;
      &::before {
        content: "NEVER LOSE";
        font-size: var(--xs);
        color: var(--white);
        padding: 0.15rem 0.3rem;
        border-radius: 0.2rem;
        background-color: var(--orange-50);
        position: absolute;
        right: -48px;
        top: -16px;
        rotate: 12deg;
      }
    }
  }
  .bg_line {
    position: absolute;
    top: 8%;
    left: 0;
  }

  .gradient1, .gradient2, .gradient2::after {
    position: absolute;
    border-radius: 50%;
  }
  .gradient1 {
    top: -4rem;
    left: 0;
    width: 640px;
    height: 380px;
    background: radial-gradient(var(--blue-65) 0%, var(--white) 70%);
    opacity: 0.3;
    rotate: -24deg;
  }
  .gradient2 {
    top: 20px;
    right: 200px;
    width: 200px;
    height: 160px;
    background: radial-gradient(var(--orange-50) 0%, var(--white) 70%);
    opacity: 0.2;
    
    &::after {
      content: "";
      top: -20px;
      right: -50px;
      width: 120px;
      height: 120px;
      background: radial-gradient(var(--blue-65) 0%, rgba(#fff, 0.3) 70%);
      opacity: 0.5;
    }
  }
  ._cover {
    height: 480px;
    min-height: 320px;
    .row {
      height: 100%;
      .col-md-10 {
        padding-right: 0;
      }
      .col-md-2 {
        padding-top: 1.5rem;
        padding-left: 0;
      }
    }
    .phones {
      background-color: var(--natural-95);
      border-radius: 1.5rem 1.5rem 0 1.5rem;
      position: relative;
      height: 100%;
      
      .phone-1, .phone-2, .flower-1, .flower-2 {
        position: absolute;
      }
      .phone-1 {
        top: -56px;
        left: 50%;
        transform: translateX(-58%) scale(0.5);
        transform-origin: top center;
        z-index: 9;
      }
      .phone-2 {
        top: 20px;
        left: 50%;
        transform: translateX(-10%) scale(0.5) rotate(12deg);
        transform-origin: top center;
      }
      .flower-1 {
        left: 0;
        bottom: 0;
        transform: scale(0.4);
        transform-origin: left bottom;
      }
      .flower-2 {
        right: 2%;
        top: -48px;
        transform: scale(0.5);
        transform-origin: top right;
      }
    }
    .special {
      background-color: var(--natural-85);
      border-radius: 0 1.5rem 1.5rem 0;
      height: 100%;
      @include flex($g: 1rem, $d: column);
      padding: 1.25rem;
      .list {
        flex: 1;
        background-color: var(--white);
        border-radius: 0.75rem;
        @include flex($g: 0.5rem, $d: column);
        padding: 1rem;
        width: 100%;
      }
      span {
        color: var(--blue-60);
        font-weight: var(--medium);
      }
    }
  }
}

#advantage {
  padding-top: 10rem;
  .card_adv {
    ._content {
      @include flex($a: flex-start, $g: 1.5rem, $d: column);
      .title {
        @include flex($a: flex-start, $g: 0rem, $d: column);
        .tag {
          font-size: var(--sm);
          font-weight: var(--bold);
          padding: 0.25rem 0.5rem;
          border-radius: 0.2rem;
          color: var(--white);
          background-color: var(--orange-50);
        }
      }
      p {
        color: var(--natural-50);
      }
    }
  }
}
</style>
