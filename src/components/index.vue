<template>
  <header>
    <div class="container navbar">
      <div class="box-left">
        <div class="menu-icon" @click="toggleMenu" :class="{ 'active': isMenuActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <router-link to="/">
          <div class="logo">
            <img src="/src/assets/logo.svg" alt="數位人生" />
          </div>
        </router-link>
      </div>

      <ul class="nav_item">
        <li><a class="item" href="#">關於我們</a></li>
        <li><a class="item" href="#">產品介紹</a></li>
        <li><a class="item" href="#">定價方案</a></li>
        <li><a class="item" href="#">常見問題</a></li>
        <li><a class="item" href="#">生前規劃指南</a></li>
      </ul>
      <div class="login-group">
        <router-link to="/login" class="item login">登入</router-link>
        <router-link to="/profile" class="signup">
          開始使用
          <arrow-right />
        </router-link>
      </div>
    </div>
    <!-- 行動裝置選單 -->
    <div class="mobile-menu" :class="{ 'active': isMenuActive }">
      <ul>
        <li><a href="#">關於我們</a></li>
        <li><a href="#">產品介紹</a></li>
        <li><a href="#">定價方案</a></li>
        <li><a href="#">常見問題</a></li>
        <li><a href="#">生前規劃指南</a></li>
      </ul>
    </div>
  </header>

  <section id="hero" :class="{ 'loaded': isLoaded }" class="scroll-animate">
    <div class="container">
      <div class="_text">
        <img src="/src/assets/index/hero/bg_line.svg" class="bg_line" />
        <div class="gradient1"></div>
        <div class="gradient2"></div>
        <div class="slogan">
          <h1>輕鬆管理數位資產<i class="bi bi-0-square-fill"></i></h1>
          <h1>讓重要的數位足跡<b class="highlight">不再遺失</b></h1>
        </div>
        <span class="subtitle">
          從數位資產管理到專屬遺囑與生活日誌，我們確保您的數位足跡不會消失，讓您的數位人生交付給所愛之人。
        </span>
        <router-link to="/profile" class="signup">
          立即啟動您的數位人生
          <arrow-right />
        </router-link>
      </div>
      <div class="_cover">
        <div class="row">
          <div class="col-md-10">
            <div class="phones">
              <img src="/src/assets/index/hero/flower1.png" alt="flower-1" class="flower-1" />
              <img src="/src/assets/index/hero/flower2.png" alt="flower-2" class="flower-2" />
              <img src="/src/assets/index/hero/phone1.png" alt="phone-1" class="phone-1" />
              <img src="/src/assets/index/hero/phone2.png" alt="phone-2" class="phone-2" />
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
    <div class="container scroll-animate">
      <div class="card_adv row">
        <div class="col-md-6 col-sm-12 content">
          <div class="text">
            <div class="title">
              <h6 class="tag">視覺化數據</h6>
              <h2>清楚直觀的介面設計<br />快速掌握數位資訊的狀態</h2>
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
              <h2>簡易上手的撰寫平台<br />透過 AI 制定專屬的遺囑計劃</h2>
              <div class="userGroup">
                <div class="imgs">
                  <img src="/src/assets/index/adv/customer1.png" alt="user" class="userImg" />
                  <img src="/src/assets/index/adv/customer2.png" alt="user" class="userImg" />
                  <img src="/src/assets/index/adv/customer3.png" alt="user" class="userImg" />
                  <img src="/src/assets/index/adv/customer4.png" alt="user" class="userImg" />
                </div>
                <span>500+ 滿意使用者</span>
              </div>
            </div>
            <p>
              透過 AI 驅動的智慧問答系統，引導您逐步制定專屬遺囑計劃。從數位資產分配、繼承人選定到個人化的特殊指示（如葬禮安排、重要話語的傳遞），每個步驟都由 AI 協助進行，確保符合您的需求。
            </p>
          </div>
          <router-link to="/profile" class="signup">
            開始使用
            <arrow-right />
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <section id="solution">
    <div class="container">
      <div class="title">
        <h6 class="tag">解決方案</h6>
        <h2>妥善管理您的數位人生</h2>
      </div>
    </div>
    <div class="solutionImg">
      <img src="/src/assets/index/solution/solutionBg.png" alt="solutionBg" class="bg" />
      <img src="/src/assets/index/solution/hand-l.png" alt="hand-l" class="hand hand-l" />
      <img src="/src/assets/index/solution/hand-r.png" alt="hand-r" class="hand hand-r" />
      <div class="item item1" @click="toggleItem('item1')" :class="{ 'selected': selectedItems.item1 }">
        <div class="check">
          <check />
        </div>
        掌握數位資產狀態
      </div>
      <div class="item item2" @click="toggleItem('item2')" :class="{ 'selected': selectedItems.item2 }">
        <div class="check">
          <check />
        </div>
        建立有效數位遺囑
      </div>
      <div class="item item3" @click="toggleItem('item3')" :class="{ 'selected': selectedItems.item3 }">
        <div class="check">
          <check />
        </div>
        制定人生計劃
      </div>
      <div class="item item4" @click="toggleItem('item4')" :class="{ 'selected': selectedItems.item4 }">
        <div class="check">
          <check />
        </div>
        紀錄數位生活日誌
      </div>
    </div>
  </section>

  <Marquee />

  <section id="cta">
    <div class="container">
      <div class="cta_card">
        <div class="text">
          <div class="title">
            <h6 class="tag">規劃數位人生</h6>
            <h2>組織今天並為明天做好準備</h2>
          </div>
          <p>從簡單的日常管理，到關鍵的長期規劃，我們幫助您組織好今天的一切，為未來做最好的準備，因為未來的你，也值得妥善安排。</p>
          <router-link to="/profile" class="signup">
            開始使用
            <arrow-right />
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="f_nav">
        <div class="f_logo">
          <img src="/src/assets/logo_f.svg" alt="logo">
        </div>
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
          <!-- <span>僅作 AAPD 第二屆 UI 實戰營畢業專題使用</span> -->
        </div>

        <div class="mail">
          <mail />
          brushup_elife@mail.com
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import Marquee from "./Marquee.vue";

