<template>
    <footer class="bg-gray-700 py-3">
      <div class="">
        <div class="grid grid-cols-1 md:grid-cols-4 text-white gap-4 mx-10">
          <!-- Logo and Contact Info -->
          <div class="flex flex-col">
            <nuxt-link to="/">
              <img
                :src="footerlogo"
                alt="Logo"
                class="h-24 mb-4"
              />
            </nuxt-link>
            <div class="flex items-center mb-2">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-xl" />
              <p class="ml-2 text-sm">
                Mujahid Business Center 36, Service road north, I-9/2
              </p>
            </div>
            <div class="flex items-center">
              <a
                href="mailto:imrandoi1212@gmail.com"
                class="flex items-center text-sm"
              >
              <font-awesome-icon :icon="['fas', 'envelope']" class="text-xl" />
                <span class="ml-2">Write a message</span>
              </a>
            </div>
          </div>
  
          <!-- Services -->
          <div>
            <h5 class="text-lg font-bold">Services</h5>
            <ul class="list-none">
              <li>
                <nuxt-link
                  to="/services/frontend"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Frontend</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/services/backend"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Backend</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/services/design"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Design</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/services/qualityassurance"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Quality Assurance</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/services/cloudservices"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Cloud Services</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/services/microdynamics"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Dynamic 365</nuxt-link
                >
              </li>
            </ul>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h5 class="text-lg font-bold">Quick Links</h5>
            <ul class="list-none">
              <li>
                <nuxt-link
                  to="/about"
                  class="text-sm text-white hover:text-[#01d486]"
                  >About</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/portfolio"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Portfolio</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="/contact"
                  class="text-sm text-white hover:text-[#01d486]"
                  >Contact</nuxt-link
                >
              </li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div>
            <h5 class="text-lg font-bold pb-3">Follow Us</h5>
            <a
              href="https://www.linkedin.com/company/mountaintech"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mb-2"
            >
              <img
                :src="linkedin"
                alt="LinkedIn"
                class="h-12"
              />
            </a>
          </div>
        </div>
  
        <p class="py-3 text-center text-sm text-white bg-gray-800">
          Copyright © 2024 MountainTech
        </p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import linkedin from  '~/assets/images/linkedin.webp'
  import footerlogo from '~/assets/images/footerlogo.png'
  // No script needed for static content, but you can add functionality if required.
  </script>
  
  <style scoped>
  /* You can add any necessary scoped styles here if absolutely needed */
  </style>
  