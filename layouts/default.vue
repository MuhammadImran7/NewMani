<!-- layouts/default.vue -->
<template>
    <div>
      <Header /> <!-- Include the Header component here -->
        <NuxtPage /> 
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue'; // Adjust the path if necessary
  import Footer from '~/components/Footer.vue';
  </script>
  