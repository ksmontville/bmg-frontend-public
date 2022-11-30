<script setup>
import {defineProps, ref} from "vue";
import axios from "axios";

const props = defineProps({
  apiUrl: String
})

const data = ref("")
const isHidden = ref(true)
const isDesktop = ref(window.innerWidth >= 768)

function toggleNav() {
isHidden.value = !isHidden.value
}

const getLogo = async () => {
  const response = await axios.get(props.apiUrl)
  console.log(response.data)
  data.value = response.data
}

await getLogo()

</script>


<template>
  <div class="navbar bg-white" :class="isDesktop ? 'flex flex-row justify-between items-center' : '' ">

    <div class="navbar-items flex flex-row flex-nowrap justify-between items-center p-4">
      <div class="navbar-logo text-xl">
        <router-link :to="{name: 'home'}" @click="isHidden=true">
          <img class="" :src="data.nav_img.meta.download_url" alt="Black Moon Games logo">
        </router-link>
      </div>

      <div v-if="!isDesktop" class="navbar navbar-toggle flex flex-col flex-nowrap" @click="toggleNav">
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
      </div>
    </div>


<!--  Mobile navbar -->
    <Transition v-if="!isDesktop" name="slide">
      <div v-show="!isHidden" class="navbar-dropdown">
        <div class="navbar-navlinks flex flex-col flex-nowrap items-start p-2 gap-6">
          <router-link :to="{name: 'shop'}" @click="toggleNav">Shop</router-link>
          <router-link :to="{name: 'singles'}" @click="toggleNav">Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About</router-link>
        </div>
      </div>
    </Transition>

<!--    Desktop navbar-->
    <div v-else class="navbar-dropdown">
        <div class="navbar-navlinks flex flex-row flex-nowrap items-start p-2 gap-6">
          <router-link :to="{name: 'shop'}" @click="toggleNav">Shop</router-link>
          <router-link :to="{name: 'singles'}" @click="toggleNav">Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About</router-link>
        </div>
      </div>


  </div>

</template>


<style scoped>

</style>