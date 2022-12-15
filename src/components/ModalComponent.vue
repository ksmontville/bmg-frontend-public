<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  eventData: {
    type: Object,
  },
  mouseX: {
    type: Number,
  },
  mouseY: {
    type: Number,
  }
})

const mousePosX = String(props.mouseX)
const mousePosY = String(props.mouseY)

defineEmits(['closeModal'])

const isMobile = ref(null)
const pos = "absolute"

onMounted(() => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     isMobile.value = true;
   }
})

</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-if="isActive && !isMobile" :style="{position: pos, top: String(props.mouseY) + 'px', left: String(props.mouseX) + 'px'}"
           :class="{modalWrapperMobile: isMobile}" class="rounded-lg overflow-y-scroll bg-white bg-op-30 h-96 max-w-screen-md" id="modalWrapper">
        <Transition name="modal-inner">
          <div v-if="isActive" class="p-8" id="modalContent">

            <slot />

            <button class="text-white bg-black rounded-lg mt-24 py-2 px-6" type="submit" @click="$emit('closeModal')">Close</button>

          </div>
        </Transition>
      </div>

      <div v-else :class="{modalWrapperMobile: isMobile}" class="rounded-lg overflow-y-scroll bg-white bg-op-30 max-h-72 max-w-screen-md">
        <Transition name="modal-inner">
          <div v-if="isActive" class="p-8" id="modalContent">

            <slot />

            <button class="text-white bg-black rounded-lg mt-24 py-2 px-6" type="submit" @click="$emit('closeModal')">Close</button>

          </div>
        </Transition>
      </div>


    </Transition>
  </Teleport>

</template>


<style scoped>

.modalWrapperMobile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-outer-enter-active, .modal-outer-leave-active {
  transition: opacity 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from, .modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}

</style>