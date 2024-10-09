<template>
  <div class="container mx-auto py-10 text-center border-b-[12px] border-black mb-10">
    <h3
      class="text-2xl font-bold lowercase text-[#01d486] leading-[1.5em] text-center "
    >
      let’s get started
    </h3>
    <h3
      class="leading-[1.5em] tracking-[0px] font-extrabold text-[55px] text-black z-[1000] relative font-['Plus_Jakarta_Sans']"
    >
      Still have questions?
    </h3>
    <p
      class="relative  text-[rgba(2,6,38,0.7)] text-center font-normal text-[17px] z-[1000] py-5"
    >
      Reach out to us anytime - we're here to help and excited to connect with
      you!
    </p>
    <div
      class="flex flex-col lg:flex-row md:flex-row gap-2 items-center justify-center py-4 mb-3 lg:items-center items-end"
    >
      <NuxtLink
        to="/contact"
        class="bg-white  text-[rgb(2,6,38)] leading-[21px] font-extrabold text-[16px] shadow-[rgba(2,6,38,0.1)_0px_5px_45px_0px] py-5 px-20 hover:bg-[#01d486] hover:text-white"
      >
        Speak to an Expert
      </NuxtLink>
      <NuxtLink
        to="/services/frontend"
        class="ms-3 text-dark font-semibold underline hover:underline hover:decoration-[#01d486] decoration-2"
      >
        Learn more about services
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>