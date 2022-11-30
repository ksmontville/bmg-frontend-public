<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  buttonText: String,
  buttonTextColor: String,
  buttonBackgroundColor: String,
  buttonBorderColor: String,
  buttonClass: String,
})

</script>


<template>
  <div class="btn">
    <button class="rounded-full p-2 font-bold border border-2"
            :class="[props.buttonClass]"
            type="submit" :value=props.buttonText>{{ props.buttonText }}</button>
  </div>
</template>

<style scoped>

</style>