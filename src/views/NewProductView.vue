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

  <div class="flex flex-col items-stretch min-h-full rounded-lg text-white p-4">

    <div class="bg-white mb-2" id="cardHeader">
      <h3 v-if="data.title" class="header text-black text-center p-4">{{ data.title }}</h3>
    </div>

    <div class="flex flex-row flex-wrap justify-evenly gap-8" id="newProductsCard">

      <div v-for="product in data.new_products" :key="product.id" :id="product.value.image.thumbnail.alt" id="card">

        <div class="bg-blue-900 rounded-t-md text-center p-4" id="cardTitle">
          <h4 v-html="product.value.name"></h4>
        </div>

        <div class="rounded-b-md bg-white text-black flex flex-row gap-8 p-8" id="cardBody">

          <div class="flex flex-col justify-center items-center gap-4" id="cardBodyLeft">
            <img class="rounded-md border-4 border-black" :src="product.value.image.thumbnail.src" :alt="product.value.alt" id="cardImage">
              <div class="text-center" id="cardButton">
                <ButtonComponent button-text="Buy Now" button-class="text-md text-white border-2 border-black bg-blue-900" @click="btnClick(product.value.link)" />
              </div>
          </div>

          <div class="" id="cardBodyRight">
            <p class="text-md" v-html="product.value.description"></p>
          </div>
        </div>


      </div>

    </div>


  </div>

</template>


<style scoped>

#cardHeader {
  font-family: Montserrat, sans-serif;
}

</style>