<script setup lang="ts">
  //  TODO: Quick view of projects when user hovers over project card

  const { data: repos } = await useFetch('/api/github/repoData')

  const projects = computed(() =>
    repos.value?.filter((repo) => repo.name === 'pantry')
  )
  const featuredProjects = computed(() =>
    repos.value?.filter((repo) => repo.name !== 'pantry')
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
      <h4>Featured projects</h4>
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
