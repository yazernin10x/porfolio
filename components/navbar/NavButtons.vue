<template>
  <div class="flex items-center space-x-6">
    <!-- Bouton mode sombre -->
    <button 
      @click="toggleColorMode" 
      class="relative p-3 rounded-full transition-all duration-300 hover:scale-110
             bg-teal-50 dark:bg-gray-800"
    >
      <font-awesome-icon 
        :icon="colorMode.value === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
        class="text-teal-600 dark:text-teal-300 transform transition-transform"
      />
    </button>

    <!-- Bouton CV -->
    <a href="/cv.pdf" 
       target="_blank"
       class="group relative overflow-hidden px-6 py-3 rounded-full font-medium
              bg-teal-600 text-white
              transform transition-all duration-300 hover:bg-teal-700 hover:shadow-lg">
      <span class="relative flex items-center">
        <font-awesome-icon icon="fa-solid fa-download" class="mr-2" />
        Télécharger CV
      </span>
    </a>

    <!-- Menu mobile -->
    <button 
      @click="handleToggle" 
      class="md:hidden p-3 rounded-full transition-all duration-300
             bg-teal-50 dark:bg-gray-800"
    >
      <font-awesome-icon 
        :icon="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
        class="h-6 w-6 text-teal-700 dark:text-teal-200 transition-transform duration-300"
        :class="{ 'rotate-90': isMobileMenuOpen }"
      />
    </button>
  </div>
</template>

<script setup>
import { useColorMode } from '#imports'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faDownload, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useMobileMenu } from '../../composables/useMobileMenu'

// Ajouter les icônes à la bibliothèque
library.add(faSun, faMoon, faDownload, faBars, faXmark)

const colorMode = useColorMode()
const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const handleToggle = () => {
  console.log('Avant toggle:', isMobileMenuOpen.value)
  toggleMobileMenu()
  console.log('Après toggle:', isMobileMenuOpen.value)
}
</script> 