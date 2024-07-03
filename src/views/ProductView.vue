<template>
  <div class="w-full bg-[#1a1a1a] h-[1290px] overflow-hidden">
    <div class="lg:px-[110px] mx-auto">
      <div class="overflow-x-scroll post-container">
        <ul class="grid grid-cols-7 gap-2 mt-[231px] text-white space-x-2 max-lg:min-w-[1500px]">
          <li
            @click="page = 'a'"
            :class="{ 'bg-black': page === 'a' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            商業廣告
          </li>
          <li
            @click="page = 'b'"
            :class="{ 'bg-black': page === 'b' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            活動廣告
          </li>
          <li
            @click="page = 'c'"
            :class="{ 'bg-black': page === 'c' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            車輛記錄影片
          </li>
          <li
            @click="page = 'd'"
            :class="{ 'bg-black': page === 'd' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            婚禮記錄
          </li>
          <li
            @click="page = 'e'"
            :class="{ 'bg-black': page === 'e' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            音樂MV
          </li>
          <li
            @click="page = 'f'"
            :class="{ 'bg-black': page === 'f' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            短影音
          </li>
          <li
            @click="page = 'g'"
            :class="{ 'bg-black': page === 'g' }"
            class="h-[50px] hover:bg-black flex items-center pl-2"
          >
            平面影像
          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="page === 'a'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in data"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'b'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in anotherData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.someField"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'c'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in cartData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'd'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in weddingData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'e'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in musicData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'f'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in shortVideoData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <iframe
          width="293"
          height="165"
          :src="url.url"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div
      v-if="page === 'g'"
      class="mx-auto mt-3 p-4 sm:w-1290 grid max-sm:grid-cols-1 grid-cols-4 gap-3 gap-y-20 text-white"
    >
      <div
        v-for="(url, index) in imageData"
        class="text-white text sm:w-full max-sm:mx-auto"
        :key="index"
      >
        <img :src="url.url" class="w-[293px] h-[165px] object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
const page = ref('a')
const data = ref([
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0',
  //   'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0'
])

const anotherData = ref([])
const cartData = ref([])
const weddingData = ref([])
const musicData = ref([])
const shortVideoData = ref([])
const imageData = ref([])

onMounted(async () => {
  try {
    const [
      commercialAdSnapshot,
      anotherCollectionSnapshot,
      cartRecordCollectionSnapshot,
      weddingCollection,
      musicMvCollection,
      shortVideoCollection,
      imageCollection
    ] = await Promise.all([
      getDocs(collection(db, 'commercial_ad')),
      getDocs(collection(db, 'activities_record')),
      getDocs(collection(db, 'cart_record')),
      getDocs(collection(db, 'wedding_record')),
      getDocs(collection(db, 'music_mv')),
      getDocs(collection(db, 'short_video')),
      getDocs(collection(db, 'image'))
    ])

    // 处理 commercial_ad 集合的数据
    let ad = []
    commercialAdSnapshot.forEach((doc) => {
      console.log(doc.data().brand)
      const todo = {
        url: doc.data().brand
      }
      ad.push(todo)
    })
    data.value = ad

    // 处理 another_collection 集合的数据
    let anotherAd = []
    anotherCollectionSnapshot.forEach((doc) => {
      console.log(doc.data().brand) // 假设文档中有字段 someField
      const item = {
        someField: doc.data().brand
      }
      anotherAd.push(item)
    })
    anotherData.value = anotherAd
    let cartDatas = []
    cartRecordCollectionSnapshot.forEach((doc) => {
      console.log(doc.data())
      const todo = {
        url: doc.data().youtube_url
      }
      cartDatas.push(todo)
    })
    cartData.value = cartDatas

    data.value = ad
    let weddingDatas = []
    weddingCollection.forEach((doc) => {
      console.log(doc.data().brand)
      const todo = {
        url: doc.data().brand
      }
      weddingDatas.push(todo)
    })
    weddingData.value = weddingDatas
    let musicDatas = []
    musicMvCollection.forEach((doc) => {
      console.log(doc.data().brand)
      const todo = {
        url: doc.data().brand
      }
      musicDatas.push(todo)
    })
    musicData.value = musicDatas
    let shortVideoDatas = []
    shortVideoCollection.forEach((doc) => {
      console.log(doc.data().brand)
      const todo = {
        url: doc.data().brand
      }
      shortVideoDatas.push(todo)
    })
    shortVideoData.value = shortVideoDatas
    let imageDatas = []
    imageCollection.forEach((doc) => {
      console.log(doc.data().brand)
      const todo = {
        url: doc.data().brand
      }
      imageDatas.push(todo)
    })
    imageData.value = imageDatas
  } catch (error) {
    console.error('Error fetching documents: ', error)
  }
})
</script>

<style scoped>
.post-container::-webkit-scrollbar {
  display: none;
}
</style>
