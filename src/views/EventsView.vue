<script setup>
import EventsComponent from "../components/EventsComponent.vue"

</script>


<template>

  <div class="flex flex-col text-center text-white p-4">
    <p class="text-4xl">Check out our in-store events!</p>
    <p class="text-2xl"> Click the desired link for more specific event and registration information.</p>
  </div>

  <div class="p-2">
    <Transition name="fade">
      <Suspense>
        <EventsComponent />
      </Suspense>
    </Transition>
  </div>


</template>


<style scoped>

</style>