<template>
  <div class="w-full bg-[#1a1a1a] items-center flex flex-col">
    <div
      class="max-w-[1290px] px-10 grid lg:grid-cols-2 lg:grid-rows-2 gap-[25px] mt-[200px] text-white"
    >
      <div class="flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">⾏銷短影⾳</p>
          <p class="font-normal mt-[17px] leading-8">
            結合流⾏趨勢、⽤有效率⽅式進⾏量化製作，將⾏銷散播⼒濃縮成⼀部引流短影片，推薦⽤包⽉⽅
            案進⾏。
          </p>
        </div>
      </div>
      <div class="flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">形象影片</p>
          <p class="font-normal mt-[17px] leading-8">
            ⽤影像與觀眾產⽣共鳴，進⽽提升企業形象、強化商業競爭⼒，朔造品牌的形象⼒量，獲得更⼤的
            市場影響⼒。
          </p>
        </div>
      </div>
      <div class="flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">活動紀錄</p>
          <p class="font-normal mt-[17px] leading-8">
            記錄產品發布會和開幕等商業活動，能夠抓住活動的精彩瞬間和重要內容，展⽰活動的氛圍和意
            義，並提升品牌形象，達到宣傳的效果。
          </p>
        </div>
      </div>
      <div class="flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">多機轉播、直播</p>
          <p class="font-normal mt-[17px] leading-8">
            我們提供多機位拍攝、即時串流和專業導播服務，確保活動現場精彩瞬間被⾼質量傳播。通過互動
            功能和後期製作，增強觀眾參與度並提升活動的宣傳效果。
          </p>
        </div>
      </div>
    </div>
    <div
      class="w-[199px] text-center my-10 leading-[26px] font-[900] content-center rounded-lg bg-yellow-500 py-3 hover:bg-yellow-400 text-white pointer-events-auto"
    >
      <RouterLink
        @click="counterStore.scrollToTop()"
        class="block mt-2 text-black w-full h-full"
        to="/contact"
      >
        <span class="text-white font-familys">NTD10,000起</span><br />與我們討論</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<style scoped>
.font-familys {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: x-large;
}
</style>
