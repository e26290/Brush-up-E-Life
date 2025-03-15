<template>
    <div class="login-container">
        <div class="background-animation"></div>
        <div class="content">
            <div class="content＿text">
                <h1>輕鬆管理數位資產</h1>
                <ul>
                    <li>
                        <div class="icon">
                            <zap />
                        </div>
                        快速便捷，只需幾分鐘即可完成
                    </li>
                    <li>
                        <div class="icon">
                            <cloud-upload />
                        </div>
                        數位服務，所有流程皆在在線上完成
                    </li>
                    <li>
                        <div class="icon">
                            <lock-keyhole />
                        </div>
                        安全可靠，保護使用者個人資料
                    </li>
                </ul>
            </div>
            <div class="login-form">
                <h2 class="title">會員登入</h2>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="username">帳號</label>
                        <input type="text" id="username" v-model="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">密碼</label>
                        <input type="password" id="password" v-model="password" required>
                    </div>
                    <div class="form-group">
                        <label for="captcha">驗證碼</label>
                        <div class="d-flex">
                            <input type="text" id="captcha" v-model="captcha" required>
                            <img src="/src/assets/login/example.jpg" alt="驗證碼" class="captcha">
                        </div>
                    </div>
                    <div class="form-group checkbox">
                        <input type="checkbox" id="remember" v-model="remember">
                        <label for="remember">記住帳號</label>
                    </div>
                    <div class="button-group">
                        <button type="button" @click="forgotPassword" class="btn-forgot">忘記密碼</button>
                        <button type="submit" class="btn-login">登入</button>
                    </div>
                </form>
            </div>
        </div>

        <span class="copyright">數位人生 ｜© 2024 bruspup-elife. All right reserved.</span>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'login',
    setup() {
        const router = useRouter();
        const username = ref('admin');
        const password = ref('111111');
        const captcha = ref('8403');
        const remember = ref(true);

        const login = () => {
            if (username.value && password.value && captcha.value) {
                console.log('登入成功', username.value, password.value, captcha.value, remember.value);
                router.push('/onBoarding');
            } else {
                alert('請填寫所有必要欄位');
            }
        };

        const forgotPassword = () => {
            // 實現忘記密碼邏輯
            console.log('忘記密碼');
        };

        return {
            username,
            password,
            captcha,
            remember,
            login,
            forgotPassword
        };
    }
};
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding: 0.75rem;
}

.background-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/src/assets/login/bg.png);
    background-size: cover;
    background-position: center;
    animation: gradientBG 90s ease-in-out infinite;
}

@keyframes gradientBG {
    0% {
        scale: 1;
    }

    50% {
        scale: 1.5;
    }

    100% {
        scale: 1;
    }
}

.content {
    @include flex;
    z-index: 99;
}

.content＿text {
    min-width: 480px;

    h1 {
        white-space: nowrap;
        // color: var(--white);
        margin-bottom: 1.5rem;
    }

    li {
        @include flex($j: start, $g: 1rem);
        padding: 0.5rem;
        // color: var(--white);

        .icon {
            width: 3.5rem;
            height: 3.5rem;
            background-color: var(--blue-90);
            display: grid;
            place-items: center;
            border-radius: 0.5rem;
            font-size: var(--xl2);
            svg {
                stroke: var(--blue-48);
                width: var(--imd);
            }
        }
    }

    @include breakpoint(1024px) {
        display: none;
    }
}

.login-form {
    @include dashboard_card;
    align-items: stretch;
    padding: 2rem;
    width: 100%;
    min-width: 480px;

    @include breakpoint(576px) {
        min-width: auto;
    }
}

.title {
    text-align: center;
    color: #333;
    margin-bottom: 0.5rem;
    font-weight: var(--b);
}

.subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: var(--r);
}

.form-group {
    margin-bottom: 1rem;

    label {
        margin: 0;
    }
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.checkbox {
    display: flex;
    align-items: center;
}

.checkbox input {
    margin-right: 0.5rem;
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
}

.btn-forgot {
    background: none;
    border: none;
    color: #666;
    text-decoration: underline;
    cursor: pointer;
}

.btn-login {
    @include flex($g: 0.5rem);
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background-color: var(--blue-48);
    color: var(--white);
    min-width: 100px;
    // @include button;
}

// .btn-login:hover {
//     background-color: #45a049;
// }

.copyright {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--blue-30);
    font-size: var(--sm);
    text-align: center;
    width: 100%;
}

.captcha {
    height: 40px;
    margin-left: 24px;
}
</style>