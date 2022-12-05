<script setup>
import {defineProps, ref} from "vue";

const props = defineProps({
  buttonText: String,
  buttonClass: String,
})

</script>


<template>
  <div class="btn">
    <button class="flex flex-row-reverse flex-nowrap justify-between items-center rounded-full p-4 font-bold border-2 gap-x-2"
            :class="[props.buttonClass]"
            type="button" :value=props.buttonText>{{ props.buttonText }}
      <label class="">
        <img src="/img/blackmoon_logo_small.png" alt="Small Black Moon logo.">
      </label>
    </button>
  </div>
</template>

<style scoped>

</style>