<script setup>
import { RouterLink, RouterView } from "vue-router"

const apiNav = import.meta.env.VITE_API_NAV

</script>

<template>

  <div class="wrapper min-h-screen flex flex-col">
    <nav class="">
    <Suspense>
      <Navbar :api-url=apiNav />
      <template #fallback>
        <div class="text-center text-xl text-white">
          Loading, please wait...
        </div>
      </template>
    </Suspense>
    </nav>

    <main class="opacity-80">
      <Suspense>
        <RouterView />
        <template #fallback>
          <div>
            Looks like you're the first visitor of the day! Please wait while we fetch the necessary data...
          </div>
        </template>
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

@media (min-width: 1024px) {

}
</style>
