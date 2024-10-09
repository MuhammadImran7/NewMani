<template>
    <div class="custom-padding">
      <section class="bg-gray-100 py-12" :style="{ backgroundImage: `url(${service.images.bg})` }">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-10">
            <div>
              <p class="text-green-500 text-xl font-extrabold">{{ service.title }}</p>
              <h1 class="text-4xl font-extrabold pb-8 pt-5">{{ service.description }}</h1>
              <ul class="space-y-2">
                <li v-for="(item, index) in service.items" :key="index" class="relative pl-6">
                  <span class="absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-green-600"></span>
                  {{ item }}
                </li>
              </ul>
            </div>
  
            <div class="relative">
              <img :src="service.images.laptop" alt="" class="w-full">
              <img :src="service.images.Vuelogo" class="absolute left-0 top-10 animate-bounce-slow" alt="">
              <img :src="service.images.react" class="absolute bottom-2 right-0 animate-bounce-slow" alt="">
            </div>
          </div>
        </div>
      </section>
  
      <div class="container mx-auto py-12">
        <div class="grid lg:grid-cols-2 border-b-[12px] border-green-500 pb-8">
          <p class="text-xl font-extrabold text-gray-800">Programming Languages and Technologies</p>
          <div class="flex items-center gap-8 flex-wrap">
            <img v-for="(img, key) in filteredImages" :src="img" :key="key" alt="" class=""/>
          </div>
        </div>
  
        <div class="text-center pt-12">
          <p class="text-green-500 text-xl font-extrabold">Our Solutions</p>
          <h2 class="text-3xl font-extrabold py-4">
            {{ service.lastheading }}
          </h2>
          <p class="pt-5">
            <nuxt-link to="/contact" class="bg-green-500 text-white font-extrabold py-4 px-12 rounded-lg shadow-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              Start Now
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </template>
  
 <script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { services } from '~/data/services.js'; // Ensure this imports your services data

// Get the current route
const route = useRoute();
const slug = route.params.slug;

// Find the service based on the slug
const service = services[slug]; // Assuming services is an object where keys are slugs

// Create a computed property for filtered images
const filteredImages = computed(() => {
  return Object.entries(service.images)
    .filter(([key]) => key !== 'bg' && key !== 'laptop' && key !== 'Vuelogo' && key !== 'react')
    .map(([key, img]) => img); // Return only the image URLs
});
</script>
  
  <style scoped>
  /* Minimal additional styles if needed */
  </style>
  