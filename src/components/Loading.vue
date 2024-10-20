<template>
    <div class="loading-overlay">
        <div class="loading-content">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--natural-95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: transform 0.5s ease-in-out;
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
    font-size: 30px;
    color: #0000;
    background: linear-gradient(90deg, var(--blue-48) calc(50% + 0.5ch), #000 0) right/calc(200% + 1ch) 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: l7 3s infinite steps(11);
}

.loader:before {
    content: "Loading..."
}

@keyframes l7 {
    to {
        background-position: left
    }
}
</style>