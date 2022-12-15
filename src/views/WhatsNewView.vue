<script setup>
const props = defineProps({
  mainText: String,
  subText: String,
  imageSrc: URL,
  imageAlt: String,
  imageWidth: Number,
  imageHeight: Number,
})

</script>


<template>

  <div class="rounded-lg flex-1 flex flex-col ext-white bg-blue-900 text-white min-h-1/2 border-b-4 border-t-4 border-b-white p-8 gap-8" id="whatsNew">
    <span v-html="props.mainText" class="text-center"></span>
    <span v-html="props.subText"></span>
        <div v-if="props.imageSrc" class="self-center p-4" id="heroImage">
          <figure>
            <img class="bg-white border-4 border-blue-900 rounded-md" :src="props.imageSrc"
                 :height="props.imageHeight" :width="props.imageWidth" :alt="props.imageAlt">
            <figcaption class="text-white text-center italic">{{ props.imageAlt }}</figcaption>
          </figure>
        </div>
    </div>

</template>

<style scoped>

</style>