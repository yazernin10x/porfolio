<template>
  <div v-show="isMobileMenuOpen" 
       class="absolute left-0 right-0 top-16 bg-white dark:bg-gray-800 shadow-lg border-t dark:border-gray-700 z-1000">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <NuxtLink 
        v-for="item in menuItems" 
        :key="item.path"
        :to="item.path" 
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {{ item.name }}
      </NuxtLink>
      <a 
        href="/cv.pdf" 
        target="_blank"
        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <font-awesome-icon icon="fa-solid fa-download" class="mr-2" />
        Télécharger CV
      </a>
    </div>
  </div>
</template>

<script setup>
import { useMobileMenu } from '../composables/useMobileMenu'
import { watch } from 'vue'

const { isMobileMenuOpen } = useMobileMenu()
const menuItems = [
  { path: '/#home', name: 'Accueil' },
  { path: '/#about', name: 'À propos' },
  { path: '/#skills', name: 'Compétences' },
  { path: '/#projects', name: 'Projets' },
  { path: '/#contact', name: 'Contact' }
]

watch(isMobileMenuOpen, (newVal) => {
  console.log('MobileMenu - isMobileMenuOpen changed to:', newVal)
})
</script> 