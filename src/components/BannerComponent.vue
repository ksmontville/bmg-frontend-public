<script setup>
import {ref} from "vue"
import axios from "axios"

const props = defineProps({
  apiUrl: String,
})

const data = ref("")

const getData = async () => {
  const response = await axios.get(props.apiUrl)
  console.log(response.data)
  data.value = response.data
}

await getData()


</script>



<template>

  <div class="flex flex-col flex-nowrap bg-blue-900 text-white">

    <span v-html="data.banner_text"></span>
    <span v-html="data.banner_subtext"></span>

    <div v-if="data.image" class="banner-img m-6">
        <img :src="data.image.url" :height="data.image.height" :width="data.image.width" :alt="data.image.alt">
      </div>

  </div>



</template>



<style scoped>

</style>