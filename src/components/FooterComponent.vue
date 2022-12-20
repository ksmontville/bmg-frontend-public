<script setup>
import {ref} from "vue";

const isOpen = ref(null)

const toggleSignupForm = () => {
  isOpen.value = !isOpen.value
}

const getBtnText = () => {
  if(isOpen.value === true) {
    return "Close Signup Form"
  }
  else {
    return "Join Our Newsletter!"
  }
}

const openFacebook = () => {
  window.open('https://www.facebook.com/blackmoonnh')
}
const openDiscord = () => {
  window.open('https://discord.com/invite/QeTfZXt')
}
const openTwitter = () => {
  window.open('https://twitter.com/blackmoongamenh?lang=en')
}

</script>

<template>

  <div class="rounded-b-lg opacity-85 flex flex-col justify-center items-center p-8 gap-12 mt-auto bg-white text-black">

    <Button :button-text="getBtnText()" button-class="bg-blue-900 border-black text-white p-2 mt-4 mb-4" @click="toggleSignupForm"/>

    <Transition name="contact">
      <div v-if="isOpen" id="signupForm">
        <SignupForm :is-open="isOpen"/>
      </div>
    </Transition>

    <div class="flex flex-col gap-2">
      <div class="social-media-icons flex flex-row flex-nowrap justify-center items-center gap-6">
        <button class="focus:rounded-full focus:border-2 focus:border-blue-400">
          <font-awesome-icon class="rounded-full hover:p-1 hover:border-2 border-blue-400"
                             icon="fa-brands fa-facebook" size="2x" color="#1e3a8a" @click="openFacebook" /></button>
        <button class="focus:rounded-full focus:border-2 focus:border-blue-400">
          <font-awesome-icon class="rounded-full hover:p-1 hover:border-2 border-blue-400"
                             icon="fa-brands fa-discord" size="2x" color="#818cf8" @click="openDiscord" /></button>
        <button class="focus:rounded-full focus:border-2 focus:border-blue-400">
          <font-awesome-icon class="rounded-full hover:p-1 hover:border-2 border-blue-400"
                             icon="fa-brands fa-twitter" size="2x" color="#38bdf8" @click="openTwitter" /></button>
      </div>

      <div class="flex flex-col justify-center items-center p-2 gap-2 copyright text-xs text-zinc-300">
        <p>Black Moon Games, &copy; 2022-2023</p>
  <!--      <p>Photo by <a href="https://unsplash.com/@jogaway?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jonathan Greenaway</a>-->
  <!--        on <a href="https://unsplash.com/s/photos/dice-falling?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>-->
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>