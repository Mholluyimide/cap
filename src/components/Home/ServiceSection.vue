<template>
  <div
    id="service"
    class="flex md:h-96 flex-col mt-24 mb-10 md:flex md:flex-row overflow-hidden space my-24 mx-8 space-x-7 md:mx-none skew-y-6">

    <div class="flex md:flex row overflow-hidden md:mb-10 md:mt-10 lg:mx-36 relative">
      <img class="md:w-full rounded backdrop-brightness-0 "
        src="../../assets/bg/Maranthon_1.jpg"
        alt="image"/>

      <div class="absolute text-sm text-black mt-3">

        <p class="flex justify-center  font-bold py-4 text-3xl md:text-4xl md:font-bold 
        overflow-hidden md:flex md:py-4 md:justify-center"> 
        MARANTHON PRAYER
      </p>

        <p class="text-2xl px-3 md:text-2xl md:flex md:justify-center md:items-center md:px-8 md:font-serif">
          I exhort therefore, that, first of all, prayers, intercessions, and giving of thanks, 
          be made for all men. 
          <br /> 1 Tim 2:1
        </p>

      </div>
    </div>


    <div
      class="flex md:flex row md:mt-10 md:mb-10 md:w-96 md:mx-20 mt-10  overflow-hidden relative"
    >
      <img
        class="md:w-full rounded"
        src="../../assets/bg/Worship.jpg"
        alt="image"
      />
      <div class="absolute mt-5 justify-center items-center">

        <p class="text-3xl font-bold py-5 pl-2 uppercase
        md:text-3xl md:font-bold overflow-hidden md:flex md:py-4 md:justify-center">
        Worship Experience
      </p>

        <p class="text-2xl px-3 font-serif flex md:text-2xl md:flex md:justify-center md:items-center md:px-8 md:font-serif">
          God is a Spirit: and they that worship him must worship him in spirit and in truth.
          <br /> John 4:24        </p>
      </div>

    </div>
  </div>
  <div class="overflow-hidden mb-5 mx-10 items-center flex justify-center">
    <router-link
      class="font-medium bg-gray-900 hover:bg-slate-800 text-white text-sm px-3 py-2"
      :to="{ name: 'services' }"
    >
      READ MORE
    </router-link>
  </div>
</template>
