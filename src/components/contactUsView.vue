<template>
  <div
    :class="{ 'rotate-180 transition duration-300 ease-in': contactStatus }"
    @click="contactClicked()"
    class="fixed bottom-[29px] z-10 right-[29px] transition duration-300 ease-in"
  >
    <div
      v-if="!contactStatus"
      class="cursor-pointer pointer-events-auto h-[62px] justify-center flex items-center bg-[#eef075] w-[62px] rounded-full"
    >
      <Icon icon="tabler:message-filled" width="25" height="25" style="color: white" />
    </div>
    <div
      v-else
      class="cursor-pointer pointer-events-auto h-[62px] justify-center flex -rotate-180 items-center bg-[#eef075] w-[62px] rounded-full"
    >
      <Icon icon="line-md:menu-to-close-transition" width="31" height="31" style="color: white" />
    </div>
  </div>
  <div
    :class="{ '-translate-y-[70px] duration-300 ease-out transition': contactStatus }"
    class="fixed bottom-[29px] right-[29px] duration-300 ease-out transition"
  >
    <a
      href="https://lin.ee/FLXQabKB"
      class="cursor-pointer pointer-events-auto h-[62px] justify-center flex items-center bg-[#38b900] w-[62px] rounded-full"
    >
      <Icon icon="cib:line" width="31" height="31" style="color: white" />
    </a>
  </div>
  <div
    :class="{ '-translate-y-[140px] duration-300 ease-out transition': contactStatus }"
    class="fixed bottom-[29px] right-[29px] duration-300 ease-out transition"
  >
    <a
      href="mailto:cnbzstudio@gmail.com"
      class="cursor-pointer pointer-events-auto h-[62px] justify-center flex items-center bg-[#ff485f] w-[62px] rounded-full"
    >
      <Icon icon="ic:baseline-email" width="31" height="31" style="color: white" />
    </a>
  </div>
  <div
    :class="{ '-translate-y-[210px] duration-300 ease-out transition': contactStatus }"
    class="fixed bottom-[29px] right-[29px] duration-300 ease-out transition"
  >
    <a
      href="https://www.instagram.com/cnbz_work/"
      class="cursor-pointer pointer-events-auto h-[62px] justify-center flex items-center bg-ig-gradient w-[62px] rounded-full"
    >
      <Icon icon="icon-park-outline:instagram" width="31" height="31" style="color: white" />
    </a>
  </div>
  <div
    :class="{ 'opacity-0 duration-300 ease-out transition': contactStatus }"
    class="fixed bottom-[40px] right-[100px] duration-300 ease-out transition z-30"
  >
    <div class="container">
      <div class="arrow">
        <div class="outer"></div>
        <div class="inner"></div>
      </div>
      <div class="message-body z-0 text-center">
        <p>聯絡我們</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const contactStatus = ref(false)

const contactClicked = () => {
  contactStatus.value = !contactStatus.value
  console.log(contactStatus.value)
}
</script>

<style scoped>
.container {
  clear: both;
  position: relative;
  z-index: 0;
}

.container .arrow {
  width: 12px;
  height: 20px;
  overflow: hidden;
  position: relative;
  float: right;
  top: 6px;
  right: 1px;
  z-index: 0;
}

.container .arrow .outer {
  width: 0;
  height: 0;
  border-left: 20px solid #000000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.container .arrow .inner {
  width: 0;
  height: 0;
  border-left: 20px solid #ffffff;
  border-top: 9px solid transparent;
  border-bottom: 10px solid transparent;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
}

.container .message-body {
  float: left;
  width: 80px;
  z-index: 0;
  height: auto;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border: 1px solid #000000;
  padding: 6px 8px;
  border-radius: 10px;
}

.container .message-body p {
  margin: 0;
}
</style>
