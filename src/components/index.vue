<template>
  <header>
    <div class="container navbar">
        <router-link @click="closeMenu" to="/">
            <div class="logo">
              <img src="" alt="數位人生">
            </div>
        </router-link>
        <div class="nav_item">
          <ul>
            <li class="item"><a href="#">產品介紹</a></li>
            <li class="item"><a href="#">產品介紹</a></li>
            <li class="item"><a href="#">常見問題</a></li>
            <li class="item"><a href="#">生前規劃指南</a></li>
          </ul>
        </div>
        <div class="login-group">
          <div class="item login">登入</div>
          <button class="md" @click="openProductPage">
            開始使用
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
    </div>
  </header>

  <section id="hero">
    <div class="container">
      <img src="" alt="" class="herobg">
      <div class="_text">
        <h1>輕鬆管理您的數位資產，保持井然有序的人生。</h1>
        <h6>我們致力於幫助您安全、高效地管理數位資產，延續您的數位人格，為未來做好萬全準備！</h6>
        <button class="md">
          開始使用
          <span class="material-symbols-outlined">arrow_right_alt</span>
        </button>
      </div>
      <div class="_img">
        <img src="#" alt="您準備好了嗎？">
      </div>
    </div>
  </section>

  <section id="advantage">
    <div class="container">
      <div class="card_adv" v-for="data in adv">
      <img :src="data.src" :alt="data.title">
      <div class="_content">
        <h6>{{ data.secTitle }}</h6>
        <h2>{{ data.title }}</h2>
        <ul class="card_list">
          <li class="list" v-for="item in data.list">
            <h5>
              <span class="material-symbols-outlined">check_circle</span>
              {{ item.name }}
            </h5>
            <p>{{ item.content }}</p>
          </li>
        </ul>
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
      <h1>組織生活與數位的<br>管理平台</h1>
      <div class="ani"></div>
    </div>
  </section>

  <section id="serve">
    <div class="serve_bg"></div>
    <div class="container">
      <div class="title">
        <h1>數位資產的全方位守護</h1>
        <span>從管理到處理，我們提供全面的數位資產解決方案，確保您的數位世界更安全、更有序。</span>
      </div>

      <div class="row">
        <div class="card_prodHighlight" v-for="data in highlight">
          <img :src="data.src" :alt="data.title">
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
      <h2>組織今天並為明天做好準備 </h2>
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
        adv: [
          {
            title: "一目了然的資產圖表",
            secTitle: "提升資產一覽的清晰度",
            list: [
              {
                name: "直觀展示",
                content: "利用簡潔明了的圖表形式，讓您快速掌握所有數位資產的分佈與狀況。"
              },{
                name: "動態更新",
                content: "立即更新資產訊息，確保呈現數據的準確性和及時性。"
              },{
                name: "視覺化數據",
                content: "通過圖形化呈現，讓複雜數據變得簡單易懂。"
              },{
                name: "????",
                content: "??????????????????"
              }
            ],
            src: "#",
          },{
            title: "簡單快速建立資產",
            secTitle: "簡單易懂又快速",
            list: [
              {
                name: "簡化填寫流程",
                content: "減少繁瑣的填寫欄位，讓您能快速完成資產的建立。"
              },{
                name: "智慧引導",
                content: "提供智慧化的引導步驟，幫助您輕鬆添加和管理資產。"
              },{
                name: "模板使用",
                content: "提供數位資產添加模板，讓您可以一鍵生成資產訊息。"
              },{
                name: "快捷填寫",
                content: "快速添加數位資產，節省您寶貴的時間。"
              }
            ],
            src: "#",
          },{
            title: "設定的聯絡人",
            secTitle: "統一管理聯絡人訊息",
            list: [
              {
                name: "簡便設置",
                content: "快速選擇和設置聯絡人及指定代理人，並且可指定個別數位資產的繼承人。"
              },{
                name: "安全認證",
                content: "多重身份驗證，確保聯絡人設置安全可靠。"
              },{
                name: "靈活管理",
                content: "您可以隨時新增、更改或移除聯絡人資料，同步更新您的數位資產繼承人。"
              },{
                name: "通知系統",
                content: "設置時可選擇自動通知聯絡人，確保設立的訊息準確傳達。"
              }
            ],
            src: "#",
          }
        ],
        highlight: [
          {
            src: "",
            title: "安全有效管理您的數位資產",
            content: "安全且高效地管理您的數位資產——您的資料已使用銀行級安全加密技術。您可以一覽所有數位資產，包括社交平台帳號、銀行賬戶、電子郵件、訂閱服務等，方便更有效地管理和決策。"
          },{
            src: "",
            title: "選擇數位資產的處理",
            content: "您可以預先決定如何處理數位資產，例如：刪除、保留或轉讓給指定的繼承人。<br>以靈活的方式，處理不同類型的數位資產。"
          },{
            src: "",
            title: "訂立意外確認機制",
            content: "根據您的需求選擇檢核方式和提醒週期，確保當前無需開啟繼承機制。一旦需要啟動，您的數位遺產將完整且安全地交付給指定繼承人。"
          }
        ],
      };
  },
  methods: {
    openProductPage() {
      window.open('/dashboard', '_blank'); // dashboard 另開新視窗
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

header {

}
</style>
