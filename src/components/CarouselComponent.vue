<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  slides: Array,

})

const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: 5000,
}

const breakpoints = {
   700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
}

const btnClick = (url) => {
  window.open(url)
}

</script>


<template>
  <div>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :settings="settings">

    <Slide v-for="slide in props.slides" :key="slide.id">
      <div class="flex flex-col items-stretch w-full min-h-full ml-1 mr-1 md:ml-4 md:mr-4" id="card">

        <div class="shrink bg-blue-900 rounded-t-md rounded-b-md text-white p-4" id="cardTitle">
          <h4 v-html="slide.value.name"></h4>
        </div>

        <div class="flex-1 bg-white text-black rounded-r-md flex flex-col items-center gap-12 p-8" id="cardBody">

          <div class="flex flex-col items-center gap-8">
            <img class="rounded-md w-fit hover:border-4 hover:border-blue-400 focus:border-4 focus:border-blue-400"
                 :src="slide.value.image.thumbnail.src" :alt="slide.value.alt" id="cardImage" @click="btnClick(slide.value.link)">
            <div class="text-center" id="cardButton">
              <Button button-text="Buy Online" button-class="rounded-md text-md text-white border-2 border-black bg-blue-900 pr-8" @click="btnClick(slide.value.link)" />
            </div>
          </div>

          <div class="text-justify" id="cardBodyRight">
            <p v-html="slide.value.description" class="text-lg"></p>
          </div>

        </div>

      </div>

    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>

  </Carousel>
  </div>
</template>


<style>

svg.carousel__icon {
  fill: #60a5fa;
  scale: 200%;

}


</style>