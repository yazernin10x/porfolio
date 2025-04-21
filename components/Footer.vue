<template>
  <footer class="bg-white dark:bg-gray-800 text-slate-900 dark:text-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Barre principale -->
      <div class="bg-gray-50 shadow-lg dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-gray-100 dark:border-gray-600">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <!-- Logo et description -->
          <div class="flex items-center gap-6">
            <div class="h-12 w-12 bg-gradient-to-br from-teal-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
              <span class="text-xl font-bold text-white">YA</span>
            </div>
            <div>
              <h2 class="text-gray-900 dark:text-white text-xl font-bold">Ali YARO</h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm">Développeur Full Stack</p>
            </div>
          </div>

          <!-- Contact rapide -->
          <div class="flex items-center gap-4">
            <a href="mailto:ali.yaro@hotmail.com" 
               class="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-md border border-gray-100 dark:border-gray-700">
              <i class="fa-solid fa-envelope text-teal-500 dark:text-teal-400 text-lg"></i>
              <span class="text-sm font-medium text-gray-800 dark:text-gray-200">ali.yaro@hotmail.com</span>
            </a>
            <a href="tel:+33768583010" 
               class="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-md border border-gray-100 dark:border-gray-700">
              <i class="fa-solid fa-phone text-teal-500 dark:text-teal-400 text-lg"></i>
              <span class="text-sm font-medium text-gray-800 dark:text-gray-200">+33 7 68 58 30 10</span>
            </a>
          </div>

          <!-- Réseaux sociaux -->
          <div class="flex items-center gap-3">
            <a href="https://github.com/yazernin10x" 
               class="w-11 h-11 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors shadow-md border border-gray-100 dark:border-gray-700">
              <i class="fab fa-github text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/ali-yaro" 
               class="w-11 h-11 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors shadow-md border border-gray-100 dark:border-gray-700">
              <i class="fab fa-linkedin text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Barre inférieure -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
        <!-- Réalisé avec + Technologies -->
        <div class="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300 font-medium">
          <div class="flex items-center gap-2">
            <span>Réalisé avec</span>
            <i class="fa-solid fa-heart text-teal-500 dark:text-teal-400"></i>
          </div>
          <span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#41B883">
              <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
            </svg>
            <span>Vue.js</span>
          </div>
          <span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#00DC82">
              <path d="M9.61465 12.1427L14.8134 3.71649L19.9973 12.1427H16.9923L14.8134 8.48554L12.6196 12.1427H9.61465Z"/>
            </svg>
            <span>Nuxt.js</span>
          </div>
          <span class="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#38BDF8">
              <path d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.91 1.345 0.98 0.98 2.116 2.116 4.59 2.116 2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-0.761-0.189-1.305-0.738-1.91-1.345-0.98-0.98-2.116-2.116-4.59-2.116z"/>
            </svg>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <!-- Copyright -->
        <p class="text-sm text-gray-700 dark:text-gray-300 font-medium">
          © {{ new Date().getFullYear() }} Ali YARO
        </p>
      </div>
    </div>
  </footer>
</template> 