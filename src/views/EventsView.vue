<script setup>
import EventsComponent from "../components/EventsComponent.vue"
import ButtonComponent from "../components/ButtonComponent.vue";

const subToCalendar = () => {
  window.open(import.meta.env.VITE_CALENDAR_URL)
}

</script>


<template>

  <div class="flex flex-col items-center gap-4 text-center text-white p-4">
    <p class="text-2xl mt-4">Subscribe to the Black Moon Games event calendar to stay up to date with the latest in-store events.</p>
    <ButtonComponent button-text="Subscribe to Calendar" button-class="mt-8 bg-blue-900" @click="subToCalendar"></ButtonComponent>
  </div>


  <div class="p-2">
    <Transition name="fade">
      <Suspense>
        <EventsComponent />
        <template #fallback>
          <div class="text-center text-xl text-white">
            Fetching event data, please wait...
          </div>
        </template>
      </Suspense>
    </Transition>
  </div>


</template>


<style scoped>

</style>