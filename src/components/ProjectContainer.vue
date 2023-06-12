<script setup lang="ts">
  //  TODO: Add error state for fetch
  // Fixme: ts errors (data.value possibly null)
  const { data } = await useFetch('/api/github/repos')

  //    call repoLanguages api and add to data.languages
  const { data: languages } = await useFetch('/api/github/repoLanguages', {
    transform: (languages) => {
      data.value.forEach((repo, index) => {
        data.value[index].languages = languages[index]
      })
    },
  })

  const featuredProjects = computed(() =>
    data.value.filter((project) => project.name !== 'pantry')
  )
  const projects = computed(() =>
    data.value.filter((project) => project.name === 'pantry')
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
    <ProjectCard :project-details="featuredProjects" />
    <hr />

    <!-- Projects -->
    <div class="flex items-center gap-x-2 pt-12 text-2xl">
      <Icon
        class="text-base-20"
        name="mdi:folder-open"
      />
      <h4>Projects</h4>
    </div>
    <ProjectCard :project-details="projects" />
  </div>
</template>
