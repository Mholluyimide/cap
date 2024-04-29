<template>
  <div
    class="bg-white text-gray-600 py-2 px-5 shadow-md 
    static md:flex justify-between w-full z-[10000]"
  >
    <div class="flex justify-between items-center">
      <span class="text-green-500 text-xl mr-1">
        <img class="w-14" src="../assets/logo/redeem pix.png" alt="logo" />
      </span>

      <button
        @click="toggleshowMenu"
        class="text-5xl md:hidden block text-gray-600 border-none outline-none focus:outline-none ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>

    <div
      class="py-5 bg-white md:block"
      :class="`${showMenu ? 'block' : 'hidden'}`"
    >
      <ul
        class="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full 
        left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 uppercase font-bold cursor-pointer"
         @click="closeShowMenu"
      >
        <li class="mx-4 my-6 md:my-0 md:bg-white cursor-pointer md:cursor-pointer">
          <router-link
            :to="{ name: 'home' }"
            class="text-sm hover:text-blue-700"
            >Home</router-link
          >
        </li>

        <li>

          <button @mouseenter ="togglesubMenu"
            :to="{ name: 'about' }"
            class=" mx-4 flex text-sm hover:text-blue-700 outline-none focus:outline-none uppercase font-semibold border-none"
            >Who we Are
            <b class="font-semibold text-sm">+</b>
          </button>

          <div :class="`${subMenu ? 'block' : 'hidden'}`" class="md:absolute bg-white rounded-md z-[1] flex mt-4 
          md:mr-8 md:w-auto md:-ml-3">

            <ul  @mouseleave="togglesubMenu"
             class="space-y-2 text-sm my-2 flex md:justify-center md:items-center flex-col ">

            <li  class="mx-4 my-0 py-1 flex">
              <router-link :to="{ name:'history' }">History</router-link>
            </li>

            <li class="mx-4 my-0 py-2 flex">
              <router-link :to="{ name: 'vision&mission'}">Vision & Mission</router-link>
            </li>

            <li class="mx-4 my-0 py-2 flex">
              <router-link :to="{ name: 'belief'}">Belief</router-link>
            </li>

            <li class="mx-4 py-2 flex">
              <router-link :to="{ name: 'structure'}">Structure</router-link>
            </li>
          </ul>
          </div>
        </li>

        <li class="mx-4 my-4 md:my-0">
          <router-link
            :to="{ name: 'services' }"
            class="text-sm hover:text-blue-700"
            >What we do</router-link
          >
        </li>

        <li class="mx-4 my-6 md:my-0 cursor-pointer">
          <router-link
            :to="{ name: 'contact' }"
            class="text-sm hover:text-blue-700"
            >Contact us</router-link
          >
        </li> 

        <li  class="mx-4 my-6 md:my-0 cursor-pointer">
          <button @mouseenter="togglesubBlog"
          class=" mx-0 flex text-sm hover:text-blue-700 outline-none focus:outline-none uppercase font-semibold border-none"
            :to="{ name: 'quick-links' }"
            >Blog's 
            <b>+</b>
          </button
          >
          <div :class="`${subBlog ? 'block' : 'hidden'}`"
          
           class="md:absolute bg-white rounded-md z-[1] flex mt-4 md:mr-0 md:w-auto md:-ml-5  ">

            <ul @mouseleave="togglesubBlog"
            class="space-y-2 text-sm my-2 flex md:justify-center md:items-center flex-col md:pl-3 md:-pr-4 md:pr-2 ">

            <li class="mx-0 my-0 py-2 px-3 md:px-0 flex">
              <router-link :to="{ name: 'followup' }">Follow Up</router-link>
            </li>

            <li class="mx-0 my-0 py-2 px-3 md:px-0 flex">
              <router-link :to="{}">Giving</router-link>
            </li>

            <li class="mx-0 my-0 py-2 px-3 md:px-0 flex">
              <router-link :to="{ name: 'signup'}">Promotion</router-link>
            </li>

          </ul>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleshowMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeShowMenu = () => {
  showMenu.value = !showMenu.value;
};

const subMenu = ref(false);

const togglesubMenu = () => {
  subMenu.value = !subMenu.value
};

const subBlog = ref(false)

const togglesubBlog = () => {
  subBlog.value = !subBlog.value
}

</script>


