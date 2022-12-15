<script setup>
import {defineProps, ref} from "vue";
import axios from "axios";

const props = defineProps({
  apiUrl: String
})

const shopUrl = import.meta.env.VITE_SHOP_URL
const singlesUrl = import.meta.env.VITE_SINGLES_URL

const data = ref("")
const isHidden = ref(true)
const isDesktop = ref(window.innerWidth >= 768)

function toggleNav() {
isHidden.value = !isHidden.value
}

const getLogo = async () => {
  const response = await axios.get(props.apiUrl)
  data.value = response.data
}

await getLogo()

</script>


<template>
  <div class="opacity-85 bg-white text-blue-900 rounded-t-lg" :class="isDesktop ? 'flex flex-row justify-between items-center' : '' " id="navbar">

    <div class="flex flex-row flex-nowrap justify-between items-center p-8" id="navbarItems">
      <div class="text-xl" id="navbarLogo">
        <router-link :to="{name: 'home'}" @click="isHidden=true">

          <div v-if="data.logo" class="p-2" id="navbarBrand">
            <img :src="data.logo.meta.download_url" height="96" width="96" :alt="data.logo.title">
          </div>
        </router-link>
      </div>

      <div v-if="!isDesktop" class="flex flex-col flex-nowrap" @click="toggleNav" id="navbarToggle">
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
        <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
      </div>
    </div>


<!--  Mobile navbar -->
    <Transition v-if="!isDesktop" name="slide">
      <div v-show="!isHidden" id="navbarDropdownMobile">
        <div class="flex flex-col flex-nowrap items-start text-lg p-2 pb-6 ml-4 gap-6" id="navbarNavLinksMobile">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <a :href="shopUrl" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Online Store</a>
          <a :href="singlesUrl" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Magic Singles</a>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>
    </Transition>

<!--    Desktop navbar-->
    <div v-else id="navbarDropdownDesktop">
        <div class="flex flex-row flex-nowrap text-xl p-6 gap-16" id="navbarNavLinksDesktop">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <a :href="shopUrl" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Online Store</a>
          <a :href="singlesUrl" target="_blank" referrerpolicy="no-referrer" @click="toggleNav">Magic Singles</a>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>


  </div>

</template>


<style scoped>

.slide-enter-from {
  height: 0;
  opacity: 0;
}
.slide-enter-to {
  height: 268px;
  opacity: 1;
}
.slide-enter-active {
  overflow: hidden;
  transition: all 500ms cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.slide-leave-from {
  overflow: hidden;
  height: 268px;
  opacity: 1;
}

.slide-leave-to {
  height: 0;
  opacity: 0;
}

.slide-leave-active {
  transition: all 500ms cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

</style>