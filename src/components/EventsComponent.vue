<script setup>
import {onMounted, reactive, ref} from "vue";
import ModalComponent from "../components/ModalComponent.vue"
import axios from "axios";
import "@fullcalendar/core/vdom.js"
import FullCalendar from "@fullcalendar/vue3"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import googleCalendarPlugin from "@fullcalendar/google-calendar"

const apiUrl = import.meta.env.VITE_API_URL
const eventsUrl = import.meta.env.VITE_API_EVENTS
const calendarLink = ref('')
const fullCalendar = ref(null)

const eventModalActive = ref(null)
const eventsModalActive = ref(null)

const data = reactive([])
const event = ref(null)
const events = reactive([])
const googleCalendarEvents = reactive([])
const selectedDate = ref('')

const mouseX = ref(0)
const mouseY = ref(0)

const getData = async () => {
  const response = await axios.get(eventsUrl)
  data.value = response.data.items
}

const getEvents = async () => {
  for(let i=0; i < data.value.length; i++) {
    const event = await axios.get(`${apiUrl}/${data.value[i].id}/`)
    events.push(event.data)
  }
}
const getGoogleCalendarEvents = async () => {
  const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${import.meta.env.VITE_CALENDAR_ID}/events?key=${import.meta.env.VITE_CALENDAR_API_KEY}`)
  googleCalendarEvents.push(response.data.items)
  console.log(googleCalendarEvents)
}

const getMouseCoords = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const openStoreLink = (url) => {
  window.open(url)
}

const addToCalendar = (googleCalendarUrl) => {
  window.open(googleCalendarUrl)
}
const toggleEventModal  = () => {
  eventModalActive.value = !eventModalActive.value
}

const toggleEventsModal  = () => {
  eventsModalActive.value = !eventsModalActive.value
}

const handleEventClick = (eventClickInfo) => {
  eventClickInfo.jsEvent.preventDefault()
  for(let i=0; i < events.length; i++) {
    if(eventClickInfo.event.title === events[i].title) {
      calendarLink.value = eventClickInfo.event.url
      event.value = events[i]
    }

  }
  toggleEventModal()
}

const handleDateClick = (eventClickInfo) => {
  toggleEventsModal()

}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: 'dayGridMonth',
  dayMaxEventRows: false,
  eventClick: handleEventClick,
  dateClick: handleDateClick,
  eventDisplay: "block",
  eventBackgroundColor: "#1e3a8a",
  googleCalendarApiKey: import.meta.env.VITE_CALENDAR_API_KEY,
  events: {
    googleCalendarId: import.meta.env.VITE_CALENDAR_ID,
  }
}

await getData()
await getEvents()
await getGoogleCalendarEvents()
</script>


<template>


  <div class="z-0 text-white mb-16 mt-8" @click="getMouseCoords">

    <FullCalendar class="min-h-fit" ref="fullCalendar" :options="calendarOptions"/>

    <ModalComponent class="z-10" :is-active="eventModalActive" :event-data="event" @close-modal="toggleEventModal" :mouse-x="mouseX" :mouse-y="mouseY">
        <div class="text-black" id="eventModal">
          <ul class="flex flex-col items-center gap-8">
            <li>
              <h4>{{ event.title }}</h4>
            </li>
            <li>
              <h5>@ {{ event.location }}</h5>
            </li>
            <li>
              <span v-html="event.description"></span>
            </li>
            <li class="flex flex-col items-center gap-2 mb-4">
              <strong>Start: {{ event.start_time.slice(0, -3) }}, {{ event.start_date }}</strong>
              <strong>End: {{ event.end_time.slice(0, -3) }}, {{ event.end_date}}</strong>
            </li>
            <li class="flex flex-row gap-4">
              <button class="" @click="addToCalendar(calendarLink)">Add to calendar</button>
              <button class="" @click="openStoreLink(event.store_link)">Register</button>
            </li>
          </ul>
        </div>
    </ModalComponent>
  </div>

<!--  <ModalComponent :is-active="eventsModalActive" :event-data="events" @close-modal="toggleEventsModal">-->
<!--    <p>Events</p>-->
<!--    <ul v-for="event in googleCalendarEvents[0]" :key="event.id">-->
<!--      <li>{{ event.summary }}</li>-->
<!--    </ul>-->
<!--  </ModalComponent>-->




</template>


<style scoped>

button {
  @apply bg-blue-900 text-white p-2 rounded-lg border-2 border-black
}

</style>