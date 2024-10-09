<template>
  <div class="mx-5">
    <div class="container mx-auto text-center ">
    <h1
      class="text-center leading-[1.5em] tracking-normal font-extrabold text-[65px] text-black relative z-[1000]  "
    >
    Hello Everybody
    </h1>
    <p
      class="relative  text-[rgba(2,6,38,0.7)] text-center font-normal text-[17px] z-[1000] py-5 "
    >
    Together, we embrace challenges, leverage emerging technologies, and deliver <br>
    transformative results, ensuring that our clients stay ahead of the competition
    </p>
    <div
      class="flex flex-col lg:flex-row md:flex-row gap-2 items-center justify-center pb-10 pt-5 mb-3 lg:items-center items-end"
    >
      <NuxtLink
        to="/contact"
        class="bg-[#01d486]  text-white leading-[21px] font-extrabold  text-[16px] shadow-[rgba(2,6,38,0.1)_0px_5px_45px_0px] py-5 px-20 hover:bg-white hover:text-[rgb(2,6,38)]"
      >
        Speak to an Expert
      </NuxtLink>
      <NuxtLink
        to="/services/frontend"
        class="ms-3 text-dark font-semibold underline hover:underline hover:decoration-[#01d486] decoration-2 "
      >
        Learn more about services
      </NuxtLink>
    </div>
    <div class="flex justify-center pb-20 border-b-[12px] border-black">
        <img :src="bg" alt="">
    </div>
  </div>
  <div class="container mx-auto pb-10">
    <div class="py-10 custom-divider text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
      <div class="flex flex-col items-center">
        <img :src='mission' alt="Mission and Vision logo" />
        <h3 class="text-2xl font-extrabold lowercase leading-tight   py-3">Our Mission</h3>
        <p class="text-base leading-[25px] font-normal text-[rgba(2, 6, 38, 0.7)]  ">
          We empower businesses with cutting-edge tech for innovation, efficiency, and sustainable growth, aiming to be a strategic partner delivering exceptional value
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img :src='vision' alt="Mission and Vision logo" />
        <h3 class="text-2xl font-extrabold lowercase leading-tight   py-3">Our statement</h3>
        <p class="text-base leading-[25px] font-normal text-[rgba(2, 6, 38, 0.7)]  ">
          Committed to turning challenges into opportunities, we empower clients with unique tech solutions, catalyzing business success through our ethos-driven approach
        </p>
      </div>
      <div class="flex flex-col items-center">
        <img :src='statement' alt="Mission and Vision logo" />
        <h3 class="text-2xl font-extrabold lowercase leading-tight   py-3">Our values</h3>
        <p class="text-base leading-[25px] font-normal text-[rgba(2, 6, 38, 0.7)]  ">
          We prioritize customers, promise reliable service, build lasting partnerships, exceed expectations, and uphold high ethical standards in all interactions.
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import bg from '~/assets/images/About Images/about-imageBG.webp'
import mission from '~/assets/images/About Images/mission.webp'
import vision from '~/assets/images/About Images/vision.webp'
import statement from '~/assets/images/About Images/statment.webp'
</script>

<style>

</style>