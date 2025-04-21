<template>
  <div id="academic-background" class="relative py-20 px-4 bg-fuchsia-50/80 dark:bg-gray-900">
    <!-- Éléments décoratifs de fond -->
    <div class="absolute inset-0">
      <!-- Cercles flous -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]">
        <div class="absolute top-20 left-20 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-200 dark:bg-fuchsia-600 rounded-full filter blur-3xl"></div>
      </div>

      <!-- Points décoratifs -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div v-for="i in 50" :key="i" 
              class="absolute w-2 h-2 bg-fuchsia-300 dark:bg-fuchsia-600 rounded-full"
             :style="{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`
             }">
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto relative"> 
      <!-- Section titre -->
      <div class="mb-20 text-center">
        <h3 class="text-4xl font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-4">
          Parcours Académique
        </h3>
        <div class="h-1 w-24 bg-fuchsia-500 mx-auto"></div>
      </div>

      <div class="relative">
        <!-- Ligne verticale -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-fuchsia-500 dark:bg-fuchsia-400"></div>

        <div class="space-y-12">
          <div 
            v-for="(education, index) in educations" 
            :key="index"
            class="relative flex items-center animate-fade-in"
            :style="{
              animationDelay: `${index * 200}ms`
            }"
          >
            <!-- Point sur la timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-600 dark:bg-fuchsia-400 z-10 shadow-lg"></div>

            <!-- Contenu -->
            <div :class="[
              'w-[55%]',
              index % 2 === 0 ? 'ml-[-10%]' : 'mr-[-10%] ml-auto'
            ]">
              <div :class="[
                'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300',
                index % 2 === 0 ? 'border-r-4' : 'border-l-4',
                'border-fuchsia-500 dark:border-fuchsia-400'
              ]">
                <h4 class="text-xl font-bold text-fuchsia-700 dark:text-fuchsia-300 mb-2" :class="index % 2 === 0 ? 'text-right' : 'text-left'">{{ education.diploma }}</h4>
                <div class="text-lg text-gray-700 dark:text-gray-300 font-medium mb-1" :class="index % 2 === 0 ? 'text-right' : 'text-left'">{{ education.location }}</div>
                <div class="flex items-center text-sm text-gray-500 dark:text-gray-400" :class="index % 2 === 0 ? 'justify-end' : ''">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ education.period }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const educations = [
  {
    diploma: 'Master 2 Data & Business Intelligence',
    location: 'France',
    period: '2023 - 2024'
  },
  {
    diploma: 'Master 2 Génie Logiciel',
    location: 'Abidjan, Côte d\'Ivoire',
    period: '2021 - 2022'
  },
  {
    diploma: 'Licence Mathématiques et Informatique',
    location: 'Abidjan, Côte d\'Ivoire',
    period: '2018 - 2021'
  }
]
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(var(--slide-amount, -100px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

