<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import "@fullcalendar/core/vdom.js"
import FullCalendar from "@fullcalendar/vue3"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const apiUrl = import.meta.env.VITE_API_URL
const eventsUrl = import.meta.env.VITE_API_EVENTS

const data = reactive([])

const getData = async () => {
  const response = await axios.get(eventsUrl)
  data.value = response.data.items
}

const events = reactive([])

const getEvents = async () => {
  for(let i=0; i < data.value.length; i++) {
    const event = await axios.get(`${apiUrl}/${data.value[i].id}/`)
    events.push(event.data)
  }
}

const handleEventClick = (eventClickInfo) => {
  eventClickInfo.jsEvent.preventDefault()
  console.log(eventClickInfo.event.title)
  for(let i=0; i < events.length; i++) {
    if( eventClickInfo.event.title === events[i].title) {
      window.open(events[i].store_link)
    }
  }
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: 'dayGridMonth',
  dayMaxEventRows: true,
  eventClick: handleEventClick,
  eventDisplay: "block",
  eventBackgroundColor: "#1e3a8a",
  googleCalendarApiKey: import.meta.env.VITE_CALENDAR_API_KEY,
  events: {
    googleCalendarId: import.meta.env.VITE_CALENDAR_ID,
  }
}

await getData()

await getEvents()

</script>


<template>

  <div class="flex flex-col text-white mb-8">
    <FullCalendar :options="calendarOptions"/>
  </div>
  
</template>


<style scoped>

</style>