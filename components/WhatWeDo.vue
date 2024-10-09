<template>
  <section class="my-4 lg:my-12">
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <!-- Left Column -->
        <div class="lg:w-1/2 md:w-1/2 pt-10">
          <p
            class="text-center md:text-left uppercase text-[14px] font-bold text-[#01d486] tracking-wide mb-2 font-sans"
          >
            WHAT WE DO
          </p>
          <h2
            class="text-center md:text-left text-[32px] font-bold leading-[1.5em] mb-4 font-sans"
          >
            We will help you overcome your technology challenges
          </h2>
          <ul class="list-none p-4 font-sans">
            <li class="pb-2 what-we-about-list font-sans">
              Our best-of-breed IT solutions will significantly drive efficiency
              and foster transformative change
            </li>
            <li class="pb-2 what-we-about-list font-sans">
              Refine your data for better-informed decision making
            </li>
            <li class="pb-2 what-we-about-list font-sans">
              Get ultra-fast business-class connectivity and internet solutions
            </li>
            <li class="pb-2 what-we-about-list font-sans">
              Protect your business with our leading business continuity
              solutions
            </li>
          </ul>
          <div
            class="flex flex-col lg:flex-row md:flex-row gap-2 items-center justify-center pb-10 pt-5 mb-3 lg:items-center items-end"
          >
            <NuxtLink
              to="/contact"
              class="bg-[#01d486] font-sans font-sans text-white leading-[21px] font-extrabold text-[16px] shadow-[rgba(2,6,38,0.1)_0px_5px_45px_0px] py-5 px-20 hover:bg-white hover:text-[rgb(2,6,38)]"
            >
              Speak to an Expert
            </NuxtLink>
            <NuxtLink
              to="/services/frontend"
              class="ms-3 text-dark font-sans font-semibold underline hover:underline hover:decoration-[#01d486] decoration-2"
            >
              Learn more about services
            </NuxtLink>
          </div>
        </div>

        <!-- Right Column (Image) -->
        <div class="lg:w-1/2 md:w-1/2">
          <img
            src="https://mountaintech.pk/wp-content/uploads/2024/08/image_2024_02_13T14_40_09_357Z.webp"
            alt="what we do image"
            class="h-auto"
          />
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
// No additional JavaScript needed for this component
</script>
  
  <style scoped>
li.pb-2.what-we-about-list::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #00b956;
    display: inline-block;
    position: relative;
    left: -20px;
    top: 49%;
}
</style>
  