export default {
  components: {
    Marquee,
  },
  setup() {
    const isMenuActive = ref(false);
    const toggleMenu = () => {
      isMenuActive.value = !isMenuActive.value;
    };
    // 新增：用於跟踪每個 item 的選中狀態
    const selectedItems = ref({
      item1: false,
      item2: false,
      item3: false,
      item4: false,
    });

    // 新增：切換 item 的選中狀態
    const toggleItem = (item) => {
      selectedItems.value[item] = !selectedItems.value[item];
    };

    const marqueeContent = ref(null);

    const setAnimationDuration = () => {
      if (marqueeContent.value) {
        const contentWidth = marqueeContent.value.offsetWidth;
        const animationDuration = contentWidth / 50;
        marqueeContent.value.style.setProperty(
          "--animation-duration",
          `${animationDuration}s`
        );
      } else {
        console.warn("Marquee content ref not found");
      }
    };

    const isLoaded = ref(false);

    onMounted(() => {
      nextTick(() => {
        setAnimationDuration();
      });

      setTimeout(() => {
        isLoaded.value = true;
      }, 100);
    });

    return {
      marqueeContent,
      setAnimationDuration,
      isMenuActive,
      toggleMenu,
      selectedItems,
      toggleItem,
      isLoaded,
    };
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
  font-weight: var(--b);
  padding: 0.25rem 0.5rem;
  border-radius: 0.2rem;
  color: var(--white);
  background-color: var(--orange-50);
}

header {
  position: relative;

  .navbar {
    padding: 0.75rem;
    position: relative;
  }

  .box-left {
    @include flex($g: 1rem);
  }

  .nav_item {
    @include flex($g: 1rem);
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

  .menu-icon {
    display: none;
    cursor: pointer;
    width: 24px;
    height: 20px;
    position: relative;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: var(--natural-30);
      border-radius: 3px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: .2s ease-in-out;

      &:nth-child(1) {
        top: 0px;
      }

      &:nth-child(2) {
        top: 8px;
      }

      &:nth-child(3) {
        top: 16px;
      }
    }

    &.active {
      span {
        &:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white);
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          display: block;
          padding: 1rem 0.5rem;
          // color: var(--blue-48);
          text-decoration: none;

          &:hover {
            background-color: var(--natural-95);
          }
        }
      }
    }

    &.active {
      display: block;
    }
  }

  @include breakpoint(1023px) {
    .nav_item {
      display: none;
    }

    .menu-icon {
      display: block;
    }

    .login-group {
      gap: 0.5rem
    }
  }
}

