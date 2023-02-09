<script setup>
import {ref, watch} from "vue"
import axios from "axios"
import Button from "../components/ButtonComponent.vue"
import BannerComponent from "../components/BannerComponent.vue"
import SinglesView from "./SinglesView.vue"
import NewProductView from "./NewProductView.vue"
import WhatsNewView from "./WhatsNewView.vue"
import MaintenancePage from "./MaintenancePage.vue"


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
  data.value = response.data
}

function wait(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const timedOut = ref(null)

const timeout = async () => {
  await wait(1000)
}

try {
  await getData()
} catch (error) {
  timedOut.value = true
}

watch(timedOut, await timeout)

</script>

<template>

  <Suspense>
    <BannerComponent :api-url=apiBanner />
    <template #fallback>
        <div class="text-center text-3xl text-white">
          Fetching banner data, please wait...
        </div>
      </template>
  </Suspense>

  <div v-if="timedOut" class="text-center text-5xl text-white">
    <MaintenancePage />
  </div>

  <div v-else class="flex flex-row flex-wrap justify-center items-baseline gap-x-16 gap-y-8 mt-4 mb-4" id="landingPageWrapper">

    <div class="flex flex-col p-8 gap-8 text-white" id="hero">

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

    </div>

    <div class="flex-1" id="whatsNewView">
      <Suspense>
        <WhatsNewView :main-text="data.whats_new_header" :sub-text="data.whats_new_text" :image-src="data.hero_image.meta.download_url"
                      :image-alt="data.hero_image_description" :image-height="data.hero_image.height"
                      :image-width="data.hero_image.height" :store-link="data.whats_new_link" :store-link-text="data.whats_new_link_text"/>

        <template #fallback>
          <div class="text-center text-3xl text-white">
            Fetching announcements data, please wait...
          </div>
        </template>
      </Suspense>
    </div>

    <div class="max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl" id="newProductsView">
      <Suspense>
        <NewProductView :api-url=apiProducts />

        <template #fallback>
          <div class="text-center text-3xl text-white">
            Fetching product data, please wait...
          </div>
        </template>
      </Suspense>

    </div>

    <div class="" id="magicSinglesView">
      <Suspense>
        <SinglesView :api-url=apiSingles />

        <template #fallback>
          <div class="text-center text-3xl text-white">
          Fetching data, please wait...
        </div>
      </template>
      </Suspense>
    </div>
  </div>
</template>

<style scoped>

#heroText {
  font-family: Montserrat, sans-serif;
}

#newProductsView {

}

</style>
