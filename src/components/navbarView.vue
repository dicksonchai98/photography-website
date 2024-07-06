<template>
  <div
    class="bg-1f1f1f w-full max-w-[1920px] h-151 max-sm:px-[30px] px-[115px] text-white flex justify-between fixed z-50"
  >
    <h1 class="text-white h-full content-center">
      <RouterLink to="/">
        <img
          class="w-[151px] h-[151px] max-sm:w-[100px] max-sm:h-[100px]"
          src="../assets/logo-w.png"
          alt=""
        />
      </RouterLink>
    </h1>
    <div class="block h-full content-center">
      <ul class="flex max-xl:hidden text-white font-semibold">
        <li
          :class="{ 'current-page': route.name === 'home' }"
          class="decoration-yellow-500 underline-offset-[24px] decoration-2 hover:underline"
        >
          <RouterLink @click="counterStore.scrollToTop()" to="/"> 首頁</RouterLink>
        </li>
        <li
          :class="{ 'current-page': route.name === 'about' }"
          class="underline-offset-[24px] decoration-yellow-500 decoration-2 hover:underline"
        >
          <RouterLink @click="counterStore.scrollToTop()" to="/about">婚禮影像</RouterLink>
        </li>
        <li
          :class="{ 'current-page': route.name === 'product' }"
          class="underline-offset-[24px] decoration-yellow-500 decoration-2 hover:underline"
        >
          <RouterLink @click="counterStore.scrollToTop()" to="/product">精選作品</RouterLink>
        </li>
        <li
          :class="{ 'current-page': route.name === 'package' }"
          class="underline-offset-[24px] decoration-yellow-500 decoration-2 hover:underline"
        >
          <RouterLink @click="counterStore.scrollToTop()" to="/package">方案介紹</RouterLink>
        </li>
        <li
          :class="{ 'current-page': route.name === 'contact' }"
          class="underline-offset-[24px] decoration-yellow-500 decoration-2 hover:underline"
        >
          <RouterLink @click="counterStore.scrollToTop()" to="/contact">合作咨詢</RouterLink>
        </li>
      </ul>
    </div>
    <div class="h-full max-xl:hidden content-center">
      <button
        class="font-normal bg-transparent border text-15px border-green-600 ease-in-out hover:border-green-300 text-white py-2 px-4 rounded-full"
      >
        <span class="text-green-600 font-extrabold">Line</span>&ensp; 線上咨詢
      </button>
    </div>
    <div @click="sidebar()" class="xl:hidden h-full content-center">
      <Icon icon="codicon:three-bars" width="31" height="31" style="color: white" />
    </div>
  </div>
  <div
    v-show="isSidebar"
    class="bg-black fixed top-0 left-0 z-50 scrollbar-hide opacity-85 text-center content-center w-full h-full space-y-7"
  >
    <Icon
      @click="sidebar()"
      class="absolute right-20 top-20"
      icon="line-md:menu-to-close-transition"
      width="31"
      height="31"
      style="color: white"
    />

    <p @click="sidebar" class="text-white hover:text-yellow-500">
      <RouterLink to="/"> 首頁</RouterLink>
    </p>
    <p @click="sidebar" class="text-white hover:text-yellow-500">
      <RouterLink to="/about">婚禮影像</RouterLink>
    </p>
    <p @click="sidebar" class="text-white hover:text-yellow-500">
      <RouterLink to="/product">精選作品</RouterLink>
    </p>
    <p @click="sidebar" class="text-white hover:text-yellow-500">
      <RouterLink to="/package">方案介紹</RouterLink>
    </p>
    <p @click="sidebar" class="text-white hover:text-yellow-500">
      <RouterLink to="/contact">合作咨詢</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
const route = useRoute()
console.log(route)
const isSidebar = ref(false)
const sidebar = () => {
  isSidebar.value = !isSidebar.value
  console.log(isSidebar.value)
}
</script>

<style scoped>
div {
  color: black;
}

div ul li {
  line-height: 60px;
  height: 60px;
  display: block;
  padding: 0px 25px;
}

.current-page {
  text-decoration: solid underline rgb(234 179 8) 2px;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
