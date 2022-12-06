<script setup>
import {ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String
})

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  console.log(response.data)
  data.value = response.data
  console.log(data.value)
}

await getData()

</script>


<template>

  <div class="flex flex-col gap-8 min-h-full text-white">

    <p v-if="data.title" class="header text-center">{{ data.title }}</p>

    <div class="new-products flex flex-row flex-wrap gap-6">

      <div v-if="data.product_1" class="product-1">
        <img class="rounded-md" :src="data.product_1[1].value.thumbnail.src" height="100" width="100" :alt="data.product_1[1].value.title">
        <p v-html="data.product_1[0].value"></p>
      </div>

      <div v-if="data.product_2.length !== 0" class="product-2">
        <img class="rounded-md" :src="data.product_2[1].value.thumbnail.src" height="100" width="100" :alt="data.product_2[1].value.title">
        <p v-html="data.product_2[0].value"></p>
      </div>

    </div>


  </div>

</template>


<style scoped>


</style>