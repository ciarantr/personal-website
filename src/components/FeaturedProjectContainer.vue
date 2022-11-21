<script setup>
  const projectDetails = [
    {
      title: 'Freyja healing',
      description:
        'A web app built as my first project for Code Institute to become a full stack software developer. It is a fictional business that offers naturopathic treatments. The app is built with Vue.js and Nuxt.js which allows users to book appointments & send requests for naturopathic  treatments. Note: I have not yet implemented a payment system, user login & email but I will do so in the future.',
      technologies: new Set(['Heroku', 'VueJs 3', 'NuxtJs 3', 'Tailwindcss']),
      githubLink: 'https://github.com/ciaran-io/freyja-healing',
      deployedLink: 'https://freya-healing.herokuapp.com/',
      isFeatured: true,
    },
    {
      title: 'Natours app (Udemy course)',
      description:
        'I built a full stack app following a Udemy course by Jonas Schmedtmann. This app is a tour booking app which allows users to book tours and leave reviews. A user can sign in, sign up, reset password, update their details and update their password. The app also has a payment system which allows users to pay for their tours. Note: There is an unresolved issue on the initial page load which is causing a timely delay. I will fix this in the future.',
      technologies: new Set([
        'NodeJs',
        'Express',
        'MongoDB',
        'Mongoose',
        'Pug',
        'Stripe',
        'Google Oauth',
        'Postman',
        'Render',
      ]),
      githubLink:
        'https://github.com/ciaran-io/Udemy-courses/tree/master/complete-node-bootcamp',
      deployedLink: 'https://natours-app.onrender.com/tour/the-forest-hiker',
      isFeatured: true,
    },
    {
      title: 'Love Running (Code Institute)',
      description:
        'A small project I built as part of the learning module for HTML & CSS with Code Institute. It is a fictional running club app that allows users to view running events, meetups & pictures taken at the events.',
      technologies: new Set(['HTML5', 'CSS3']),
      githubLink:
        'https://github.com/ciaran-io/code-institude/tree/master/love-running',
      deployedLink: 'https://code-institude.pages.dev',
      isFeatured: false,
    },
  ]

  const featuredProjects = computed(() =>
    projectDetails.filter((project) => project.isFeatured)
  )
  const nonFeaturedProjects = computed(() =>
    projectDetails.filter((project) => !project.isFeatured)
  )
</script>

<template>
  <div class="G-container-shadow G-container-shadow-spacing-lg">
    <!-- Featured projects -->
    <div class="flex items-center gap-x-2 text-2xl">
      <Icon
        class="text-base-20"
        name="ri:fire-fill"
      />
      <h3>Featured projects</h3>
    </div>

    <FeaturedProjectCard :project-details="featuredProjects" />
    <hr />

    <!-- Projects -->
    <div class="flex items-center gap-x-2 pt-12 text-2xl">
      <Icon
        class="text-base-20"
        name="mdi:folder-open"
      />
      <h4>Projects</h4>
    </div>
    <FeaturedProjectCard :project-details="nonFeaturedProjects" />
  </div>
</template>
