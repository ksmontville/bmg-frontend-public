<script setup>
import {defineProps, onMounted, onUnmounted, ref, watch} from "vue";
import axios from "axios";

const props = defineProps({
  apiUrl: String
})

const data = ref("")
const isHidden = ref(true)
const windowWidth = ref(null)
const isDesktop = ref(window.innerWidth >= 768)

const toggleNav = () => {
  isHidden.value = !isHidden.value
}

const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

const getLogo = async () => {
  const response = await axios.get(props.apiUrl)
  data.value = response.data
}

watch(windowWidth, () => {
  windowWidth.value = window.innerWidth
  isDesktop.value = windowWidth.value >= 768;
})

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
          <div v-if="!isHidden" id="x-icon">
            <span class="bar-after-top bg-black block w-6 h-1 mx-auto my-1"></span>
            <span class="bar-after-bot bg-black block w-6 h-1 mx-auto my-1"></span>
          </div>

          <div v-else id="hamburger">
            <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
            <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
            <span class="bar bg-black block w-6 h-1 mx-auto my-1"></span>
          </div>
      </div>
    </div>


<!--  Mobile navbar -->
    <Transition v-if="!isDesktop" name="slide">
      <div v-show="!isHidden" id="navbarDropdownMobile">
        <div class="flex flex-col flex-nowrap items-start text-lg p-2 pb-6 ml-4 gap-6" id="navbarNavLinksMobile">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <router-link :to="{name: 'shop'}" @click="toggleNav">Online Store</router-link>
          <router-link :to="{name: 'singles'}" @click="toggleNav">Magic Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>
    </Transition>

<!--    Desktop navbar-->
    <div v-else id="navbarDropdownDesktop">
        <div class="flex flex-row flex-nowrap text-xl p-6 gap-16" id="navbarNavLinksDesktop">
          <router-link :to="{name: 'home'}" @click="toggleNav">Home</router-link>
          <router-link :to="{name: 'shop'}" @click="toggleNav">Online Store</router-link>
          <router-link :to="{name: 'singles'}" @click="toggleNav">Magic Singles</router-link>
          <router-link :to="{name: 'events'}" @click="toggleNav">Store Events</router-link>
          <router-link :to="{name: 'about'}" @click="toggleNav">About Us</router-link>
        </div>
      </div>


  </div>

</template>


<style scoped>

.bar-after-top {
  transform: rotate(45deg);
}

.bar-after-bot {
  transform: rotate(-45deg) translate(25%, -125%);
}

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