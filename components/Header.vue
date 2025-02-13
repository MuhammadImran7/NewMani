<template>
  <header class="bg-white relative z-50 shadow"> <!-- Make header relative and adjust z-index -->
    <div class="mx-10 flex justify-between items-center p-4">
      <!-- Logo -->
      <div class="text-2xl font-bold text-black ">
        <nuxt-link to="/"><img :src="homePageLogo" alt="Logo" class="h-12" /></nuxt-link>
      </div>
      <!-- Hamburger Button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-black focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <!-- Navigation -->
      <nav :class="{'block': isOpen, 'hidden': !isOpen}" class="md:block absolute top-full left-0 w-full bg-white md:static md:w-auto">
        <ul class="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 "> <!-- Add  class here -->
          <li class="group">
            <nuxt-link to="/" class="nav-item ">Home</nuxt-link>
          </li>
          <li class="group">
            <nuxt-link to="/about" class="nav-item ">About</nuxt-link>
          </li>
          <li class="group relative">
            <span @click="toggleDropdown" class="nav-item cursor-pointer service-link ">Servicesss</span>
            <!-- Dropdown -->
            <ul :class="{'block': dropdownOpen, 'hidden': !dropdownOpen}" class="border top-position absolute left-0 md:group-hover:block bg-white shadow-md mt-2 rounded z-111 md:w-auto w-full">
              <li class="border-b">
                <nuxt-link to="/services/frontend" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Frontend</nuxt-link>
              </li>
              <li class="border-b">
                <nuxt-link to="/services/backend" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Backend</nuxt-link>
              </li>
              <li class="border-b">
                <nuxt-link to="/services/design" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Design</nuxt-link>
              </li>
              <li class="border-b">
                <nuxt-link to="/services/qualityassurance" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Quality Assurance</nuxt-link>
              </li>
              <li class="border-b">
                <nuxt-link to="/services/cloudservices" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Cloud Solutions</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/services/microdynamics" class="block px-4 py-2 nav-item hover:bg-gray-100 text-sm ">Microsoft Dynamics 365</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/portfolio" class="nav-item ">Portfolio</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" class="nav-item ">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import homePageLogo from '~/assets/images/homePageLogo.webp';

// State for menu visibility
const isOpen = ref(false);

// State for dropdown visibility
const dropdownOpen = ref(false);

// Function to toggle menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Function to toggle dropdown
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
/* Apply styles to every navigation item */
.nav-item {
  color: black !important;
  white-space: nowrap;
  letter-spacing: normal;
  padding: 4px 15px !important;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
  /* font-family: 'Plus Jakarta Sans', sans-serif; */
}

/* Apply hover effect */
.nav-item:hover {
  color: #01d486 !important;
}
.top-position {
  top: 17px;
}
.service-link::after {
  content: '\25BC';
  display: inline-block;
  margin-left: 5px;
  color: #01d486;
}
/* Responsive styling for mobile view */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    position: absolute;
    background-color: white;
    width: 100%;
    left: 0;
    top: 100%;
    z-index: 10;
  }
}
</style>
