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
  <div class="opacity-85 navbar bg-white text-blue-900" :class="isDesktop ? 'flex flex-row justify-between items-center' : '' ">

    <div class="navbar-items flex flex-row flex-nowrap justify-between items-center p-8">
      <div class="navbar-logo text-xl">
        <router-link :to="{name: 'home'}" @click="isHidden=true">

          <div v-if="data.logo" class="nav-brand p-2">
            <img :src="data.logo.meta.download_url" height="72" width="72" :alt="data.logo.title">
          </div>
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
        <div class="navbar-navlinks flex flex-col flex-nowrap items-start text-lg p-2 pb-6 ml-4 gap-6">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <a href="https://www.shop-black-moon.com/" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Online Store</a>
<!--          <router-link :to="{name: 'shop'}" @click="toggleNav">Online Store</router-link>-->
          <router-link :to="{name: 'singles'}" @click="toggleNav">Magic Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>
    </Transition>

<!--    Desktop navbar-->
    <div v-else class="navbar-dropdown">
        <div class="navbar-navlinks flex flex-row flex-nowrap text-lg p-6 gap-12">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <a href="https://www.shop-black-moon.com/" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Online Store</a>
<!--          <router-link :to="{name: 'shop'}" @click="toggleNav">Online Store</router-link>-->
          <router-link :to="{name: 'singles'}" @click="toggleNav">Magic Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>


  </div>

</template>


<style scoped>

</style>