<template>
  <div id="professional-experience" class="relative py-20 px-4 bg-teal-50/80 dark:bg-gray-900">
    <!-- Éléments décoratifs de fond -->
    <div class="absolute inset-0">
      <!-- Cercles flous -->
      <div class="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]">
        <div class="absolute top-20 left-20 w-96 h-96 bg-teal-200 dark:bg-teal-600 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-teal-200 dark:bg-teal-600 rounded-full filter blur-3xl"></div>
      </div>

      <!-- Points décoratifs -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div v-for="i in 50" :key="i" 
             class="absolute w-2 h-2 bg-teal-300 dark:bg-teal-600 rounded-full"
             :style="{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`
             }">
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto relative">
      <!-- Section titre avec plus d'espace et style amélioré -->
      <div class="mb-20 text-center">
        <h3 class="text-4xl font-bold text-teal-800 dark:text-teal-200 mb-4">
          Expériences Professionnelles
        </h3>
        <div class="h-1 w-24 bg-teal-500 mx-auto"></div>
      </div>

      <div class="relative">
        <!-- Ligne verticale -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-500 dark:bg-teal-400"></div>

        <div class="space-y-12">
          <div 
            v-for="(experience, index) in experiences" 
            :key="index"
            class="relative flex items-center"
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: index * 200 } }"
          >
            <!-- Point sur la timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 z-10 shadow-lg"></div>

            <!-- Contenu -->
            <div :class="[
              'w-[55%]',
              index % 2 === 0 ? 'ml-[-10%]' : 'mr-[-10%] ml-auto',
            ]">
              <div :class="[
                'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300',
                index % 2 === 0 ? 'border-r-4' : 'border-l-4',
                'border-teal-500 dark:border-teal-400'
              ]">
                <!-- En-tête de l'expérience -->
                <div class="flex flex-col space-y-4">
                  <!-- Première ligne : Entreprise et Rôle -->
                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
                        <span class="text-xl font-bold text-teal-600 dark:text-teal-300">
                          {{ experience.company.charAt(0) }}
                        </span>
                      </div>
                      <div>
                        <h4 class="text-xl font-bold text-teal-700 dark:text-teal-300">
                          {{ experience.company }}
                        </h4>
                        <p class="text-sm text-teal-600 dark:text-teal-400">
                          {{ experience.secteur }}
                        </p>
                      </div>
                    </div>
                    <div class="bg-teal-50 dark:bg-teal-900/50 px-4 py-2 rounded-lg border border-teal-200 dark:border-teal-800">
                      <p class="text-teal-700 dark:text-teal-300 font-medium">
                        {{ experience.role }}
                      </p>
                    </div>
                  </div>

                  <!-- Deuxième ligne : Période et Localisation -->
                  <div class="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 border-t border-b border-teal-100 dark:border-teal-800 py-3">
                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-8 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span>{{ experience.period }}</span>
                    </div>

                    <div class="flex items-center space-x-2">
                      <div class="w-8 h-8 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span>{{ experience.location }}</span>
                    </div>
                  </div>
                </div>
                <ul class="text-sm space-y-2 text-gray-600 dark:text-gray-400 text-left">
                  <li v-for="(task, taskIndex) in experience.tasks" :key="taskIndex" class="flex items-center">
                    <span class="w-1.5 h-1.5 rounded-full bg-teal-400 dark:bg-teal-500 mr-2"></span>
                    {{ task }}
                  </li>
                </ul>
                <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies :</div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="(tech, techIndex) in experience.technologies" 
                          :key="techIndex"
                          class="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-xs">
                      {{ tech }}
                    </span>
                  </div>
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
const experiences = [
  {
    company: 'SAUR',
    secteur: 'Services des eaux et assainissement',
    role: 'Data engineer',
    period: '2022 - 2024',
    location: 'Vannes, France',
    technologies: ['Python', 'FastAPI', 'Angular', 'Docker', 'PostgreSQL', 'Matplotlib', 'Pandas', 'pytest', 'Git'],
    tasks: [
      "Création d'outils personnalisés de collecte et traitement de données avec tableaux de bord interactifs.",
      "Automatisation de 60% des processus de l'équipe Transversalité et Performance.",
      "Création d'une API REST alimentant une application Angular pour le suivi des KPIs des conseillers.",
      "Mise en place d'un système d'alertes pour la gestion des écarts de planning.",
      "Application des principes TDD avec une couverture de tests de 85%.",
      "Rédaction des spécifications techniques et documentation utilisateur.",
      "Containerisation et déploiement de l'application avec Docker."
    ]
  },
  {
    company: 'Faively Transport',
    secteur: 'Transport ferroviaire et équipements',
    role: 'Stagiaire Développeur web',
    period: '2022',
    location: 'Gennevilliers, France',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Jest', 'Oracle', 'PL/SQL', 'Power BI'],
    tasks: [
      'Refonte complète du portail fournisseurs Wabtec avec une amélioration de 30% des performances',
      'Développement de tableaux de bord décisionnels avec Power BI',
      'Mise en place de procédures PL/SQL pour l\'extraction et la transformation des données Oracle',
      'Optimisation de l\'expérience utilisateur de l\'interface web',
      'Collaboration avec l\'équipe ECM (Enterprise Content Management)',
      'Documentation technique des solutions développées'
    ]
  },
  {
    company: 'Novatec consulting',
    secteur: 'Conseil et services numériques',
    role: 'Développeur web',
    period: '2019 - 2022',
    location: 'Abidjan, Côte d\'Ivoire',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Bootstrap', 'jQuery', 'Git'],
    tasks: [
      'Développement d\'une application web complète de gestion locative (biens, paiements, rapports, alertes)',
      'Conception du schéma de base de données et élaboration du cahier des charges en collaboration avec l\'équipe',
      'Optimisation des performances avec une amélioration de 30% de la vitesse d\'exécution',
      'Implémentation d\'une suite de tests automatisés atteignant 81% de couverture de code',
      'Maintenance et refactorisation des projets existants réduisant significativement le nombre de bugs',
      'Formation des nouveaux développeurs et rédaction de la documentation technique',
      'Mise en place de bonnes pratiques de développement et de standards de qualité'
    ]
  }
]
</script>
