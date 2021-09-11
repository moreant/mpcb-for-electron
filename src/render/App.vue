<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import InputToken from "./components/InputToken.vue";
import SelectDir from './components/SelectDir.vue'

const token = ref('')
const changeFleg = ref(Date.now())

</script>


<template>
  <div class="full flex justify-center bg-gray-100">
    <div class="container p-4 lg:py-24 lg:pt-12">
      <Nav />
      <input-token
          @change="
          (e) => {
            token = e
          }
        "
      />
      <select-dir :token="token" @error="changeFleg = Date.now()" />
    </div>
  </div>
</template>


<style>
.full{
  min-height: 100vh;
}
</style>
