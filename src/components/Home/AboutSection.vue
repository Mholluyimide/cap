<template>
  <div
    id="about"
    class="text-center items-center justify-center mt-16 h-80 p-12 overflow-hidden rounded-full md:rounded-none"
  >
    <p class="text-white md:mt-10 py-5">
      To prepare the way for the final establishment of the Kingdom of God on
      earth. <br />
      To develop in men's lives, Christ-like attributes and transform society to
      be a better and more peaceful place to live.
    </p>

    <div class="overflow-hidden mt-12 mx-10">
    <router-link
      class="font-medium bg-gray-900 hover:bg-slate-800 text-white text-sm  px-3 py-2"
      :to="{ name: 'vision&mission' }"
    >
      READ MORE
    </router-link>
  </div>
  </div>

</template>

<script>
</script>

<style>
#about {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/bg/about_bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
