<!-- pages/index.vue -->
<template>
  <div>
    <HomePageMainSection />
    <ServicesSection />
    <PortfolioSectionHomePage />
    <letsStarted />
    <MapTem />
  </div>
</template>
  
  <script setup>
  import HomePageMainSection from '~/components/HomePageMainSection.vue';
  import ServicesSection from '~/components/ServicesSection.vue'; 
  import PortfolioSectionHomePage from '~/components/PortfolioSectionHomePage.vue';
  import MapTem from  '~/components/MapTem.vue';
  // You can add any setup logic if needed
  </script>
  
  <style scoped>
  /* Add any styles here */
  </style>
  