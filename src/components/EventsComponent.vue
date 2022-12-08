<script setup>
import "@fullcalendar/core/vdom.js"
import FullCalendar from "@fullcalendar/vue3"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const handleEventClick = (eventClickInfo) => {
  eventClickInfo.jsEvent.preventDefault()
  console.log(eventClickInfo.event.url)
}

const handleDateClick = (event) => {
  console.log(`${event.target} clicked`)
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: 'dayGridMonth',
  dayMaxEventRows: true,
  eventClick: handleEventClick,
  dateClick: handleDateClick,
  eventDisplay: "block",
  eventBackgroundColor: "#1e3a8a",
  googleCalendarApiKey: import.meta.env.VITE_CALENDAR_API_KEY,
  events: {
    googleCalendarId: import.meta.env.VITE_CALENDAR_ID,
  }
}


</script>


<template>

  <div class="flex flex-col text-white mb-8">
    <FullCalendar :options="calendarOptions"/>
  </div>


</template>


<style scoped>

</style>