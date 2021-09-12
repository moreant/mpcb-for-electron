<script setup>
import ExtraLink from './ExtraLink.vue'
import {openExtraLink} from '@/render/utils/helper'

</script>

<template>
  <div
      class="
      flex flex-col
      justify-end
      h-52
      lg:h-72
      bg-primary
      p-6
      lg:p-12
      rounded-box
      shadow-md
      text-white
    "
  >
    <div class="text-2xl lg:text-6xl pb-1 lg:pb-4 font-bold">Hi, 欢迎使用 MPCB！</div>
    <div class="flex flex-col lg:flex-row w-full justify-between">
      <div class="text-base lg:text-3xl">简洁高效的批量下载魅族云相册中的图片。</div>
      <a
          @click="openExtraLink('https://github.com/moreant/mpcb')"
          target="_blank"
          class="btn-link text-base lg:text-3xl text-white cursor-pointer"
      >使用文档
        <extra-link class="w-4 lg:w-5 h-6 inline"
        />
      </a>
    </div>
  </div>
</template>

<style></style>
