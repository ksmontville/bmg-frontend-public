<script setup>
import {reactive, ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String
})

const data = ref("")
const slides = ref([])

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  data.value = response.data

  for(let i=0; i < data.value.new_products.length; i++) {
    slides.value.push(data.value.new_products[i])
  }

}

await getData()

</script>


<template>

  <div class="bg-white mb-2" id="newProductsHeader">
    <h3 v-if="data.title" class="text-black text-center p-4">{{ data.title }}</h3>
  </div>

  <div class="">
    <ProductCarousel :slides="slides" />
  </div>

</template>


<style scoped>

</style>