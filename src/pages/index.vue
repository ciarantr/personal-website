<script lang="ts" setup>
  useHead({
    templateParams: {
      separator: '•',
    },
    title: 'Full Stack Web Developer',
    titleTemplate: '%siteName %separator %s',
  })
  //  Define og image vue template
  defineOgImage({
    component: 'TheBaseOg',
  })
</script>

<template>
  <main
    id="main-content"
    class="mt-48"
  >
    <div class="container lg:max-w-5xl">
      <div class="mt-12 space-y-32">
        <!-- About me  -->
        <content-container
          id="about"
          heading="About"
        >
          <template #content-main>
            <about-content />
          </template>
        </content-container>

        <!-- Work history -->
        <content-container
          id="experience"
          heading="Were I have worked"
        >
          <template #content-main>
            <job-history-container />
          </template>
        </content-container>
      </div>

      <!-- Projects -->
      <section
        aria-label="completed web development projects with description & links"
        class="mt-64 space-y-12"
      >
        <div class="text-center">
          <h3 class="inline text-6xl">Some things I built</h3>
          <icon
            class="text-base-20 ml-4 !align-bottom text-5xl"
            name="mdi:hammer-wrench"
          />
        </div>
        <project-container id="projects" />
      </section>
    </div>
    <!-- Technology used slide -->
    <section
      id="tech-stack"
      aria-label="list of technologist I have used"
      class="relative mt-64 space-y-12 overflow-clip"
    >
      <div class="relative z-50 text-center">
        <h3 class="inline text-6xl">Technologies I use</h3>
        <icon
          class="text-base-20 ml-4 !align-baseline text-5xl"
          name="material-symbols:settings-suggest"
        />
      </div>
      <lazy-tech-stack-card />
    </section>
    <!-- Gradient wrapper  -->
    <div
      class="to-dark mt-64 space-y-64 bg-gradient-to-b from-transparent pb-96"
    >
      <!-- Roadmap -->
      <section
        ref="roadmapSection"
        aria-label='roadmap of my learning journey from 2022 to 2023'
        class="container space-y-12 lg:max-w-5xl"
      >
        <lazy-roadmap-container />
      </section>
      <!-- Contact us -->
      <section
        id="contact"
        aria-label='contact me via email'
        class="mx-auto h-full px-4 pt-32 md:w-max md:px-0"
      >
        <lazy-contact-card />
      </section>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
  /* Gradient on all h2 */
  :deep(h3),
  :deep(h2) {
    @apply bg-gradient-to-r
    from-gray-400/50
    via-gray-400/60
    to-gray-400
    bg-clip-text
    pb-1
    text-center
    text-transparent;
  }

  /* Faded appearance on overflow tech cards   */
  #tech-stack {
    &::before,
    &::after {
      @apply absolute
      top-20
      z-20
      block
      h-full
      w-[10%]
      content-[''];
    }

    &::before {
      @apply from-base-30
      left-0 bg-gradient-to-r;
    }

    &::after {
      @apply from-base-30
      right-0
      bg-gradient-to-l;
    }
  }
</style>

<style lang="postcss">
  body {
    /* Set a counter named 'section', and its initial value is 0. */
    counter-reset: heading;
  }
</style>
