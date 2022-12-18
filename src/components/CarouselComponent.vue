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
      // // 1024 and up
      // 1024: {
      //   itemsToShow: 4,
      //   snapAlign: 'start',
      // },
}

const btnClick = (url) => {
  window.open(url)
}

</script>


<template>
  <div>
  <Carousel :wrap-around="true" :breakpoints="breakpoints" :settings="settings">

    <Slide v-for="slide in props.slides" :key="slide.id">
      <div class="" id="card">

        <div class="bg-blue-900 rounded-t-md text-center text-white p-4" id="cardTitle">
          <h4 v-html="slide.value.name"></h4>
        </div>

        <div class="rounded-b-md bg-white text-black flex flex-row gap-8 p-8" id="cardBody">

          <div class="flex flex-col gap-8" id="cardBodyLeft">
            <img class="rounded-md border-4 border-black" :src="slide.value.image.thumbnail.src" :alt="slide.value.alt" id="cardImage">
              <div class="text-center" id="cardButton">
                <Button button-text="Buy Now" button-class="text-md text-white border-2 border-black bg-blue-900" @click="btnClick(slide.value.link)" />
              </div>
          </div>

          <div class="" id="cardBodyRight">
            <p class="text-md" v-html="slide.value.description"></p>
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
  fill: #1C315E;
}

</style>