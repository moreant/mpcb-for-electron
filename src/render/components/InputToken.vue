<script setup lang="ts">
import {ref, reactive} from "vue";
import Cookies from 'js-cookie'
import dayjs from 'dayjs'
import BaseStep from './BaseStep.vue'
import ExtraLink from './ExtraLink.vue'

import {getInfo} from "../api";

const token = ref<string>(Cookies.get('token')!);
const result = reactive({
  time: '',
  msg: '',
  flag: 0
})

const onSubmit = async () => {
  try {
    await getInfo(token.value);
    emit('change', token.value)
    result.msg = '校验 Token 成功.'
    Cookies.set('token', token.value)
    result.flag = 1
  } catch (e) {
    let msg = e.message
    if (msg === '用户信息验证失败') {
      msg = msg + ', 请重新获取 Token.'
    }
    emit('change', '')
    result.msg = msg
    result.flag = -1
  }
  result.time = dayjs().format('HH:mm:ss')
}

const emit = defineEmits(['change'])

if (token.value) {
  onSubmit()
}

</script>

<template>
  <base-step step="1" title="输入 Token 获取用户信息。" :flag="result.flag">
    <template v-slot:left>
      <div class="flex space-x-2">
        <input
            v-model="token"
            type="text"
            placeholder="token"
            class="w-full input input-primary input-bordered"
        />
        <button @click="onSubmit" class="btn btn-primary">提交</button>
      </div>
      <div>
        <a href="http://topurl.cn/809" target="_blank" class="btn btn-link p-0"
          >获取 Token ?
          <extra-link />
        </a>
      </div>
    </template>
    <template v-slot:right v-if="result.flag !== 0">
      <h2 class="card-title">
        运行结果
        <div
            class="badge badge-lg"
            :class="{
            'badge-success': result.flag === 1,
            'badge-error': result.flag === -1
          }"
        >
          {{ result.flag === 1 ? '成功' : '失败' }}
        </div>
      </h2>
      <p>{{ result.time }}</p>
      <p>{{ result.msg }}</p>
    </template>
  </base-step>
</template>

<style></style>
