<template>
    <section id="media">
        <div class="marquee-container">
            <div class="marquee" ref="marqueeContent">
                <div class="marquee-content">
                    <div v-for="(card, index) in cards" :key="'a' + index" class="card">
                        <img :src="card.image" :alt="card.title" />
                        <div class="card__text">
                            <h6>{{ card.name }}</h6>
                            <span>{{ card.jobtitle }}</span>
                        </div>
                        <img :src="card.icon" :alt="share" class="icon" />
                    </div>
                </div>
                <div class="marquee-content">
                    <div v-for="(card, index) in cards" :key="'b' + index" class="card">
                        <img :src="card.image" :alt="card.title" />
                        <div class="card__text">
                            <h6>{{ card.name }}</h6>
                            <span>{{ card.jobtitle }}</span>
                        </div>
                        <img :src="card.icon" :alt="share" class="icon"/>
                    </div>
                </div>
                <div class="marquee-content">
                    <div v-for="(card, index) in cards" :key="'b' + index" class="card">
                        <img :src="card.image" :alt="card.title" />
                        <div class="card__text">
                            <h6>{{ card.name }}</h6>
                            <span>{{ card.jobtitle }}</span>
                        </div>
                        <img :src="card.icon" :alt="share" class="icon"/>
                    </div>
                </div>
                <div class="marquee-content">
                    <div v-for="(card, index) in cards" :key="'b' + index" class="card">
                        <img :src="card.image" :alt="card.title" />
                        <div class="card__text">
                            <h6>{{ card.name }}</h6>
                            <span>{{ card.jobtitle }}</span>
                        </div>
                        <img :src="card.icon" :alt="share" class="icon"/>
                    </div>
                </div>
                <div class="marquee-content">
                    <div v-for="(card, index) in cards" :key="'b' + index" class="card">
                        <img :src="card.image" :alt="card.title" />
                        <div class="card__text">
                            <h6>{{ card.name }}</h6>
                            <span>{{ card.jobtitle }}</span>
                        </div>
                        <img :src="card.icon" :alt="share" class="icon"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    setup() {
        const cards = ref([
            {
                image: "src/assets/index/media/pic1.png",
                name: "Alan Weaver",
                jobtitle: "Senior Financial Advisor",
                icon: "src/assets/index/media/fb.svg",
            },{ 
                image: "src/assets/index/media/pic2.png",
                name: "Lily Harper",
                jobtitle: "Chief Marketing Officer",
                icon: "src/assets/index/media/fb.svg",
            },{ 
                image: "src/assets/index/media/pic3.png",
                name: "Sophia Marshall",
                jobtitle: "Customer Success Manager",
                icon: "src/assets/index/media/dis.svg",
            },{ 
                image: "src/assets/index/media/pic4.png",
                name: "李美琳",
                jobtitle: "首席行銷長",
                icon: "src/assets/index/media/ins.svg",
            },{ 
                image: "src/assets/index/media/pic5.png",
                name: "林志遠",
                jobtitle: "商務拓展總監",
                icon: "src/assets/index/media/x.svg",
            },{ 
                image: "src/assets/index/media/pic6.png",
                name: "Emma Taylor",
                jobtitle: "Product Strategy Lead",
                icon: "src/assets/index/media/dis.svg",
            },{ 
                image: "src/assets/index/media/pic7.png",
                name: "Olivia Collins",
                jobtitle: "Head of UX/UI Design",
                icon: "src/assets/index/media/ins.svg",
            },{ 
                image: "src/assets/index/media/pic8.png",
                name: "趙立群",
                jobtitle: "使用者體驗設計主管",
                icon: "src/assets/index/media/x.svg",
            },
        ]);

        const marqueeContent = ref(null);

        const setAnimationDuration = () => {
            if (marqueeContent.value) {
                const contentWidth = marqueeContent.value.offsetWidth;
                const animationDuration = contentWidth / 150; // 調整這個數值以改變速度
                marqueeContent.value.style.setProperty(
                    "--animation-duration",
                    `${animationDuration}s`
                );
            } else {
                console.warn("Marquee content ref not found");
            }
        };

        onMounted(() => {
            setAnimationDuration();
            window.addEventListener("resize", setAnimationDuration);
        });

        return {
            cards,
            marqueeContent,
        };
    },
};
</script>

<style scoped lang="scss">
@import "src/css/_mixins.scss";

.marquee-container {
    width: 100%;
    // overflow: hidden;
    position: relative;
}

.marquee {
    display: flex;
    width: 200%;
    animation: marquee var(--animation-duration, 30s) linear infinite;
}

.marquee-content {
    @include flex;
    width: 100%;
    margin-right: 1.5rem;
}

.card {
    @include flex($g: 0.5rem);
    flex-wrap: nowrap;
    padding: 0.5rem;
    border: none;
    border-radius: 50px;
    background-color: var(--white);
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
    
    &__text {
        @include flex($d: column, $j:flex-start, $a:flex-start, $g: 0rem);
        h6, span {
            white-space: nowrap;
        }
        h6 {
            margin: 0;
            font-weight: var(--b);
        }
        span {
            color: var(--natural-50);
            font-size: var(--sm);
        }
    }

}

.card img {
    width: 3rem;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
}

.card .icon {
    width: 3rem;
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>