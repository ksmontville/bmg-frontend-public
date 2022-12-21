<script setup>
import EventsComponent from "../components/EventsComponent.vue"
import ButtonComponent from "../components/ButtonComponent.vue";

const subToCalendar = () => {
  window.open('https://calendar.google.com/calendar/u/0/r?cid=M2JmY2FjOTJhYjE1Y2Y4MzlkMTExY2ZhMTMyNjY4YmIxOGMyMjQ3M2I4ZjE5YTMxOGY1ZmIyMmExNzhjNTZhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t')
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