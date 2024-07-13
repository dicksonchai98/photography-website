<template>
  <div class="bg-1f1f1f fixed w-full z-50">
    <div
      class="h-151 max-sm:px-[30px] max-w-[1290px] m-auto px-[30px] text-white flex justify-between"
    >
      <h1 class="text-white h-full flex items-center">
        <RouterLink @click="counterStore.scrollToTop()" to="/">
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
            class="decoration-yellow-500 text-decorations underline-offset-[24px] decoration-2"
          >
            <RouterLink @click="counterStore.scrollToTop()" to="/"> 首頁</RouterLink>
          </li>
          <li
            :class="{ 'current-page': route.name === 'about' }"
            class="underline-offset-[22px] decoration-yellow-500 decoration-2 text-decorations"
          >
            <RouterLink @click="counterStore.scrollToTop()" to="/about">婚禮影像</RouterLink>
          </li>
          <li
            :class="{ 'current-page': route.name === 'product' }"
            class="underline-offset-[24px] decoration-yellow-500 decoration-2 text-decorations"
          >
            <RouterLink @click="counterStore.scrollToTop()" to="/product">精選作品</RouterLink>
          </li>
          <li
            :class="{ 'current-page': route.name === 'package' }"
            class="underline-offset-[24px] decoration-yellow-500 decoration-2 text-decorations"
          >
            <RouterLink @click="counterStore.scrollToTop()" to="/package">方案介紹</RouterLink>
          </li>
          <li :class="{ 'current-page': route.name === 'contact' }" class="text-decorations">
            <RouterLink @click="counterStore.scrollToTop()" to="/contact">合作咨詢</RouterLink>
          </li>
        </ul>
      </div>
      <div class="h-full max-xl:hidden content-center">
        <a
          href="https://lin.ee/FLXQabKB"
          class="font-normal bg-transparent border text-15px border-green-600 ease-in-out hover:border-green-300 text-white py-3 px-4 rounded-full"
        >
          <span class="text-green-600 font-extrabold">Line</span>&ensp; 線上咨詢
        </a>
      </div>
      <div @click="sidebar()" class="xl:hidden h-full flex items-center">
        <Icon icon="codicon:three-bars" width="31" height="31" style="color: white" />
      </div>
    </div>
    <div
      :class="{ hidden: !isSidebar }"
      class="bg-black justify-center translate-x-0 flex transition duration-500 ease-in items-center fixed top-0 left-0 z-50 opacity-85 w-screen h-screen"
    >
      <div class="space-y-9 text-center">
        <p @click="sidebar" class="text-white hover:text-yellow-500">
          <RouterLink @click="counterStore.scrollToTop()" to="/"> 首頁</RouterLink>
        </p>
        <p @click="sidebar" class="text-white hover:text-yellow-500">
          <RouterLink @click="counterStore.scrollToTop()" to="/about">婚禮影像</RouterLink>
        </p>
        <p @click="sidebar" class="text-white hover:text-yellow-500">
          <RouterLink @click="counterStore.scrollToTop()" to="/product">精選作品</RouterLink>
        </p>
        <p @click="sidebar" class="text-white hover:text-yellow-500">
          <RouterLink @click="counterStore.scrollToTop()" to="/package">方案介紹</RouterLink>
        </p>
        <p @click="sidebar" class="text-white hover:text-yellow-500">
          <RouterLink @click="counterStore.scrollToTop()" to="/contact">合作咨詢</RouterLink>
        </p>
      </div>
      <Icon
        @click="sidebar()"
        class="fixed right-20 top-20"
        icon="line-md:menu-to-close-transition"
        width="31"
        height="31"
        style="color: white"
      />
    </div>
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
.text-decorations {
  position: relative;
  display: inline-block;
}

.text-decorations::before {
  content: '';
  position: absolute;
  bottom: 0;
  flex: justify-content;
  width: 0;
  height: 2px;
  background: #eab308;
  transition: width 0.5s ease-out;
}

.text-decorations:hover::before {
  width: 40%;
}

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
  position: relative;
  display: inline-block;
}

.current-page::before {
  content: '';
  position: absolute;
  bottom: 0;
  flex: justify-content;
  width: 40%;
  height: 2px;
  background: #eab308;
  transition: width 0.5s ease-out;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
