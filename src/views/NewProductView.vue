<script setup>
import {ref} from "vue"
import axios from "axios"
import ButtonComponent from "../components/ButtonComponent.vue";

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

  <div class="flex flex-col gap-8 min-h-full rounded-lg opacity-80 text-white">

    <div class="title bg-white rounded-t-lg">
      <h3 v-if="data.title" class="header text-black text-center p-4">{{ data.title }}</h3>
    </div>

    <div class="new-products flex flex-col flex-wrap justify-center items-center gap-6">

      <div class="new-product card h-1/2" v-for="product in data.new_products" :key="product.id" :id="product.value.image.thumbnail.alt">

        <div class="card-title text-center">
          <h4 v-html="product.value.name"></h4>
        </div>

        <div class="card-body flex flex-row gap-8 p-8 border-b-8 border-white">

          <div class="flex flex-col justify-center items-center card-body-left gap-4">
            <img class="rounded-md border-4 border-black" :src="product.value.image.thumbnail.src" :alt="product.value.alt">
              <div class="card-button text-center p-4">
                <button class="text-lg text-black text-center bg-white rounded-lg p-4" type="button" @click="btnClick(product.value.link)">Buy Now</button>
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