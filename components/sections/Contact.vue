<template>
  <div id="contact" class="py-24 bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative">
    <!-- Éléments décoratifs (visibles uniquement en mode sombre) -->
    <div class="absolute inset-0 hidden dark:block">
      <!-- Cercles flous -->
      <div class="absolute inset-0 opacity-[0.07]">
        <div class="absolute top-20 left-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>

      <!-- Points décoratifs -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div v-for="i in 50" :key="i" 
             class="absolute w-2 h-2 bg-indigo-600 rounded-full"
             :style="{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`
             }">
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Titre avec animation -->
      <h2 class="text-4xl font-bold text-center mb-4 text-indigo-800 dark:text-gray-100 animate-fade-in">
        Contactez-moi
      </h2>
      <div class="w-20 h-1 bg-indigo-500 mx-auto mb-16 rounded-full animate-scale-x"></div>

      <div class="text-center slide-up space-y-4">
        <p class="text-gray-600 dark:text-gray-300">
          N'hésitez pas à me contacter pour discuter
        </p>
      </div>

      <div class="mt-12">
        <form @submit.prevent="handleSubmit" 
              class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 space-y-6 
                     border border-gray-100 dark:border-gray-700 
                     shadow-xl">
          <div class="slide-up" style="animation-delay: 0.2s">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              class="block w-full px-4 py-3 rounded-xl border-2 
                     bg-gray-50 dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                     transition-all duration-300"
              :class="{ 
                'border-indigo-400': form.name.length > 0, 
                'border-gray-200 dark:border-gray-600': form.name.length === 0 
              }"
            />
          </div>

          <div class="slide-up" style="animation-delay: 0.4s">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <div class="relative">
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                class="block w-full px-4 py-3 rounded-xl border-2 
                       bg-gray-50 dark:bg-gray-700 
                       text-gray-900 dark:text-white 
                       focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                       transition-all duration-300 pl-10"
                :class="{ 
                  'border-indigo-400': isValidEmail, 
                  'border-gray-200 dark:border-gray-600': !isValidEmail 
                }"
              />
              <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
            </div>
          </div>

          <div class="slide-up" style="animation-delay: 0.6s">
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8"
              v-model="form.message"
              class="block w-full px-4 py-3 rounded-xl border-2 
                     bg-gray-50 dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                     transition-all duration-300"
              :class="{ 
                'border-indigo-400': form.message.length > 10, 
                'border-gray-200 dark:border-gray-600': form.message.length <= 10 
              }"
            ></textarea>
          </div>

          <div class="slide-up" style="animation-delay: 0.8s">
            <button
              type="submit"
              class="w-full py-3 px-6 rounded-xl text-white font-medium 
                     bg-gradient-to-r from-indigo-500 to-indigo-600 
                     hover:from-indigo-600 hover:to-indigo-700 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-offset-white dark:focus:ring-offset-gray-800 
                     focus:ring-indigo-500 
                     transform hover:-translate-y-1 transition-all duration-300 
                     disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!isFormValid"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(form.value.email)
})

const isFormValid = computed(() => {
  return form.value.name.length > 0 && 
         isValidEmail.value && 
         form.value.message.length > 10
})

const handleSubmit = () => {
  if (isFormValid.value) {
    // Ici, ajoutez la logique d'envoi du formulaire
    console.log('Formulaire soumis:', form.value)
    // Réinitialiser le formulaire
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  }
}
</script>

<style scoped>
/* Ajout des animations pour le titre */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-scale-x {
  animation: scale-x 0.6s ease-out;
  transform-origin: center;
}

.form-input-focus {
  @apply transform scale-[1.01] transition-all duration-300;
}

input:focus, textarea:focus {
  @apply form-input-focus shadow-lg shadow-indigo-500/20;
}

button:not(:disabled):hover {
  @apply shadow-lg shadow-indigo-500/30;
}

.slide-up {
  opacity: 0;
  animation: slideUp 0.6s ease forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 