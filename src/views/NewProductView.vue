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

      <div v-for="product in data.new_products" :key="product.id">
        <p v-html="product.value.description"></p>
        <img :src="product.value.url" :alt="product.value.alt">

      </div>

    </div>


  </div>

</template>


<style scoped>


</style>