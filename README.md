# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


npx nuxi@latest init .
npm install @nuxtjs/tailwindcss @nuxtjs/color-mode @nuxtjs/i18n @headlessui/vue @heroicons/vue

npm install --save @fortawesome/vue-fontawesome@latest @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons

npm install --save-dev @nuxtjs/color-mode

npm install @vueuse/motion

npm install @vueuse/core


### Installation rapide de Nuxt 3
npx nuxi init mon-projet
cd mon-projet
npm install
npm run dev



my-nuxt-app/
├── pages/
│   ├── index.vue         ← route "/"
│   ├── about.vue         ← route "/about"
├── components/
│   └── Hello.vue
├── layouts/
│   └── default.vue       ← layout commun
├── server/api/
│   └── hello.ts          ← API GET /api/hello
├── app.vue               ← point d’entrée principal
├── nuxt.config.ts        ← config du projet
