<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
</script>


<template>

  <div class="flex flex-col" id="about-wrapper">

    <div class="flex flex-col text-white gap-4" id="top">

      <div class="flex flex-col justify-center p-4 m-8" id="header">
        <h2 class="text-center">About Us</h2>
      </div>

      <div class="flex flex-col items-center bg-white text-black text-xl pt-8 pb-8" id="mid">

        <div class="" id="contact">
          <ul class="flex flex-col items-center gap-4 p-4">
            <li class="text-4xl">
              <strong>Black Moon Games</strong>
            </li>

            <li>
              Lebanon's Friendly Local Game Store!
            </li>

            <li>
              <ul class="flex flex-col gap-0">
                <li>
                  2 Mascoma Street, #3
                </li>
                <li>
                  Lebanon, NH 03766
                </li>
              </ul>
            </li>

            <li>
              (603) 678-8634
            </li>

            <li>
              <em>Est. 2014</em>
            </li>

            <li>
              <ButtonComponent button-text="Contact" button-class="bg-blue-900 text-white p-4 m-8" />
            </li>
          </ul>
        </div>

        <div class="" id="google-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.320352496584!2d-72.25523368428799!3d43.641502861204586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4b45603cbafbb%3A0x91af481f22d410cf!2sBlack%20Moon%20Games!5e0!3m2!1sen!2sus!4v1670855464899!5m2!1sen!2sus" width="400" height="300" style="padding: 1.2rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

    </div>

    <div class="bg-blue-900 flex flex-col text-white text-lg border-2 border-white p-4 pt-8 pb-8 gap-8" id="bot">
      <div id="bottom-top-text">
        <ul class="flex flex-col gap-4">
          <li class="text-3xl text-bold text-center mb-8">
            We love games.
          </li>
          <li>
            Black Moon Games earns its namesake from my former group of fantasy Dungeons and Dragons mercenaries... The Black Moon Mercenary Guild!
          </li>

          <li>
            Now a prominent fixture of the community in New Hampshire’s Upper Valley, we offer the widest selection of board games, tabletop games, trading cards, and puzzles in the area.
          </li>

          <li>
            You can find us directly underneath the Lebanon Village Market, next to Sunrise Buffet and the Laundry Spa. Just head towards the Lebanon village square and turn into one of the parking lots by the Market and head down the stairs.
          </li>

          <li>
            We hope to see you soon!
          </li>

          <li>
            <em>-- Tony Vandenberg, Owner</em>
          </li>
        </ul>
      </div>

      <div class="self-center bottom bot-img">
        <img src="/img/tv_128.png" alt="Tony Vandenberg photo" class="rounded-full border-2 border-white">
      </div>

    </div>

  </div>


</template>


<style scoped>

#header {
  font-family: Montserrat, sans-serif;
}

</style>