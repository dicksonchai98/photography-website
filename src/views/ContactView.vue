<template>
  <div class="h-[1179px] px-7 bg-[#1a1a1a] flex justify-center">
    <div class="flex flex-col w-1290 h-[901px] mt-[200px]">
      <p class="text-[#f8d55a]">立即預約打造具有行銷力的高品質影片</p>
      <h1 class="text-white text-[60px] font-[800]">合作咨詢</h1>
      <p class="text-white font-normal mt-2">
        若您有關於影像製作、企業形象影片、產品影片、活動影像紀錄、多機轉播、
        多機直播等需求，歡迎來電洽詢，<br />或填寫下⽅表單，我們將盡速與您聯繫
      </p>
      <form @submit.prevent="submitForm" class="text-898989 mt-[50px]">
        <label class="block">
          <span class="block text-sm font-medium">姓名/公司行號 *</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-medium">聯絡電話 *</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            required
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-medium">聯絡信箱 *</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input
            type="email"
            name="Email"
            placeholder="Email Address"
            required
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <label class="block">
          <span class="block text-sm font-medium">咨詢項目</span>
          <select
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="Package"
            id="lang"
          >
            <option value="企業形象">企業形象</option>
            <option value="公司簡介">公司簡介</option>
            <option value="產品影片">產品影片</option>
            <option value="募資影片">募資影片</option>
            <option value="行銷短片">行銷短片</option>
            <option value="多機轉播">多機轉播</option>
            <option value="多機直播">多機直播</option>
            <option value="其他(如有其他需求,請於備注欄説明)">
              其他(如有其他需求,請於備注欄説明)
            </option>
          </select>
        </label>
        <label class="block">
          <span class="block text-sm font-medium">預算</span>
          <select
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            name="Budget"
            id="lang"
          >
            <option value="$10,000以下">$10,000以下</option>
            <option value="$10,001-$30,000">$10,001-$30,000</option>
            <option value="$30,001-$50,000">$30,001-$50,000</option>
            <option value="$50,001-100,000">$50,001-100,000</option>
            <option value="沒有概念">沒有概念</option>
          </select>
        </label>
        <label class="block">
          <span class="block text-sm font-medium">需求說明 *</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input
            type="textarea"
            name="Other"
            placeholder="Comment or Message"
            class="mt-1 block w-full px-3 h-[50px] py-2 bg-transparent border mb-[30px] border-898989 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>
        <button
          type="submit"
          class="w-[199px] text-center leading-[53px] rounded-lg h-[53px] bg-[#f8d55a] text-white font-bold"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const submitForm = () => {
  const form = new FormData()
  form.append('Name', document.querySelector('input[name="Name"]').value)
  form.append('Phone', document.querySelector('input[name="Phone"]').value)
  form.append('Email', document.querySelector('input[name="Email"]').value)
  form.append('Package', document.querySelector('select[name="Package"]').value)
  form.append('Budget', document.querySelector('select[name="Budget"]').value)
  form.append('Other', document.querySelector('input[name="Other"]').value)

  fetch(
    'https://script.google.com/macros/s/AKfycbzb6h7FjAOCMu2kzlgef6wAucIsCkXNn5zbH0eTRZ28AA3v3LEmurhIsVPrj6ouRTiQDA/exec',
    {
      method: 'post',
      body: form,
      mode: 'no-cors'
    }
  ).then((response) => {
    console.log(response)
    window.location.href = '/'
  })
}

// action="https://script.google.com/macros/s/AKfycbzb6h7FjAOCMu2kzlgef6wAucIsCkXNn5zbH0eTRZ28AA3v3LEmurhIsVPrj6ouRTiQDA/exec"
// method="post"
</script>

<style scoped></style>
