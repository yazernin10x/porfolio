import { ref } from 'vue'

export const useMobileMenu = () => {
  const isMobileMenuOpen = ref(false)

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  return {
    isMobileMenuOpen,
    toggleMobileMenu
  }
} 