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
const calendarLinkId = ref('')
const fullCalendar = ref(null)

const eventModalActive = ref(null)
const eventsModalActive = ref(null)

const data = reactive([])
const event = ref(null)
const events = reactive([])
const googleCalendarEvents = reactive([])

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
}

const getMouseCoords = (event) => {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
}

const openStoreLink = (url) => {
  window.open(url)
}

const addToCalendar = (eventId) => {
  window.open(`https://calendar.google.com/calendar/u/0/r/eventedit/copy/${eventId}/a3Ntb250dmlsbGVAZ21haWwuY29t`)
}
const toggleEventModal  = () => {
  eventModalActive.value = !eventModalActive.value
}

const handleEventClick = (eventClickInfo) => {
  eventClickInfo.jsEvent.preventDefault()
  for(let i=0; i < events.length; i++) {
    if(eventClickInfo.event.title === events[i].title) {
      calendarLinkId.value = eventClickInfo.event.url.slice(42)
      event.value = events[i]
    }

  }
  toggleEventModal()
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, googleCalendarPlugin],
  initialView: 'dayGridMonth',
  dayMaxEventRows: false,
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
await getGoogleCalendarEvents()
</script>

<template>
  <div class="z-0 text-white mb-16 mt-8" @click="getMouseCoords">
  <div v-if="eventModalActive" class="modal-mask z-20" @click="toggleEventModal"></div>

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
<!--            <li class="flex flex-col items-center gap-2 mb-4">-->
<!--              <strong>Start: {{ event.start_time.slice(0, -3) }}, {{ event.start_date }}</strong>-->
<!--              <strong>End: {{ event.end_time.slice(0, -3) }}, {{ event.end_date}}</strong>-->
<!--            </li>-->
            <li class="flex flex-col items-center gap-2 mb-4">
              <strong>Start: {{ event.start_time.slice(0, -3)}}</strong>
              <strong>End: {{ event.end_time.slice(0, -3)}}</strong>
            </li>
            <li class="flex flex-row gap-4">
              <button class="" @click="addToCalendar(calendarLinkId)">Add to calendar</button>
              <button v-if="event.store_link" @click="openStoreLink(event.store_link)">Register</button>
              <label v-else>Register for this event in-store.</label>
            </li>
          </ul>
        </div>
    </ModalComponent>
  </div>

</template>


<style scoped>

button {
  @apply bg-blue-900 text-white p-2 rounded-lg border-2 border-black
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
</style>