<template>
    <section>
      <div :style="{ backgroundImage: `url(${bgImage})` }" class="main-section relative bg-cover bg-center h-screen">
        <img :src="left1" alt="" class="absolute left-20 top-react rotating-image1">
        <img :src="left2" alt="" class="absolute left-40 top-wordpress rotating-image">
        <img :src="left3" alt="" class="absolute left-60 bottom-red rotating-image1">
        <img :src="left4" alt="" class="absolute left-20 bottom-xd rotating-image">
        <img :src="right1" alt="" class="absolute right-0 right-android rotating-image1">
        <img :src="right2" alt="" class="absolute right-0 right-maroon rotating-image">
        <img :src="right3" alt="" class="absolute right-0 right-green rotating-image">
        <img :src="right4" alt="" class="absolute right-0 right-last rotating-image1">
        <div class="flex flex-col items-center justify-center text-center text-white relative z-10 h-3/4 ">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-black ">Uncover the possibilities
            <br> our specialists can offer you.
          </h1>
          <p class="text-xl md:text-2xl mb-6 text-gray-500 ">We plan, implement, and support your digital workplace technology.</p>
          <button class="hover:bg-[#01d486] text-gray-800 font-bold py-4 px-12 rounded-lg shadow hover:text-white ">
            Tell Us How We Can Help You...
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

  import bgImage from '@/assets/images/HomePageHeroSectionBG.webp';

  import left1 from '@/assets/images/left1.webp';
  import left2 from '@/assets/images/left2.webp';
  import left3 from '@/assets/images/left3.webp';
  import left4 from '@/assets/images/left4.webp';
  import right1 from '@/assets/images/right1.webp';
  import right2 from '@/assets/images/right2.webp';
  import right3 from '@/assets/images/right3.webp';
  import right4 from '@/assets/images/right4.webp';
  </script>
  
  <style scoped>
  .main-section {
    height: 100vh; 
    background-size: cover;
    background-position: center;
  }
  .top-react{
    left: 7rem;
    top: 12rem;
  }
  .top-wordpress{
    left: 15rem;
    top: 2rem;
  }
  .bottom-xd{
    bottom: 10rem;
    left: 8rem;
  }
  .bottom-red{
    bottom: 16rem;
    left: 16rem;
  }
  .right-android{
    bottom: 10rem;
    right: 4rem;
  }
  .right-green{
    bottom: 16rem;
    right: 16rem;
  }
  .right-maroon{
    top: 14rem;
    right: 5rem;
  }
  .right-last{
    right: 16rem;
    top: 3rem;
  }
  @keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
img.rotating-image1 {
  animation: mover1 2s ease-in-out infinite alternate;
}
@keyframes mover1 {
  0% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
img.rotating-image {
  animation: mover 2s ease-in-out infinite alternate;
}
  </style>
  