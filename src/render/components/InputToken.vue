<script setup>
import {ref, watch} from "vue";
import {getSig} from '../api/meizu'

const token = ref('')

watch(token, (token) => {
  getSig(token).then(res => {
    console.log(res)
  })
})

</script>

<template>
  <input type="text" v-model="token">
</template>


<style scoped>

</style>