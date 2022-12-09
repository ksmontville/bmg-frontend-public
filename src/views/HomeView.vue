<script setup>
import {ref} from "vue"
import axios from "axios"
import Button from "../components/ButtonComponent.vue"
import BannerComponent from "../components/BannerComponent.vue"
import SinglesView from "./SinglesView.vue"
import NewProductView from "./NewProductView.vue"

const homeUrl = import.meta.env.VITE_API_HOME
const shopUrl = import.meta.env.VITE_SHOP_URL
const apiBanner = import.meta.env.VITE_API_BANNER
const apiProducts = import.meta.env.VITE_API_PRODUCTS
const apiSingles = import.meta.env.VITE_API_SINGLES

const shopBtnClick = () => {
  window.open(`${shopUrl}`)
}

const data = ref("")

const getData = async () => {
  const response = await axios.get(homeUrl)
  console.log(response.data)
  data.value = response.data
}

await getData()


</script>

<template>

  <Suspense>
    <BannerComponent :api-url=apiBanner />
  </Suspense>

  <div class="flex flex-row flex-wrap justify-center items-baseline gap-x-16 gap-y-8 mt-4 mb-4" id="landingPageWrapper">

    <div class="flex flex-col p-8 items-start gap-8 text-white" id="hero">

      <div class="" id="heroText">
        <span v-html="data.hero_text" class=""></span>
      </div>

      <div class="mt-4" id="heroSubTextOne">
        <p v-html="data.sub_text_one" class=""></p>
      </div>

      <div class="mt-6 italic" id="heroSubTextTwo">
        <p v-html="data.sub_text_two"></p>
      </div>

      <div class="flex flex-row items-center gap-x-6" id="heroButton">
        <Button button-text="Shop Black Moon" button-class="bg-blue-900 p-4" @click="shopBtnClick" />
      </div>

<!--      <div v-if="data.hero_image" class="opacity-80" id="heroImage">-->
<!--              <img class="bg-white border-4 border-blue-900" :src="data.hero_image.meta.download_url"-->
<!--                   :height="data.hero_image.height" :width="data.hero_image.width" :alt="data.hero_image.alt">-->
<!--      </div>-->
    </div>

    <div class="" id="magicSinglesView">
      <SinglesView :api-url=apiSingles />
    </div>

    <div class="" id="newProductsVIew">
      <NewProductView :api-url=apiProducts />
    </div>
  </div>



</template>

<style scoped>

#heroText {
  font-family: Montserrat, sans-serif;
}

</style>
