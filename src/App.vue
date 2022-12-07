<script setup>
import { RouterLink, RouterView } from "vue-router"

// const apiURL = "http://localhost:8000/api/v2/pages"
const apiURL = "https://blackmoongames-dev.herokuapp.com/api/v2/pages/"

</script>

<template>

  <div class="wrapper min-h-screen flex flex-col">

    <nav class="">

    <Suspense>
      <Navbar api-url="https://blackmoongames-dev.herokuapp.com/api/v2/pages/6/" />
    </Suspense>

    </nav>

  <main class="opacity-80">

    <Suspense>
      <Banner api-url="https://blackmoongames-dev.herokuapp.com/api/v2/pages/8/" />
    </Suspense>

    <Suspense>
      <RouterView api-url="https://blackmoongames-dev.herokuapp.com/api/v2/pages/7/" />
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
