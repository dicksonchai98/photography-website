<script setup lang="ts">
import NavbarView from './components/navbarView.vue'
import FooterView from './components/footerView.vue'
import { RouterLink, RouterView } from 'vue-router'
import contactUsViewVue from './components/contactUsView.vue'
</script>

<template>
  <NavbarView />
  <RouterView />
  <FooterView />
  <contactUsViewVue />
</template>
