
  <template>
    <section class="bg-[#f5f8f7] py-10">
      <!-- <div class="container mx-auto">
        <main class="p-0">
            
        <h3 class="leading-[1.5em] tracking-normal font-extrabold text-[55px] text-black font-plus-jakarta-sans text-left">Our Process</h3>
          <ul class="flex flex-wrap justify-center p-0">
            <div
              v-for="(step, index) in steps"
              :key="index"
              class="relative w-full md:w-1/2 lg:w-1/4 p-4 bg-[#f5f8f7] rounded-md transition-all cursor-pointer"
            >
              <li class="h-100 relative">
                <div class="absolute">
                  <div :class="`number text-[13em] font-bold text-center`"  :style="{ color: step.color }">{{ index + 1 }}</div>
                  <div class="absolute rotate-[130deg] w-[18em] h-[16em] left-[-3em] top-[-1em]">
                    <div class="numberCover bg-[#f5f8f7] w-[18em] h-[4.5em] rounded-t-full border-b-[3px] border-[#f5f8f7] relative z-[1]"></div>
                  </div>
                </div>
                <div class="mt-32 ml-24 relative">
                  <div class="icon text-[2rem] text-center mb-4">{{ step.icon }}</div>
                  <h2 class="text-lg font-semibold capitalize text-center mb-2">{{ step.title }}</h2>
                  <p class="text-center leading-relaxed text-sm">{{ step.description }}</p>
                </div>
              </li>
            </div>
          </ul>
        </main>
      </div> -->
    </section>
  </template>
  
  <script setup>
//   const steps = [
//     {
//       title: "Define",
//       description: "Start development: define system needs, choose tech, capture user roles.",
//       color: "#00adee",
//       icon: "",
//     },
//     {
//       title: "Design",
//       description: "Define product's look, UX; model journey; prioritize features; plan release.",
//       color: "#00bfa5",
//       icon: "",
//     },
//     {
//       title: "Develop",
//       description: "During development, monitor QA, DevOps, and deployments with preferred tool.",
//       color: "#ff9800",
//       icon: "",
//     },
//     {
//       title: "Deliver",
//       description: "Progress with detailed specs, estimates, launch plan, and MountainTech team execution.",
//       color: "#ff5722",
//       icon: "",
//     },
//   ];
  </script>
  
  <style scoped>
  /* .numberCover::before {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 4em;
    right: 4em;
    top: 5em;
    box-shadow: 0 0 30px 17px #48668577;
    border-radius: 100px / 10px;
    z-index: -1;
  }
  .numberCover::after {
    position: absolute;
    bottom: 0;
    content: "";
    left: -10%;
    width: 120%;
    height: 150%;
    background: radial-gradient(at bottom, #48668533, transparent, transparent);
    z-index: 1;
  } */
  </style>
  