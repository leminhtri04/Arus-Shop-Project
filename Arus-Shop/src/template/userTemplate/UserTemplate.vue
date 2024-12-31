<template>
    <div>
      <header>
        <HeaderClient/>
      </header>
      <router-view/>
      <footer>
        <FooterClient/>
      </footer>
    </div>
</template>

<script setup lang="ts">
import FooterClient from './FooterClient.vue';
import HeaderClient from './HeaderClient.vue';
</script>

<style lang="scss" scoped>

</style>