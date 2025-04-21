<template>
  <section id="projects" class="py-24 bg-gradient-to-b from-teal-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 relative">
    <!-- Éléments décoratifs (visibles uniquement en mode sombre) -->
    <div class="absolute inset-0 hidden dark:block">
      <!-- Cercles flous -->
      <div class="absolute inset-0 opacity-[0.07]">
        <div class="absolute top-20 left-20 w-96 h-96 bg-teal-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-teal-600 rounded-full filter blur-3xl"></div>
      </div>

      <!-- Points décoratifs -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div v-for="i in 50" :key="i" 
             class="absolute w-2 h-2 bg-teal-600 rounded-full"
             :style="{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`
             }">
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Titre avec animation -->
      <h2 class="text-4xl font-bold text-center text-teal-800 dark:text-gray-100 mb-4 animate-fade-in">Mes Projets</h2>
      <div class="w-20 h-1 bg-teal-500 mx-auto mb-16 rounded-full animate-scale-x"></div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div v-for="(project, index) in projects" 
             :key="project.id" 
             class="group animate-slide-up"
             :style="{ animationDelay: `${index * 200}ms` }">
          <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 
                      shadow-lg hover:shadow-2xl border border-teal-100 dark:border-gray-700
                      transition-all duration-500 h-full
                      hover:-translate-y-2 hover:bg-white/90 dark:hover:bg-gray-800/90">
            
            <!-- En-tête avec animation au survol -->
            <div class="flex items-start justify-between mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {{ project.title }}
              </h3>
              <span class="text-sm font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-gray-700 px-3 py-1 rounded-full 
                         border border-teal-100 dark:border-gray-600 group-hover:scale-105 transition-transform">
                Projet {{ index + 1 }}
              </span>
            </div>

            <!-- Description avec animation de l'icône -->
            <div class="relative">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                {{ project.description }}
              </p>
              <button @click="selectedProject = project"
                      class="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 text-sm font-medium mb-6 
                             flex items-center gap-1 group-hover:gap-3 transition-all">
                En savoir plus
                <font-awesome-icon icon="fa-solid fa-arrow-right" 
                                 class="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <!-- Technologies avec animation au survol -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span v-for="(tech, techIndex) in project.technologies" 
                    :key="tech"
                    class="px-4 py-1.5 bg-teal-50 dark:bg-gray-700 text-teal-700 dark:text-teal-400 text-sm font-medium rounded-lg
                           border border-teal-100 dark:border-gray-600 hover:bg-teal-100 dark:hover:bg-gray-600 
                           transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    :style="{ transitionDelay: `${techIndex * 50}ms` }">
                {{ tech }}
              </span>
            </div>

            <!-- Liens avec animations -->
            <div class="flex items-center gap-6 pt-4 border-t border-teal-100 dark:border-gray-700">
              <a v-if="project.demo"
                 :href="project.demo"
                 target="_blank"
                 class="flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 
                        transition-all duration-300 group/link hover:-translate-y-1">
                <span class="p-2 bg-teal-50 dark:bg-gray-700 rounded-full 
                           group-hover/link:bg-teal-100 dark:group-hover/link:bg-gray-600 transition-colors
                           group-hover/link:rotate-12 duration-300">
                  <font-awesome-icon icon="fa-solid fa-play" class="w-4 h-4" />
                </span>
                <span class="font-medium relative">
                  Démo
                  <span class="absolute inset-x-0 bottom-0 h-0.5 bg-teal-600 dark:bg-teal-400 scale-x-0 
                             group-hover/link:scale-x-100 transition-transform origin-left"></span>
                </span>
              </a>
              <a v-if="project.github"
                 :href="project.github"
                 target="_blank"
                 class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 
                        transition-all duration-300 group/link hover:-translate-y-1">
                <span class="p-2 bg-gray-50 dark:bg-gray-700 rounded-full 
                           group-hover/link:bg-gray-100 dark:group-hover/link:bg-gray-600 transition-colors
                           group-hover/link:rotate-12 duration-300">
                  <font-awesome-icon icon="fa-brands fa-github" class="w-4 h-4" />
                </span>
                <span class="font-medium relative">
                  GitHub
                  <span class="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 dark:bg-gray-400 scale-x-0 
                             group-hover/link:scale-x-100 transition-transform origin-left"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal avec animation -->
    <div v-if="selectedProject" 
         class="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
         @click="selectedProject = null">
      <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto
                  shadow-2xl border border-teal-100 dark:border-gray-700 animate-modal"
           @click.stop>
        <div class="flex justify-between items-start mb-6">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100">{{ selectedProject.title }}</h3>
          <button @click="selectedProject = null" 
                  class="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors p-2 
                         hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full hover:rotate-90 duration-300">
            <font-awesome-icon icon="fa-solid fa-xmark" class="w-6 h-6" />
          </button>
        </div>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 animate-fade-in">
          {{ selectedProject.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="(tech, index) in selectedProject.technologies" 
                :key="tech"
                class="px-4 py-1.5 bg-teal-50 dark:bg-gray-700 text-teal-700 dark:text-teal-400 
                       text-sm font-medium rounded-lg border border-teal-100 dark:border-gray-600 animate-slide-up"
                :style="{ animationDelay: `${index * 100}ms` }">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const selectedProject = ref(null)
const projects = reactive([
  {
    id: 1,
    title: "Projet 1",
    description: "Ce projet innovant a été développé pour répondre à des besoins spécifiques en matière de gestion de données. Il comprend une interface utilisateur intuitive construite avec Vue.js et stylisée avec Tailwind CSS, offrant une expérience utilisateur fluide et moderne. Le backend, développé avec Node.js, gère efficacement les requêtes API et le traitement des données. Les fonctionnalités principales incluent l'authentification des utilisateurs, la visualisation de données en temps réel, et un système de reporting avancé. L'architecture modulaire permet une maintenance facile et des évolutions futures.",
    image: "@/assets/images/project1.jpg",
    technologies: ["Vue.js", "Tailwind CSS", "Node.js"],
    demo: "https://demo-projet1.com",
    github: "https://github.com/username/projet1",
    expanded: false
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description détaillée du projet 2. Expliquez ici les fonctionnalités principales et les objectifs atteints.",
    image: "@/assets/images/project2.jpg",
    technologies: ["React", "TypeScript", "Firebase"],
    demo: "https://demo-projet2.com",
    github: "https://github.com/username/projet2",
    expanded: false
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description détaillée du projet 3. Expliquez ici les fonctionnalités principales et les objectifs atteints.",
    image: "@/assets/images/project3.jpg",
    technologies: ["Nuxt.js", "MongoDB", "Express"],
    demo: "https://demo-projet3.com",
    github: "https://github.com/username/projet3",
    expanded: false
  }
])
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scale-x {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes slide-up {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes modal {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-scale-x {
  animation: scale-x 0.6s ease-out;
  transform-origin: center;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
}

.animate-modal {
  animation: modal 0.3s ease-out;
}
</style>