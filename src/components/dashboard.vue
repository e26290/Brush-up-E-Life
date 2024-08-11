<template>
  <h1>345</h1>
  <router-link :to="{ name: 'digitalAssets' }">數位資產</router-link>
  <router-link :to="{ name: 'onBoarding' }">onBoarding</router-link>

  <router-view />
</template>

<script>
export default {
  name: 'dashboard',
  methods: {
    navigateTo(page) {
      this.$router.push({ name: page }).catch((err) => {
        console.error('Navigation error:', err);
      });
    }
  }
}
</script>
<style scoped lang="scss"></style>
