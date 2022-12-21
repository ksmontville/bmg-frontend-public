<script setup>
import {ref} from "vue";
import emailjs from '@emailjs/browser'

const my_name = 'blackmoongames'
const name = ref(null)
const email = ref(null)
const message = ref(null)
const messageSent = ref(null)

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

const sendEmail = ()=> {
  try {
    emailjs.sendForm(serviceId, templateId, '#contactForm', publicKey,
        {
          my_name: my_name,
          name: name.value,
          email: email.value,
          message: message.value,
        }
      )
  }
  catch(error) {
    console.log(error)
  }
  messageSent.value = !messageSent.value
}

</script>

<template>
  <div v-if="!messageSent" class="bg-op-0" id="contactFormContainer">
    <form class="flex flex-col gap-8" @submit.prevent id="contactForm" @submit="sendEmail">
      <label class="underline text-center text-3xl"><strong>How Can We Help You?</strong></label>
      <div class="flex flex-row gap-2">
        <label class="underline"><strong>Name</strong></label>
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder=" Your Name"
          required
        >
      </div>

      <div class="flex flex-row gap-2">
      <label class="underline"><strong>Email</strong></label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder=" Your Email"
        required
        >
      </div>
      <textarea class="border-2 border-black rounded-md p-2"
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder=" Message"
        required
        >

      </textarea>

      <input class="bg-blue-900 text-white rounded-lg w-1/2 p-2 self-center focus:border-4 focus:border-blue-400 hover:border-2 hover:border-blue-400"
             type="submit" value="Send">
    </form>

  </div>
  <Transition v-else name="contact">
    <div class="bg-blue-900 text-white text-center text-3xl p-4 rounded-md">
      <p>Message sent.</p>
      <p>Thank you!</p>
    </div>
  </Transition>


</template>

<style scoped>

</style>