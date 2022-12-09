<script setup>
import { RouterLink, RouterView } from "vue-router"

const apiURLDev = "http://localhost:8000/api/v2/pages"
const apiURLProd = "https://blackmoongames-dev.herokuapp.com/api/v2/pages"

const apiNav = import.meta.env.VITE_API_NAV
const apiHome = import.meta.env.VITE_API_HOME

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




@media (min-width: 1024px) {

}
</style>
