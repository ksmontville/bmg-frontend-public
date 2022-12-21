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

defineEmits(['closeModal'])

const isMobile = ref(null)
const showContent = ref(false)
const pos = "absolute"

const toggleModal = () => {
  showContent.value = false
}

onMounted(() => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     isMobile.value = true;
   }
})

</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer" @after-enter="showContent=true" @after-leave="showContent=false">
      <div v-if="isActive && !isMobile" :style="{position: pos, top: String(props.mouseY) + 'px', left: String(props.mouseX) + 'px'}"
           :class="{modalWrapperMobile: isMobile}" class="rounded-lg overflow-y-scroll bg-white bg-op-30 max-h-96 max-w-screen-md">

        <Transition name="modal-inner">
          <div v-if="showContent" class="p-8">
            <slot />
            <button class="text-white bg-black rounded-lg mt-24 py-2 px-6" type="submit" @click="$emit('closeModal')">Close</button>
          </div>
        </Transition>

      </div>
    </Transition>

    <Transition name="modal-outer" @after-enter="showContent=true" @after-leave="showContent=false">
      <div v-if="isActive && isMobile" :class="{modalWrapperMobile: isMobile}" class="rounded-lg overflow-y-scroll bg-white bg-op-30 max-h-96 max-w-screen-md">

        <Transition name="modal-inner">
          <div v-if="showContent" class="p-8">
            <slot />
            <button class="text-white bg-black rounded-lg mt-24 py-2 px-6" type="submit" @click="$emit('closeModal')">Close</button>
          </div>
        </Transition>

      </div>
    </Transition>
  </Teleport>

</template>


<style scoped>

.modal-mask {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modalWrapperMobile {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-outer-enter-active, .modal-outer-leave-active {
  transition: all 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from, .modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-leave-active {
  transition: all 0.30s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  transform: scale(0.8);
}

.modal-inner-enter-to {
  transform: scale(1.0);
}

.modal-inner-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-from {
  opacity: 1;
  transform: scale(1.0);
}

</style>