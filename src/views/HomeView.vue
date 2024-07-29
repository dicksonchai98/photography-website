<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

const scroll = ref(false)
const playButton = ref(null)
const video = ref(null)

const scrollBtn = () => {
  if (window.scrollY === 0) {
    scroll.value = false
  } else {
    scroll.value = true
  }
}
const onScroll = () => {
  scrollBtn()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  scrollBtn() // Initial check when component is mounted

  playButton.value.addEventListener('click', () => {
    video.value.play()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="h-screen w-full max-md:h-[600px] text-white overflow-hidden relative">
    <video ref="video" autoplay loop muted playsinline webkit-playsinline class="back-video">
      <source src="../assets/show reel.mp4" type="video/mp4" />
    </video>

    <div class="max-sm:text-center max-w-[1290px] mx-auto mt-[190px]">
      <div
        class="font-[900] mb-6 max-md:leading-[70px] max-md:content-center max-md:h-[150px] max-md:text-[60px] text-[150px] leading-140 h-280"
      >
        <img src="../assets/主頁字體.png" class="h-280 max-md:m-auto max-md:h-[150px]" alt="" />
      </div>
      <div class="mb-7 md:pl-3 max-md:justify-center flex">
        <img src="../assets/夕諾影像.png" class="h-[40px] w-[170px]" alt="" />
      </div>
      <div>
        <ul class="flex space-x-5 md:pl-7 max-md:justify-center">
          <a
            class="cursor-pointer pointer-events-auto h-[62px] justify-center flex items-center bg-gray-800 w-[62px] rounded-full"
            href="https://www.instagram.com/cnbz_work/"
          >
            <Icon
              icon="basil:facebook-messenger-solid"
              width="31"
              height="31"
              style="color: white"
              class="pointer-events-auto"
              href="https://www.facebook.com/cnbzwork"
            />
          </a>
          <a
            class="cursor-pointer pointer-events-auto h-[62px] bg-gray-800 w-[62px] rounded-full flex justify-center items-center"
            href="mailto:cnbzstudio@gmail.com"
          >
            <Icon icon="ic:baseline-email" width="31" height="31" style="color: white" />
          </a>
          <a
            class="cursor-pointer pointer-events-auto h-[62px] bg-gray-800 w-[62px] rounded-full flex justify-center items-center"
            href="https://www.instagram.com/cnbz_work/ "
          >
            <Icon icon="icon-park-outline:instagram" width="31" height="31" style="color: white" />
          </a>
          <a
            class="cursor-pointer pointer-events-auto h-[62px] bg-gray-800 w-[62px] rounded-full flex justify-center items-center"
            href="https://www.youtube.com/@cnbzwork/feature"
          >
            <Icon icon="mdi:youtube" width="31" height="31" style="color: white" />
          </a>
        </ul>
      </div>
    </div>
  </div>
  <div class="md:px-104px w-full pb-10 bg-[#1a1a1a] overflow-hidden">
    <div
      class="flex max-md:flex-col m-auto justify-between max-w-[1290px] items-center text-white mt-16 h-132"
    >
      <div class="text-[32px]">方案介紹</div>
      <div
        class="w-[199px] text-center leading-[53px] rounded-lg h-[53px] bg-blue-500 hover:bg-blue-700 text-white font-bold pointer-events-auto"
      >
        <RouterLink @click="counterStore.scrollToTop()" class="block w-full h-full" to="/package">
          VIEW ALL SERVICES</RouterLink
        >
      </div>
    </div>
    <div
      class="max-xl:flex max-xl:flex-col grid grid-cols-3 max-w-[1290px] m-auto max-md:w-[80%] max-md:m-auto max-md:mt-11 gap-[25px] grid-flow-col text-white"
    >
      <div class="h-427 flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="w-[280px] h-[226px]">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">專業影像服務</p>
          <p class="font-normal mt-[17px] leading-8">
            團隊用多年來的影像技術實務上經驗,來精準完成每一個客戶所託付的專案。
          </p>
        </div>
      </div>
      <div class="h-427 flex items-center bg-[#1f1f1f] hover:bg-yellow-400 p-14">
        <div class="w-[280px] h-[226px]">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">內容企劃服務</p>
          <p class="font-normal mt-[17px] leading-8">
            我們用超過100部作品的經驗,精準整理出專案的方向,更好去做行銷上的佈局,不浪費您每一分經費。
          </p>
        </div>
      </div>
      <div class="h-427 flex items-center hover:bg-yellow-400 bg-[#1f1f1f] p-14">
        <div class="w-[280px] h-[226px]">
          <Icon
            icon="fa-solid:photo-video"
            width="42"
            height="42"
            class="mb-[52px]"
            style="color: white"
          />
          <p class="text-[20px]">多機轉播&直播服務</p>
          <p class="font-normal mt-[17px] leading-8">
            視訊工程方面我們也是在行的,從小型到大型的視訊需求,安心交給我們即可。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-[#1f1f1f] text-white place-content-center">
    <div class="mx-auto flex flex-col items-center">
      <div class="h-158 my-auto flex flex-col justify-center space-y-5 text-center">
        <p class="text-[32px] font-[800]">知名品牌指地合作</p>
        <p class="font-normal">與各公司企業長期穩定配合,令人信賴的影像製作團隊</p>
      </div>
      <div class="sm:px-[65px]">
        <ul
          class="grid max-sm:grid-cols-2 max-sm:gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[60px]"
        >
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (1).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (2).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (3).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (4).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (5).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (6).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (7).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (8).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (9).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (10).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (11).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (12).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (13).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (14).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (15).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (16).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (17).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (18).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (19).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (20).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (21).png" alt="" />
          </li>
          <li class="w-[213px] h-[110px] max-sm:w-[170px]">
            <img class="object-contain w-full h-full" src="../assets/logo (22).png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <button
    :class="{ hidden: scroll }"
    ref="playButton"
    class="max-sm:opacity-100 buttons opacity-0 absolute bottom-[150px] text-white left-0 right-0"
  >
    Play
  </button>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
