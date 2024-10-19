<script setup lang="ts">
  //  TODO: Quick view of projects when user hovers over project card

  const { data: repos } = await useFetch('/api/github/repoData')


  const projects = computed(
    () => repos.value?.filter((repo) => repo.name === 'pantry'),
  )
  const featuredProjects = computed(
    () => repos.value?.filter((repo) => repo.name !== 'pantry'),
  )
</script>

<template>
  <div>
    <!-- Featured projects -->
    <div class="gap-x-2 flex items-center text-xl">
      <Icon
        class="text-base-20"
        name="ri:fire-fill"
      />
      <h4>Featured Projects</h4>
    </div>
    <ProjectCard :project-details="featuredProjects" />
    <hr />

    <!-- Projects -->
    <div class="gap-x-2 flex items-center pt-12 text-2xl">
      <Icon
        class="text-base-20"
        name="mdi:creation"
      />
      <h4>Other Works</h4>
    </div>
    <ProjectCard :project-details="projects" />
  </div>
</template>
