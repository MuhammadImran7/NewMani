<template>
    <section id="mtech-our-journey" class="pb-0 lg:pb-12">
      <div class="container mx-auto">
        <h3 class="text-[55px] font-bold leading-[1.5em] text-left mb-4 lg:mb-12 font-sans">
          Company Timeline
        </h3>
        <div class="bg-gradient-to-r from-[#e4e4e4] to-[#fbfffe]">
          <div class="flex flex-wrap">
            <!-- Left Image Section (hidden on mobile) -->
            <div class="lg:w-1/2 md:w-1/2 w-1/4 hidden md:block">
              <img
                :src="companyTimeline"
                alt="company group image"
                class="h-auto"
              />
            </div>
  
            <!-- Right Content Section -->
            <div class="lg:w-1/2 md:w-1/2 w-full lg:pl-5 pl-0 flex flex-col justify-center">
              <h3 class="text-[32px] font-bold leading-[1.5em] mt-4 lg:mt-0 font-sans">2024</h3>
              <p class="text-[17px] font-normal text-[rgba(2, 6, 38, 0.7)] pr-0 lg:pr-12 font-sans">
                By 2024, our IT company exceeded expectations with skilled professionals, showcasing unwavering dedication to innovation, client satisfaction, and top-notch services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional JavaScript needed for this component
  import companyTimeline from '~/assets/images/About Images/timeline.webp'
  </script>
  
  <style scoped>
  </style>
  