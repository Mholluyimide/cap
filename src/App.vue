<script setup>
import { RouterView } from "vue-router";
import Header from "./components/nav.vue"
import Footer from "./components/footer.vue"
</script>

<template>
  <Header />

  <RouterView />
 
  <Footer />
</template>

<style scoped></style>
