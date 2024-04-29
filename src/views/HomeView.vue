<template>
  <div
    id="hero"
    class="h-screen w-screen text-center flex items-center justify-center md:text-center flex-col space-y-10 relative">
  <p class="text-gray-400 font-bold text-7xl flex overflow-hidden">
    Welcome Home
  </p>
    <h1 class="text-5xl md:text-6xl font-bold text-gray-300 overflow-hidden flex uppercase bg-clip-text bg-gradient-to-r from-gray-600-via-white-to-gray-600">
      RCCG  <br />
      Christ Ambassador Palace   
      (CAP)
    </h1>
    <p class="flex font-semibold text-gray-400 text-1xl font-serif items-center justify-center px-7">
      Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me.
     <br /> John 14:6
    </p>
    </div>
    <!-- <div class="flex justify-end sticky">
      <a  class="flex" href="https://www.whatsapp.com">
          <font-awesome-icon class="h-16 w-16 hover:text-gray-300 text-gray-500" icon="fa-brands fa-square-whatsapp" />
        </a>
    </div> -->
  <AboutSection />

  <ServiceSection />

  <ContactSection />

</template>

<script setup>
import AboutSection from "../components/Home/AboutSection.vue";
import ServiceSection from "../components/Home/ServiceSection.vue";
import ContactSection from "../components/Home/ContactSection.vue";
</script>

<style scoped>
#hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/bg/hero_bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}

</style>
