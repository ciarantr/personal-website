<script setup>
  const technologies = [
    {
      label: 'Javascript (ES6+)',
      icon: 'fluent:javascript-16-filled',
      text: 'The latest features from JavaScript',
    },
    {
      label: 'Python 3',
      icon: 'mdi:language-python',
      text: 'A is a high-level, general-purpose programming language.',
    },
    {
      label: 'NuxtJS',
      icon: 'simple-icons:nuxtdotjs',
      text: 'A intuitive Vue framework',
    },
    {
      label: 'VueJS',
      icon: 'uim:vuejs-alt',
      text: 'A progressive JavaScript framework ',
    },
    {
      label: 'Mongo DB',
      icon: 'teenyicons:mongodb-outline',
      text: 'MongoDB is a source-available cross-platform document-oriented database program.',
    },
    {
      label: 'GitHub',
      icon: 'fa:github-square',
      text: 'Hosting service for version control. ',
    },
    {
      label: 'Meilisearch',
      icon: '/icons/meilisearch.svg',
      text: 'An open-source, lightning-fast, and hyper-relevant search engine.',
    },
    {
      label: 'Tailwindcss',
      icon: 'mdi:tailwind',
      text: 'A utility-first CSS framework',
    },
    {
      label: 'Express',
      icon: 'simple-icons:express',
      text: 'A minimal and flexible Node.js web application framework',
    },
    {
      label: 'Cloudflare',
      icon: 'fa6-brands:cloudflare',
      text: 'A global network built for the cloud',
    },
    {
      label: 'Linux',
      icon: 'fa:linux',
      text: 'A open-source Unix-like operating system based on the Linux kernel',
    },
    {
      label: 'Figma',
      icon: 'cib:figma',
      text: 'A Figma is a collaborative web application for interface design',
    },
    {
      label: 'Git',
      icon: 'ion:ios-git-branch',
      text: 'A free and open source software for distributed version control ',
    },
  ]

  const technologyListOne = computed(() => technologies.slice(0, 6))

  const technologyListTwo = computed(() => technologies.slice(6, 13))
</script>

<template>
  <div class="relative space-y-12 pt-2 pb-12">
    <TechStackList :technologies="technologyListOne" />
    <TechStackList :technologies="technologyListTwo" />
  </div>
</template>

<style scoped lang="postcss">
  div {
    & > div {
      animation-direction: normal;
    }

    & :nth-child(2) {
      animation-direction: reverse;
    }
    /* @media (prefers-reduced-motion: no-preference) {
      &::before {
        left: 0;
        @apply bg-gradient-to-r from-base-30;
      }
      &::after {
        right: 0;
        @apply bg-gradient-to-l from-base-30;
      }
    } */
  }
</style>
