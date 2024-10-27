<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7 col-sm-12 row-l">
                <div class="col-12">
                    <div class="card dash">
                        <h3>
                            <div class="icon">
                                <span class="material-symbols-outlined">dashboard</span>
                            </div>
                            儀表板
                        </h3>
                        <span>歡迎回來，Carol！讓我們繼續<br>組織今天，準備明天！</span>
                    </div>

                </div>
                <div class="row l2">
                    <div class="col-md-7 col-sm-12">
                        <guide />
                    </div>
                    <div class="col-md-5 col-sm-12">
                        <div class="card suicide-note">
                            <h5>早計劃免紛爭，<br>立即建立數位遺囑！</h5>
                            <span>我們的 AI 技術簡化撰寫流程，引導您輕鬆完成訂立數位遺囑，讓遺產規劃變得簡潔有力。</span>
                            <router-link to="" class="create">去建立</router-link>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 col-sm-12">
                        <div class="card story">
                            <h5>紀錄您的生活故事</h5>
                            <span>為您的親友製作時間囊、寫下重要回憶或更多...</span>
                            <router-link to="" class="create">去建立</router-link>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12">
                        <div class="card books">
                            <div class="carousel">
                                <!-- 左右切換按鈕 -->
                                <button class="carousel-btn prev" @click="prevSlide" :disabled="currentIndex === 0">
                                    <span class="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button class="carousel-btn next" @click="nextSlide"
                                    :disabled="currentIndex === slides.length - 1">
                                    <span class="material-symbols-outlined">chevron_right</span>
                                </button>

                                <!-- 輪播內容 -->
                                <div class="carousel-container"
                                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                                    <div v-for="(slide, index) in slides" :key="index" class="carousel-slide" :style="{
                                        backgroundImage: `url(${slide.image})`,
                                    }">
                                        <h5>{{ slide.title }}</h5>
                                    </div>
                                </div>

                                <!-- 指示點 -->
                                <div class="carousel-indicators">
                                    <button v-for="(slide, index) in slides" :key="index" class="indicator"
                                        :class="{ active: currentIndex === index }" @click="goToSlide(index)"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-5 col-sm-12 row-r">
                <div class="card overView">
                    <div class="details">
                        <div class="info">
                            <img src="/src/assets/dashboard/user.png" alt="" class="info__img">
                            <h3 class="info__name">Carol SU</h3>
                            <span class="info__note">您有 1 筆未指定繼承人的數位資產！</span>
                        </div>
                        <div class="dataSummary">
                            <div class="dataSummary__item">
                                <div class="dataSummary__title">數位資產總數</div>
                                <h3 class="dataSummary__num">1</h3>
                            </div>
                            <div class="dataSummary__item">
                                <div class="dataSummary__title">進行中的資產數</div>
                                <h3 class="dataSummary__num">1</h3>
                            </div>
                            <div class="dataSummary__item">
                                <div class="dataSummary__title">聯絡人數</div>
                                <h3 class="dataSummary__num">1</h3>
                            </div>
                        </div>
                    </div>
                    <div class="recent">
                        <h5>最近新增</h5>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import guide from "./guide.vue";

export default {
    name: 'dashboard',
    components: {
        guide,
    },
    data() {
        return {
            currentIndex: 0,
            slides: [
                {
                    title: '離世後誰處理您的社群帳號？數位資產管理入門 101',
                    image: '/src/assets/dashboard/book1.png'
                },
                {
                    title: '了解遺囑與數位遺產的關係',
                    image: '/src/assets/dashboard/book2.png'
                },
                {
                    title: '如何保護您的加密貨幣資產',
                    image: '/src/assets/dashboard/book3.png'
                }
                // 可以繼續添加更多輪播項目
            ]
        }
    },
    methods: {
        nextSlide() {
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
            }
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        goToSlide(index) {
            this.currentIndex = index;
        }
    }
}
</script>
<style scoped lang="scss">
@import "src/css/_mixins.scss";

.container-fluid,
.container-fluid>.row {
    height: 100%;
}

.row-l,
.row-r {
    @include flex($d: column, $a: stretch, $j: start);
    flex-wrap: wrap;
}

.row-l {
    justify-content: space-between;
}

.card {
    @include dashboard_card;
    justify-content: start;

    h3,
    h5 {
        font-weight: var(--b);
    }
}

.create {
    @include button(var(--white), var(--blue-48));
}

.dash {
    background-image: url(/src/assets/dashboard/dashboardBg.png);
    background-size: cover;
    color: var(--white);

    h3 {
        @include flex($g: 0.75rem);
    }

    .icon {
        background-color: var(--white);
        width: 2.25rem;
        height: 2.25rem;
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

.guide {
    height: 100%;
}

.suicide-note {
    background-image: url(/src/assets/dashboard/suicideBg.png);
    background-size: cover;
    gap: 1rem;
    height: 100%;
}

.story {
    background-image: url(/src/assets/dashboard/storyBg.png);
    background-size: cover;
    gap: 1rem;
}

.books {
    height: 100%;
    padding: 0; // 移除內邊距以便輪播填滿卡片
    overflow: hidden; // 防止輪播內容溢出
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;

    // 輪播容器
    &-container {
        display: flex;
        height: 100%;
        transition: transform 0.5s ease;
    }

    // 輪播項目
    &-slide {
        min-width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        padding: 1.5rem;

        h5 {
            // color: var(--white);
            font-weight: var(--b);
            position: relative;
            z-index: 2;
        }
    }

    // 切換按鈕
    &-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.8);
        border: none;
        cursor: pointer;
        z-index: 3;
        display: grid;
        place-items: center;
        transition: all 0.3s ease;

        &:hover {
            background-color: white;
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.prev {
            left: 1rem;
        }

        &.next {
            right: 1rem;
        }

        .material-symbols-outlined {
            font-size: 24px;
            color: var(--blue-48);
        }
    }

    // 指示點
    &-indicators {
        position: absolute;
        bottom: 1rem;
        left: 35%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
        z-index: 3;

        .indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: var(--natural-50);
            border: none;
            cursor: pointer;
            padding: 0;
            transition: all 0.3s ease;

            &.active {
                background-color: var(--blue-48);
                transform: scale(1.2);
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.8);
            }
        }
    }
}


.overView {
    @include flex($d: column, $a: stretch, $j: start);
    background-color: var(--natural-90);
    height: 100%;
}

.details {
    @include flex($d: column, $a: stretch);

    .info {
        @include flex($d: column, $g: 1rem);

        &__img {
            width: 6.5rem;
            height: 6.5rem;
            border-radius: 50%;
        }

        &__name {
            font-weight: var(--b);
        }

        &__note {
            font-weight: var(--m);
        }
    }

    .dataSummary {
        @include flex($g: 0.75rem);

        &__item {
            background-color: var(--white);
            border-radius: 1.5rem;
            padding: 1rem;
            width: 100%;
            @include flex($d: column, $g: 0);
            flex-direction: column-reverse;
        }
    }
}

.l2 {
    height: 370px;
}
</style>