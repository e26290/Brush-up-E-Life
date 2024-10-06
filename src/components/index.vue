<template>
  <header>
    <div class="container navbar">
      <router-link @click="closeMenu" to="/">
        <div class="logo">
          <img src="/src/assets/logo.svg" alt="數位人生" />
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
    <img src="/src/assets/index/hero/bg_line.svg" class="bg_line" />
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
              <img
                src="/src/assets/index/hero/flower1.png"
                alt="flower-1"
                class="flower-1"
              />
              <img
                src="/src/assets/index/hero/flower2.png"
                alt="flower-2"
                class="flower-2"
              />
              <img
                src="/src/assets/index/hero/phone1.png"
                alt="phone-1"
                class="phone-1"
              />
              <img
                src="/src/assets/index/hero/phone2.png"
                alt="phone-2"
                class="phone-2"
              />
            </div>
          </div>
          <div class="col-md-2">
            <div class="special">
              <div class="col-4 list">
                <img src="/src/assets/index/hero/ic_safe.svg" alt="安全加密" />
                <span>安全加密</span>
              </div>
              <div class="col-4 list">
                <img src="/src/assets/index/hero/ic_list.svg" alt="妥善處理" />
                <span>妥善處理</span>
              </div>
              <div class="col-4 list">
                <img src="/src/assets/index/hero/ic_mail.svg" alt="即時通知" />
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
      <div class="card_adv row">
        <div class="col-md-6 col-sm-12 content">
          <div class="text">
            <div class="title">
              <h6 class="tag">視覺化數據</h6>
              <h1>清楚直觀的介面設計<br />快速掌握數位資訊的狀態</h1>
            </div>
            <p>
              針對各類數位資產（如社群帳號、網路訂閱、雲端儲存檔案等）進行整合與分類。透過視覺統計圖表，您可以直觀地瀏覽資產分佈和狀態，並輕鬆追蹤變動情況，讓您在任何時刻都能清楚掌控數位人生。
            </p>
          </div>
          <ul class="items">
            <li class="item">
              <b>7</b>
              <span>資產類別</span>
            </li>
            <li class="item">
              <b>4</b>
              <span>意外機制</span>
            </li>
            <li class="item bgb">
              <b>FREE</b>
              <span>資產處理指南</span>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-12">
          <img src="/src/assets/index/adv/niceui.png" alt="視覺化數據" />
        </div>
      </div>
      <div class="card_adv row">
        <div class="col-md-6 col-sm-12">
          <img src="/src/assets/index/adv/ainote.png" alt="ai遺囑計劃" />
        </div>
        <div class="col-md-6 col-sm-12 content">
          <div class="text">
            <div class="title">
              <h6 class="tag">AI 服務</h6>
              <h1>簡易上手的撰寫平台<br />透過 AI 制定專屬的遺囑計劃</h1>
              <div class="userGroup">
                <div class="imgs">
                  <img
                    src="/src/assets/index/adv/customer1.png"
                    alt="user"
                    class="userImg"
                  />
                  <img
                    src="/src/assets/index/adv/customer2.png"
                    alt="user"
                    class="userImg"
                  />
                  <img
                    src="/src/assets/index/adv/customer3.png"
                    alt="user"
                    class="userImg"
                  />
                  <img
                    src="/src/assets/index/adv/customer4.png"
                    alt="user"
                    class="userImg"
                  />
                </div>
                <span>500+ 滿意使用者</span>
              </div>
            </div>
            <p>
              透過 AI
              驅動的智慧問答系統，引導您逐步制定一份專屬於您的遺囑計劃。從數位資產分配、繼承人選定到個人化的特殊指示（如葬禮安排、重要話語的傳遞），每個步驟都由
              AI
              協助進行，確保內容符合您的需求。遺囑計劃是合法且符合個人意願的文件，您可以安心地為自己和家人做好規劃。
            </p>
          </div>
          <button class="signup">
            開始使用
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section id="solution">
    <div class="container">
      <div class="title">
        <h6 class="tag">解決方案</h6>
        <h1>讓我們妥善管理您的數位人生</h1>
      </div>
    </div>
    <div class="solutionImg">
      <img src="/src/assets/index/solution/solutionBg.png" alt="solutionBg" class="bg">
      <img src="/src/assets/index/solution/hand-l.png" alt="hand-l" class="hand hand-l">
      <img src="/src/assets/index/solution/hand-r.png" alt="hand-r" class="hand hand-r">
      <div class="item item1">
        <div class="check"><span class="material-symbols-outlined">check</span></div>
        掌握數位資產狀態
      </div>
      <div class="item item2">
        <div class="check"><span class="material-symbols-outlined">check</span></div>
        建立有效數位遺囑
      </div>
      <div class="item item3">
        <div class="check"><span class="material-symbols-outlined">check</span></div>
        制定人生計劃
      </div>
      <div class="item item4">
        <div class="check"><span class="material-symbols-outlined">check</span></div>
        紀錄數位生活日誌
      </div>
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
.tag {
  font-size: var(--sm);
  font-weight: var(--bold);
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  color: var(--white);
  background-color: var(--orange-50);
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
  height: calc(100dvh - 70px);
  min-height: 820px;
  max-height: 1100px;
  padding-bottom: 0;
  overflow: hidden;
  .container {
    height: 100%;
    @include flex($j: space-between, $a: stretch, $d: column);
  }
  ._text {
    text-align: center;
    @include flex($d: column);
    position: relative;
    margin-bottom: 1rem;
    .solgan,
    span,
    .signup {
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

  .gradient1,
  .gradient2,
  .gradient2::after {
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
    height: 400px;
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

      .phone-1,
      .phone-2,
      .flower-1,
      .flower-2 {
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
        right: 1%;
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
    .content {
      @include flex($j: space-between, $a: stretch, $d: column);

      &:nth-child(2) {
        align-items: flex-start;
      }
    }
    .text {
      @include flex($a: flex-start, $g: 1.5rem, $d: column);
      .title {
        @include flex($a: flex-start, $g: 0rem, $d: column);
      }
      p {
        color: var(--natural-50);
        text-align: justify;
      }
    }
    .items {
      @include flex($j: flex-start, $a: stretch);
    }
    .item {
      width: 100%;
      max-width: 10rem;
      @include flex($g: 0rem, $d: column);
      background-color: var(--natural-95);
      border-radius: 0.75rem;
      padding: 0.5rem;
      b {
        font-size: var(--xl5);
        font-weight: var(--bold);
        color: var(--blue-48);
      }
      span {
        font-size: var(--sm);
        color: var(--blue-48);
      }
    }
    .bgb {
      background-color: var(--blue-48);
      b,
      span {
        color: var(--white);
      }
      b {
        scale: 0.8;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:nth-child(1) {
      margin-bottom: 5rem;
    }
  }
  .userGroup {
    @include flex($g: 0.5rem);
    .imgs {
      @include flex($g: 0);
      .userImg {
        width: 2.5rem;
        height: 2.5rem;
        border: solid 1px var(--white);
        border-radius: 50%;
        margin-left: -0.75rem;
        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }
    span {
      color: var(--natural-30);
    }
  }
}

#solution {
  .title {
    @include flex($g:0, $d:column);
    // margin-bottom: 2.5rem;
  }
  .solutionImg {
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .item {
      @include flex($g: 0.75rem);
      background-color: var(--white);
      border-radius: 3rem;
      padding: 0.5rem 1rem;
      position: absolute;
      box-shadow: 8px 4px 20px rgba(0, 0, 255, .2);
      cursor: pointer;

      .check {
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        background-color: var(--white);
        border: solid 1px var(--orange-50);
        border-radius: 50%;
      }
      span {
        font-size: var(--md);
        color: var(--orange-50);
      }

      &:hover {
        .check {
          background-color: var(--orange-50);
        }
        span {
          color: var(--white);
        }
      }
    }
    .item1 {
      top: 30%;
      left: 35%;
    }
    .item2 {
      top: 55%;
      left: 40%;
    }
    .item3 {
      top: 35%;
      left: 55%;
    }
    .item4 {
      top: 60%;
      left: 60%;
    }
    .hand {
      position: absolute;
      scale: 0.6;
    }
    .hand-l {
      top: 40%;
      left: 0;
      transform-origin: left top;
      transform: translateY(-50%);
    }
    .hand-r {
      right: 0;
      transform-origin: right bottom;
    }
  }
}
</style>
