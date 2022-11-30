<script setup>
import { RouterLink, RouterView } from "vue-router"

// const apiURL = "http://localhost:8000/api/v2/pages"
const apiURL = "https://blackmoongames-dev.herokuapp.com/api/v2/pages/"

</script>

<template>

  <div class="wrapper h-screen flex flex-col justify-between">
  <nav class="">
    <Suspense>
      <Navbar api-url="https://blackmoongames-dev.herokuapp.com/api/v2/pages/6" />
    </Suspense>
  </nav>

  <main>
    <Suspense>
      <RouterView api-url="https://blackmoongames-dev.herokuapp.com/api/v2/pages/7" />
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
  src: url("./src/fonts/NerkoOne-Regular.ttf");
}

@font-face {
  font-family: "Exo2";
  src: url("./src/fonts/Exo2-VariableFont_wght.ttf");
}

@font-face {
  font-family: "Montserrat";
  src: url("./src/fonts/MontserratSubrayada-Regular.ttf");
}

@font-face {
  font-family: "KroneOne";
  src: url("./src/fonts/KronaOne-Regular.ttf");
}




@media (min-width: 1024px) {

}
</style>
