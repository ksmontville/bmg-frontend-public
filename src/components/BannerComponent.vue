<script setup>
import {ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String,
})

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  data.value = response.data
}

await getData()

</script>

<template>
  <div v-if="data.banner_text" class="flex flex-col flex-nowrap justify-between items-center bg-blue-900 text-white text-center
    border-b-4 border-white gap-y-2 p-2">

    <span class="" v-html="data.banner_text"></span>
    <span class="" v-html="data.banner_subtext"></span>
    <span class="">Check it out <a class="font-bold underline" :href="data.banner_link" target="_blank">here.</a></span>

    <div v-if="data.image" class="banner-img">
        <img class="rounded-lg" :src="data.image.url" :height="data.image.height" :width="data.image.width" :alt="data.image.alt">
      </div>
  </div>
</template>



<style scoped>

</style>