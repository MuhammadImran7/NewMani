<template>
<div class="container mt-6 mx-auto pb-20" id="mt-contact-inner">
  <div class="flex flex-col lg:flex-row gap-10">
    <!-- Left Section -->
    <div class="lg:w-1/2 w-full mb-5 lg:mb-0">
      <div class="flex justify-start items-center gap-3">
        <span class="mtech-contact-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 32 32">
            <title>file edit</title>
            <g stroke-linecap="round" stroke-width="2" fill="none" stroke="#020626" stroke-linejoin="round">
              <polyline points="8 31 3 31 3 1 29 1 29 10"></polyline>
              <polygon points="19 28 13 30 15 24 26 13 30 17 19 28" stroke="#00b956"></polygon>
            </g>
          </svg>
        </span>
        <span class="mtech-contact-text font-sans">Let’s talk</span>
      </div>
      <h1 class="mtech-contact-main-head my-3 font-sans">
        Talk to our product analytics expert
      </h1>
      <p class="mtech-contact-text-inner font-sans">
        Understand, guide, implement. That’s what our IT experts do best, and they’re standing by to create your tailor-made solution!
      </p>
      <img src="https://mountaintech.pk/wp-content/uploads/2024/08/contact.webp" alt="Meeting Room" class="w-full h-auto mb-4 lg:mb-5">
      <div class="space-y-4">
        <div class="w-full">
          <div class="mtech-address">
            <h3 class="contact-address-head mb-3 font-sans">Islamabad, Pakistan</h3>
            <div class="flex items-baseline mb-3">
              <span class="address-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
                  <title>globe 2</title>
                  <g fill="#afb0b9">
                    <circle cx="8" cy="6" r="4"></circle>
                    <path d="M12.3.387A1,1,0,0,0,12.286,1.8,6,6,0,0,1,8,12A6.031,6.031,0,0,1,2.577,8.571a1,1,0,0,0-1.806.858A8.04,8.04,0,0,0,7,13.928V15a1,1,0,0,0,2,0V13.931A8,8,0,0,0,13.715.4,1,1,0,0,0,12.3.387Z" fill="#484b62"></path>
                  </g>
                </svg>
              </span>
              <span class="mtech-address-text font-sans ps-2">Mujahid Business Center 36, Service road north, I-9/2</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section (Form) -->
    <div class="lg:w-1/2 w-full mt-3 lg:mt-0">
      <form @submit.prevent="submitForm" class="wpcf7-form">
        <div class="mtech-contact mt-12">
          <div class="space-y-3">
              <div class="flex gap-5">
                <label class="mtech-contact-label lg:w-1/2 w-full font-sans">
                First Name*
                <input v-model="form.firstName" type="text" name="firstName" placeholder="Muhammad" class="w-full p-2 border" required>
              </label>
              <label class="mtech-contact-label lg:w-1/2 w-full font-sans">
                Last Name*
                <input v-model="form.lastName" type="text" name="lastName" placeholder="Ali" class="w-full p-2 border" required>
              </label>
              </div>
            <div class="w-full">
              <label class="mtech-contact-label font-sans">
                Email Address*
                <input v-model="form.email" type="email" name="email" placeholder="mail@company.com" class="w-full p-2 border" required>
              </label>
            </div>
            <div class="w-full">
              <label class="mtech-contact-label font-sans">
                Phone Number
                <input v-model="form.phone" type="tel" name="phone" placeholder="0922345678" class="w-full p-2 border">
              </label>
            </div>
            <div class="w-full">
              <label class="mtech-contact-label font-sans">
                Company
                <input v-model="form.company" type="text" name="company" placeholder="MountainTech" class="w-full p-2 border">
              </label>
            </div>
            <div class="w-full">
              <label class="mtech-contact-label font-sans">
                What is your inquiry about?
                <select v-model="form.inquiry" name="Typeofenquiry" class="w-full p-2 border">
                  <option value=" font-sans ">—Please choose an option—</option>
                  <option value=" font-sans Frontend">Frontend</option>
                  <option value=" font-sans Backend">Backend</option>
                  <option value=" font-sans Design">Design</option>
                  <option value=" font-sans Q.A">Q.A</option>
                  <option value=" font-sans Network">Network</option>
                  <option value=" font-sans Microsoft Dynamics">Microsoft Dynamics</option>
                </select>
              </label>
            </div>
            <div class="w-full">
              <label class="mtech-contact-label font-sans">
                How we can help you?
                <textarea v-model="form.message" name="message" placeholder="Enter your message..." class="w-full p-2 border"></textarea>
              </label>
            </div>
            <div class="w-full">
              <button type="submit" class="w-full py-3 px-4 bg-[#01d486] hover:bg-black text-white font-semibold font-sans">
                Speak to an Expert
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          inquiry: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log("Form Data:", this.form);
        // You can handle form submission here
      }
    }
  }
  </script>
  
  <style scoped>
.mtech-contact-text {
  font-weight: 600;
  color: #38a169; /* Tailwind's green-500 */
}

.mtech-contact-main-head {
  font-size: 2.25rem; /* Tailwind's text-4xl */
  font-weight: 800;   /* Tailwind's font-extrabold */
  color: #1a202c;     /* Tailwind's gray-900 */
}

.mtech-contact-text-inner {
  color: #718096;     /* Tailwind's gray-600 */
  margin-bottom: 3rem; /* Tailwind's mb-12 */
}

.mtech-address {
  padding-left: 1.25rem; /* Tailwind's pl-5 */
  border-left: 1px solid #edf2f7; /* Tailwind's border-gray-200 */
}

.contact-address-head {
  font-size: 1.125rem; /* Tailwind's text-lg */
  font-weight: 700;    /* Tailwind's font-bold */
  color: #1a202c;      /* Tailwind's gray-900 */
}

.mtech-address-text {
  font-size: 0.875rem; /* Tailwind's text-sm */
  color: #4a5568;      /* Tailwind's gray-700 */
}

.mtech-contact-label {
  background-color: #f7fafc; /* Tailwind's bg-gray-50 */
  padding: 1rem;             /* Tailwind's p-4 */
  font-weight: 700;          /* Tailwind's font-bold */
  font-size: 0.875rem;       /* Tailwind's text-sm */
  display: flex;
  flex-direction: column;
}

  </style>
  