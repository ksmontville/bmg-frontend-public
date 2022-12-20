<script setup>
import {onMounted, ref} from "vue";

defineProps({
  isOpen: Boolean,
})

const subscribeClicked = ref(null)

const toggleSubscribeClicked = () => {
  subscribeClicked.value = true
}

onMounted( () => {
  const scriptValidation = document.createElement("script-validation");
  scriptValidation.setAttribute("src", "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js")
})

</script>

<template>
<!-- Begin Mailchimp Signup Form -->
<div class="bg-blue-900 opacity-85 text-white rounded-lg p-8" id="mc_embed_signup">
    <form action="https://black-moon-games.us8.list-manage.com/subscribe/post?u=485bc53f6d181be0d5c63d487&amp;id=f9590c1844&amp;f_id=00e06ae0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

      <div class="m-4" id="mc_embed_signup_scroll">
        <h4 class="text-center mb-4">Sign up for Black Moon Games Weekly!</h4>
        <h6 class="text-center mb-4">Stay updated with a weekly newsletter of events, promotions and new releases.</h6>
        <div class="text-center m-4 indicates-required font-bold"><span class="asterisk">*</span> indicates required</div>

        <div class="mc-field-group">
          <label for="mce-EMAIL">Email Address
            <span class="asterisk">*</span>
          </label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>

        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">First Name
            <span class="asterisk">*</span>
        </label>
        <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>
        <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
        </div>

        <div class="mc-field-group">
          <label for="mce-LNAME">Last Name </label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
          <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
        </div>

        <div id="mce-responses" class="clear foot">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_485bc53f6d181be0d5c63d487_f9590c1844" tabindex="-1" value=""></div>
        <div class="flex flex-row justify-center items-baseline gap-8 optionalParent">
          <div class="bg-white rounded-lg md:w-1/3 text-center mt-6 font-bold hover:border-2 hover:border-blue-400 clear foot">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="p-2" @click="toggleSubscribeClicked">
          </div>
        </div>
      </div>
    </form>
  <Transition name="contact">
    <div v-if="subscribeClicked" class="flex flex-col gap-4 bg-white text-black text-xl p-4 rounded-md mt-8">
      <p>Thank you for subscribing to the <strong>Black Moon Games</strong> newsletter.</p>
      <p>Check your email for the latest announcements, product releases, and event schedules!</p>
    </div>
  </Transition>
</div>
<!--End Mailchimp Signup Form-->
</template>

<style scoped>
input {
  @apply text-black p-2 rounded-md

}

label {
  @apply text-xl
}

.mc-field-group {
  @apply flex flex-col gap-2
}

</style>