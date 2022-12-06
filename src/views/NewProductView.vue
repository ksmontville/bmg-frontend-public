<script setup>
import {ref} from "vue"
import axios from "axios"
import ButtonComponent from "../components/ButtonComponent.vue"

const props = defineProps({
  apiUrl: String
})

const btnClick = (url) => {
  window.open(url)
}

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

  <div class="flex flex-col min-h-full rounded-lg opacity-80 text-white">

    <div class="title bg-white rounded-t-lg mb-6">
      <h3 v-if="data.title" class="header text-black text-center p-4">{{ data.title }}</h3>
    </div>

    <div class="new-products flex flex-row flex-nowrap justify-center gap-6">

      <div class="new-product card h-1/2" v-for="product in data.new_products" :key="product.id" :id="product.value.image.thumbnail.alt">

        <div class="card-title bg-blue-900 rounded-t-md text-center p-4">
          <h4 v-html="product.value.name"></h4>
        </div>

        <div class="card-body rounded-b-md bg-white text-black flex flex-row gap-8 p-8">

          <div class="flex flex-col justify-center items-center card-body-left gap-4">
            <img class="rounded-md border-4 border-black" :src="product.value.image.thumbnail.src" :alt="product.value.alt">
              <div class="card-button text-center p-4">
                <ButtonComponent button-text="Buy Now" button-class="text-lg text-white border-2 border-black bg-blue-900" @click="btnClick(product.value.link)" />
              </div>
          </div>

          <div class="card-body-right">
            <p class="text-md" v-html="product.value.description"></p>
          </div>
        </div>


      </div>

    </div>


  </div>

</template>


<style scoped>


</style>