section {
  padding-top: 5rem;
  padding-bottom: 5rem;

  @include breakpoint(767px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

#hero {
  position: relative;
  height: calc(100dvh - 70px);
  min-height: 820px;
  max-height: 1100px;
  padding-bottom: 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &.loaded {
    opacity: 1;
    transform: translateY(0);
  }

  ._text,
  ._cover {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    transition-delay: 0.3s;
  }

  &.loaded ._text,
  &.loaded ._cover {
    opacity: 1;
    transform: translateY(0);
  }

  .container {
    height: 100%;
    @include flex($j: space-between, $a: stretch, $d: column);
  }

  ._text {
    text-align: center;
    @include flex($d: column);
    position: relative;
    margin-bottom: 1rem;

    .slogan,
    span,
    .signup {
      z-index: 1;
    }

    .signup {
      font-size: var(--xl);
    }

    .slogan {
      @include flex($d: column, $g: 0);

      h1:nth-child(2) {
        @include flex($g: 2px);
      }
    }

    h1 {
      font-size: var(--display);
      font-weight: var(--b);
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

    .subtitle {
      font-size: var(--lg);
    }
  }

  .bg_line {
    position: absolute;
    top: 0;
    left: -200px;
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
        font-weight: var(--m);
      }
    }
  }

  @include breakpoint(1200px) {
    ._cover {
      .phones {
        .flower-1 {
          left: -64px;
        }

        .flower-2 {
          top: -88px;
        }

        .phone-1 {
          transform: translateX(-58%) scale(0.4);
        }

        .phone-2 {
          transform: translateX(-25%) scale(0.4) rotate(12deg);
        }
      }

      .special {
        gap: 0.5rem;
        padding: 0.75rem;

        .list {
          gap: 0rem;
          padding: 0.5rem;
        }
      }
    }
  }

  @include breakpoint(767px) {
    min-height: auto;

    .container {
      gap: 4rem;
    }

    ._cover {
      height: auto;

      .row {
        .col-md-10 {
          padding-right: auto;
        }

        .col-md-2 {
          display: none;
        }
      }

      .phones {
        .phone-1 {
          transform: translateX(-58%) scale(0.3);
        }

        .phone-2 {
          transform: translateX(-38%) scale(0.3) rotate(12deg);
        }

        .flower-2 {
          top: -88px;
        }
      }
    }

    ._text {
      gap: 1rem;
    }
  }


  @include breakpoint(576px) {
    ._text {
      .slogan h1:nth-child(2) {
        flex-direction: column;
        gap: 8px;
      }

      b::before {
        right: -90px;
        top: 0;
        rotate: 0deg;
      }
    }
  }

  @include breakpoint(425px) {
    ._cover .phones .flower-1 {
      display: none;
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
        @include flex($a: flex-start, $d: column);
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
        font-weight: var(--b);
        color: var(--blue-48);
        line-height: 120%;
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
    padding: 0.5rem 0;

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

  @include breakpoint(1024px) {
    padding-top: 5rem;

    .card_adv .content {
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .card_adv .text {
      gap: 0.5rem;
    }

    .card_adv .items {
      gap: 1rem;
    }

    .card_adv .item b {
      font-size: var(--xl4);
    }
  }

  @include breakpoint(767px) {
    .card_adv:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
}

#solution {
  .title {
    @include flex($g: 1rem, $d: column);
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
      box-shadow: 8px 4px 20px rgba(0, 0, 255, 0.2);
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      animation: float 3s ease-in-out infinite;

      &:nth-child(even) {
        animation-delay: 1.5s;
      }

      .check {
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        background-color: var(--white);
        border: solid 1px var(--orange-50);
        border-radius: 50%;
        transition: background-color 0.3s ease;

        svg {
          width: var(--ixs);
          stroke: var(--orange-50);
          transition: color 0.3s ease;
        }
      }

      &:hover,
      &.selected {
        .check {
          background-color: var(--orange-50);
        }

        svg {
          stroke: var(--white);
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

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }

  @include breakpoint(1280px) {
    .solutionImg .hand {
      scale: 0.5;
    }

    .solutionImg .hand-l {
      left: -60px;
    }

    .solutionImg .hand-r {
      right: -40px;
      bottom: -72px;
    }
  }

  @include breakpoint(1024px) {
    .solutionImg .hand {
      scale: 0.3;
    }

    .solutionImg .hand-r {
      bottom: 0;
    }

    .solutionImg .item1 {
      left: 24%;
    }

    .solutionImg .item2 {
      left: 30%;
    }
  }

  @include breakpoint(767px) {
    .solutionImg .bg {
      min-height: 480px;
    }

    .solutionImg .hand {
      display: none;
    }

    .solutionImg .item1 {
      left: 6%;
    }

    .solutionImg .item2 {
      top: 50%;
      left: 6%;
    }

    .solutionImg .item3 {
      top: 40%;
      left: 55%;
    }

    .solutionImg .item4 {
      top: 62%;
      left: 48%;
    }
  }
}

#cta {
  .cta_card {
    padding: 3rem;
    background-image: url(/src/assets/index/cta/ctaBg.png);
    background-size: cover;
    border-radius: 1.5rem;
    overflow: hidden;
  }

  .title {
    @include flex($a: flex-start, $g: 1rem, $d: column);
  }

  .text {
    @include flex($d: column, $a: flex-start, $g: 2.5rem);
    max-width: 580px;

    .tag {
      display: inline-block;
    }
  }

  @include breakpoint(768px) {
    .cta_card {
      padding: 1.5rem;
    }

    .text {
      gap: 1rem;
    }
  }
}

footer {
  background-color: var(--black);
  padding: 3rem 0;

  a,
  span,
  .mail {
    color: var(--white);
  }

  .mail svg {
    stroke: var(--white);
    width: var(--ism);
  }

  .f_nav,
  .contact {
    @include flex($j: space-between);

    .nav_items {
      @include flex;
    }

    a {
      padding: 0.75rem;

      &:hover,
      &:active {
        color: var(--orange-50);
      }
    }
  }

  .contact {
    padding-top: 1.5rem;
    border-top: 1px solid var(--natural-85);
    margin-top: 1.5rem;

    .mail {
      @include flex($g: 0.5rem);
    }
  }

  @include breakpoint(767px) {

    .f_nav,
    .contact {
      flex-direction: column;
    }

    .f_nav .nav_items {
      gap: 0rem;
    }

    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

/* 區塊動畫:載入自動淡入及資料上移 */
.scroll-animate {
  animation: auto_zoomin 0.5s ease-out;
}

@keyframes auto_zoomin {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

/*--------------------------- */
</style>
