<script setup>
import { RouterLink, RouterView } from "vue-router"

const apiNav = import.meta.env.VITE_API_NAV

</script>

<template>

  <div class="wrapper min-h-screen flex flex-col">
    <nav class="">
    <Suspense>
      <Navbar :api-url=apiNav />
    </Suspense>
    </nav>

    <main class="opacity-80">
      <Suspense>
        <RouterView />
      </Suspense>
    </main>

    <footer class="mt-auto">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>

@font-face {
  font-family: "NerkoOne-Regular";
  src: url("../public/fonts/NerkoOne-Regular.ttf");
}

@font-face {
  font-family: "Exo2";
  src: url("../public/fonts/Exo2-VariableFont_wght.ttf");
}

@font-face {
  font-family: "Montserrat";
  src: url("../public/fonts/MontserratSubrayada-Regular.ttf");
}

@font-face {
  font-family: "KroneOne";
  src: url("../public/fonts/KronaOne-Regular.ttf");
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.8s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-leave-to {
  opacity: 0;
}


@media (min-width: 1024px) {

}
</style>
